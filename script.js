function saludate() {
    let variable = "hola mundo"
    alert(variable)
}
const btn=document.getElementById("clicker")
let value = 0
function clicker(){
    value +=1
    btn.innerText="clicked "+ value
}
