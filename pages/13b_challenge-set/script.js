import gsap from "gsap";

gsap.set("h1", {
  rotationX: 180,
  transformPerspective: 800,
});

gsap.to("h1", {
  rotationX: 0,
  duration: 1.5,
  ease: "back.out(1.7)",
});
