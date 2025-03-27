// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Download CV button functionality
document.getElementById('download-cv').addEventListener('click', function(e) {
    e.preventDefault();
    // Replace 'path/to/your-cv.pdf' with the actual path to your CV file
    const cvUrl = 'path/to/your-cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Aqa_Noori_CV.pdf'; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Skills progress bar animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress');

    function animateProgressBars() {
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) { // Trigger when section is 100px into view
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width; // Animate to the specified width
            });
            window.removeEventListener('scroll', animateProgressBars); // Run once
        }
    }

    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars(); // Check on load in case it's already in view
});