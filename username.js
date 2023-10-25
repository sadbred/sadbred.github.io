function saveUsername() {
    const username = document.getElementById('username').value;
    const currentTime = new Date().getTime();
    localStorage.setItem('username', username);
    localStorage.setItem('timestamp', currentTime);
    document.getElementById('username').style.display = 'none'; // Hide the input field
    document.getElementById('savedUsername').textContent = `Username saved: ${username}`;
}

// Check if a username is already saved and the timestamp
const savedUsername = localStorage.getItem('username');
const savedTimestamp = localStorage.getItem('timestamp');
if (savedUsername) {
    document.getElementById('username').style.display = 'none'; // Hide the input field
    document.getElementById('username').value = savedUsername; // Fill the input field
    const currentTime = new Date().getTime();
    const daysSinceChange = Math.floor((currentTime - savedTimestamp) / (1000 * 60 * 60 * 24)); // Calculate days since change
    if (daysSinceChange >= 30) {
        document.getElementById('savedUsername').textContent = `Username saved: ${savedUsername} (Last change: ${daysSinceChange} days ago)`;
    } else {
        document.getElementById('savedUsername').textContent = `Username saved: ${savedUsername} (Last change: Less than 30 days ago)`;
    }
}