// 자바스크립트 경로는 css 랑 다르다. 연결된 html 기준으로 처리해야한다.

// 자바스크립트 표현법
let count = 3;
setInterval(function(){
    count++;
    count %= 5;
    document.querySelector("#bannerimg").setAttribute("src",`/banner/${count}.png`)
}, 1000);

// jQuery 표현법
// $("#banner img").attr("src", "/banner/1.png")