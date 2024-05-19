let userscoreh=document.querySelector("#scoreuser")
let compscoreh=document.querySelector("#scorecomputer")
let userscore=0;
let compscore=0;
let ch=document.querySelectorAll(".choice")
let msg=document.querySelector("#m")


function draw () {
    console.log("game is draw");
    msg.innerText="THE GAME IS DRAW"
    msg.style.backgroundColor="aqua";
}

let showwinner=(userwin,userchoice,compchoice) => {
    if(userwin){
        console.log("YOU WIN");
        msg.innerText=`YOU WIN! ${userchoice} beats ${compchoice}`;
        userscore++;
        userscoreh.innerText=userscore
    }
    else {
        console.log("YOU LOSE");
        msg.innerText=`YOU LOSE THE GAME ${compchoice} beats ${userchoice}`;
        compscore++;
        compscoreh.innerText=compscore
    }
}

let playgame=(userchoice) => {
    console.log("user choiice",userchoice);
    const compchoice=genratecompchoice();
    console.log("comp choice",compchoice);
      
    if(userchoice==compchoice){
        draw();
    } else {
        let userwin=true;
        if(userchoice=="rock"){
          userwin=  compchoice==="paper" ? false:true;
        }
        else if (userchoice==="paper"){
            userwin= compchoice==="scissor" ? false : true;

        }
        else{
        userwin=compchoice==="rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}


const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', () => {
    
    userscore = 0;
    compscore = 0;
    
 
    document.getElementById('scoreuser').innerText = userscore;
    document.getElementById('scorecomputer').innerText = compscore;

  
    msg.innerText = "YOUR MOVE";

  
});



const genratecompchoice=() => {
   const option =["rock","paper","scissor"];
   let randomvalue=Math.floor(Math.random()*3);   // math.random is use to genrate a number randomly in js we dont have any random string genrater thats why we use array to access
    return option[randomvalue];
}

ch.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice=choice.getAttribute("id")
        playgame(userchoice);
    })
})