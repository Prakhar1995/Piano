const keys= document.querySelectorAll('.key')
console.log(keys)
keys.forEach(key=>{
   key.addEventListener('click',()=>playNote(key))
})

function playNote(key){
    const note=document.getElementById(key.dataset.note)
    note.currentTime=0;
    note.play()
    key.classList.add('active')
    note.addEventListener('ended',()=>
    key.classList.remove('active'))
}