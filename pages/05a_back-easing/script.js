import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const tabRow = document.querySelector(".tab-row");
const indicator = document.querySelector(".indicator");

const updateIndicator = (target) => {
  const tabBounds = target.getBoundingClientRect();
  const tabRowBounds = tabRow.getBoundingClientRect();

  const width = tabBounds.width;
  const offset = tabBounds.left - tabRowBounds.left;

  gsap.to(indicator, {
    x: offset,
    width: width,
    duration: 0.4,
    ease: "back.out(1.7)",
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // document.querySelector(".tab.active")?.classList.remove("active"); //you can do this way for better performance but if some tab remains active by mistake you cannot deactivate them
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    updateIndicator(tab);
  });
});

updateIndicator(document.querySelector(".tab.active"));
