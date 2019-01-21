myApp = {}; //First we create an app object.

//Then we create a method to select the elements:

//Whit this method I can select any element from my document.
myApp.selectElem = function (element) {
    return document.querySelector(element);
}