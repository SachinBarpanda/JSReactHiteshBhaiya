const allBtns = document.querySelectorAll('span');
const body = document.querySelector('body');

console.log(allBtns);
allBtns.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        // if(e.target.className == 'yellow' ){
            body.style.backgroundColor = e.target.className;
        // }
    })
})
