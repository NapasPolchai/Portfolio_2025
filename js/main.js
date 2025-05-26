// Ensure GSAP is loaded in your HTML first
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

window.addEventListener("load", () => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });
  
    tl.from("#hero-des", { y: 20, opacity: 0 })
      .from("#hero-text", { scale: 0.9, opacity: 0 }, "-=0.5")
      .from("#exp-num .num", { y: 30, opacity: 0, stagger: 0.2 }, "-=0.6")
      .from("#hero-p", { x: -50, opacity: 0 }, "-=0.5");
  
    // Optional delay before slider track starts (if not already looping via CSS)
    gsap.set(".sliding-track", { xPercent: 0 });
  });
  

  