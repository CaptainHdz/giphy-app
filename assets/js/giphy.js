const topics = ["dogs", "cats", "cars", "fries"];

// Functions
function displayButtons() {
    for(let i = 0; i < topics.length; i++) {
    let newBtn = $("<button>");
    newBtn.text(topics[i]);
    $("#giphyDiv").append(newBtn);
    
    }
};

// Adds new button
$(document).on("click", "#add-topic", "createButton");
$(document).on("click", ".topic", "displayTopicInfo");
$(document).on("click", ".stillGiphy", "clickStillGiphy");
$(document).on("click", ".activeGiphy", "clickActiveGiphy");

// The function is gonna take the text on #topic-input when #add-topic is clicked on, and add it to the array in topics var. Everything in the array should get a button created.
function createButton() {
let searchinput = $("#topic-input").val().trim();
topics.push(searchinput);
// The topic rating 
function displayTopicinfo() {

};
// When clicked, if the giphy is stil, then the giphy will move 
function clickStillGiphy() {
    let giphyActive = false;

};
// When clicked, if the giphy is active, then the giphy will stop moving
function clickActivegiphy() {
    let giphyActive = true;

};


