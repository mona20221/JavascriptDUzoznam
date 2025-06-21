const texty = [];

function addText(){
const input = document.getElementById("textInput");
const text = input.value.trim();

if (text !=""){
    texty.push(text);

    const li = document.createElement("li");
    li.textContent = text;

    li.addEventListener("click", function(){
    li.remove();
    })
    document.getElementById("textList").appendChild(li);

    input.value = "";
    }
}

