function validate(){
    if(document.loginForm.Email.value == ""){
        alert("Please provide your email!!");
        document.loginForm.Email.focus();
        return false;
    }
    if(document.loginForm.Password.value == ""){
        alert("Oops!!!! please enter the password");
        document.loginForm.Password.focus();
        return false;
    }

    return (true);
}

function loggingIn(){
    if (validate(this)){Redirect();}
    
}

function validateRegForm(){
    if(document.regForm.Firstname.value == ""){
        alert("Please enter your first name!");
        document.regForm.Firstname.focus();
        return false;
    }
    if(document.regForm.Lastname.value == ""){
        alert("Please enter your last name!");
        document.regForm.Lastname.focus();
        return false;
    }
    if(document.regForm.Email.value == ""){
        alert("Please enter your email!");
        document.regForm.Lastname.focus();
        return false;
    }
    if(document.regForm.phoneNumber.value == ""){
        alert("Please enter your phone number!!");
        document.regForm.phoneNumber.focus();
        return false;
    }
    if(document.regForm.password.value == ""){
        alert("Please enter your password!!");
        document.regForm.password.focus();
        return false;
    }

    if(document.regForm.password1.value != document.regForm.password.value){
        alert("Oops!!! Passwords don't match");
        document.regForm.password1.focus();
        return false;
    }

    return (true);
}

