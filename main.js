var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
  var username = document.querySelector("#username").value;
  var password = document.querySelector("#password").value;
  if (username == "admin" && password == "password123") {
    window.location = "./table.html"; // Redirecting to other page.
    return false;
  } else {
    attempt--; // Decrementing by one.
    alert("You have left " + attempt + " attempt;");
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
