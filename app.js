let items = document.querySelectorAll(".accordion-item")

items.forEach(item => {
  let header = item.querySelector(".accordion-header")
  let icon = item.querySelector(".icon")

  header.addEventListener("click", () => {

    let isOpen = item.classList.contains("active")

    items.forEach(el => {
      el.classList.remove("active")
      el.querySelector(".icon").src = "Assets/ButtonIcons/Plus-con.png"
      el.querySelector(".accordion-header").style.backgroundColor = "#f3f3f3"
    })

    if (!isOpen) {
      item.classList.add("active")
      icon.src = "Assets/ButtonIcons/Minus-icon.png"
      header.style.backgroundColor = "#b9ff66"
    }

  })
})

// ---------------------

let menuBtn = document.querySelector(".menu");
let sideMenu = document.querySelector(".sideLinks")

menuBtn.addEventListener("click", ()=> {
  sideMenu.classList.toggle("active")
})