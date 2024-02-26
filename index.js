let result = document.getElementById("result");
let input = document.getElementById("text-convert");
const btnEnc = document.getElementById("btn-enc");
const btnDes = document.getElementById("btn-des");
const btnCopy = document.getElementById("btn-copy");


if (input.value === "") {
  btnCopy.style.display = "none";
}

const lettersEncrypted = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const lettersDecrypt = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
};

btnEnc.addEventListener("click", () => {
  encrypt(input.value.toLowerCase(), lettersEncrypted);
});

btnDes.addEventListener("click", () => {
  decrypt(input.value, lettersDecrypt);
});

function encrypt(text, diccionary) {
  const regex = new RegExp(Object.keys(diccionary).join("|"), "g");
  const textoModified = text.replace(regex, (match) => diccionary[match]);
  result.innerHTML = textoModified;
  input.value = "";
}

function decrypt(text, diccionary) {
  const regex = new RegExp(Object.keys(diccionary).join("|"), "g");
  const textoModified = text.replace(regex, (match) => diccionary[match]);
  result.innerHTML = textoModified;
  input.value = "";
}

const copyContent = async () => {
  let text = document.getElementById("result").innerHTML;
  try {
    await navigator.clipboard.writeText(text);
    alert("Texto copiado!");
  } catch (err) {
    alert("Fallo al copiar el texto: ", err);
  }
};

function hideOrshowCopyBtn() {
  if (btnCopy.style.display === "none" && input.value) {
    btnCopy.style.display = "block";
    result.style.textAlign = "start"
    result.style.margin = 0;
  } else if (input.value.trim() !== "") {
    btnCopy.style.display = "block";
    result.style.textAlign = "start"
  } else {
    btnCopy.style.display = "none";
  }
}
