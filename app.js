

let alerts = document.querySelector(".red")

let alerts2 = document.querySelector(".reds")

let alerts3 = document.querySelector(".reds1")

let alerts4 = document.querySelector('.reds2')

let alerts5 = document.querySelector(".reds3")


let form = document.querySelector("#forms")

let names  = document.querySelector(".name")

let email = document.querySelector(".email")

let pass = document.querySelector(".pass")

let cnic =document.querySelector(".cnic")

let age  = document.querySelector('.age')

let namesRegex  = /^[a-zA-Z0-9_-]{4,15}$/ ;

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;

let passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8}$/ 

let cnicRegex = /\b\d{5}-\d{7}-\d{1}\b/

let ageRegex = /\b(1[89]|[2-5]\d|60)\b/






form.addEventListener('submit' , (event) =>{
event.preventDefault()

//


// // NAME 
    

    if (namesRegex.test(names.value)){
        console.log("name : "  +names.value);
    }else{
        alerts3.innerHTML = "length of the name is between 4-15"
    }




// // Email 



if(emailRegex.test(email.value)){
    console.log("email : "  + email.value);
}
else{
    // console.log("email is not valid ");
    // alert("email is not valid")
    alerts.innerHTML = 'email is not valid'

}







// // password 

if(passwordPattern.test(pass.value)){
    console.log("password : " +  pass.value);
   
}


else{

    if(pass.value.length !== 8  ){
alerts2.innerHTML ="password must have 8 chracters"


    }
    else if (!/^[A-Z].*$/.test(pass.value)){
// console.log();
alerts2.innerHTML = 'password starts with capital letter'
    }
    else if(!/[!@#$%^&*()?]/.test(pass.value)){
        // console.log();
        alerts2.innerHTML =  "password must have 1 special character"
    }
}







// CNIC

if(cnicRegex.test(cnic.value)){
    console.log('cnic  : ' + cnic.value );
}else{
    alerts4.innerHTML =  'not valid cnic'
}



// AGE 


if(ageRegex.test(age.value)){
    console.log("age : " +age.value);
}
else{
    alerts5.innerHTML = 'age is valid between 18 - 60'
}


})