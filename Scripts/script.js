//show more projects and less projects function
document.addEventListener("DOMContentLoaded", function () {
    const showHideButton = document.getElementById("showHideButton");
    const hiddenProjects = document.querySelectorAll(".projectBox.hidden");
    let projectsVisible = false;

    // Function to toggle the visibility of hidden projects
    function toggleHiddenProjects() {
        hiddenProjects.forEach((project) => {
            project.classList.toggle("hidden");
        });

        // Update button text based on visibility
        if (projectsVisible) {
            showHideButton.textContent = "Show More Projects";
        } else {
            showHideButton.textContent = "Show Less Projects";
        }

        projectsVisible = !projectsVisible;
    }

    // Add a click event listener to the "Show More" button
    showHideButton.addEventListener("click", toggleHiddenProjects);
});


// Get the scroll-to-top button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});


// JavaScript to change the header box shadow after scrolling past 100vh
// window.addEventListener('scroll', function() {
//     const header = document.querySelector('header');
//     if (window.scrollY >= 200) {
//         header.style.boxShadow = '0 10px 30px -10px #020c1bb3';
//     } else {
//         header.style.boxShadow = 'none';
//     }
// });