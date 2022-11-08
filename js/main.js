// Hamburger Icon
let hamburgerIconOpen = document.getElementById("hamburger-icon-open"),
  hamburgerIconClose = document.getElementById("hamburger-icon-close"),
  navMenu = document.querySelector("nav .nav-menu");

hamburgerIconOpen.addEventListener("click", () => {
  navMenu.classList.add("active");
});
hamburgerIconClose.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

// Scroll To Top (Show And Hide)
let scrollToTop = document.getElementById("scroll-to-top");
window.onscroll = function () {
  if (window.scrollY > 800) {
    if (!scrollToTop.classList.contains("active")) {
      scrollToTop.classList.add("active");
    }
  } else {
    if (scrollToTop.classList.contains("active")) {
      scrollToTop.classList.remove("active");
    }
  }
};

// Scroll To Top (Functionality)
scrollToTop.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

// Form Validation
const submitForm = (event) => {
  event.preventDefault();
};

const checkLength = (
  element,
  errorMessage = "The field is required.",
  minLength = 1
) => {
  if (element.target.value.length < minLength) {
    element.target.classList.add("error");
    document.getElementById(`${element.target.id}ErrorMessage`).innerHTML =
      "you should enter more than 1 character";
  } else {
    document.getElementById(`${element.target.id}ErrorMessage`).innerHTML = "";
    element.target.classList.remove("error");
  }
};

const checkEmail = (element, errorMessage = "Email is not valid") => {
  if (
    !element.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    element.target.classList.add("error");
    document.getElementById(`${element.target.id}ErrorMessage`).innerHTML =
      errorMessage;
  } else {
    element.target.classList.remove("error");
  }
};

const validate = (element, length) => {
  switch (element.target.type) {
    case "text":
      checkLength(element);
      break;
    case "email":
      checkLength(element);
      checkEmail(element);
      break;
    case "textarea":
      checkLength(
        element,
        (errorMessage = "The field should be more than 8 characters"),
        8
      );
      break;
  }
};
