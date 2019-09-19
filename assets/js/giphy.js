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
    newBtn.addClass("m-1 btn btn-primary shadow")
    $("#giphyBtnDiv").append(newBtn);
     }
};
displayButtons();

//adds new button
$("#add-topic").on("click", createButton);
function createButton(e) {
    e.preventDefault()
let searchInput = $("#topic-input").val().trim();
topics.push(searchInput);
console.log(topics);
let newBtn = $("<button>");
console.log(topics[topics.length-1])
    newBtn.text(topics[topics.length-1]);
    newBtn.addClass("topic m-1 btn btn-primary shadow");
    $("#giphyBtnDiv").append(newBtn)
// displayButtons();
};

//This block of code makes the ajax call to retrieve the gifs
$(document).on("click", ".topic", displayTopicGif);
function displayTopicGif() {
    //here the app will make a an ajax call based on the button text
// API key: hXBN5LO4EL4KjY60GVR4Pxz5Tyh5zcNN
$("#giphyDiv").empty()
console.log("Request in progress");
const query = $(this).text()
const mainURL = "http://api.giphy.com/v1/gifs/search?q="+ query + "&api_key=hXBN5LO4EL4KjY60GVR4Pxz5Tyh5zcNN&limit=12"
$.ajax({
url: mainURL,
method: "GET"

})
.then((response)=> {
    console.log(response.data);//this is an array of objects
    const gifArray = response.data;
    
    gifArray.forEach((object, index)=> {
        const image = response.data[index].images.fixed_height_still.url;
        const gif = response.data[index].images.fixed_height.url;
        const newGif = $("<img>");
        $("#giphyDiv").append(newGif);
        newGif.attr("src", image);
        newGif.attr("data-gif", gif);
        newGif.attr("data-image", image);
        newGif.addClass("still m-1 ")
        console.log("response executed");
    })
    
} )
};




// The following lines are for dynamic html
// $(".stillGiphy").on("click", clickStillGiphy);
// $(".activeGiphy").on("click", clickActiveGiphy);




//turn the gif off
$(document).on("click", ".active", function() {
    $(this).attr("src", $(this).attr("data-image"));
$(this).removeClass("active")
$(this).addClass("still")
})
//turns the gif on
$(document).on("click", ".still", function() {
    console.log("bop")
 $(this).attr("src", $(this).attr("data-gif"));
$(this).removeClass("still")
$(this).addClass("active")

})




});
