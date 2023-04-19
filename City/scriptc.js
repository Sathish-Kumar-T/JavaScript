const button=document.querySelector('button');

let resultdiv=document.createElement('div')
resultdiv.id='result'
document.getElementById('whole').appendChild(resultdiv)

button.addEventListener('click',displays);

function displays(){
   const input=document.getElementById("input")
   const city=input.options[input.selectedIndex].value

   let population=0,language=''
 
   switch(city){
    
    case 'Chennai':
            population=2345876
            language= 'Tamil'
            break
   case 'Bangalure':
        population=23456
        language = 'karnadam'
        break
    case 'Pune':
            population=23476556
            language = 'Marati'
            break
    case 'Hydrabad':
        population=2345766
        language = 'Telugu'
        break
    case 'Dheli':
        population=23476556
        language = 'Marati'
        break
    
        

   }

let text= `Intha ${city} uur la ivlo ${population} population intha ${language} mozhi persuranga`
// console.log(text)
document.getElementById('result').innerHTML=text

}
