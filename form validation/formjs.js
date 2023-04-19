const form = document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');

form.addEventListener('submit', (e)=>{
    if(! validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const usernameVal= username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success=true

    if(usernameVal===''){
        success=false;
        setError(username,'username is required');
    }
    else{
        setSuccess(username)
    }


    if(emailVal===''){
        success=false;
        setError(email,'email is required');
    }
    else if(!validateEmail(emailVal)){
        setError(email,'Enter valid email')
    }
    else{
        setSuccess(email)
    }


    if(passwordVal===''){
        success=false;
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        setError(password,'Password must be atleast 8 characters')
    }
    else {
        setSuccess(password)
    }

    if(cpasswordVal===''){
        success=false;
        setError(cpassword,'password isrequired')
    }
    else if(cpasswordVal!==passwordVal){
        success=false;

        setError(cpassword,'password does not match');
    }
    else{
        setSuccess(cpassword)
    }

    return success;

}

function setError(element,message){
    const inputDetails =element.parentElement;
    const errorElement=inputDetails.querySelector('.error')

    errorElement.innerText=message;
    inputDetails.classList.add('error')
    inputDetails.classList.remove('success')
    
}

function setSuccess(element){
    const inputDetails=element.parentElement;
    const errorElement=inputDetails.querySelector('.error')

    errorElement.innerText='';
    inputDetails.classList.add('success')
    inputDetails.classList.remove('error')

}
const validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};