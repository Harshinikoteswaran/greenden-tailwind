// adding sidenav features and menuicon

let sidenav = document.getElementById("sidenav")
let menuicon = document.getElementById("menuicon")
let cancel = document.getElementById("cancel")
menuicon.addEventListener("click",function(){
    sidenav.style.right = "0%"
    cancel.addEventListener("click",function(){
        sidenav.style.right="-40%"
    })
})

let plantlist = document.querySelectorAll(".plant")
let plantcontainer = document.querySelectorAll(".plantcontainer")
// console.log(plantlist[0].textContent)
let userinput = document.querySelector("#userinput")
userinput.addEventListener("keyup",function(){
   var enterval = this.value.toUpperCase()
  for(let i=0;i<plantlist.length;i+=1){
    if(plantlist[i].textContent.toUpperCase().indexOf(enterval)<0){
        plantcontainer[i].style.display="none"
    }
    else{
        plantcontainer[i].style.display="block"
    }
  }

})