function adminActiveMenu(){
    const currentPage = location.pathname;
    const menuItems = document.querySelectorAll(".navbar .menu a");
    
    for(item of menuItems){
        if(currentPage.includes(item.getAttribute("href"))){
            item.classList.add("active");
        }
    }
}

function userActiveMenu(){
    const currentUserPage = location.pathname;
    const menuUserItems = document.querySelectorAll(".container nav .menu a");
    
    for(item of menuUserItems){
        if(currentUserPage.includes(item.getAttribute("href"))){
            item.classList.add("active");
        }
    }
}


adminActiveMenu();
userActiveMenu();