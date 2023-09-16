const mobNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile__nav-link");
  //  state
  let isNavOpen = false;

  headerBtn.addEventListener("click", () => {
    isNavOpen = !isNavOpen;

    mobileNav.style.display = "flex";
    document.body.style.overflowY = "hidden";
    if (!isNavOpen) {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });

  // the mobileLinks is a nodelist, and we will hve to loop through it

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isNavOpen = false;
      // since we have to close the menu upon clicking of the links
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });
};
export default mobNav;
