const triggers = document.querySelectorAll(".nav-list > li")
const background = document.querySelector(".dropdownBackground")
const nav = document.querySelector(".top-nav")

function handleEnter() {
  this.classList.add("trigger-enter")
  setTimeout(() => {
    if (this.classList.contains("trigger-enter")) {
      this.classList.add("trigger-enter-active")
    }
  }, 150)
  background.classList.add("open")

  // setting up the size of the background for each nav dropdown
  const dropdown = this.querySelector(".dropdown")
  // getting coordinates for dropdown element
  const dropdownCoords = dropdown.getBoundingClientRect()
  // getting coordinates for nav element
  const navCoords = nav.getBoundingClientRect()
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  }

  background.style.setProperty("width", `${coords.width}px`)
  background.style.setProperty("height", `${coords.height}px`)
  background.style.setProperty("transform", `translate(${coords.left}px, ${coords.top}px)`)
}

function handleLeave() {
  this.classList.remove("trigger-enter")
  setTimeout(() => this.classList.remove("trigger-enter-active"), 150)
  background.classList.remove("open")
}

triggers.forEach((trigger) => trigger.addEventListener("mouseenter", handleEnter))
triggers.forEach((trigger) => trigger.addEventListener("mouseleave", handleLeave))
