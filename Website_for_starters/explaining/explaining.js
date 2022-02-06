let para = document.getElementById('h1_para');
let sum2 = (a,b) =>  a+ b;
let style = document.getElementById("mecolor");

style.addEventListener('mouseover', function styleme(){
    style.style.backgroundColor = "blue";
    style.style.color = "white";
});

style.addEventListener('mouseout', function styleme(){
    style.style.backgroundColor = "white";
    style.style.color = "black";
})

para.addEventListener('mouseover', function me(){
    var response = prompt("Write the text that you want to replace");
    if(response == "")
    {
        console.log("You can not change the value");
        para.style.color = "red";
    }
    else{
    para.innerHTML = response;
    para.style.color = "black";
    let replace = (a,b) => a/7*100 + "% " +"Percentage sign " +b;
    console.log(replace(14,"meyou"));
    console.log( Math.random(100));
}
});

function me()
{
    let dates = new Date();
    document.getElementById('span_world').innerHTML = dates;
}
setInterval(me, 1000);

function setcolor()
{
    let color  = document.getElementById("mecolor").value;

    if(color == "")
    {
        para.style.color = "red";
    }
    else{
    para.style.color = color;
    }
}
