// let screen1Array = [
//   "/images/screen2-1.jpeg",
//   "/images/screen3-1.jpeg",
//   "/images/screen1-1.jpeg",  
// ]
// let screen2Array = [
//   "/images/screen2-2.jpeg",
//   "/images/screen3-2.jpeg",
//   "/images/screen1-2.jpeg",  
// ]
// let screen1 = $("#screen1");
// let screen2 = $("#screen2");

$('#screen2-1').hide();
$('#screen3-1').hide();

$('#screen2-2').hide();
$('#screen3-2').hide();

let i = 1;
setInterval(function() {
  console.log(i);  
  $(`#screen${i}-1`).fadeOut("slow").next().fadeIn("slow");
  $(`#screen${i}-2`).delay(100).fadeOut("slow").next().fadeIn("slow");
  
  i = i + 1;
  if (i === 4) {
    i = 1;
  }
}, 4000);

