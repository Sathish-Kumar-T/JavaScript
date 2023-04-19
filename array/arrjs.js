
const dept=['EEE','CSE','MECH','BIO MED','ECE']
    for(let i=0;i<dept.length;i++)
    {
      const sopt=document.createElement('option')  
      document.getElementById('array').appendChild(sopt)    
  sopt.textContent=dept[i]
sopt.value=dept[i]
// console.log(sopt)
}
   
   
   
   