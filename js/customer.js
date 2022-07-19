'use strict'

const date = document.getElementById("date");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const phone = document.querySelector("#phone");
const vehicle = document.querySelector("#vehicle");
const price = document.querySelector("#price");
const trade = document.querySelector("#trade");
const notes = document.querySelector("#notes");
const errorElement = document.querySelector("#errorElement");
const form = document.querySelector("#form-addcustomer");
const addcustomer = document.querySelector("#form-addcustomer");

var errorState = document.querySelectorAll('.errorState');
var addcustomerSection = addcustomer.querySelector("section");
addcustomerSection.style.gridTemplateColumns = "100px 400px 100px";

var messages = [];
    
    date.addEventListener('keyup',function(event){
        let dateValue = date.value;
        let regex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
        //Checks that the date input is not empty, greater than 10 chars and is in the proper format
        if(dateValue === "" || dateValue === null){
            errorState[0].innerText = "Date field is Required!";
        }else if(regex.test(dateValue) === false){
            errorState[0].innerText ="Date field format is DD/MM/YYYY";
        }else{
            errorState[0].innerText = "Date field looking good!";
        }
    });
    
    fname.addEventListener('keyup',function(event){
        let fnameValue = fname.value;
        let regex = /^[a-zA-Z]{1,25}$/;
        if(fnameValue === "" || fnameValue === null){
            errorState[1].innerText = "First Name field is Required";
        }else if(regex.test(fnameValue) === false){
            errorState[1].innerText = "First Name field must be letter only ex. a-z A-Z";
        }else{
            errorState[1].innerText = "First Name field looking good!";
        }
    });
    
    lname.addEventListener('keyup',function(event){
        let lnameValue = lname.value;
        let regex = /^[a-zA-Z]{1,25}$/;
        if(lnameValue.length > 0){
            console.log("lname Field is greater than zero!")
            if(regex.test(lnameValue)){
                console.log("First Name Field format is correct")
                console.log(regex.test(lnameValue))
        }else{
                console.log("First Name must be no more than 25 chars [a-zA-Z]")
            }
        }else{
            console.log("lname Field is Required!")
        }
        
    });
    
    phone.addEventListener('keyup',function(event){
        let phoneValue = phone.value;
        let regex = /^[0-9]{10}$/;
        if(phoneValue.length > 0){
            console.log("phone Field is greater than zero!")
            if(regex.test(phoneValue)){
                console.log("Phone Field format is correct")
                console.log(regex.test(phoneValue))
        }else{
                console.log("Phone Number must be 10 numeric chars [0-9]")
            }
        }else{
            console.log("phone Field is Required!")
        }
        
    });
    
    vehicle.addEventListener('keyup',function(event){
        let vehicleValue = vehicle.value;
        let regex = /^[a-zA-Z0-9\s]{1,25}$/;
        if(vehicleValue.length > 0){
            console.log("vehicle Field is greater than zero!")
            if(regex.test(vehicleValue)){
                console.log("vehicle Field format is correct")
                console.log(regex.test(vehicleValue))
        }else{
                console.log("vehicle must be 10 numeric chars [0-9]")
            }
        }else{
            console.log("vehicle Field is Required!")
        }
        
    });
    
    price.addEventListener('keyup',function(event){
        let priceValue = price.value;
        let regex = /^[0-9]{1,6}\.[0-9]{2}$/;
        if(priceValue.length > 0){
            console.log("price Field is greater than zero!")
            if(regex.test(priceValue)){
                console.log("price Field format is correct")
                console.log(regex.test(priceValue))
        }else{
                console.log("price must be 10 numeric chars [0-9]")
            }
        }else{
            console.log("price Field is Required!")
        }
    });
    
    trade.addEventListener('keyup',function(event){
        let tradeValue = trade.value;
        let regex = /^[a-zA-Z0-9\s]{1,25}$/;
        if(tradeValue.length > 0){
            console.log("trade Field is greater than zero!")
            if(regex.test(tradeValue)){
                console.log("trade Field format is correct")
                console.log(regex.test(tradeValue))
        }else{
                console.log("trade must be 10 numeric chars [0-9]")
            }
        }else{
            console.log("trade Field is Required!")
        }
    });
    
    notes.addEventListener('keyup',function(event){
        let notesValue = notes.value;
        let regex = /^[a-zA-Z0-9\s\$\.\,]{1,250}$/;
        if(notesValue.length > 0){
            console.log("notes Field is greater than zero!")
            if(regex.test(notesValue)){
                console.log("notes Field format is correct")
                console.log(regex.test(notesValue))
        }else{
                console.log("notes must be 10 numeric chars [0-9]")
            }
        }else{
            console.log("notes Field is Required!")
        }
    });

form.addEventListener('submit', function(event){
    if(messages.length > 0){
        event.preventDefault();
        errorElement.innerText = messages.join('\n');
    }
});



