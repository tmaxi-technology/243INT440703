$(document).ready(function () {
  $("#goToSignIn").click(function () {
    $("#signUpForm").hide();
    $("#signInForm").show();
  });

  $("#goToSignUp").click(function () {
    $("#signInForm").hide();
    $("#signUpForm").show();
  });
});
