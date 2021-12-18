/*
JS cheatSheet https://htmlcheatsheet.com/js/


//variables

let cours = "balabalabala";
console.log(cours + " // avant MAJ");

cours = "BLABLA";
console.log(cours + " // après MAJ");

const prenom = "Patrice";

console.log(prenom);

//fonctions

function faireQuelqueChose() {
  console.log("je fait un truc");
}

//ou

const faireUneTache = (type) => {
  console.log("je fait : " + type);
};
faireQuelqueChose();
faireUneTache("la vaisselle");*/

//---------------------------------------------

//Manipulation du dom

const btn = document.querySelector("#btn");
//ou
const img = document.getElementById("img");

btn.addEventListener("click", () => {
  img.classList.toggle("show");
  alert("ça a changé !");
});

//---------------------------------------------

const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mouseEvent.addEventListener("mousemove", (e) => {
  horizontal.innerHTML = e.x;
  vertical.innerHTML = e.y;
  mouseEvent.style.left = (e.x / window.innerWidth) * 100 + "%";

  if (e.x > 500) {
    document.body.style.filter = "blur(3px)";
  } else {
    document.body.style.filter = "none";
  }
});

//--------------------------------------------

document.getElementById("input").addEventListener("input", (e) => {
  vertical.innerHTML = e.target.value;
});

//--------------------------------------------
const theme = document.querySelectorAll(".theme");

theme.forEach((item) =>
  item.addEventListener("click", (e) => {
    document.body.classList.remove("darkTheme", "salmonTheme", "yellowTheme");
    switch (e.target.id) {
      case "dark":
        document.body.classList.add("darkTheme");
        break;
      case "salmon":
        document.body.classList.add("salmonTheme");
        break;
      case "yellow":
        document.body.classList.add("yellowTheme");
        break;
      default:
        null;
    }
  })
);
