const bgc = document.getElementById('bg')
const number = document.getElementById('hex')
const bton = document.getElementById('btn')
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A','B','C','D','E','F']

bton.addEventListener('click',changeBg)

function changeBg(){
    let hexa='#'
    for( let i=1;i<=6;i++){
    //    hexa= "#"+ randomNum()+randomNum()+randomNum()+randomNum()+randomNum()+randomNum()
    hexa+=randomNum()
}
    // console.log(hexa)
    bgc.style.backgroundColor= hexa
    number.innerHTML=hexa
   }



function randomNum(){
    let randomValue = Math.floor(Math.random()*16)
    return num[randomValue]

}