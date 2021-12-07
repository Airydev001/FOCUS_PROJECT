//function change() {
//  var x =document.getElementsByClassName('name');
//  x.value=x.value.touppercase();
//}//
function validate() {
  var email=document.getElementById('set1').value;
  var password=document.getElementById('set2').value;
  if ( email == null || email==""){
    alert("Email can't be blank");
    return false;
  } //else if (password=null) {
  //  alert("password can't be blank");
  //  return false;
   else if(password.length < 7) {
    alert("Password must not be less than 7");
    return false;

  }

}
$(function() {

  $('.all').hide();

 $('#box1').click(function() {
 $('.all').slideToggle();
});


});
