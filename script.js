

// NAV bar scroll state
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
});

// Mobile nav toggle
const navBtn = document.getElementById('navBtn');
const navPanel = document.getElementById('navPanel');
navBtn?.addEventListener('click', () => {
    const open = navPanel.classList.toggle('open');
    navBtn.setAttribute('aria-expanded', open);
    navPanel.setAttribute('aria-hidden', !open);
});

// Close mobile panel on link click
document.querySelectorAll('#navPanel a').forEach(a => a.addEventListener('click', () => {
    navPanel.classList.remove('open'); navBtn.setAttribute('aria-expanded', false); navPanel.setAttribute('aria-hidden', true);
}));

// Feature reveal with IntersectionObserver
const featureCards = document.querySelectorAll('.feature-card');
const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
    })
}, { threshold: 0.3 });
featureCards.forEach(c => obs.observe(c));

// Reduce motion for users who prefer reduced motion
const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
if (mq.matches) {
    document.documentElement.style.setProperty('--transition', 'none');
    document.querySelectorAll('.marquee-track').forEach(el => el.style.animation = 'none');
}

// Timeline progress animation on scroll with step reveal
const timelineProgress = document.querySelector('.timeline-progress');
const timelineSteps = document.querySelectorAll('.timeline-step');

if (timelineProgress) {
    const manufacturingSection = document.querySelector('.manufacturing-process');

    window.addEventListener('scroll', () => {
        const rect = manufacturingSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate progress: section visible from -windowHeight (above viewport) to windowHeight (below viewport)
        const progress = Math.max(0, Math.min(100,
            (windowHeight - rect.top) / (rect.height + windowHeight) * 100
        ));

        timelineProgress.style.height = progress + '%';

        // Animate each timeline step based on scroll position
        timelineSteps.forEach((step, index) => {
            const stepRect = step.getBoundingClientRect();
            const stepCenter = stepRect.top + stepRect.height / 2;

            // Trigger animation when step comes into view (center at 70% of viewport height)
            if (stepCenter < windowHeight * 0.7) {
                step.classList.add('visible');
            }
        });
    });
}



const svcCards = document.querySelectorAll('.service-card');
const svcObs = new IntersectionObserver((entries, observer) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.3 });

svcCards.forEach(c => svcObs.observe(c));






// reveal animations
const megaItems = document.querySelectorAll('.why-item, .pricing-card');
const megaObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
        }
    });
}, { threshold: 0.2 });

megaItems.forEach(el => megaObs.observe(el));


// FAQ toggle
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        const icon = btn.querySelector('i');

        answer.style.display =
            answer.style.display === 'block' ? 'none' : 'block';

        icon.classList.toggle('ri-add-line');
        icon.classList.toggle('ri-subtract-line');
    });
});





// navbar
let lastScroll = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.classList.remove("nav-hidden");
        return;
    }

    // Scroll down → hide navbar
    if (currentScroll > lastScroll) {
        navbar.classList.add("nav-hidden");
    }
    // Scroll up → show navbar
    else {
        navbar.classList.remove("nav-hidden");
    }

    lastScroll = currentScroll;
});


