// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  // Function to check if the user has already accepted
  function checkAcceptance() {
    if (document.cookie.indexOf("termsAccepted=true") === -1) {
      // Show the acceptance banner
      document.getElementById("acceptanceBanner").style.display = "block";
    }
  }
  
  // Function to handle "Agree" button click
  function agreeButtonClick() {
    // Set the cookie and hide the acceptance banner
    setCookie("termsAccepted", "true", 365);
    document.getElementById("acceptanceBanner").style.display = "none";
  }
  
  // Add event listener to "Agree" button
  document.getElementById("agreeBtn").addEventListener("click", agreeButtonClick);
  
  // Check if the user has accepted when the page loads
  checkAcceptance();
  