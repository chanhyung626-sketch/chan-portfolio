document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".progress span");

  skillBars.forEach((bar) => {
    const finalWidth = bar.style.width;
    bar.style.width = "0";

    setTimeout(() => {
      bar.style.transition = "width 1.2s ease";
      bar.style.width = finalWidth;
    }, 200);
  });
});
