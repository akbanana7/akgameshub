// setCookie.js

// Function to set a cookie that allows access
function setAccessCookie() {
    // Calculate the expiration date, one month from now
    const expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 1);

    // Format the expiration date in the UTC format (required by the cookie)
    const formattedExpirationDate = expirationDate.toUTCString();

    // Set an access cookie with a value (e.g., "access=true") and the expiration date
    document.cookie = "access=true; path=/; domain=" + window.location.hostname + "; expires=" + formattedExpirationDate;

    alert("Access granted! You have been granted access.");
    // You can add your website content here
}
