const button = document.querySelector("#scrollTop");
const section = document.querySelector("#scrollHere");

button.addEventListener("click", (event) => {
  event.preventDefault();

  section.scrollIntoView({
    behavior: "smooth",
  });
});
