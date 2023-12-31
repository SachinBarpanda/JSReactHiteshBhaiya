const form =  document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    
    const result = document.querySelector('#results')
    // console.log(typeof height);
    if(height===''||height<0 || isNaN(height)){
        result.innerHTML = "Enter a valid height"
    }
    else if(weight===''||weight<0 || isNaN(weight)){
        result.innerHTML = "Enter a valid weight"
    }else {
        const bmi = (weight / (( height*height )/10000)).toFixed(2)
        result.innerHTML =`<span> ${bmi}</span>` 

        if(bmi<18.6){
            result.innerHTML = `<h6>Under Weight</h6>`
        }

        else if(bmi>18.6 && bmi< 24.9){
            result.innerHTML = `<h6>Your Weight seems alright</h6>`
        }

        else{
            result.innerHTML = `<h2>Over Weight</h2>`
        }
    }


})

