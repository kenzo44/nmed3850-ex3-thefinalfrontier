var app = new Framework7 ({
    root: "#app",  //this is the app element
    routes: [
        {
            path: '/page2/',
            url: 'pages/page2.html'
        }
    ]
})

var mainView = app.views.create('.view-main');

// Get the modal
var modal = document.getElementById('myModal');

var modalt = document.getElementById('myModalt');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

var btnt = document.getElementById("myBtnt");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var spant = document.getElementsByClassName("closet")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

btnt.onclick = function() {
  modalt.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

spant.onclick = function() {
  modalt.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modalt) {
    modalt.style.display = "none";
  }
}