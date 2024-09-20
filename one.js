const button=document.querySelectorAll(".button")
const body=document.querySelector("body")
button.forEach( function (button){
  button.addEventListener('click',function(e){
    //console.log(e) // MouseEvent
    //console.log(e.target) // HTML spanElement
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id
    }
    else if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id
    }
    else if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id
    }
    else if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id
    }
  })
})