//Soma de todas as notas = res;
//(50-(res/3*6))/4
let n4 = document.getElementById("n4")
let notas = document.getElementsByClassName("notas")[0];
let medias = document.getElementById("m1");
let p = document.getElementsByClassName("mostrar")[0]

function quantidade (){
    let numero = parseInt(document.getElementById("qtno").value);
    

    if (numero == 3) {
        notas.style.display = "block";
        n4.style.display = "none";
        document.getElementById("calcular").style.marginLeft = "35%";

        document.getElementById("calcular").addEventListener("click", function() {
            let n1 = parseInt(document.getElementById("n1").value);
            let n2 = parseInt(document.getElementById("n2").value);
            let n3 = parseInt(document.getElementById("n3").value);
            let media = (n1 + n2 + n3);
            if (media >=21) {
                p.innerHTML = "<h2> Você não está na final! </h2>";
            }else{
                 let nota = (50 -(media/3*6))/4;
            p.innerHTML = "<h2> Você precisa tirar "+nota+"</h2>";
            }
           
        })
    }else if (numero == 4) {
         ocument.getElementById("calcular").style.marginLeft = "35%";
        notas.style.display = "block";
        n4.style.display = "block";
       
        document.getElementById("calcular").addEventListener("click", function() {
            let n1 = parseInt(document.getElementById("n1").value);
            let n2 = parseInt(document.getElementById("n2").value);
            let n3 = parseInt(document.getElementById("n3").value);
            let n4 = parseInt(document.getElementById("n4").value);
            let media = (n1+n2+n3+n4);
            if (media >=28) {
                p.innerHTML = "<h2> Você não está na final! </h2>";
            }else{
                 let nota = (50 -(media/4*6))/4;
            p.innerHTML = "<h2> Você precisa tirar "+nota+"</h2>";
            }
            
        })
        
    }else alert("Essa quantidade de notas é inválida, só é possível possuir 3 ou 4 notas. leia as intruções novamente!" );
}
