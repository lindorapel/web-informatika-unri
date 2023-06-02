
const hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
}
