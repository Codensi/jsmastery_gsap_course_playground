import gsap from "gsap";

const repeatBtn = document.querySelector(".repeat");

const animation = gsap.from(".card", {
  y: 60,
  opacity: 0,
  scale: 0.95,
  duration: 0.6,
  delay: 0.2,
  ease: "power4.out",
  stagger: 0.2,
});

repeatBtn.addEventListener("click", () => {
  animation.restart();
});
