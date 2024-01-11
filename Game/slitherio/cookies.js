// checkCookie.js

// Check for the access and ban cookies on page load
window.addEventListener("load", function () {
    const accessCookie = getCookie("access");
    const banCookie = getCookie("ban");

    if (banCookie) {
        // Ban cookie found, redirect to Google
        alert("Access denied! You are banned.");
        window.location.href = "https://www.google.com";
    } else if (!accessCookie) {
        // No access cookie found, redirect to Google or another page
        alert("Access denied! You do not have access.");
        window.location.href = "https://www.google.com";
    }
});

// Function to retrieve a cookie by name
function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}
