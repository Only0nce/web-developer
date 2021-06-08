const userId = document.getElementById("userID");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const age = document.getElementById("age");
const update = document.getElementById("update");
const delect = document.getElementById("delect");
const database = firebase.database();
const rootref = database.ref("user");

/*rootref.child(userId.value).set({
    first_name: firstname.value,
    last_name: lastname.value,
    age: age.value,
  });*/

document.querySelector("add").addEventListener("click", () => {
  rootref.child(userId.value).set({
    first_name: firstname.value,
    last_name: lastname.value,
    age: age.value,
  });
});

rootref.child(userId.value).set({
  first_name: firstname.value,
  last_name: lastname.value,
  age: age.value,
});

/* $(document).ready(function () {
             $('#add').on('click', function (event) {
                 event.preventDefault();
                 database.ref("user").set({
                     user: $('#userId').val(),
                     firstName: $('#firstname').val(),
                     lastname: $('#lastname').val(),
                     age: $('#age').val()
                 });
             });
         });
         $(document).ready(function () {
             $('#updates').on('click', function (event) {
                 event.preventDefault();
                 database.ref().child("data").update({
                     user: $('#userId').val(),
                     firstName: $('#firstname').val(),
                     lastname: $('#lastname').val(),
                     age: $('#age').val()
                 });
             });
         });
         $(document).ready(function () {
             $('#updates').on('click', function (event) {
                 event.preventDefault();
                 database.ref("user").child("data").remove({
                     user: $('#userId').val(),
                     firstName: $('#firstname').val(),
                     lastname: $('#lastname').val(),
                     age: $('#age').val()
                 });
             });
         });*/
/* $(document).ready(function () {
               $("#add").click(function () {
                   console.log("Hello");
                   database.ref().set({
                       user: 50,
                       firstName: "jj",
                       lastname: "op",
                       age: "5"
                   });
               });
           });
         database.ref().set({
             user: 10,
             firstName: "only",
             lastname: "one",
             age: "40"
         });
         var databases = firebase.database().ref();
         databases.on("value", function (snapshot) {
             console.log(snapshot.val());
         });*/

/*const database = firebase.database().ref("user");
        var submitRecommendation = function () {

            // Get input values from each of the form elements
            var userId = $("#userId").val();
            var firstname = $("#firstname").val();
            var lastname = $("#lastname").val();
            var age = $("#age").val();

            // Push a new recommendation to the database using those values
            database.set({
                "user": userId,
                "first_name": firstname,
                "last_name": lastname,
                "age": age
            });
        };

        // When the window is fully loaded, call this function.
        // Note: because we are attaching an event listener to a particular HTML element
        // in this function, we can't do that until the HTML element in question has
        // been loaded. Otherwise, we're attaching our listener to nothing, and no code
        // will run when the submit button is clicked.
        $(window).load(function () {

            // Find the HTML element with the id recommendationForm, and when the submit
            // event is triggered on that element, call submitRecommendation.
            $("#contactForm").submit(submitRecommendation);

        });


        /////////////////////////read data///////////////////////////
        database.on('value', snap => console.log(snap.val()));*/
