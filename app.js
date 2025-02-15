
        // Typing animation
        const typingText = document.getElementById("typing");
        const professions = ["Software Engineer", "Web Developer", "Data Engineer", "Web Designer", "Script Writer"];
        let professionIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
    
        const type = () => {
            const currentProfession = professions[professionIndex];
            if (!isDeleting) {
                // Typing
                typingText.textContent = currentProfession.slice(0, charIndex + 1);
                charIndex++;
                if (charIndex === currentProfession.length) {
                    isDeleting = true;
                    setTimeout(type, 1000); // Pause at the end
                } else {
                    setTimeout(type, 100); // Typing speed
                }
            } else {
                // Deleting
                typingText.textContent = currentProfession.slice(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    professionIndex = (professionIndex + 1) % professions.length; // Move to the next profession
                }
                setTimeout(type, 50); // Deleting speed
            }
        };
    
        // Start the typing animation
        type();

// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Particles.js
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded');
});