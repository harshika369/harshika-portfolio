// Portfolio link click state
const portfolioLinks = document.querySelectorAll(
    ".nav-links a, .project-card a, .experience-card a, .certification-card a, .contact-links a"
);

portfolioLinks.forEach((link) => {
    link.addEventListener("click", () => {
        portfolioLinks.forEach((item) => {
            item.classList.remove("clicked");
        });

        link.classList.add("clicked");
        console.log("Clicked:", link);
    });
});