$(document).ready(function() {
    // Topics is going to be rendered into buttons to make a search request for each topic when clicked
const topics = ["dogs", "cats", "cars", "fries"];

// Function
function displayButtons() {
    $("#giphyBtnDiv").empty();
    for(let i = 0; i < topics.length; i++) {
    let newBtn = $("<button>");
    newBtn.text(topics[i]);
    newBtn.addClass("topic")
    $("#giphyBtnDiv").append(newBtn);
    
    }
};
displayButtons();



// Adds new button
$("#add-topic").on("click", createButton); 
$(".topic").on("click", displayTopicInfo);
// The following lines are for dynamic html
$(".stillGiphy").on("click", clickStillGiphy);
$(".activeGiphy").on("click", clickActiveGiphy);

// The function is gonna take the text on #topic-input when #add-topic is clicked on, and add it to the array in topics var. Everything in the array should get a button created.
function createButton(e) {
    console.log("createButton just executed you goof")
    e.preventDefault()
let searchinput = $("#topic-input").val().trim();
topics.push(searchinput);

displayButtons();
};

// The topic rating 
function displayTopicInfo() {
    //here the app will make a an ajax call based on the button text
// API key: hXBN5LO4EL4KjY60GVR4Pxz5Tyh5zcNN
const query = $(this).val()
const mainURL = "api.giphy.com/v1/gifs/search?q="+ query + "&api_key=hXBN5LO4EL4KjY60GVR4Pxz5Tyh5zcNN&limit=12"
$.ajax({
url: mainURL,
method: "GET"

})
.then(
    console.log(response)
)
};

// When clicked, if the giphy is stil, then the giphy will move 
function clickStillGiphy() {
    let giphyActive = false;

};

// When clicked, if the giphy is active, then the giphy will stop moving
function clickActivegiphy() {
    let giphyActive = true;

};

});
