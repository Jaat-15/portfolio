document.getElementById("github").addEventListener("click", function () {
    window.open("https://github.com/Jaat-15", "_blank");
});
document.getElementById('skill').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('skills').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('about').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('aboutme').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('project').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('contact').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('contacts').scrollIntoView({
        behavior: 'smooth'
    });
});