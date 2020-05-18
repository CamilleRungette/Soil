let screen1Array = [
  "/images/screen2-1.jpeg",
  "/images/screen3-1.jpeg",
  "/images/screen1-1.jpeg",  
]

let screen2Array = [
  "/images/screen2-2.jpeg",
  "/images/screen3-2.jpeg",
  "/images/screen1-2.jpeg",  
]

let screen1 = $("#screen1");
let screen2 = $("#screen2");

let i = 0;

setInterval(function() {
      screen1.attr('src', screen1Array[i])
      screen2.attr('src', screen2Array[i])
      i = i + 1;
      if (i == screen1Array.length) {
        i =  0;
      }
}, 5000);
