function convert(){
    let input = document.getElementById("scriptInput").textContent
    let output = document.getElementById("macroOutput")
    macroString = ''
    let charArr = []
    let chars = document.getElementsByClassName("charName")
    for (let item of chars){
        let text = item.value
        charArr.push(text.toUpperCase())
    }; 
    for (let name of charArr){
        console.log(name)
        let pattern = `/?=${name}/`
        let regEx = new RegExp(pattern)
        let line = input.match(regEx)
        macroString+= line
        output.innerHTML = macroString
    }
    


}
function countChars(){
    let count = document.getElementById("charCount").value
    for (i=0; i<count; i++){
        console.log('test')
        let charList = document.getElementById("charList")
        let char = document.createElement("input");
        char.type = "text";
        char.id = "char" + i;
        char.className = "charName"
        let label = document.createElement("label");
        label.innerText= "Character " + (i+1)
        label.htmlFor = "char" + i;
        charList.parentNode.appendChild(label)
        charList.parentNode.appendChild(char)
    }
}