 for(var i=0; i<document.querySelectorAll(".drum").length;i++)
 {
 document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var buttonInnerHTML =this.innerHTML;

    switch(buttonInnerHTML)
    {
        case "w" :
            var audio= new Audio("flute.wav");
            audio.play();
            break;

        case "a" :
            var audio= new Audio("drums.mp3");
            audio.play();
            break;
            
        case "s" :
            var audio= new Audio("piano.wav");
            audio.play();
            break;
            
        case "d" :
            var audio= new Audio("violin.wav");
            audio.play();
            break;
            
        case "j" :
            var audio= new Audio("guitar.wav");
            audio.play();
            break;
            
        case "k" :
            var audio= new Audio("chenda.wav");
            audio.play();
            break;
            
        case "l" :
            var audio= new Audio("chegila.wav");
            audio.play();
            break;
            
        default:
    }
 });
 } 
 
  