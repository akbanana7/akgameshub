// setCookie.js

function checkAccessCode() {
    const enteredCode = prompt("Enter the access code:");

    if (enteredCode === "33669900") {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1); // Set expiration to 1 day from now
        const formattedExpirationDate = expirationDate.toUTCString();
        document.cookie = "access=true; path=/; domain=" + window.location.hostname + "; expires=" + formattedExpirationDate;
        alert("Access granted! You have been granted access.");
    } else {
        alert("Ha, get banned");
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1); // Set expiration to 1 day from now
        const formattedExpirationDate = expirationDate.toUTCString();
        document.cookie = "ban=true; path=/; domain=" + window.location.hostname + "; expires=" + formattedExpirationDate;
        window.location.href = "https://www.google.com";
    }
}
