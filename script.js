const iconBtn = document.querySelector('.icon');
const hidden = document.querySelector('.hidden');

iconBtn.addEventListener("click", () => {
    hidden.classList.toggle("showHidden");
});