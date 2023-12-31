const random = function(){
    const hex = "0123456789ABCDEF";
    let randomChar1 = hex.charAt(Math.floor(Math.random()*16));
    let randomChar2 = hex.charAt(Math.floor(Math.random()*16));
    let randomChar3 = hex.charAt(Math.floor(Math.random()*16));
    let randomChar4 = hex.charAt(Math.floor(Math.random()*16));
    let randomChar5 = hex.charAt(Math.floor(Math.random()*16));
    let randomChar6 = hex.charAt(Math.floor(Math.random()*16));

    let hexColor = (""+randomChar1+randomChar2+
        randomChar3+randomChar4+randomChar5+randomChar6);

        console.log(hexColor); 
        document.querySelector('section').style.backgroundColor = "#"+hexColor;

}
let thisInterval;
document.querySelector('button').addEventListener('click',()=>{
    if(!thisInterval){
        thisInterval = setInterval(random,1000);
    }
    document.querySelector('.stop').addEventListener('click',()=>{
        clearInterval(thisInterval);
        thisInterval = null;
    })
    
})
