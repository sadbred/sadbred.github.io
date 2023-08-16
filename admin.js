// admin.js
const encodedSecret = "YWRtaW4="; // Use Base64-encoded secret

document.getElementById("adminForm").onsubmit = function(event) {
    event.preventDefault();
    
    const inputSecret = document.getElementById("secretPhrase").value; // Use the correct ID "secretPhrase"
    const encodedInput = btoa(inputSecret); // Encode user input
    
    if (encodedInput === encodedSecret) {
        const newPageContent = document.documentElement.outerHTML;
        
        const newPage = window.open("about:blank");
        newPage.document.write("<html><body style='background-color: black;'><pre style='color: white;'>" + escapeHtml(newPageContent) + "</pre></body></html>");
    } else {
        alert("Incorrect");
    }
};

function escapeHtml(html) {
    return html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
