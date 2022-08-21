const images = document.querySelectorAll(".images__each");

let imageOptions = {};

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const image = entry.target;
    const newSrc = image.getAttribute("data-src");
    image.src = newSrc;
    observer.unobserve(image);
  });
}, imageOptions);

images.forEach((image) => {
  observer.observe(image);
});
