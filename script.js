var popupoverlay = document.querySelector(".overlay");
var popupbox = document.querySelector(".popup");
var popupbutton = document.getElementById("newbtn");
// function addele(){
//     popupoverlay.style.display="block";
//     popupbox.style.display="block";
// }add onclick to respective button
popupbutton.addEventListener("click", function() {
        popupoverlay.style.display = "block";
        popupbox.style.display = "block";
        
    })
    // function delpopup(){
    //         popupoverlay.style.display="none";
    //         popupbox.style.display="none";
    //     }
var delpopup = document.getElementById("cancel-popup");
delpopup.addEventListener("click", function(event) {
    event.preventDefault(); //prevents the page from refreshing.
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
    save();

})
var container = document.querySelector(".container"); /*query selector as class is used*/
var addbookbutton = document.getElementById("addbook");
var bktitle = document.getElementById("title");
var bkauthor = document.getElementById("author");
var bkdescription = document.getElementById("desc"); /*get/select all the elememts needed to added to the div*/
addbookbutton.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div"); /*create a requried tag here a div tag*/
    div.setAttribute("class", "container-body");
    /*set the attribute to teh respective key and value here it is set the class to the conatiner-body the div class of the thing that is to be created/added newly*/
    div.innerHTML = `<h3>${bktitle.value}</h3>
    <h5>${bkauthor.value}</h5>
    <p>${bkdescription.value}</p>
    <button class="btn" onclick="delbook(event)">Delete</button>`
        /*get all the innerhtml values to be added to the div newly. ${}symbol is used to get the elements and instead of "" use `` */
    container.append(div);
    /*append the div to the container div*/
    popupbox.style.display = "none";
    popupoverlay.style.display = "none";
    /*set the display back to none to not make the popup and overlay after clicking add button*/
    save();
    bktitle.value="";
    bkauthor.value="";
    bkdescription.value="";
})

function delbook(event) {
    event.target.parentElement.remove();
    save();
    /*to delete the book details in clicking delete button-onclick*/
}
function save(){
    localStorage.setItem("data",container.innerHTML);

}
function display(){
    container.innerHTML=localStorage.getItem("data");
}
display();
