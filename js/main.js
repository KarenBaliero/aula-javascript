function clicou(){
    document.getElementById("agradecimento").innerHTML= "<b>Obrigado por Clicar</b>";
    console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por cliclar");
}

function redirecionar(){
   // window.open("https://www.unicamp.br/unicamp/"); // abre em guias diferentes
    window.location.href = "https://www.unicamp.br/unicamp/"; //abre na msm guia
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*function soma(n1,n2){
    return n1+n2;
}
//alert(soma(5, 10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade){
    var validar;
    if(idade>-18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
*/
//var idade = prompt("Qual a sua idade?");
//alert(validaIdade(idade));

//var d = new Date;
//alert(d.getMonth());


/*var count = 0;
for(count=0; count <=5; count++){
    alert(count)
}
*/
/*
var count = 0;
while(count<5){
    console.log(count)
    count = count+1;
}
*/

/*var idade = prompt("Qual sua idade?")
//var idade = 18;
if(idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}*/


//var frutas = [{nome: "maça", cor:"vermelho"},{nome:"uva", cor:"roxa"}]
//console.log(frutas)

//var fruta ={nome: "maça", cor:"vermelho"}
//console.log(fruta.nome);

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//console.log(lista.join("-"));
//console.log(lista)