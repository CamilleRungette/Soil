
// $('#screen2-1').hide()
// $('#screen3-1').hide()
// $('#screen4-1').hide();
// $('#screen5-1').hide();
// $('#screen6-1').hide();
// $('#screen7-1').hide();
// $('#screen8-1').hide();

if(screen.width < 600){
  document.getElementById('screen2-1').setAttribute('src', "/images/cropscreen2small.png")
  document.getElementById('screen6-1').setAttribute('src', "/images/cropscreen6small.png")
} else {
  document.getElementById('screen2-1').setAttribute('src', "/images/cropscreen2.png")
  document.getElementById('screen6-1').setAttribute('src', "/images/cropscreen6.png")
}


let defilImg = document.getElementsByClassName("screen1");
let defilImg2 = document.getElementsByClassName("screen2");


for (let i = 0; i < defilImg.length; i++) {
  let images = defilImg[i].children;
  
  let z = 0;
  images[z].classList.add("visible");  
  
  const ajustement = (
    valeur //fonction de correction des valaurs selon la taille du tableau carrousselChildren    
    ) => (valeur >= images.length ?  (valeur = 0) : valeur);    
    
    
    const opacityImg = () => {
      // if (images[z].classList[0] === "no"){

      images[z].classList.remove("visible");
      z = ajustement(z + 1);
      images[z].classList.add("visible");
            
    };
    
    setInterval(() => {
      opacityImg();
    }, 4000);
  }
  
  
  
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
  
  