// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to check if the user has accepted
function checkAcceptance() {
    const cookiesAccepted = getCookie("cookiesAccepted");
    if (!cookiesAccepted) {
        document.getElementById("cookieConsent").style.display = "block";
    }
}

// Function to handle "Accept" button click
function acceptButtonClick() {
    setCookie("cookiesAccepted", "true", 365); // Set a cookie for one year
    document.getElementById("cookieConsent").style.display = "none"; // Hide the consent bar
}

// Function to get a cookie value by name
function getCookie(name) {
    const cookieArr = document.cookie.split("; ");
    for (const cookie of cookieArr) {
        const cookieParts = cookie.split("=");
        if (cookieParts[0] === name) {
            return cookieParts[1];
        }
    }
    return null;
}

// Add event listener to "Accept" button
document.getElementById("acceptCookies").addEventListener("click", acceptButtonClick);

// Call the checkAcceptance function when the page loads
checkAcceptance();
