lgn = "junin";
pwd = "123456";

function Autentificar(){
    var log = document.getElementById('login').value;
    var pass = document.getElementById('senha').value;

    if(log == lgn & pass == pwd){
        alert('Logado')
    }else{
        alert('erradao meu nobre')
    }
}