
var buttons=document.querySelectorAll(".drum");
for(var i=0;i<buttons.length;i++){
buttons[i].addEventListener("click",handleClick);
}
function handleClick(){
var buttonInnerHTML=this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);

}
document.addEventListener("keypress",function(event){
  makeSound(event.key)
  buttonAnimation(event.key);

});
function makeSound(key){
  switch (key) {
    case "w":
    var tom4=new Audio('tom-4.mp3');
    tom4.play();
    break;
    case "a":
    var tom3=new Audio('tom-3.mp3');
    tom3.play();
    break;
    case "s":
    var tom2=new Audio('tom-2.mp3');
    tom2.play();
    break;
    case "d":
    var tom1=new Audio('tom-1.mp3');
    tom1.play();
    break;
    case "j":
    var snare=new Audio('snare.mp3');
    snare.play();
    break;
    case "k":
    var kick=new Audio('kick-bass.mp3');
    kick.play();
    break;
    case "l":
    var crash=new Audio('crash.mp3');
    crash.play();
    break;
    default:

  }
}

function buttonAnimation(currentKey){
  document.querySelector("."+currentKey).classList.add("pressed");
  setTimeout(function()
  {document.querySelector("."+currentKey).classList.remove("pressed")},300);
}
