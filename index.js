document.addEventListener('DOMContentLoaded', function() {
    const wishBtn = document.getElementById('wishBtn');
    const confettiContainer = document.getElementById('confetti');
    
    // Balloon animation
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach((balloon, index) => {
        balloon.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Special wish button
    wishBtn.addEventListener('click', function() {
        // Create confetti
        createConfetti();
        
        // Show alert with special message
        setTimeout(() => {
            alert("Dear Kholoud,\n\nHappy 21st Birthday! 🎂🎉\nWishing you an incredible year filled with joy, success in your studies, and amazing memories with friends.\n\nFrom your college mate who appreciates working with you on presentations!");
        }, 500);
    });
    
    function createConfetti() {
        // Clear previous confetti
        confettiContainer.innerHTML = '';
        
        // Create new confetti
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Random properties
            const colors = ['#ff6b9d', '#6bd5ff', '#8aff6b', '#ffd56b', '#d56bff'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const randomSize = Math.random() * 10 + 5;
            const randomLeft = Math.random() * 100;
            const randomDelay = Math.random() * 5;
            const randomDuration = Math.random() * 3 + 3;
            
            confetti.style.backgroundColor = randomColor;
            confetti.style.width = `${randomSize}px`;
            confetti.style.height = `${randomSize}px`;
            confetti.style.left = `${randomLeft}%`;
            confetti.style.animationDelay = `${randomDelay}s`;
            confetti.style.animationDuration = `${randomDuration}s`;
            
            // Random shape (circle or square)
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            } else {
                confetti.style.borderRadius = '0';
            }
            
            confettiContainer.appendChild(confetti);
        }
    }
    
    // Small easter egg - change cake color on title click
    const title = document.querySelector('.title');
    title.addEventListener('click', function() {
        const layers = document.querySelectorAll('.layer');
        const randomColor = () => Math.floor(Math.random() * 256);
        
        layers.forEach(layer => {
            layer.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        });
    });
});