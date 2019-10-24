// Show Password Icon
function showPassword() {
  var xB = document.getElementById("password");
  if (xB.type === "password") {
    xB.type = "text";
  } else {
    xB.type = "password";
  }
}

/* Change Placeholder jQuery */
/*
$('input[type=email]').focus(function() {
    $(this).attr('placeholder', 'myemail@example.com')
}).blur(function() {
    $(this).attr('placeholder', '\u200C')
})
$('input[type=password]').focus(function() {
    $(this).attr('placeholder', 'Введите ваш пароль')
}).blur(function() {
    $(this).attr('placeholder', '\u200C')
})
*/


// Form Tabs

//if (window.matchMedia("(max-width: 560px)").matches) {
  var currentTab = 0; // Current tab is set to be the first tab (0)
  showTab(currentTab); // Display the current tab

  function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    /* if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }*/
    /*
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }*/
  }

  function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease t he current tab by 1:
    currentTab = currentTab + n;
    // Otherwise, display the correct tab:
    showTab(currentTab);
  }

  function validateForm() {
    // This function deals with validation of the form fields
    var x, y, xt, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    xt = document.getElementById("amount-field");
    // Value Checker
    if (xt.value < 10) {
      xt.className += " invalid";
      valid = false;
    }
    return valid;
  }
//}
