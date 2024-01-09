// let firstName = document.querySelector('.first-name');
// console.log(firstName);
let submit = document.querySelector('.submit');
let inputNames = document.querySelectorAll('dd > input');
const isEmpty = (value)=>
    value === ''? true:false


submit.addEventListener('click', function(e) {
    e.preventDefault();

    for(i=0; i<inputNames.length; i++) {
     
        let empty = isEmpty(inputNames[i].value)
        let parent = inputNames[i].parentElement;
        // console.log(`${inputNames[i].value} ${empty}`)
  
        if(empty) {
            let text=inputNames[i].name.replace(/-/g, " ")
            parent.querySelector('p').innerHTML=`${text} is Required.`
        }
        else {
            parent.querySelector('p').innerHTML=``;
        }
    }
});
