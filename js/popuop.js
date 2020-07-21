function openWindow() {
    console.log("we are here")
    var i, l, options = [{
       value: 'first',
       text: 'First'
    }, {
       value: 'second',
       text: 'Second'
    }],
    
    newWindow = window.open("", null, "height=200,width=400,status=yes,toolbar=no,menubar=no,location=no,");  

    newWindow.document.write("<select onchange='window.opener.setValue(this.value);'>");
    for(i=0,l=options.length; i<l; i++) {
        newWindow.document.write("<option value='"+options[i].value+"'>");  
        newWindow.document.write(options[i].text);  
        newWindow.document.write("</option>");
    }
    newWindow.document.write("</select>");
}

function setValue(value) {
    document.getElementById('value').value = value;
}

//-----------------------------------------------
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 