"use client";

import { useEffect } from "react";

export default function ServicesPageClient() {
  useEffect(() => {
    const hoverCards = Array.from(
      document.querySelectorAll<HTMLElement>(".card-hover")
    );
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-up")
    );

    hoverCards.forEach((card) => {
      card.style.transition =
        "transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease";

      const onEnter = () => {
        card.style.transform = "translateY(-4px)";
      };

      const onLeave = () => {
        card.style.transform = "translateY(0)";
      };

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);

      (card as any).__onEnter = onEnter;
      (card as any).__onLeave = onLeave;
    });

    revealItems.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity 600ms ease, transform 600ms ease";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealItems.forEach((el) => observer.observe(el));

    return () => {
      hoverCards.forEach((card) => {
        const onEnter = (card as any).__onEnter;
        const onLeave = (card as any).__onLeave;

        if (onEnter) card.removeEventListener("mouseenter", onEnter);
        if (onLeave) card.removeEventListener("mouseleave", onLeave);
      });

      observer.disconnect();
    };
  }, []);

  return null;
}