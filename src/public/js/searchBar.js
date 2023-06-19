const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const clear = document.querySelector(".clear");
const mysearch = document.getElementById('mySearch')

icon.onclick = () => {
  search.classList.toggle("active");
};

clear.onclick = () => {
    mysearch.value = ' '
}

