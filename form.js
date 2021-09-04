// A function for disply  the error message
function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}


function validateForm() {

    var name = document.Form.name.value;
    var email = document.Form.email.value;
    
    
    
// variable declaration for error message display for condition true
    var nameErr = emailErr   = true;
    
    // the name as the user types it

    if(name == "" ) 
    // display error when name is not enter
    {
        printError("nameErr", "Please enter your name");  
        var elem = document.getElementById("name");
            
    } 
    

    else {
        var regex = /^[a-zA-Z\s]+$/;  
                 // display error when in name field no. and symbol are enter     
        if(regex.test(name) === false ) {
            printError("nameErr", "Please enter a valid name");  
            var elem = document.getElementById("name");
           
        } 
        // disply name when all condation are false
        else {
            printError("nameErr", "");           
            nameErr = false;                        
            var elem = document.getElementById("name");
              
        }

    }


    
    
    //  the email id as the user types it

    if(email == "") 
    // display error when name is not enter
    {
        printError("emailErr", "Please enter your email address");
         var elem = document.getElementById("email");
            
    } 

    else {
        // display error when . and  @ are missing     
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
           
        } 
        // disply email when all condation are false
        else{
            printError("emailErr", "");            
            emailErr = false;          
             var elem = document.getElementById("email");     
           

        }
    }
    
 
    

//  the phone number as the user types it
document.getElementById('phoneNumber').addEventListener('keyup',function(evt){
    var phoneNumber = document.getElementById('phoneNumber');
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    phoneNumber.value = phoneFormat(phoneNumber.value);
});

// We need to manually format the phone number on page load
document.getElementById('phoneNumber').value = phoneFormat(document.getElementById('phoneNumber').value);

// A function to determine if the pressed key is an integer
function numberPressed(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 36 || charCode > 40)){
            return false;
    }
    return true;
}

// A function to format text to look like a phone number
function phoneFormat(input){
    //  all characters from the input except digits
    input = input.replace(/\D/g,'');
    
    //  the remaining input to ten characters, to preserve phone number format
    input = input.substring(0,10);

    //  the length of the string, we add formatting as necessary
    var size = input.length;
    if(size == 0){
        printError("mobileErr", "Please enter your mobile number");
            input = input;
    }else if(size < 4){
        printError("mobileErr", "Please enter a valid 10 digit mobile number");
            input = '('+input;
    }else if(size < 7){
        printError("mobileErr", "Please enter a valid 10 digit mobile number");
            input = '('+input.substring(0,3)+') '+input.substring(3,6);
    }else{
            input = '('+input.substring(0,3)+') '+input.substring(3,6)+' - '+input.substring(6,10);
    }
    return input; 
}

    
    

    if((nameErr || emailErr || mobileErr ) == true) {
       return false;
    } 
};