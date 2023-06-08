function validateRegisterform(){
    let username = document.getElementsByClassName("usern-input")[0].value;
    let mail = document.getElementsByClassName("userm-input")[0].value;
    let phone = document.getElementsByClassName("userp-input")[0].value;
    let password = document.getElementsByClassName("userpw-input")[0].value;
    let confirm_pw = document.getElementsByClassName("usercpw-input")[0].value;

    if (username=='' || mail=='' || phone=='' || password=='' || confirm_pw==''){
        alert("Invalid input!")
    } else if(password!= confirm_pw){
        alert("Password is not matched")
    } else{
        alert("Register successfully!")
    }


}