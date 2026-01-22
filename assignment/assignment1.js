let userRole = "editor";
let isAuth = true;
let userAge = 20;

if( !isAuth ){
    console.log("log in")
}
else if(isAuth && userRole == "admin"){
    console.log("welcome")
}
else{
   console.log("access denied")
}