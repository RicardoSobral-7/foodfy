const iButton = document.querySelector(".ingredientsRecipe button");
const pButton = document.querySelector(".preparationRecipe button");
const infoButton = document.querySelector(".informationRecipe button");

iButton.addEventListener("click", ()=>{
    const iContent = document.querySelector(".i-content")
    if(iButton){
        iContent.classList.toggle("hide");
    }
    if(iButton.textContent == "Mostrar"){
        iButton.innerHTML = "Esconder";
    }else{
        iButton.innerHTML = "Mostrar";
    }
});

pButton.addEventListener("click", ()=>{
    const pContent = document.querySelector(".p-content");
    if(pButton){
        pContent.classList.toggle("hide");
    }
    if(pButton.textContent == "Mostrar"){
        pButton.innerHTML = "Esconder";
    }else{
        pButton.innerHTML = "Mostrar";
    }
});

infoButton.addEventListener("click", ()=>{
    const infoContent = document.querySelector(".info-content");
    if(infoButton){
        infoContent.classList.toggle("hide");
    }if(infoButton.textContent == "Mostrar"){
        infoButton.innerHTML = "Esconder";
    }
    else{
        infoButton.innerHTML = "Mostrar";
    }
});