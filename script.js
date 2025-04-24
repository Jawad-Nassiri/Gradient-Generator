const $ = document
const body = $.body
const inputColorAElem = $.querySelector('#color-a')
const inputColorBElem = $.querySelector('#color-b')
const arrowButttons = $.querySelectorAll('.buttons button')
const generateColorBtn = $.querySelector('#submit')
const textareaElem = $.querySelector('textarea')
const copyBtn = $.querySelector('#copy')





arrowButttons.forEach(arrowBtn => {
    arrowBtn.addEventListener('click', () => {
        const activeBtn = $.querySelector('.active')
        activeBtn.classList.remove('active')
        arrowBtn.classList.add('active')

        const {direction, colorA, colorB} = getGradientValues();

        
        body.style.background = `linear-gradient(${direction}, ${colorA}, ${colorB})`

    })
})


const generateColorHandler = () => {
    
    const {direction, colorA, colorB} = getGradientValues();
    

    body.style.background = `linear-gradient(${direction}, ${colorA}, ${colorB})`

    textareaElem.value = `linear-gradient(${direction}, ${colorA}, ${colorB})`
    
}


function copyContent() {

    let colorA = inputColorAElem.value
    let colorB = inputColorBElem.value
  
    textareaElem.select();
  
    navigator.clipboard.writeText(textareaElem.value);
  
    alert("Text Copied !");

    textareaElem.value = ""
}


const getGradientValues = () => {
    const direction = $.querySelector('.active').dataset.direction
    return {
      direction,
      colorA: inputColorAElem.value,
      colorB: inputColorBElem.value
    }
}

  


generateColorBtn.addEventListener('click', generateColorHandler)
copyBtn.addEventListener('click', copyContent)



