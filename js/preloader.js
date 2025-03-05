const d = document;

export default function preloader(loader, contenedor) {
setTimeout(() => {
  console.log("holaaa");
  d.getElementById(loader).classList.add("hidden");
  
  d.getElementById(contenedor).classList.add("hidden");
}, 1000);

  }; 
