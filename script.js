function saveinfo(){
event.preventDefault();
let Name = document.getElementById("name").value

localStorage.setItem("key",Name)

let Password = document.getElementById("password").value

localStorage.setItem("pass",Password)

let localStr = localStorage.getItem("key")

console.log(localStr)

window.location.href = "login.html";
}


function login(){
   let Name2 = document.getElementById("name2").value
   let Password2 = document.getElementById("password2").value

   let Storedname = localStorage.getItem("key")

   let Storedpassword = localStorage.getItem("pass")

    if (Name2 == Storedname && Password2 == Storedpassword){
        alert("You are successfully Logged In")
    }
    else{
        alert("Register First then log in!!")
    }
  
}