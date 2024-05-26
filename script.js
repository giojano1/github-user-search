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
const bio = document.querySelector("#bio");
const followers = document.querySelector("#followers");
const repos = document.querySelector("#repos");
const following = document.querySelector("#following");
const userLocation = document.querySelector("#location");
const twitter = document.querySelector("#twitter");
const gitUrl = document.querySelector("#url");
const work = document.querySelector("#work");
const notFound = document.querySelector("#notFound");
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
  notFound.style.display = "none";

  if (searchInput.value.trim() !== "") {
    let username = searchInput.value.trim();
    let url = `https://api.github.com/users/${username}`;
    fetch(url).then((res) => {
      if (res.status === 404) {
        notFound.style.display = "block";
      } else {
        return res.json().then((data) => {
          console.log(data);
          img.src = data.avatar_url;
          userName.textContent = data.login;
          githubId.textContent = data.id;
          let date = new Date(data.created_at);
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
          let updateMonth = months[date.getMonth()];
          joined.textContent = `Joined ${date.getDate()} ${updateMonth} ${date.getFullYear()}`;
          if (data.bio == null) {
            bio.textContent = "This Profile has no bio";
          } else {
            bio.textContent = data.bio;
          }
          repos.textContent = data.public_repos;
          followers.textContent = data.followers;
          following.textContent = data.following;
          if (data.location == null) {
            userLocation.textContent = "Not Available";
          } else {
            userLocation.textContent = data.location;
          }
          if (data.twitter_username == null) {
            twitter.textContent = "Not Available";
          } else {
            twitter.textContent = data.twitter_username;
          }
          gitUrl.textContent = data.html_url;
          if (data.company == null) {
            work.textContent = "Not Available";
          } else {
            work.textContent = data.company;
          }
        });
      }
    });
  } else {
    alert("sheiyvane");
  }
});
