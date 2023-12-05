console.log("notes taking app");
showNotes();
// if user writes and adds a note, add it to local storage 

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(addTxt.value == ""){
        alert("please write something!")
    }
    else {
        if (notes === null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }
    notesArr.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    addTxt.value = "";
    // console.log(notesArr);
    showNotes();
}
})

// fetch the added note from the local storage and append it on the card or show it on the card 

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes === null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }
    let html = "";

    if(JSON.stringify(notes)!=null){

    notesArr.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <hr>
                    <p class = "card-text">${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
                </div>`;
    });
}
    let notesElem = document.getElementById("notes");
    if (notesArr.length != 0) {
        notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML = `Nothing to show, write something and use "Add Notes" button above to add notes.`;
    }
}   

//function to delete a note 

function deleteNote(index){
    // console.log("delete this note.",index)
    let notes = localStorage.getItem("notes");
    if (notes === null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }
    notesArr.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    showNotes();
}

// Adding search feature -->

let search = document.getElementById("searchTxt");

search.addEventListener("input", function(){
    let inputValUp = search.value.toLowerCase();
    let inputValLo = search.value.toUpperCase();
    // console.log("event is fired", inputVal);  

    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element){
        let cardText = element.getElementsByTagName("p")[0].innerText;
        if(cardText.includes(inputValUp)){
            element.style.display = "block";
        }
        else if(cardText.includes(inputValLo)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})

/* further features -->
1. add title to each card.
2.mark as important

*/