let url;
window.onload=test;
function test() {
    var list = document.getElementsByTagName("a");
    for(let a of list) {
        if(a.childElementCount!=0){
            a.addEventListener("click",(e)=>{e.preventDefault()})
        }
    }
}
function clicked(elemento){
   url= elemento.getAttribute("href");
    let modal=document.getElementById("modal");
   let span= modal.getElementsByTagName("p")[0].getElementsByTagName("span")[0];
    span.innerHTML=url;
   
    modal.style.display="block";
}

function aceptar(){
    window.location.replace(url);
}
function cancelar(){
    let modal=document.getElementById("modal");
    modal.style.display="none";
}