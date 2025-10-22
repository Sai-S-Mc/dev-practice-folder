let headingElement = document.getElementById("heading")
setTimeout(()=>{
    headingElement.textContent = "Hi! This is the new heading."
    headingElement.style.color = "seagreen"
    headingElement.style.fontSize = "80px"
}, 3000)