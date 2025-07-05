

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('resumeDropdown');
    const dropdownContent = document.getElementById('dropdownContent');
    
    if (!dropdown.contains(event.target)) {
        dropdownContent.classList.add('hidden');
    }
});

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Resume Download Dropdown functionality
    const resumeDropdownButton = document.getElementById('resumeDropdownButton');
    const dropdownContent = document.getElementById('dropdownContent');

    if (resumeDropdownButton && dropdownContent) {
        // Ensure dropdown is hidden on load
        dropdownContent.classList.add('hidden');

        resumeDropdownButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the click from propagating to the document
            dropdownContent.classList.remove('hidden'); // Explicitly show the dropdown
        });

        // Stop propagation for clicks inside the dropdown content itself
        dropdownContent.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', (event) => {
            event.stopPropagation();
            const isHidden = mobileMenu.classList.toggle('hidden');
            mobileMenuButton.setAttribute('aria-expanded', !isHidden);
        });
    }

    // Close mobile menu when a link is clicked
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Web3Forms Submission
    const web3form = document.querySelector('#contact form');
    const formStatus = document.getElementById('form-status');

    if (web3form && formStatus) {
        web3form.addEventListener('submit', async function (e) {
            e.preventDefault();
            const formData = new FormData(web3form);
            const object = {};
            formData.forEach((value, key) => { object[key] = value; });
            const json = JSON.stringify(object);

            formStatus.textContent = "Sending...";
            formStatus.className = 'mt-4 text-center text-sm text-gray-600';

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                });
                const result = await response.json();
                if (result.success) {
                    formStatus.textContent = "Message sent successfully!";
                    formStatus.className = 'mt-4 text-center text-sm text-green-700';
                    web3form.reset();
                } else {
                    formStatus.textContent = result.message || "Oops! Something went wrong.";
                    formStatus.className = 'mt-4 text-center text-sm text-red-700';
                }
            } catch (error) {
                console.error('Form submission error:', error);
                formStatus.textContent = "Oops! Something went wrong. Please try again.";
                formStatus.className = 'mt-4 text-center text-sm text-red-700';
            }
        });
    }

    // Dynamic Year in Footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Dynamically set project links
    const projects = [
        { id: 'chatApp', githubSelector: '#chatAppGithub', liveDemoSelector: '#chatAppLiveDemo' },
        { id: 'smartDoor', githubSelector: '#smartDoorGithub', liveDemoSelector: '#smartDoorLiveDemo' },
        { id: 'diningConcierge', githubSelector: '#diningConciergeGithub', liveDemoSelector: '#diningConciergeLiveDemo' },
        { id: 'todoList', githubSelector: '#todoListGithub', liveDemoSelector: '#todoListLiveDemo' },
        { id: 'mangaReader', githubSelector: '#mangaReaderGithub', liveDemoSelector: '#mangaReaderLiveDemo' },
        { id: 'weatherApp', githubSelector: '#weatherAppGithub', liveDemoSelector: '#weatherAppLiveDemo' },
        { id: 'ticTacToe', githubSelector: '#ticTacToeGithub', liveDemoSelector: '#ticTacToeLiveDemo' }
    ];

    projects.forEach(project => {
        const githubLink = document.querySelector(project.githubSelector);
        const liveDemoLink = document.querySelector(project.liveDemoSelector);

        if (githubLink && window.projectLinks[project.id] && window.projectLinks[project.id].github) {
            githubLink.href = window.projectLinks[project.id].github;
        }
        if (liveDemoLink && window.projectLinks[project.id] && window.projectLinks[project.id].liveDemo) {
            liveDemoLink.href = window.projectLinks[project.id].liveDemo;
            liveDemoLink.classList.remove('hidden'); // Ensure live demo button is visible if link exists
        } else if (liveDemoLink) {
            liveDemoLink.classList.add('hidden'); // Hide live demo button if no link
        }
    });
});
