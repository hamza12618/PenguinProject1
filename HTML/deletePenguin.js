'use strict';
let penguinId = document.querySelector("#numberInput");
let penguinName = document.querySelector("#inputFeild");
let penguinAge = document.querySelector("#ageInput");
let happyFeet = document.querySelector("#happyFeet?");
let inputBtn = document.querySelector("#inputBtn");

// A function that saves the value of the input field
let createPenguin = () => {

    let inputValue = inputField.value; // Make a new variable called inputValue, equal to value of input field
    let idValue = numberInput.value;
    let ageValue = penguinAge.value;
    let happyfeetValue = happyFeet.value;



    let newObject = {
        id = idValue,
        name = inputValue,
        age = ageValue,
        happyfeet = happyfeetValue,

    };

    // Run fetch function
    postFetch(newObject);


};
// Delete Request - ID of the thing we want to delete
// Isnt going to be submitted as a body, it is going to be submitted as a URL parameter 

// Get by ID    - URL or Query parameters
// Update by ID - URL or Query parameters

let deleteRequest = (type, category) => {

    fetch(`http://localhost:8083/createPenguin/${type}/${category}}`, {
        method: `DELETE`
    })
        .then((response) => {
            if (response.status !== 200) {
                console.error(`Status: ${response.statusText}`);
                return;
            }
            response.json()
                .then((data) => {
                    console.log(data);
                });
        });

};

deleteRequest(7);