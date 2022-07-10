"use strict";



function toggleAdvanced(){
    const searchbar = document.getElementById("searchbar-advanced");
    if(searchbar.style.display == "none"){
        searchbar.style.display = "block";
    }else{
        searchbar.style.display = "none";
    }
}