var time= new  Date().getHours();
if(time>6 && time<11){
    alert("Sabahin xeir");
    document.body.style.background="white"
}
else if(time>12&&time<16){
alert("gunortan xeir");
document.body.style.background="blue"
}
else if(time>17&&time<21){
    alert("Axwamin xeir");
    document.body.style.background="orange"
}
else if (time>22&&time <6){
    alert("Gecen xeir");
    document.body.style.background="black"
}
else{
    alert("Her vaxtin xeir");
    document.body.style.background="red"
}