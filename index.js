var tBox= document.querySelector(".text-box input");
var eOp = document.querySelector("#equal");
var cOp = document.querySelector(".clear");

for(var i = 0; i < document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        if(this.innerText >= '0' && this.innerText <= '9'){
            tBox.value += this.innerText;
        }else if(this.innerText=== "+" ||this.innerText=== "*"||this.innerText=== "-"||this.innerText=== "/"){
            tBox.value += this.innerText;
        }
    
    })
}
eOp.addEventListener("click", function(){
    tBox.value = eval(tBox.value);
})
cOp.addEventListener("click", function(){
        tBox.value = tBox.value.slice(0, tBox.value.length - 1);
    
})

