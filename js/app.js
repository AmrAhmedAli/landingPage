/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
let navigation_bar = document.querySelector("#navbar__list");
let sections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
let inViewPort = (element) => {
  const distance = element.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
buildNavMenu = () => {
  let list_fragment = document.createDocumentFragment();

  for (section of sections) {
    let li = document.createElement("li");
    let name = section.getAttribute("data-nav");
    li.innerHTML = `<a class="menu__link" href="#${section.id}" >  ${name} </a>`;
    list_fragment.appendChild(li);
  }
  navigation_bar.appendChild(list_fragment);
  scrollingMenu();
};
// build a scrolling menu
scrollingMenu = () => {
  let items = document.querySelectorAll("li");
  for (item of items) {
    let tagId = item.querySelector("a").getAttribute("href");
    item.addEventListener("click", (eve) => {
      eve.preventDefault();
      // Scroll to anchor ID using scrollTO event
      document
        .querySelector(tagId)
        .scrollIntoView({ block: "center", behavior: "smooth" });
    });
  }
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.addEventListener("load", buildNavMenu());

// Scroll to section on link click

// Set sections as active
document.addEventListener("scroll", () => {
  for (section of sections) {
    // Add class 'active' to section when near top of viewport
    if (inViewPort(section)) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  }
});
