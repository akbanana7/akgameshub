// setCookie.js

// Function to set a cookie that allows access
function setAccessCookie() {
    // Set an access cookie with a value (e.g., "access=true")
    document.cookie = "access=true; path=/; domain=" + window.location.hostname;
    alert("Access granted! You have been granted access.");
    // You can add your website content here
}
