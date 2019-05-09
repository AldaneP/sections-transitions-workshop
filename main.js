let section1 = document.getElementsByTagName("section")
// let section2 = document.getElementsByClassName("section-2")
// let section3 = document.getElementsByClassName("section-3")
// let section4 = document.getElementsByClassName("section-4")


window.addEventListener('scroll', function() {
  console.log(window.scrollY)

  if (window.scrollY > 10) {
    section1[0].classList.remove('hidden')
    section1[0].classList.add('show')
  }

  if (window.scrollY > 400) {
    section1[1].classList.remove('hidden')
    section1[1].classList.add('show')
  }

  if (window.scrollY > 1200) {
    section1[2].classList.remove('hidden')
    section1[2].classList.add('show')
  }

  if (window.scrollY > 2000) {
    section1[3].classList.remove('hidden')
    section1[3].classList.add('show')
  }
})
