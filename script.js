// Function to handle smooth scrolling
function smoothScrollTo(targetSelector, offset = 0) {
    const targetElement = document.querySelector(targetSelector);

    if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition - offset;

        window.scrollTo({
            top: distance + startPosition,
            behavior: 'smooth'
        });
    }
}

// Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const headerOffset = document.querySelector('header').offsetHeight; // Assuming you have a header element

        // Scroll to the target element with an offset
        smoothScrollTo(targetId, headerOffset);
    });
});

// Add any additional JavaScript you need for your page below
