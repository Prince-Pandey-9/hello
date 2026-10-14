// ========================================
// CUSTOMIZATION GUIDE
// ========================================
// - Edit button text and messages in the HTML file
// - Change confetti colors in the createConfetti function
// - Modify audio file path in the HTML file
// ========================================

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const mainContent = document.getElementById('main-content');
const openHeartBtn = document.getElementById('open-heart-btn');
const forgiveBtn = document.getElementById('forgive-btn');
const memoriesBtn = document.getElementById('memories-btn');
const smileBtn = document.getElementById('smile-btn');
const gallerySection = document.getElementById('gallery-section');
const closeGalleryBtn = document.getElementById('close-gallery-btn');
const audioBtn = document.getElementById('audio-btn');
const bgMusic = document.getElementById('bg-music');
const confettiContainer = document.getElementById('confetti-container');

// ========================================
// WELCOME SCREEN FUNCTIONALITY
// ========================================
openHeartBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    mainContent.classList.remove('hidden');
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========================================
// FORGIVE BUTTON - CONFETTI EFFECT
// ========================================
forgiveBtn.addEventListener('click', () => {
    createConfetti();
    
    // Show a sweet alert message
    setTimeout(() => {
        alert('Thank you so much! ❤️\nYour friendship means everything to me!');
    }, 500);
});

// Confetti Creation Function
function createConfetti() {
    const colors = ['#ff69b4', '#ffb6c1', '#9b59b6', '#bb77c9', '#ffffff', '#ffd700', '#ff6b6b'];
    
    // Create 100 confetti pieces
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random properties
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 2 + 2; // 2-4 seconds
        const size = Math.random() * 10 + 5; // 5-15px
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.random() * 0.5;
        
        confetti.style.left = `${left}%`;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = color;
        confetti.style.animationDuration = `${animationDuration}s`;
        confetti.style.animationDelay = `${delay}s`;
        
        // Random shape (circle or square)
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }
        
        confettiContainer.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, (animationDuration + delay) * 1000);
    }
}

// ========================================
// MEMORIES BUTTON - SHOW GALLERY
// ========================================
memoriesBtn.addEventListener('click', () => {
    gallerySection.classList.remove('hidden');
    
    // Smooth scroll to gallery
    setTimeout(() => {
        gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
});

// Close Gallery Button
closeGalleryBtn.addEventListener('click', () => {
    gallerySection.classList.add('hidden');
    
    // Scroll back to apology section
    document.querySelector('.apology-section').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
});

// ========================================
// SMILE BUTTON - SWEET MESSAGE
// ========================================
smileBtn.addEventListener('click', () => {
    const smileMessages = [
        'You have the most beautiful smile! 😊',
        'Your smile lights up my world! ✨',
        'Seeing you smile makes my day! 💖',
        'Your happiness is my priority! ❤️',
        'Smile because you are amazing! 🌟'
    ];
    
    const randomMessage = smileMessages[Math.floor(Math.random() * smileMessages.length)];
    alert(randomMessage);
    
    // Add a small confetti burst
    createConfetti();
});

// ========================================
// AUDIO CONTROL
// ========================================
let isPlaying = false;

audioBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        audioBtn.textContent = '🎵 Play Music';
        isPlaying = false;
    } else {
        bgMusic.play().then(() => {
            audioBtn.textContent = '⏸️ Pause Music';
            isPlaying = true;
        }).catch(error => {
            console.log('Audio play failed:', error);
            alert('Please add your music file to the music/ folder and update the path in index.html');
        });
    }
});

// Handle audio ending
bgMusic.addEventListener('ended', () => {
    audioBtn.textContent = '🎵 Play Music';
    isPlaying = false;
});

// ========================================
// ADDITIONAL INTERACTIVE FEATURES
// ========================================

// Add hover effect to gallery images
const galleryImages = document.querySelectorAll('.gallery-item img');
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        // Create a simple lightbox effect
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 3000;
            cursor: pointer;
        `;
        
        const enlargedImg = document.createElement('img');
        enlargedImg.src = img.src;
        enlargedImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        `;
        
        overlay.appendChild(enlargedImg);
        document.body.appendChild(overlay);
        
        // Close on click
        overlay.addEventListener('click', () => {
            overlay.remove();
        });
    });
});

// ========================================
// SMOOTH SCROLL FOR BETTER UX
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========================================
// KEYBOARD ACCESSIBILITY
// ========================================
document.addEventListener('keydown', (e) => {
    // Close gallery with Escape key
    if (e.key === 'Escape' && !gallerySection.classList.contains('hidden')) {
        gallerySection.classList.add('hidden');
    }
});

// ========================================
// INITIALIZE
// ========================================
console.log('Apology website loaded successfully! ❤️');
console.log('Customize the HTML, CSS, and JS files to personalize your message.');
