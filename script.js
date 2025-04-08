// Incluir GSAP desde CDN
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>

// Animación de entrada para el hero content
gsap.from(".hero-content h2", {
  duration: 1,
  opacity: 0,
  y: -50,
  ease: "power3.out",
});

gsap.from(".hero-content p", {
  duration: 1,
  opacity: 0,
  y: 50,
  delay: 0.3,
  ease: "power3.out",
});

gsap.from(".cta-button", {
  duration: 1,
  opacity: 0,
  scale: 0.8,
  delay: 0.6,
  ease: "power3.out",
});

// Animación de hover para los productos
const products = document.querySelectorAll(".product img");

products.forEach((product) => {
  product.addEventListener("mouseenter", () => {
    gsap.to(product, { scale: 1.05, duration: 0.3 });
  });

  product.addEventListener("mouseleave", () => {
    gsap.to(product, { scale: 1, duration: 0.3 });
  });
});