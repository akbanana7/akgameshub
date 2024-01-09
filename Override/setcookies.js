// setCookie.js

function checkAccessCode() {
    const enteredCode = prompt("Enter the access code:");

    if (enteredCode === "6462") {
        const expirationDate = new Date();
        expirationDate.setMonth(expirationDate.getMonth() + 1);
        const formattedExpirationDate = expirationDate.toUTCString();
        document.cookie = "access=true; path=/; domain=" + window.location.hostname + "; expires=" + formattedExpirationDate;
        alert("Access granted! You have been granted access.");
    } else {
        window.location.href = "https://www.google.com";
    }
}
