const darkMode = () => {
  const themeToggleBtn = document.querySelectorAll("#theme-toggle");
  // we are able to do this since the variables inside the body has a higher specificity than the varisbles inside the root
  // state
  const theme = localStorage.getItem("theme");
  // gets the light mode property
  // On mount
  theme && document.body.classList.add(theme);
  // it will only allow us to add a classlist to the body only if the theme  variable is truthy
  // handlers
  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
      document.body.removeAttribute("class");
    }
  };
  // events
  themeToggleBtn.forEach((btn) => {
    btn.addEventListener("click", handleThemeToggle);
  });
};
export default darkMode;
