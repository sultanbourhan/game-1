let start = document.querySelector(".start")
let nam = document.querySelector(".nam span")
let input = document.querySelector(".name") 

let but = document.querySelector(".but")
console.log(but)

let nha = document.querySelector(".nha")
let nti = document.querySelector(".nha .nti")
let startAgin = document.querySelector(".nha .start-agin")


let box = document.querySelectorAll(".box")


start.onclick = function(){

    box.forEach((bb)=>{
        bb.classList.add("active")
    })

    setTimeout(function(){
        box.forEach((bb)=>{
            bb.classList.remove("active")
        })
    },2000)





    but.style.display = "none"
    if(input.value === ""){
        nam.innerHTML = "Nll"
        nti.innerHTML = "Nll"

    }else{
        nam.innerHTML = input.value
        nti.innerHTML = `good ${input.value}`
    }
    random()
}

startAgin.onclick = function() {

    

    nha.style.display = "none"

    box.forEach((oo) =>{
        oo.classList.remove("act")
    })

    but.style.display = "flex"

    input.value = ""

}



// ------------------------------------------------------------




let doxAree = Array.from(box)

let arre = [1 , 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]



function random(){
    box.forEach((bo) => {
        bo.style.order = (Math.floor(Math.random() * arre.length))
    } )
}


// -------------------------------------------------------

let nat = document.querySelector(".nat span") 






box.forEach((x) =>{
    x.addEventListener("click",function(){
        x.classList.add("active")

        let boxFilter = doxAree.filter(doxAree  => doxAree.classList.contains("active"))

        if(boxFilter.length === 2){
            box.forEach((b)=>{
                b.classList.add("st")
            })

            setTimeout(function(){
                box.forEach((b)=>{
                    b.classList.remove("st")
                })
            },1000)

            setTimeout(function(){

                box.forEach((bo) => {
                    bo.classList.remove("active")
                })

            }, 1000)

            
            if(boxFilter[0].dataset.img === boxFilter[1].dataset.img){
                boxFilter[0].classList.add("act")
                boxFilter[1].classList.add("act")

                
            }else{
                nat.innerHTML = parseInt(nat.innerHTML) + 1
            }
        }
        
        let boxFilterAct = doxAree.filter(doxAree  => doxAree.classList.contains("act"))

        console.log(boxFilterAct)
        if(boxFilterAct.length === 20){
            setTimeout(function(){
                nha.style.display = "flex"
            },2000)
        }


    })
})

// ----------------------------------------------------------------------









