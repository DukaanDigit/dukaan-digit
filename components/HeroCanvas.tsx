"use client";

import { useEffect, useRef } from "react";

interface RipplePoint {
  x: number;
  y: number;
  radius: number;
}

class CanvasNode {
  originX: number;
  originY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  brightness: number;
  size: number;

  constructor(x: number, y: number) {
    this.originX = x;
    this.originY = y;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.brightness = 0.15;
    this.size = 1.8;
  }

  update(
    pulse: number,
    orbX: number,
    orbY: number,
    canvasRect: DOMRect,
    ripples: RipplePoint[],
    orbActive: boolean
  ) {
    const px = this.originX + Math.sin(pulse) * 4;
    const py = this.originY + Math.cos(pulse) * 4;
    let tx = px;
    let ty = py;

    if (orbActive) {
      const relativeOrbX = orbX - canvasRect.left;
      const relativeOrbY = orbY - canvasRect.top;
      const dx = this.x - relativeOrbX;
      const dy = this.y - relativeOrbY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 180) {
        const force = (180 - dist) / 180;
        tx += (dx / dist) * force * 40;
        ty += (dy / dist) * force * 40;
        this.brightness = Math.min(0.6, this.brightness + 0.1);
      } else {
        this.brightness = Math.max(0.15, this.brightness - 0.01);
      }
    } else {
      this.brightness = Math.max(0.15, this.brightness - 0.01);
    }

    ripples.forEach((r) => {
      const rdx = this.x - r.x;
      const rdy = this.y - r.y;
      const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
      if (rdist === 0) return;
      const diff = Math.abs(rdist - r.radius);
      if (diff < 80 && rdist < r.radius + 30) {
        const force = (1 - diff / 80) * 100 * (1 - r.radius / 2000);
        tx += (rdx / rdist) * force;
        ty += (rdy / rdist) * force;
        this.brightness = 0.9;
      }
    });

