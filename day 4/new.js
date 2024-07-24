// const element=document.createElement("img");
// element.src="https://preview.redd.it/zfohxnf8t3pa1.jpg?width=1024&format=pjpg&auto=webp&v=enabled&s=0f660e0a56476991ee3b97f2885d8c010fec5b97"
// document.body.appendChild(element);
//console.log("-----------------------------------------------------------------------------------")
// const element=document.getElementsByClassName("myclass")
// //element.textContent="hii"
// for(let i=0;i<=element.length;i++){
//     element[i].textContent="hello"
// }
//console.log("---------------------------------------------------------------------")
// const ele=document.getElementsByTagName("div")
// //element.textContent="hii"
// for(let i=0;i<=ele.length;i++){
   
// ele[i].style.border="2px solid green"
// }

// const el=document.querySelector("myclass")
// for(let i=0;i<=el.length;i++){
   
//     el[i].textContent="hey"
//     }


//REGEX ->regular XPathExpression(validating expression)

function checkPasswordStrength(password){
    if(password.length<6)
    {
       return "Weak";
    }
    else{
       let hasletter=/[a-zA-Z]/.test(password);
       let hasdigit=/[0-9]/.test(password);
       if(hasletter&&hasdigit)
       {
          return "Strong";
       }
       else{
          return "Medium";
       }
    }
 
 }
 
 console.log(checkPasswordStrength("1234567"));