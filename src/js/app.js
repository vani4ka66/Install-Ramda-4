import "../scss/app.scss";
const R = require("ramda");

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  const articles = document.querySelectorAll("article");

  let getClass = R.pluck('class')
  getClass(arrayToPluck)
  console.log(getClass(arrayToPluck))

  for(var i in articles){
    // console.log(articles[i])
//     articles[i].classList.add(getClass(arrayToPluck)[i])
  }
  
});
