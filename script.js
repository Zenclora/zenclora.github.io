/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * ZENCLORA OS - COZY REDIRECT CONTROLLER
 * Gentle countdown, smooth progress bar, and interactive mascot.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

document.addEventListener('DOMContentLoaded', () => {
    initRedirectSequence();
    initMascotInteractions();
});

const DESTINATION_URL = 'https://nixovena.org/zenclora';
const REDIRECT_DELAY_MS = 10000;

/**
 * Handles the countdown and progress bar animation, then performs redirect
 */
function initRedirectSequence() {
    const countdownTimer = document.getElementById('countdownTimer');
    const progressBar = document.getElementById('progressBar');
    
    if (!countdownTimer || !progressBar) return;

    let timeLeft = REDIRECT_DELAY_MS / 1000;
    countdownTimer.textContent = timeLeft;

    const startTime = Date.now();
    
    const interval = setInterval(() => {
        timeLeft--;
        if (timeLeft >= 0) {
            countdownTimer.textContent = timeLeft;
        }
        if (timeLeft <= 0) {
            clearInterval(interval);
        }
    }, 1000);

    // Frame-by-frame progress bar update for ultra-smooth fluid transition
    function updateProgress() {
        const elapsed = Date.now() - startTime;
        const percentage = Math.min((elapsed / REDIRECT_DELAY_MS) * 100, 100);
        
        progressBar.style.width = `${percentage}%`;

        if (elapsed < REDIRECT_DELAY_MS) {
            requestAnimationFrame(updateProgress);
        } else {
            // Perform the redirection!
            window.location.href = DESTINATION_URL;
        }
    }

    requestAnimationFrame(updateProgress);
}

/**
 * Adds high-end micro-interactions to the mascot
 */
function initMascotInteractions() {
    const mascot = document.getElementById('zennyMascot');
    if (!mascot) return;

    // Fast breathe on hover
    mascot.addEventListener('mouseenter', () => {
        mascot.style.animationDuration = '1.5s';
    });

    mascot.addEventListener('mouseleave', () => {
        mascot.style.animationDuration = '4s';
    });

    // Bounce and spin slightly on click
    mascot.addEventListener('click', () => {
        // Trigger a temporary bounce animation
        mascot.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        mascot.style.transform = 'scale(1.25) rotate(15deg)';

        setTimeout(() => {
            mascot.style.transform = 'scale(1) rotate(0deg)';
        }, 500);
    });
}
