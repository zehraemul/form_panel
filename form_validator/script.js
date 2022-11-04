const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const repassword = document.getElementById("repassword");

function Error(input, message){
    input.className = "form-control is-invalid";
    const div = input.nextElementSibling;
    div.innerText = message;

}

function Success(input){
    input.className="form-control is-valid";
    const div = input.nextElementSibling;
    div.innerText="";
    
}



function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(re.test(input.value)){
            Success(input);
   }
   else{
    Error(input,"Please enter your e-mail adress in format: xxx@example.com");
   }
}

   function Info(input){
            if(input.value===''){
                Error(input,`${input.id} is required!`);
            }
           
            else{
                Success(input);
                
            }
        }
    
        
function checkLength(input,min,max){
    if(input.value.length<min){
        Error(input, `${input.id} must be min ${min} characters! `)
    }else if(input.value.length>max){
        Error(input, `${input.id} must be max ${max} characters!` )
    }else{
        Success(input);
    }
}

function checkPasswords(input1, input2,){
    if(input1.value !==input2.value){
        Error(input2,"Passwords do not match!");
    }

}

function checkPhone(input){
    var exp = /^\d{10}$/;
    if(!exp.test(input.value)){
        Error(input, "phone number must be 10 digits");
    }else{
        Success(input);
    }
}

form.addEventListener("submit",((event)=>{
        event.preventDefault();
        
        Info(username);
        Info(password);
        Info(email);
        Info(repassword);
        Info(phone);
        validateEmail(email);
        checkLength(username,5,15);
        checkLength(password,7,15);
        checkPasswords(password,repassword);
        checkPhone(phone);
           
}));