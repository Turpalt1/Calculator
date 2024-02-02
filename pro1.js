let btns = document.querySelectorAll("input[type=button]");
let input = document.querySelector("input[type=text]");
console.log(btns);
function calc(n){
    let val;
    if(n.value.includes(" + ") == 1){
        val = n.value.split(" + ");
        n.value = +val[0] + +val[1];
        val = [];
        return;
    }
    if(n.value.includes(" - ") == 1){
        val = n.value.split(" - ");
        n.value = +val[0] - +val[1];
        val = [];
        return;
    }
    if(n.value.includes(" * ") == 1){
        val = n.value.split(" * ");
        n.value = +val[0] * +val[1];
        val = [];
        return;
    }
    if(n.value.includes(" / ") == 1){
        val = n.value.split(" / ");
        if(val[0] == "0" || val[1] == "0"){
            return n.value = 0;    
        }
        n.value = +val[0] / +val[1];
        val = [];
        return;
    }
    console.log(val);
}
//
// function btn(e){
//     if(e.target.type =="button"){
//         if(e.target.value == "="){
//             let result = eval(input.value);
//             console.log(result)
//             input.value = result;
//         }else{
//             input.value += e.target.value 
//         }
//     }
//     return console.log(e.target.value)
// }

function btnSecond(e){
    if(e.target.type =="button"){
        if(e.target.value == "="){
    
            calc(input);
    
            console.log(input.value.indexOf("+"))
        }else{
            input.value += e.target.value 
        }
    }
    console.log(e.target.value)
}

document.addEventListener("click", btnSecond);
