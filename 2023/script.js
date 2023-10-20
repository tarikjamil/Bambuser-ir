$(".navbar--dropdown-trigger").each(function (index) {
  let triggerElement = $(this);
  let targetElement = triggerElement.siblings(".navbar--dropdown-list");
  let arrowElement = triggerElement.find(".dropdown--icon-tablet");

  let tl = gsap.timeline({ paused: true });

  tl.to(targetElement, {
    height: "auto",
    ease: "Quint.easeOut",
    duration: 0.5
  });
  tl.to(arrowElement, {
    rotate: "-90deg",
    ease: "Quint.easeOut",
    duration: 0.5,
    delay: -0.5
  });

  let clickCount = 0;

  function handleClick() {
    if (window.innerWidth < 992) {
      // Check screen size
      clickCount++;

      if (clickCount === 1) {
        tl.play();
      } else if (clickCount === 2) {
        tl.reverse();
        clickCount = 0; // Reset click count after the second click
      }
    }
  }

  triggerElement.on("click", handleClick);
});

// split type
let text;
// Split the text up
function runSplit() {
  text = new SplitType("[animation=loading-split]", {
    types: "lines, words",
    lineClass: "overflow-hidden",
    wordClass: "loading-animation-split"
  });
}

runSplit();

// Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    text.revert();
    runSplit();
  }
});

gsap.registerPlugin(ScrollTrigger);

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 0.5
  });
  tl.from("[animation=loading]", {
    y: "20rem",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1
  });
}
pageLoad();