    this.vx = (this.vx + (tx - this.x) * 0.08) * 0.8;
    this.vy = (this.vy + (ty - this.y) * 0.08) * 0.8;
    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.shadowBlur = 10;
    ctx.shadowColor = "rgba(37, 99, 235, 0.4)";
    ctx.fillStyle = `rgba(37, 99, 235, ${this.brightness})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const cursor = cursorRef.current;
    if (!canvas || !container || !cursor) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const heroSection = container.parentElement as HTMLElement;

    // Only enable the custom cursor on true pointer devices (not touch/stylus-only)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    const NODE_GAP = 50;
    const ORB_INERTIA = 0.12;

    let nodes: CanvasNode[] = [];
    let ripples: RipplePoint[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let orbX = 0;
    let orbY = 0;
    let isMouseActive = false;
    let lastAutoRipple = Date.now();
    let animId: number;

    function initCanvas() {
      const w = container!.offsetWidth;
      const h = container!.offsetHeight;
      canvas!.width = w;
      canvas!.height = h;
      nodes = [];
      for (let x = 0; x < w + NODE_GAP; x += NODE_GAP) {
        for (let y = 0; y < h + NODE_GAP; y += NODE_GAP) {
          const jx = (Math.random() - 0.5) * 20;
          const jy = (Math.random() - 0.5) * 20;
          nodes.push(new CanvasNode(x + jx, y + jy));
        }
      }
    }

    // Takes canvas-local coordinates (not viewport)
    function triggerRippleLocal(canvasX: number, canvasY: number) {
      ripples.push({ x: canvasX, y: canvasY, radius: 0 });
    }

    // Takes viewport coordinates (clientX / clientY)
    function triggerRippleViewport(clientX: number, clientY: number) {
      const rect = canvas!.getBoundingClientRect();
      triggerRippleLocal(clientX - rect.left, clientY - rect.top);
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      const now = Date.now();
      const time = now / 3000;

      // Auto-ripple when idle — uses canvas-local coords directly
      if (now - lastAutoRipple > 6000) {
        triggerRippleLocal(
          Math.random() * canvas!.width,
          Math.random() * canvas!.height
        );
        lastAutoRipple = now;
      }

      // Only move the orb when the mouse is actually inside the hero
      if (isMouseActive) {
        orbX += (mouseX - orbX) * ORB_INERTIA;
        orbY += (mouseY - orbY) * ORB_INERTIA;
      }

      if (cursor && hasFinePointer) {
        cursor.style.left = `${orbX}px`;
        cursor.style.top = `${orbY}px`;
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].radius += 12;
        if (ripples[i].radius > 1800) ripples.splice(i, 1);
      }

      const canvasRect = canvas!.getBoundingClientRect();
      nodes.forEach((node) => {
        node.update(time, orbX, orbY, canvasRect, ripples, isMouseActive);
        node.draw(ctx!);
      });

      animId = requestAnimationFrame(animate);
    }

    initCanvas();
    animate();

    // Only add cursor-hiding class when we actually have a fine pointer
    if (hasFinePointer) {
      heroSection.classList.add("hero-cursor-zone");
    }

    const onResize = () => initCanvas();

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseActive = true;
      lastAutoRipple = Date.now();
      if (cursor && hasFinePointer) cursor.style.opacity = "0.7";
    };

    const onMouseLeave = () => {
      isMouseActive = false;
      if (cursor) cursor.style.opacity = "0";
    };

    const onMouseDown = (e: MouseEvent) => {
      triggerRippleViewport(e.clientX, e.clientY);
      lastAutoRipple = Date.now();
      if (cursor && hasFinePointer) {
        cursor.style.width = "22px";
        cursor.style.height = "22px";
        cursor.style.opacity = "1";
      }
    };

    const onMouseUp = () => {
      if (cursor && hasFinePointer) {
        cursor.style.width = "16px";
        cursor.style.height = "16px";
        cursor.style.opacity = "0.7";
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      if (!hasFinePointer || !cursor) return;
      const target = e.target as Element;
      if (target.closest("a, button, input, textarea, [role=button]")) {
        cursor.style.width = "28px";
        cursor.style.height = "28px";
        cursor.style.opacity = "0.4";
        cursor.style.background = "transparent";
        cursor.style.border = "2px solid #2563EB";
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if (!hasFinePointer || !cursor) return;
      const target = e.target as Element;
      if (target.closest("a, button, input, textarea, [role=button]")) {
        cursor.style.width = "16px";
        cursor.style.height = "16px";
        cursor.style.opacity = "0.7";
        cursor.style.background = "#2563EB";
        cursor.style.border = "none";
      }
    };

    // Touch: trigger ripple on tap for a nice mobile interaction
    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        triggerRippleViewport(touch.clientX, touch.clientY);
        lastAutoRipple = Date.now();
      }
    };

    window.addEventListener("resize", onResize);
    heroSection.addEventListener("mousemove", onMouseMove);
    heroSection.addEventListener("mouseleave", onMouseLeave);
    heroSection.addEventListener("mousedown", onMouseDown);
    heroSection.addEventListener("mouseup", onMouseUp);
    heroSection.addEventListener("mouseover", onMouseOver);
    heroSection.addEventListener("mouseout", onMouseOut);
    heroSection.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      heroSection.classList.remove("hero-cursor-zone");
      window.removeEventListener("resize", onResize);
      heroSection.removeEventListener("mousemove", onMouseMove);
      heroSection.removeEventListener("mouseleave", onMouseLeave);
      heroSection.removeEventListener("mousedown", onMouseDown);
      heroSection.removeEventListener("mouseup", onMouseUp);
      heroSection.removeEventListener("mouseover", onMouseOver);
      heroSection.removeEventListener("mouseout", onMouseOut);
      heroSection.removeEventListener("touchstart", onTouchStart);
    };
  }, []);

  return (
    <>
      <div id="custom-cursor" ref={cursorRef} />
      <div ref={containerRef} className="absolute inset-0 pointer-events-none">
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1, pointerEvents: "none" }}
        />
      </div>
    </>
  );
}
