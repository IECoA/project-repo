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
