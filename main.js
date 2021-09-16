let choose = document.querySelectorAll(".btn") 
let gridSection = document.querySelectorAll(".grid-section")
choose.forEach(option => {
    option.addEventListener("click", function(e) {
        for(let i = 0; i<choose.length; i++){
            for(let j=0; j<gridSection.length; j++){
                if(e.target.dataset.index === gridSection[j].dataset.index){
                    gridSection[j].classList.remove("hide");
                    gridSection[j].classList.add("show"); 
                } else {
                    gridSection[j].classList.add("hide");
                    gridSection[j].classList.remove("show")
                }  // end of if else
                } // decond for
        }  // first for
       
    })  // end of event
})  // end of for each  


//got to fix picked class