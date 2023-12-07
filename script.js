
// // Fonction pour générer une couleur pastel aléatoire
// function getRandomPastelColor() {
//     const letters = '89ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * letters.length)];
//     }
//     return color;
// }

// // Appliquer des couleurs pastel aléatoires lors du chargement de la page
// document.addEventListener('DOMContentLoaded', function () {
//     document.body.style.backgroundColor = getRandomPastelColor();

//     const navLinks = document.querySelectorAll('nav a');
//     navLinks.forEach(link => {
//         link.style.backgroundColor = getRandomPastelColor();
//     });

//     const sections = document.querySelectorAll('section');
//     sections.forEach(section => {
//         section.style.backgroundColor = getRandomPastelColor();
//     });

//     const header = document.querySelector('header');
//     header.style.backgroundColor = getRandomPastelColor();

//     const footer = document.querySelector('footer');
//     footer.style.backgroundColor = getRandomPastelColor();
// });



document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez l'élément avec la classe .theme-switch input[type="checkbox"]
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    // Vérifiez si l'élément a été trouvé avant d'ajouter l'événement
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', switchTheme, false);
    }

    // Fonction pour basculer entre les thèmes
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'halloween');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }
});



document.addEventListener('DOMContentLoaded', function() {
    
    const themes = ['light', 'halloween'];

    applyRandomTheme();

 

    function applyRandomTheme() {
        const randomTheme = themes[Math.floor(Math.random() * themes.length)];
        document.documentElement.setAttribute('data-theme', randomTheme);
    }
});