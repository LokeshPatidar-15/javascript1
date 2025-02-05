const user ={
    username : "Luffy",

    welcomeMessage : function (){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage();
// user.username = "Robin"
// user.welcomeMessage();

// function chai(){
//     console.log(this);
    
// }
// chai()

const chai = ( ) => {
    let username = "Nico Robin"
    console.log(this.username);
    
}
chai()