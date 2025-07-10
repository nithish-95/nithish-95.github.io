document.addEventListener('DOMContentLoaded', () => {
    // --- Dropdown Menu ---
    const resumeDropdownButton = document.getElementById('resumeDropdownButton');
    const dropdownContent = document.getElementById('dropdownContent');
    if (resumeDropdownButton && dropdownContent) {
        resumeDropdownButton.addEventListener('click', (event) => {
            event.stopPropagation();
            dropdownContent.classList.toggle('hidden');
        });
        document.addEventListener('click', (event) => {
            if (!resumeDropdownButton.contains(event.target)) {
                dropdownContent.classList.add('hidden');
            }
        });
    }

    // --- Mobile Menu ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        // Close mobile menu when a link inside it is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // --- Safe Smooth Scroll ---
    // Select only the navigation links for smooth scrolling
    const navLinks = document.querySelectorAll('.newsletter-nav-link, .smooth-scroll');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Only act on internal anchor links
            if (href && href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // --- Web3Forms Submission ---
    const web3form = document.querySelector('#contact form');
    const formStatus = document.getElementById('form-status');
    if (web3form && formStatus) {
        web3form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const formData = new FormData(web3form);
            const object = {};
            formData.forEach((value, key) => { object[key] = value; });
            const json = JSON.stringify(object);
            formStatus.textContent = "Sending...";
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: json
                });
                const result = await response.json();
                if (result.success) {
                    formStatus.textContent = "Message sent successfully!";
                    web3form.reset();
                } else {
                    formStatus.textContent = result.message || "Oops! Something went wrong.";
                }
            } catch (error) {
                formStatus.textContent = "Oops! Something went wrong. Please try again.";
            }
        });
    }

    // --- Dynamic Year in Footer ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Project Carousels ---
    document.querySelectorAll('.project-carousel').forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-item');
        const dots = carousel.querySelectorAll('.dot');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.remove('active');
                img.classList.add('opacity-0');
                if (i === index) {
                    img.classList.add('active');
                    img.classList.remove('opacity-0');
                    img.classList.add('opacity-100');
                }
            });
            dots.forEach((dot, i) => {
                dot.classList.remove('active');
                if (i === index) {
                    dot.classList.add('active');
                }
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        prevBtn.addEventListener('click', prevImage);
        nextBtn.addEventListener('click', nextImage);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                showImage(currentIndex);
            });
        });

        // Initialize first image
        showImage(currentIndex);
    });

    // --- Dark Mode Toggle ---
    const themeToggleBtn = document.getElementById('toggle');

    // Function to set the theme and update the checkbox state
    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark');
            themeToggleBtn.checked = true;
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            themeToggleBtn.checked = false;
            localStorage.setItem('color-theme', 'light');
        }
    }

    // On page load or when changing themes, apply the stored theme or system preference
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Event listener for the toggle button
    themeToggleBtn.addEventListener('change', () => {
        if (themeToggleBtn.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });
});