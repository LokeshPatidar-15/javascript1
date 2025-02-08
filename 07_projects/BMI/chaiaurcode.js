
const form = document.querySelector('form')

form.addEventListener('submit' , function(e){
    e.preventDefault()
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height ==='' || height < 0 || isNaN(height ) ){
        results.innerHTML = "Please enter a valid height"
    }else if(weight ==='' || weight < 0 || isNaN(weight ) ){
        results.innerHTML = "Please enter a valid weight"
    }

    else{
       const bmi =  (weight / ((height*height)/10000)).toFixed(2)

       // show the result
       results.innerHTML = `<span>${bmi}</span>`
    }

    // if(bmi < 18.6){
    //     results.innerHTML = `<p>Under Weight </p>`
    // }else if(24.9 >bmi > 18.6){
    //     results.innerHTML = `<p> normal </p>`
    // }
    // else{
    //     results.innerHTML = `<p> Over Weight </p>`
    // }


    if (bmi < 18.6) {
        results.innerHTML += `<p>Underweight</p>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        results.innerHTML += `<p>Normal</p>`;
    } else {
        results.innerHTML += `<p>Overweight</p>`;
    }
})