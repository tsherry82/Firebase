// **********SUDO COODE**********
console.log("test")

// **********DATABASE**********

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA8Yb2Cn8rpighS0J6UVvfhpS4yOrIS9Ng",
    authDomain: "train-schedule-e5613.firebaseapp.com",
    databaseURL: "https://train-schedule-e5613.firebaseio.com",
    projectId: "train-schedule-e5613",
    storageBucket: "",
    messagingSenderId: "424758889484",
    appId: "1:424758889484:web:1a7bb953fcdceb16"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// **********VARIABLES*********


var database = firebase.database();

$("#submit").on("click", function (event) {

    event.preventDefault();

    var newTrainName = $("#train-name-input").val();
    var newDestination = $("#destination-input").val();
    var newTrainTime = $("#train-time-input").val();
    var frequency = $("#frequency-input").val();

    var tempTrain = {
        name: newTrainName,
        destination: newDestination,
        time: newTrainTime,
        frequency: frequency,
    };

    database.ref().push(tempTrain)

    $("#train-name-input").val("")
    $("#destination-input").val("")
    $("#train-time-input").val("")
    $("#frequency-input").val("")


});
    database.ref().on("child_added" , function(snapshot,prevChildKey){
        console.log(snapshot.val());
        var trainName = snapshot.val().name;
        var trainTime = snapshot.val().time;
        var trainDestination = snapshot.val().destination;
        var trainfrequency = snapshot.val().frequency;
    });

    