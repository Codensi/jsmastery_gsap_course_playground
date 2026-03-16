import gsap from "gsap";

let currentToast = 0;
const toasts = document.querySelectorAll(".toast");

const animateNextToast = () => {
  const selector = toasts[currentToast];

  gsap.to(selector, {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power4.out",
    onComplete: () => {
      gsap.to(selector, {
        delay: 2.5,
        y: 0,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "power2.in",
        onComplete: () => {
          currentToast = (currentToast + 1) % toasts.length;
          setTimeout(animateNextToast, 1500);
        },
      });
    },
  });
};

animateNextToast();
