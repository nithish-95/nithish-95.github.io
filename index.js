// Resume Download Dropdown functionality
function toggleResumeDropdown() {
    const dropdown = document.getElementById('dropdownContent');
    dropdown.classList.toggle('hidden');
}

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