
/* =================================
   1. MOBILE NAVIGATION MENU
================================= */

// Select HTML elements
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open and close mobile menu
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    // Check whether the menu is open
    const isOpen = navLinks.classList.contains("active");

    // Update menu button
    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});

// Close menu after clicking a navigation link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


/* =================================
   2. DARK / LIGHT MODE
================================= */

// Create theme button
const themeButton = document.createElement("button");

themeButton.id = "theme-toggle";
themeButton.textContent = "☀️";

themeButton.setAttribute("aria-label", "Switch to light mode");

themeButton.style.cssText = `
    background: transparent;
    border: none;
    font-size: 22px;
    cursor: pointer;
    margin-left: 20px;
`;

// Add button to navigation
document.querySelector(".navbar").appendChild(themeButton);

// Check saved theme
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeButton.textContent = "🌙";
    themeButton.setAttribute("aria-label", "Switch to dark mode");
}

// Change theme when clicked
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    if (isLight) {

        themeButton.textContent = "🌙";

        themeButton.setAttribute("aria-label", "Switch to dark mode");

        localStorage.setItem("portfolio-theme", "light");

    } else {

        themeButton.textContent = "☀️";

        themeButton.setAttribute("aria-label", "Switch to light mode");

        localStorage.setItem("portfolio-theme", "dark");

    }

});


/* =================================
   3. CONTACT FORM VALIDATION
================================= */

// Select contact form
const contactForm = document.getElementById("contact-form");

const formMessage = document.getElementById("form-message");

// Listen for form submission
contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    // Check empty fields
    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        formMessage.textContent = "Please fill in all fields.";

        formMessage.style.color = "#ff6b6b";

        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent = "Please enter a valid email address.";

        formMessage.style.color = "#ff6b6b";

        return;
    }

    // Check message length
    if (message.length < 10) {

        formMessage.textContent =
            "Your message must contain at least 10 characters.";

        formMessage.style.color = "#ff6b6b";

        return;
    }

    // Display success message
    formMessage.textContent =
        "Your form has been validated successfully!";

    formMessage.style.color = "#4ade80";

    // Clear form fields
    contactForm.reset();

});
