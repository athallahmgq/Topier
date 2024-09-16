document.addEventListener("DOMContentLoaded", function() {
    const splashContainer = document.querySelector(".splash-container");
    
    setTimeout(function() {
        splashContainer.classList.add("hidden");
        setTimeout(function() {
            splashContainer.style.display = "none";
        }, 3000); 
    }, 3000); 
    
    const animatedText = document.querySelector('.animated-text');
    const words = ['Hello👋🌍', 'Assalammualaikum🇮🇩', 'Bonjour🇫🇷', 'Servus🇩🇪', 'Konnichiwa🇯🇵','Annyeonghaseyo🇰🇷', 'Ni hao🇨🇳', 'Ciao🇮🇹', 'Hoi🇳🇱' ];
    let currentWordIndex = 0;

    function changeWord() {
        animatedText.textContent = words[currentWordIndex];
        currentWordIndex = (currentWordIndex + 1) % words.length;
    }

    setInterval(changeWord, 400); 
});
