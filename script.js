/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * ZENCLORA OS 
 * Gentle particles, smooth animations, and cozy interactions
 * ═══════════════════════════════════════════════════════════════════════════════
 */

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initScrollAnimations();
    initTerminalTyping();
    initNavScrollEffect();
});

// ═══════════════════════════════════════════════════════════════════════════════
// SMOOTH SCROLLING
// ═══════════════════════════════════════════════════════════════════════════════

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ═══════════════════════════════════════════════════════════════════════════════
// SCROLL ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════════

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                const children = entry.target.querySelectorAll('.feature-card, .news-card, .zenax-feature, .news-article');
                children.forEach((child, index) => {
                    child.style.transitionDelay = (index * 0.1) + 's';
                    child.classList.add('animate-in');
                });
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section, .zenax-info, .zpm-info');
    sections.forEach(section => {
        section.classList.add('animate-ready');
        observer.observe(section);
    });

    const style = document.createElement('style');
    style.textContent = `
        .animate-ready {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .animate-ready.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        .feature-card.animate-ready,
        .news-card.animate-ready,
        .news-article.animate-ready,
        .zenax-feature.animate-ready {
            opacity: 0;
            transform: translateY(15px);
        }
        .feature-card.animate-in,
        .news-card.animate-in,
        .news-article.animate-in,
        .zenax-feature.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// ═══════════════════════════════════════════════════════════════════════════════
// TERMINAL TYPING EFFECT 
// ═══════════════════════════════════════════════════════════════════════════════

function initTerminalTyping() {
    return;
}

// ═══════════════════════════════════════════════════════════════════════════════
// NAV SCROLL EFFECT
// ═══════════════════════════════════════════════════════════════════════════════

function initNavScrollEffect() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 80) {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 10px 35px rgba(92, 74, 74, 0.1)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.7)';
            nav.style.boxShadow = '0 8px 32px rgba(92, 74, 74, 0.08)';
        }
    });
}

// ═══════════════════════════════════════════════════════════════════════════════
// LIGHTBOX
// ═══════════════════════════════════════════════════════════════════════════════

function openLightbox(imgSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightbox && lightboxImg) {
        lightboxImg.src = imgSrc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});



// ═══════════════════════════════════════════════════════════════════════════════
// ZENNY INTERACTIVE
// ═══════════════════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    const zenny = document.getElementById('zennyHero');
    if (zenny) {
        zenny.addEventListener('mouseenter', () => {
            zenny.style.animationDuration = '2s';
        });
        zenny.addEventListener('mouseleave', () => {
            zenny.style.animationDuration = '4s';
        });
    }
});
