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
    
    const themes = ['XMAS','light', 'halloween'];

    applyRandomTheme();

 

    function applyRandomTheme() {
        const randomTheme = themes[Math.floor(Math.random() * themes.length)];
        document.documentElement.setAttribute('data-theme', randomTheme);
    }
});