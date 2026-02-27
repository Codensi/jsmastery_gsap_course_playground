import gsap from "gsap";

gsap.to(".box", {
  opacity: 1,
  rotate: 360,
  background: "#ff6f61",
  //   repeat: -1,
  //   yoyo: true,
  borderRadius: "50%",
  scale: 1,
  duration: 2,
  delay: 0.5,
  ease: "bounce",
});
