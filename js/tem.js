var startEffect =function() {
  if ($("#area1 #lottieBox").length == 0) {
    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js', function() {

      $("#area1").prepend('<div id="lottieBox" class="lottie_box"></div>');

      setTimeout(()=>{
        flowerstart();
      }, 1000);

      const width = window.innerWidth,
        height = window.innerHeight+100,
        flowerCont = document.getElementById("lottieBox"),
        flowerSizes = ["1","2","3"],
        flowerTypes = ["flower"],
        flowerPiece = 13;

      function flowerstart(){
        for(let i=0; i<flowerPiece; i++){
          let flowerPieceSpan = document.createElement("span");
          let flowerSizeIndex = Math.ceil(Math.random()*flowerSizes.length)-1;
          let flowerSize = flowerSizes[flowerSizeIndex];
          let flowerTypeIndex = Math.ceil(Math.random()*flowerTypes.length)-1;
          let flowerType = flowerTypes[flowerTypeIndex];

          gasp.
        }
      }



    });
  }
}