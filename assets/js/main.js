//inicializar Parse server
Parse.initialize("b35lgkYap3akNSA8HbSktYR45xOahVTaufZT5g6D", "t32epDtIHkNupYo0rCVSQhDoKNElJxVj4Pi5KVol");
Parse.serverURL = "https://parseapi.back4app.com/";

// Create a new User
async function createParseUser() {
  // Creates a new Parse "User" object, which is created by default in your Parse app
  let user = new Parse.User();
  // Set the input values to the new "User" object
  user.set("username", document.getElementById("username").value);
  user.set("email", document.getElementById("email").value);
  user.set("password", document.getElementById("password").value);
  try {
    // Call the save method, which returns the saved object if successful
    user = await user.save();
    if (user !== null) {
      // Notify the success by getting the attributes from the "User" object, by using the get method (the id attribute needs to be accessed directly, though)
      alert(
        `New object created with success! ObjectId: ${user.id
        }, ${user.get("username")}, ${user.get("email")}`
      );
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

// Add on click listener to call the create parse user function
document.getElementById("createButton").addEventListener("click", async function () {
  createParseUser();
});



