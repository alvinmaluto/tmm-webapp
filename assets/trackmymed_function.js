function confirmLogout(){
                var x = confirm("Confirm log out?");
                if (x === true){
                    window.location.assign("trackmymed_logout.php");
                }
}

function confirmbox(message){
    var yes = confirm(message);
    if (yes === true){
        return true;
    }else{
        return false;
    }
}
    
function changePassword_check(){

    if(document.getElementById('password').value === document.getElementById('retype_password').value &&
        document.getElementById('password').value.trim() !== '' &&
        document.getElementById('retype_password').value.trim() !== ''){
        return confirmbox('Confirm change password?');
    }else{
        document.getElementById('error_samepwd').innerHTML = 'Please enter same password';
        document.getElementById('error_samepwd').style.display = "inline";
        return false;
    }
}

function hide_error(id){
    document.getElementById(id).style.display = "none";
}