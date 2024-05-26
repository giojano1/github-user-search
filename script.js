const lightBtn = document.querySelector(".light-mode");
const lightMode = document.querySelector(".light");
const darkMode = document.querySelector(".dark");
const body = document.querySelector("body");
const span = document.querySelectorAll("span");
const para = document.querySelectorAll("p");
const resultCont = document.querySelector(".result");
const statsCont = document.querySelector(".stats");
const searchInput = document.querySelector("#searchInput");
const searchBar = document.querySelector(".searchbar");
const searchBtn = document.querySelector("#search");
const img = document.querySelector("#img");
const userName = document.querySelector("#name");
const githubId = document.querySelector("#githubId");
const joined = document.querySelector("#joined");
lightBtn.addEventListener("click", () => {
  lightMode.classList.toggle("show");
  darkMode.classList.toggle("hide");
  searchInput.classList.toggle("dark-bck2");
  searchInput.classList.toggle("dark-placeholder");
  searchInput.classList.toggle("dark-txt");
  resultCont.classList.toggle("dark-bck2");
  statsCont.classList.toggle("dark-bck");
  body.classList.toggle("dark-bck");
  span.forEach((span) => {
    span.classList.toggle("dark-txt");
  });
  para.forEach((para) => {
    para.classList.toggle("dark-txt");
  });
});

searchBtn.addEventListener("click", () => {
  if (searchInput.value.trim() !== "") {
    let username = searchInput.value.trim();
    let url = `https://api.github.com/users/${username}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        img.src = data.avatar_url;
        userName.textContent = data.login;
        githubId.textContent = data.id;
        joined.textContent = data.created_at;
      });
  } else {
    alert("sheiyvane");
  }
});

let date = new Date("2024-01-21T15:41:10Z");
let day = date.getDate();
let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = date.getMonth();
let year = date.getFullYear();

let updateMonth = "";
let updateYear = date + updateMonth + year;
console.log(day, month, year);
console.log(months[0]);
console.log(updateYear);
