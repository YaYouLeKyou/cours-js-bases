/*
array cheatsheet:
https://twitter.com/profulsadangi/status/1288053880010334208


const array = []
const string = 'je suis une string'
const = number 48
const boolean = true
*/

const array = ["Paris", "Lyon", "Montreal", "Bordeaux"];
const array1 = ["Paris", 33, ["Montreal", "Bordeaux"], true];

for (i = 0; i < array.length; i++) {
  console.log(array1[i]);
  console.log(typeof array1[i]);
}

//--------------------------------------------------------

const input = document.getElementById("input");
const video = document.getElementById("video");
let link = "";

input.addEventListener("input", (e) => {
  changeLink(e.target.value);

  if (link) {
    video.innerHTML = `
      <iframe
        width="654"
        height="491"
        src=${link}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`;
  }
});

const changeLink = (linkToChange) => {
  let embed = linkToChange.replace("watch?v=", "embed/");
  link = embed.split("&")[0];
};
