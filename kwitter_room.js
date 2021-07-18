
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB9X1tLrW9q7t-5px5TyX66QugZOEuFDuI",
      authDomain: "kwitter-78b24.firebaseapp.com",
      databaseURL: "https://kwitter-78b24-default-rtdb.firebaseio.com",
      projectId: "kwitter-78b24",
      storageBucket: "kwitter-78b24.appspot.com",
      messagingSenderId: "927370511143",
      appId: "1:927370511143:web:d86880d44c67cfbc231f02"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


user_name  =  localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";

}