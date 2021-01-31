// Scroll Up Button
const scrollUpBtn = document.getElementById('scrollUpBtn')

const rootElement = document.documentElement

function scrollUp() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

scrollUpBtn.addEventListener("click", scrollUp)
