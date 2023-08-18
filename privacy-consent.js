// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to check if the user has accepted Privacy of use
function checkPrivacyAcceptance() {
    const privacyAccepted = getCookie("privacyAccepted");
    if (!privacyAccepted) {
        document.getElementById("privacyConsent").style.display = "block";
    }
}

// Function to handle "Accept" button click for Privacy of use
function acceptPrivacyButtonClick() {
    setCookie("privacyAccepted", "true", 365); // Set a cookie for one year
    document.getElementById("privacyConsent").style.display = "none"; // Hide the consent bar
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

// Add event listener to "Accept" button for Privacy of use
document.getElementById("acceptPrivacy").addEventListener("click", acceptPrivacyButtonClick);

// Call the checkPrivacyAcceptance function when the page loads
checkPrivacyAcceptance();
