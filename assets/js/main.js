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
  user.set("email_cliente", document.getElementById("email_cliente").value);
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

//busca dados do usuario no db pelo id
let pesquisa = "CfkNtJmOot"

async function buscaDados(){
    
  const query = new Parse.Query("User");
  try {
    const user = await query.get(pesquisa)
    const nome = user.get("username");
    const email = user.get('email_cliente')
    alert(`Nome:${nome} email: ${email}`)
  } catch (error) {
    alert('falhou')
    
  }
}

//atualiza informaçoes
async function attUser(){

  const user = new Parse.Object("User")

  user.set('objectId','CfkNtJmOot');
  user.set("email_cliente", "alterou@gmail.com");
  try {
      user = await user.save();
      alert('atualizou'+ result.id);
  } catch (error) {
      alert('falhou')
  }
}







