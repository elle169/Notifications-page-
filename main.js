const markbt = document.querySelector("[data-markbutton]");

const notiNumber = document.querySelector("[data-notinumber]")

const newNoti = document.querySelectorAll("[data-notification]")

const para = document.querySelectorAll("[data-paragraph]")

markbt.addEventListener("click", ()=> {


    newNoti.forEach(noti => {
        noti.classList.remove("noread")
    })
    
    para.forEach(Para => {
        Para.classList.remove("point")
    })
    
    notiNumber.innerHTML = 0
    
})


