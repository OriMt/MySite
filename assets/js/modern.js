// Modern JavaScript Enhancements
document.addEventListener('DOMContentLoaded', () => {
    // Loading Animation
    const loading = document.querySelector('.loading');
    if (loading) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loading.style.opacity = '0';
                setTimeout(() => {
                    loading.style.display = 'none';
                }, 500);
            }, 500);
        });
    }

    // Navbar Scroll Effect
    const nav = document.querySelector('#nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
            if (currentScroll > lastScroll) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
        } else {
            nav.classList.remove('scrolled');
            nav.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    // Smooth Scroll with Offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                if (entry.target.classList.contains('post')) {
                    entry.target.style.transitionDelay = `${entry.target.dataset.index * 0.1}s`;
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add index to posts for staggered animation
    document.querySelectorAll('.post').forEach((post, index) => {
        post.dataset.index = index;
        post.classList.add('fade-out');
        observer.observe(post);
    });

    document.querySelectorAll('.image, .skill-tag, .tool-item').forEach(el => {
        el.classList.add('fade-out');
        observer.observe(el);
    });

    // Enhanced Theme Toggle with Local Storage
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            themeToggle.innerHTML = '🌙';
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const isLight = document.body.classList.contains('light-theme');
            themeToggle.innerHTML = isLight ? '🌙' : '☀️';
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }

    // Enhanced Image Loading with Blur Effect
    document.querySelectorAll('img').forEach(img => {
        img.style.filter = 'blur(10px)';
        img.addEventListener('load', () => {
            img.style.transition = 'filter 0.5s ease-out';
            img.style.filter = 'blur(0)';
            img.classList.add('loaded');
        });
    });

    // Add hover effect to skill tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseover', () => {
            tag.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        tag.addEventListener('mouseout', () => {
            tag.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add CSS for new animations
const style = document.createElement('style');
style.textContent = `
    .fade-out {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }

    img {
        opacity: 0;
        transition: opacity 0.5s ease-out, filter 0.5s ease-out;
    }

    img.loaded {
        opacity: 1;
    }

    .loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--background-dark);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease-out;
    }

    .loading.hidden {
        opacity: 0;
        pointer-events: none;
    }

    .loading-spinner {
        width: 50px;
        height: 50px;
        border: 3px solid var(--primary-color);
        border-top-color: var(--accent-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    #nav {
        transition: transform 0.3s ease-out;
    }

    .skill-tag {
        transition: transform 0.3s ease-out, background-color 0.3s ease-out;
    }
`;
document.head.appendChild(style); 