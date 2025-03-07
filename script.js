// review //

document.addEventListener("DOMContentLoaded", function() {
    const reviewFormContainer = document.getElementById("reviewForm");
    const reviewForm = document.getElementById("reviewFormContent");

    window.toggleReviewForm = function() {
        reviewFormContainer.style.display = reviewFormContainer.style.display === "block" ? "none" : "block";
    };

    reviewForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("reviewer-name").value;
        const college = document.getElementById("college-select").value;
        const rating = document.getElementById("rating").value;
        const reviewText = document.getElementById("review-text").value;

        const reviewSection = document.getElementById(`${college}-reviews`);
        const newReview = document.createElement("div");
        newReview.classList.add("review-card");
        newReview.innerHTML = `<p>"${reviewText}"</p><span>- ${name} ${"⭐".repeat(rating)}</span>`;

        reviewSection.appendChild(newReview);
        reviewFormContainer.style.display = "none";
        reviewForm.reset();
    });
});
// event//
document.addEventListener("DOMContentLoaded", function() {
    const festFilter = document.getElementById("fest-filter");
    const collegeFilter = document.getElementById("college-filter");
    const eventCards = document.querySelectorAll(".event-card");

    function filterEvents() {
        const selectedFest = festFilter.value;
        const selectedCollege = collegeFilter.value;

        eventCards.forEach(card => {
            const festType = card.getAttribute("data-fest");
            const collegeName = card.getAttribute("data-college");

            // Show event if it matches selected filters or if "all" is selected
            if ((selectedFest === "all" || selectedFest === festType) &&
                (selectedCollege === "all" || selectedCollege === collegeName)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Apply filter when selection changes
    festFilter.addEventListener("change", filterEvents);
    collegeFilter.addEventListener("change", filterEvents);
});
// login page //

// Toggle Password Visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}
// map//
document.addEventListener("DOMContentLoaded", function() {
    console.log("Campus Map Loaded!");
    
    // Initialize Google Maps for each college
    function initializeMaps() {
        let mapFrames = document.querySelectorAll("iframe");
        
        mapFrames.forEach(frame => {
            frame.setAttribute("loading", "lazy");
            frame.setAttribute("allowfullscreen", "");
            frame.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
        });
    }
    
    initializeMaps();
});
// login//
function togglePassword() {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
    const navLinks = document.querySelector(".nav-links");
    
    // Check login state on page load
    if (localStorage.getItem("isLoggedIn") === "true") {
        updateNavbarForLoggedInUser();
    }
    
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission
            
            // Example credentials
            const validEmail = "user@example.com";
            const validPassword = "password123";
            
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            
            if (email.trim() === validEmail && password.trim() === validPassword) {
                localStorage.setItem("isLoggedIn", "true"); // Store login state
                window.location.href = "../index.html"; // Redirect to Home Page
            } else {
                errorMessage.style.display = "block";
                errorMessage.textContent = "Invalid email or password. Please try again.";
            }
        });
    }
    
    function updateNavbarForLoggedInUser() {
        const loginNavItem = navLinks.querySelector("li:last-child a");
        if (loginNavItem) {
            loginNavItem.textContent = "Logout";
            loginNavItem.href = "#";
            loginNavItem.addEventListener("click", function() {
                localStorage.removeItem("isLoggedIn");
                window.location.href = "pages/login.html";
            });
        }
    }
});
