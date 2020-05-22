
var s1 = document.getElementById('_screen1-1_');
var s2 = document.getElementById('_screen2-1_');

let screen1Array = [
  "/images/screen2-1.jpeg",
  "/images/screen3-1.jpeg",
  "/images/screen4-1.jpeg",
  "/images/screen5-1.jpeg",
  "/images/screen1-1.jpeg",  
]
 let i=0;

  s1.addEventListener('click', function(){
    // this.style.opacity = 0;
    s1.setAttribute('src', screen1Array[i]);
    this.style.transition = "2s";
    
    setTimeout(function(){
      s1.style.opacity = "1";
      s2.style.backgroundImage = `url(${screen1Array[i+1]})`;
    }, 1000);
    
    i+=1;
    if (i === screen1Array.length){ i=0}
  })

// $('#screen2-1').hide()
// $('#screen3-1').hide()
// $('#screen4-1').hide();
// $('#screen5-1').hide();
// $('#screen6-1').hide();
// $('#screen7-1').hide();
// $('#screen8-1').hide();

// let i = 1;
// setInterval(function() {
  
// console.log("cv")
//   if($(`#screen${i}-2`).attr('class')[0] != "n"){

//       $(`#screen${i}-1`).fadeOut("slow")
//       setTimeout(function(){
//         $('.screen1').css("width", "100%")
//         $('.screen2').css("width", "0%")
//       }, 550)
//       $(`#screen${i}-1`).next().fadeIn(1500);
//       $(`#screen${i}-2`).fadeOut().next().fadeIn();

//   } else {

//     $(`#screen${i}-1`).fadeOut("slow");
//     setTimeout(function(){
//       $('.screen1').css("width", "50%")
//       $('.screen2').css("width", "50%")
//     }, 550)
//     $(`#screen${i}-1`).next().fadeIn(1500)
//     $(`#screen${i}-2`).fadeOut("slow").next().fadeIn(1500);
  
//   }  
  
  
//   i = i + 1;
//   if (i === 9) {
//     i = 1;
//   }
// }, 4000);

// var f1 = $('#_screen1-1_');
// var f2 = $('#_screen2-1_');
// var f3 = $('#_screen3-1_');
// var f4 = $('#_screen4-1_');
// var f5 = $('#_screen5-1_');
// var f6 = $('#_screen6-1_');
// var f7 = $('#_screen7-1_');
// var f8 = $('#_screen8-1_');

// f1.fadeOut(1500);
// f2.delay(4000).fadeOut(1500);
// f3.delay(8000).fadeOut(1500);
// f4.delay(12000).fadeOut(1500);
// f5.delay(16000).fadeOut(1500);

// var fadeArray = [f1, f2, f3, f4, f5, f6, f7, f8];
// console.log(screen1.children().last());


// let i=0;
// screen1.click(function(){
//   let item = fadeArray[0]

//   fadeArray[0].fadeOut("slow");
//   fadeArray.shift();
//   fadeArray.push(item);
//   item.insertAfter(screen1.children().last())

//   screen1.children().last().css("opacity", 1)
  
// })



// let i=0
// setInterval(() => {
  
//     fadeArray[i].fadeOut("slow");
  
//     for (let j=0; j< fadeArray.length; j++){
//       let result = parseInt(fadeArray[j].css('z-index'));    
      
//       if (result+1 < 8){
//         fadeArray[j].delay(2000).css('z-index', result+1)
//       } else {
//         fadeArray[j].delay(2000).css('z-index', 0);
//       }
//     } 
//     // fadeArray[i].delay(1700).css('opacity', 1)
//   if (i === fadeArray.length){
//     i=0;
//   }
//   i = i+1
// }, 4000);
