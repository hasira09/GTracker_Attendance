const firebaseConfig = {
    apiKey: "AIzaSyCAKv0If-ouj90ZW4XCf3RPpOfGCXF-6Tg",
    authDomain: "gtracker-attendanceform.firebaseapp.com",
    databaseURL: "https://gtracker-attendanceform-default-rtdb.firebaseio.com",
    projectId: "gtracker-attendanceform",
    storageBucket: "gtracker-attendanceform.appspot.com",
    messagingSenderId: "303687590666",
    appId: "1:303687590666:web:cdc81d54d068da037ed0f3"
  };

  // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var index = getElementVal("index");

  saveMessages(name, index);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, index) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    index: index,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};