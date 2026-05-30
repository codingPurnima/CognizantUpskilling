// Welcome Message

console.log("Community Portal Loaded");

window.onload = function(){

    alert("Page Fully Loaded");

    loadSavedPreference();
};

// =====================================
// Objects and Classes
// =====================================

class Event{

    constructor(name, category, date, seats){

        this.name = name;

        this.category = category;

        this.date = date;

        this.seats = seats;
    }
}

Event.prototype.checkAvailability = function(){

    return this.seats > 0;
};

// =====================================
// Arrays and Methods
// =====================================

let events = [

    new Event("Music Fiesta",
              "Music",
              "2026-06-10",
              10),

    new Event("Baking Workshop",
              "Workshop",
              "2026-06-15",
              5),

    new Event("Football Match",
              "Sports",
              "2026-06-20",
              15)
];

// push()

events.push(
    new Event("Dance Show",
              "Music",
              "2026-06-25",
              20)
);

// filter()

let musicEvents =
events.filter(event => event.category === "Music");

console.log(musicEvents);

// map()

let formattedCards =
events.map(event => `Workshop on ${event.name}`);

console.log(formattedCards);

// Object.entries()

events.forEach(event => {

    console.log(Object.entries(event));
});

// Spread Operator

let clonedEvents = [...events];

console.log(clonedEvents);

// =====================================
// DOM Manipulation
// =====================================

const container =
document.querySelector("#eventContainer");

function renderEvents(list = events){

    container.innerHTML = "";

    list.forEach(event => {

        if(event.seats <= 0){
            return;
        }

        let card =
        document.createElement("div");

        card.classList.add("eventCard");

        card.innerHTML = `

            <h3>${event.name}</h3>

            <p>Category: ${event.category}</p>

            <p>Date: ${event.date}</p>

            <p>Seats: ${event.seats}</p>

            <button onclick="handleRegister('${event.name}')">
                Register
            </button>

            <button onclick="cancelRegistration('${event.name}')">
                Cancel
            </button>
        `;

        container.appendChild(card);
    });
}

renderEvents();

// =====================================
// Event Handling
// =====================================

function handleRegister(eventName){

    let event =
    events.find(e => e.name === eventName);

    if(event.seats > 0){

        event.seats--;

        alert("Registration Successful");

        renderEvents();
    }

    else{
        alert("No Seats Available");
    }
}

function cancelRegistration(eventName){

    let event =
    events.find(e => e.name === eventName);

    event.seats++;

    renderEvents();
}

// onchange

document
.getElementById("categoryFilter")
.onchange = function(){

    let value = this.value;

    if(value === "All"){
        renderEvents();
    }

    else{

        let filtered =
        events.filter(event =>
            event.category === value
        );

        renderEvents(filtered);
    }
};

// keydown

document
.getElementById("searchBox")
.addEventListener("keydown", function(){

    let keyword =
    this.value.toLowerCase();

    let filtered =
    events.filter(event =>
        event.name.toLowerCase()
        .includes(keyword)
    );

    renderEvents(filtered);
});

// =====================================
// Form Validation
// =====================================

function validatePhone(){

    let phone =
    document.getElementById("phone").value;

    if(phone.length !== 10){

        document.getElementById("phoneError")
        .innerHTML =
        "Phone number must contain 10 digits";
    }

    else{

        document.getElementById("phoneError")
        .innerHTML = "";
    }
}

function showFee(){

    let eventType =
    document.getElementById("eventType").value;

    let fee = "";

    if(eventType === "Music Fiesta"){
        fee = "Fee: ₹500";
    }

    else if(eventType === "Football Match"){
        fee = "Fee: ₹300";
    }

    else if(eventType === "Baking Workshop"){
        fee = "Fee: ₹700";
    }

    document.getElementById("feeDisplay")
    .innerHTML = fee;

    localStorage.setItem(
        "preferredEvent",
        eventType
    );
}

function loadSavedPreference(){

    let savedEvent =
    localStorage.getItem("preferredEvent");

    if(savedEvent){

        document.getElementById("eventType")
        .value = savedEvent;
    }
}

function countChars(){

    let text =
    document.getElementById("feedback").value;

    document.getElementById("charCount")
    .innerHTML =
    `Characters: ${text.length}`;
}

// =====================================
// Form Submission
// =====================================

document
.getElementById("registrationForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let form = event.target;

    let username =
    form.elements["username"].value;

    let email =
    form.elements["email"].value;

    let selectedEvent =
    form.elements["eventName"].value;

    document.getElementById("nameError")
    .innerHTML = "";

    document.getElementById("emailError")
    .innerHTML = "";

    document.getElementById("eventError")
    .innerHTML = "";

    let valid = true;

    if(username === ""){

        document.getElementById("nameError")
        .innerHTML = "Name Required";

        valid = false;
    }

    if(email === ""){

        document.getElementById("emailError")
        .innerHTML = "Email Required";

        valid = false;
    }

    if(selectedEvent === ""){

        document.getElementById("eventError")
        .innerHTML = "Select an Event";

        valid = false;
    }

    if(valid){

        submitRegistration({
            username,
            email,
            selectedEvent
        });
    }
});

// =====================================
// AJAX & Fetch API
// =====================================

function submitRegistration(userData){

    console.log("Submitting:", userData);

    setTimeout(() => {

        fetch(
            "https://jsonplaceholder.typicode.com/posts",

            {
                method: "POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body: JSON.stringify(userData)
            }
        )

        .then(response => response.json())

        .then(data => {

            console.log(data);

            document.getElementById("message")
            .innerHTML =
            "Registration Successful";
        })

        .catch(error => {

            console.log(error);

            document.getElementById("message")
            .innerHTML =
            "Registration Failed";
        });

    }, 2000);
}

// =====================================
// Async/Await
// =====================================

async function fetchEvents(){

    try{

        document.getElementById("loading")
        .style.display = "block";

        let response =
        await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        let data = await response.json();

        console.log(data);

        document.getElementById("loading")
        .style.display = "none";
    }

    catch(error){

        console.log(error);

        document.getElementById("loading")
        .style.display = "none";
    }
}

fetchEvents();

// =====================================
// Media Events
// =====================================

function videoReady(){

    document.getElementById("videoMessage")
    .innerHTML =
    "Video ready to play";
}

// =====================================
// Image Enlarge
// =====================================

function enlargeImage(img){

    img.style.width = "350px";

    img.style.height = "250px";
}

// =====================================
// Geolocation
// =====================================

function findLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(

            function(position){

                document.getElementById("location")
                .innerHTML =

                `Latitude: ${position.coords.latitude}
                 <br>
                 Longitude: ${position.coords.longitude}`;
            },

            function(error){
                alert(error.message);
            },

            {
                enableHighAccuracy: true,
                timeout: 5000
            }
        );
    }

    else{
        alert("Geolocation not supported");
    }
}

// =====================================
// jQuery
// =====================================

$("#registerBtn").click(function(){

    $(".eventCard")
    .fadeOut(300)
    .fadeIn(300);
});

// =====================================
// Debugging
// =====================================

console.log("Debugging Started");

function debugRegistration(){

    debugger;

    console.log("Inspect variables here");
}

debugRegistration();

// =====================================
// Warn Before Leaving
// =====================================

window.onbeforeunload = function(){

    return "Your form is not completed!";
};

