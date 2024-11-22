const d = document;

export default function toggler(element1, element2,body,header,links) {
  d.addEventListener("click", e => {
    if (e.target.matches(element1)) {
      d.getElementById(element1.slice(1)).classList.toggle("invisible");
      d.getElementById(element2.slice(1)).classList.toggle("invisible");
      d.querySelector(header).classList.toggle("light-topbar")
      d.querySelector(body).classList.toggle("light-mode")
      d.querySelector(links).classList.toggle("links-lightmode")
      
    }
    if (e.target.matches(element2)) {
        d.getElementById(element1.slice(1)).classList.toggle("invisible");
        d.getElementById(element2.slice(1)).classList.toggle("invisible");
        d.querySelector(header).classList.toggle("light-topbar")
        d.querySelector(body).classList.toggle("light-mode")
        d.querySelector(links).classList.toggle("links-lightmode")
      }
  

  });
}
