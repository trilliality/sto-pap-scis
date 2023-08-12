var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*3+1);
console.log("randomNumber1");
var spsImage ="images/sps"+randomNumber1+".jpg";
document.querySelector(".img1").setAttribute("src",spsImage);

var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*3+1);
console.log("randomNumber2");
var spsImage2 ="images/sps"+randomNumber2+".jpg";
document.querySelector(".img2").setAttribute("src",spsImage2);

if (randomNumber1==randomNumber2){
 document.querySelector("h1").innerHTML="tiebreaker";
}
else if(randomNumber1==1&&randomNumber2==3){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomNumber2==1&&randomNumber1==3){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    if(randomNumber1<randomNumber2)
    {
        document.querySelector("h1").innerHTML="player 2 wins";
    }
    else{
        document.querySelector("h1").innerHTML="player 1 wins";
    }
}