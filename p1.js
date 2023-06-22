let imgg=document.querySelector("#userimg"); 
let ci=document.querySelector("#computerimg"); 
let userchoice=document.querySelectorAll('button');
let user1=document.querySelector("#user"); 
let computerchoice=document.querySelector('#Computer');
let res=document.querySelector("#result"); 
function winner(uc,cc)
{
    let decide="";
    if(uc==cc)
        decide="tie";
    else
    {
    uc+=cc;
    switch(uc)
    {
        case "rockscissor":
        case "scissorpaper":
        case "paperrock":
            decide="You win !";
            break;
        case "rockpaper":
        case "scissorrock":
        case "paperscissor":
            decide="You lost :-)";
            break;
    }

}
    res.innerHTML=decide;
}
function compchoice(uc)
{
    let cc=Math.floor((Math.random()*3));
    cc=userchoice[cc].id;
    computerchoice.innerHTML="Computer choice: "+cc;
    ci.src=cc+".png";
    winner(uc,cc);

}
function user(choice)
{
    user1.innerHTML="Your choice: "+choice;
    imgg.src=choice+".png";
    compchoice(choice);
}
for(let i=0;i<userchoice.length;i++)
{
    userchoice[i].addEventListener('click',function(){ user(userchoice[i].id); });
}