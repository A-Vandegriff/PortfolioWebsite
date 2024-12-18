// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Get all the side menu links
    const menuLinks = document.querySelectorAll('.side-nav .nav-links a');
    
    // Loop through each link and add a click event listener
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevent the default behavior
            event.preventDefault();

            // Get the href value (target URL or section ID)
            const target = link.getAttribute('href');
            
            // Navigate to the target if it's a valid URL or section ID
            if (target.startsWith('#')) {
                // Scroll to the section on the same page
                const section = document.querySelector(target);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Redirect to a different page
                window.location.href = target;
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from reloading the page

        // Hide the form and show the thank-you message
        form.style.display = 'none';
        thankYouMessage.style.display = 'block';
    });
});


