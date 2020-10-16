var len = document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function (){
        var clicked = this.textContent;
        makeSound(clicked);
        buttonAnimation(clicked);
     });
}

document.addEventListener("keydown",function (event){
   // alert(event.key);
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");    
            tom1.play();
            console.log(key);
            break;
         case "a":
             var tom2 = new Audio("sounds/tom-2.mp3");
             tom2.play();
             console.log(key);
             break;
         case "s":
             var tom3 = new Audio("sounds/tom-3.mp3");
             tom3.play();
             console.log(key);
             break;
         case "d":
             var tom4 = new Audio("sounds/tom-4.mp3");
             tom4.play();
             console.log(key);
             break;
         case "j":
             var crash = new Audio("sounds/crash.mp3");
             crash.play();
             console.log(key);
             break;
         case "k":
             var kick = new Audio("sounds/kick-bass.mp3");
             kick.play();
             console.log(key);
             break;
         case "l":
             var snare = new Audio("sounds/snare.mp3");
             snare.play();
             console.log(key);
             break;
         default:
            console.log(key);
    }
}


function buttonAnimation(key){
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function (){
        document.querySelector("." + key).classList.remove("pressed");
    } , 100);
}

