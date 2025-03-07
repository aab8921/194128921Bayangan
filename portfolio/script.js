document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const toggleIcon = darkModeToggle.querySelector("i");
    const toggleText = darkModeToggle.querySelector("span");

    // Function to update toggle button
    const updateToggle = (isDark) => {
        toggleIcon.className = isDark ? "fas fa-sun" : "fas fa-moon";
        toggleText.textContent = isDark ? "Light Mode" : "Dark Mode";
    };

    // Check initial state
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        updateToggle(true);
    }

    // Handle toggle click
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");
        
        localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
        updateToggle(isDark);
    });

    // Add smooth scroll behavior for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => observer.observe(bar));
});
