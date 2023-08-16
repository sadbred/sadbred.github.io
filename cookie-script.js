// Function to set the "cookieAccepted" cookie
function setCookieForAcceptance() {
    const cookieName = "cookieAccepted";
    const cookieValue = "true";
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (365 * 24 * 60 * 60 * 1000)); // Set to expire in 1 year
    const expires = "expires=" + expirationDate.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    
    // Hide the cookie bar
    const cookieBar = document.getElementById("cookieBar");
    if (cookieBar) {
        cookieBar.style.display = "none";
    }
}

// Check if the "cookieAccepted" cookie has been set
function hasAcceptedCookies() {
    const cookieName = "cookieAccepted";
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === cookieName && cookie[1] === "true") {
            return true;
        }
    }
    return false;
}

// When the "Accept" button is clicked, set the cookie and hide the cookie bar
const acceptButton = document.getElementById("acceptButton");
if (acceptButton) {
    acceptButton.addEventListener("click", function() {
        setCookieForAcceptance();
        // Hide the cookie bar immediately after accepting
        const cookieBar = document.getElementById("cookieBar");
        if (cookieBar) {
            cookieBar.style.display = "none";
        }
    });
}

