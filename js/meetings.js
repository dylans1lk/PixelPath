// Dylan Silk

// Function for the password on the meetings section of the website... 
// Defintely isn't secure but we couldn't use PHP on github pages. (no server side languages)
// Got the go ahead from Daly tho.
function definitelyNotSecure() {
    if ("pix" == document.getElementById("username").value) {
        if ("hellodaly" == document.getElementById("password").value) {
            window.location.href = "../html/secureMeetings.html";
        }
    }
}
