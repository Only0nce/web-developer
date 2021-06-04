const userId = document.getElementById('userID');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const age = document.getElementById('age');
const update = document.getElementById('update');
const delect = document.getElementById('delect');
const database = firebase.database();
const rootref = database.ref('user');

/*rootref.child(userId.value).set({
    first_name: firstname.value,
    last_name: lastname.value,
    age: age.value,
  });*/

document.querySelector('add').addEventListener("click", () => {
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