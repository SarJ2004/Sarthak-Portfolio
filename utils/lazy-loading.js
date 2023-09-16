const lazyLoading = () => {
  const lazyImgs = document.querySelectorAll(".lazy");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("loading");
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    },
    {
      // we can remove this second argument, since all values are default, but for knowledge sake, wrote it
      root: null,
      //   if left at null, the entirte page wiill be observwed
      rootMargin: "0px",
      //   adds space on root
      threshold: 0,
      //   sets the fraction of image that needs to be visible before obderving it
    }
  );

  lazyImgs.forEach((img) => {
    observer.observe(img);
    // used to observe our images
  });
};
export default lazyLoading;
