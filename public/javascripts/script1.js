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
$('#screen4-1').hide();
$('#screen5-1').hide();
$('#screen6-1').hide();
$('#screen7-1').hide();
$('#screen8-1').hide();

let i = 1;
setInterval(function() {
  console.log($(`#screen8-2`).attr('class')[0]);
  

  if($(`#screen${i}-2`).attr('class')[0] != "n"){

      $(`#screen${i}-1`).fadeOut("slow")
      setTimeout(function(){
        $('.screen1').css("width", "100%")
        $('.screen2').css("width", "0%")
      }, 500)
      $(`#screen${i}-1`).next().fadeIn(1500);
      $(`#screen${i}-2`).fadeOut("slow").next().fadeIn(1500);

  }else {

    $(`#screen${i}-1`).fadeOut("slow");
    setTimeout(function(){
      $('.screen1').css("width", "50%")
      $('.screen2').css("width", "50%")
    }, 500)
    $(`#screen${i}-1`).next().fadeIn(1500)
    $(`#screen${i}-2`).fadeOut("slow").next().fadeIn(1500);
  
  }  
  
  
  i = i + 1;
  if (i === 9) {
    i = 1;
  }
}, 4000);

