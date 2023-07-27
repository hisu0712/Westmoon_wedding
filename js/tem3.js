var startEffect = function() {
	if ($("#area1 #lottieBox").length == 0) {
		$.getScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js', function () {

			$("#area1").prepend('<div id="lottieBox" class="lottie_box"></div>');

			setTimeout(() => {
				flowerstart();
			}, 1000);

			const width = window.innerWidth,
				height = window.innerHeight+100,
				flowerCont = document.getElementById("lottieBox"),
				flowerSizes = ["1", "2", "3"],
				// flowerSizes = ["Large"]
				flowerTypes = ["flower"],
				// flowerTypes = ["round", "flower", "sharp"],
				flowerPiece = 13;

			function flowerstart(){
				for(let i=0; i<flowerPiece; i++){
					let flowerPieceSpan = document.createElement("span");
					let flowerSizeIndex = Math.ceil(Math.random() * flowerSizes.length) -1;
					let flowerSize = flowerSizes[flowerSizeIndex];
					let flowerTypeIndex = Math.ceil(Math.random() * flowerTypes.length) -1;
					let flowerType = flowerTypes[flowerTypeIndex];
			
					gsap.set(flowerPieceSpan, {attr: {class: flowerType + flowerSize}, x: range(-50, width), y: range(-100, -200) })
					
					flowerCont.appendChild(flowerPieceSpan);
					flowering(flowerPieceSpan);
				}
			}
			
			// 눈의 범위 설정하기 
			function range(min, max) {
				return min + Math.random() * (max - min)
			};
			
			// 눈 애니메이션 설정하기
			function flowering(elem){
				gsap.to(elem, {duration: range(15, 20), y: height, ease: "none", repeat:-1, delay: -1000});
				gsap.to(elem, {duration: range(4, 8), x: '+=60', repeat: -1, yoyo: true, ease: Sine.easeInOut});
				gsap.to(elem, {duration: range(2, 8), rotation: range(0, 360), repeat: -1, yoyo: true, ease:Sine.easeInOut, delay: -1000});
			}
		});
	}

	
}



$(document).ready(function () {
	startEffect();
});