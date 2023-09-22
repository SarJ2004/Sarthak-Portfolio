const navBar = () => {
  const headerNav = document.querySelector(".header");
  let mybutton = document.getElementById("myBtn");

  window.onscroll = () => {
    if (
      document.body.scrollTop > 90 ||
      document.documentElement.scrollTop > 90
    ) {
      headerNav.style.boxShadow = "0 3px 5px var(--clr-light)";
      headerNav.style.backgroundColor = "var(--clr-dark)";
    } else {
      headerNav.style.backgroundColor = "rgba(225, 29, 72, 0)";
      headerNav.style.boxShadow = "none";
    }
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  };
  mybutton.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
};
// headerNav.style.position = "sticky";
export default navBar;
