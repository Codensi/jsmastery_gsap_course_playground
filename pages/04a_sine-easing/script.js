import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");

let isFloating = false;
let animation;

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    button.classList.add("show");
    if (!isFloating) {
      animation = gsap.to(button, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.out",
      });

      isFloating = true;
    }
  } else {
    button.classList.remove("show");
  }
});

button.addEventListener("mouseenter", () => {
  animation.pause();
  gsap.to(button, {
    scale: 1.1,
    duration: 0.2,
  });
});
button.addEventListener("mouseleave", () => {
  gsap.to(button, {
    scale: 1,
    duration: 0.2,
  });
  animation.resume();
});

button.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
// const btn = document.getElementById("scrollTopBtn");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 500) {
//     btn.classList.add("show");
//   } else {
//     btn.classList.remove("show");
//   }
// });

// btn.addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });

// const scrollToTopAnimation = gsap.to(".scroll-top", {
//   y: -10,
//   repeat: -1,
//   yoyo: true,
//   ease: "sine.inOut",
//   duration: 1.5,
// });

// gsap.to(".scroll-top", {
//   boxShadow:
//     "0 0 4px rgba(255, 255, 255, 0.6), 0 0 7px rgba(255, 255, 255, 0.4), 0 0 28px rgba(255, 255, 255, 0.1)",
//   repeat: -1,
//   yoyo: true,
//   ease: "sine.inOut",
//   duration: 1,
// });

// btn.addEventListener("mouseenter", () => {
//   scrollToTopAnimation.pause();
// });

// btn.addEventListener("mouseleave", () => {
//   scrollToTopAnimation.resume();
// });
