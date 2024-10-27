const scrollContainer = document.querySelector('.languages-navbar');
const scrollContentSection = document.getElementById("content-section");
const scrollChaptersAsideBar = document.getElementById("chapters-sidebar");


scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault(); 

    scrollContainer.scrollBy({ left: e.deltaY, behavior: 'smooth' });
});

function updateHeight() {
    const screenHeight = window.innerHeight;
    const newHeight = screenHeight - 93;
    document.documentElement.style.setProperty('--dynamic-height', `${newHeight}px`);
}

function updateWidth() {
    const screenWidth = window.innerHeight;
    const newWidth = screenWidth - 250;
    document.documentElement.style.setProperty('--dynamic-height', `${newWidth}px`);
}