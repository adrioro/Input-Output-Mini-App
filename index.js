myApp = {}; //First we create an app object.

//Then we create a method to select the elements:

//Whit this method I can select any element from my document.
myApp.selectElem = function (element) {
    return document.querySelector(element);
}

//Now, we select the elements that I need.

myApp.entry = myApp.selectElem("#entry");
myApp.output = myApp.selectElem("#output");

// We create the event handler.

myApp.entry.onkeyup = function () {
    console.log("This works");
    myApp.output.innerText = myApp.entry.value;
}