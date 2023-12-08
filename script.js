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

let lastTheme = localStorage.getItem('lasttheme')?localStorage.getItem('lasttheme'):''

document.addEventListener('DOMContentLoaded', function() {


   
    

    const themes = ['XMAS','light', 'halloween','cinema','spring','spiderman','barbie'];


    applyRandomTheme();

 

    function applyRandomTheme() {
        let randomTheme;
console.log(lastTheme);
        // Keep selecting a new random theme until it is different from the last one
        do {
            randomTheme = themes[Math.floor(Math.random() * themes.length)];
        } while (randomTheme === lastTheme);
        document.documentElement.setAttribute('data-theme', randomTheme);
       localStorage.setItem('lasttheme',randomTheme);
    
    }



    const button = document.getElementById('animatedBtn');
    tr=30;
    button.addEventListener('mouseover', function () {

        
        // Replace this condition with your specific condition


        
        button.style.left = `${Math.ceil(Math.random() * 90)}% `;
         button.style.top = `${Math.ceil(Math.random() * 90)}% `;




    });

    button.addEventListener('click', function () {
        alert('you clicked me WaaW!')
    })

});


document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("avatar-container");
  
    function getRandomAvatarUrl() {
      // You can replace these placeholder URLs with actual avatar image URLs
    
      const randomIndex = Math.floor(Math.random() * 6);
      return "./images/av"+randomIndex+".png";
    }
  
   
      const avatar = document.createElement("div");
      avatar.className = "avatar";
  
      const avatarImage = document.createElement("img");
      avatarImage.src = getRandomAvatarUrl();
      avatarImage.alt = "Avatar";
  
      avatar.appendChild(avatarImage);
      container.appendChild(avatar);
    
});