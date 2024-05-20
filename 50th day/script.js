document.querySelector(".submit").addEventListener("click",(e)=>{
    e.preventDefault();

 
    const userName = document.getElementById("username").value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword= document.getElementById('confirmpassword').value;
    
    let isValid =true

    //error set back
    document.querySelectorAll(".error").forEach(curr=> curr.textContent='')    

    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    const emailRegEx = /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
    const passRegEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(.*[\W_]).{3,}$/

    if(!usernameRegex.test(userName)){
        document.getElementById("usernameError").textContent = "username not valid"
        isValid =false;
    }
    if(!emailRegEx.test(email)){
    document.getElementById('emailError').textContent = "Email is not valid";
    isValid =false;
    }
    if(passRegEx.test(password)){
    document.getElementById('passError').textContent = "Please enter valid password";
    isValid = false;
    }
if(password !=confirmPassword)
{
    document.getElementById('confError').textContent = "password does not same";
    isValid =false
}
    if(isValid){
        alert("Registration successful");
    }
    


})