const input = document.getElementById("input-principal");
const btnEnc = document.getElementById("btn-enc");
const btnDes = document.getElementById("btn-des");
const result = document.getElementById("result");

btnEnc.addEventListener("click", () => {
    const input = document.getElementById("input-principal").value;
    encriptar(input);
});

btnDes.addEventListener("click", () => {
    const input = document.getElementById("input-principal").value;
    desencriptar(input);
});

function encriptar (text) {
    console.log(text);
    input.value = "";    
}

function desencriptar (text) {
    console.log(text);
    input.value = ""; 
}

