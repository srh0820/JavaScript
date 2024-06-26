// 자바스크립트 경로는 css 랑 다르다. 연결된 html 기준으로 처리해야한다.

// 자바스크립트 표현법
// let count = 3;
// setInterval(function(){
//     count++;
//     count %= 5;
//     document.querySelector("#bannerimg").setAttribute("src",`/banner/${count}.png`)
// }, 1000);

// jQuery 표현법
// $("#banner img").attr("src", "/banner/1.png")

const bannerdata = [
    "/banner2/pokemon.png",
    "/banner/0.png",
    "/banner2/cantata.png"
];

let num = 0;
document.querySelector("#bannerimg").setAttribute("src", bannerdata[num])  //  첫화면 "/banner2/pokemon.png" 

document.querySelector(".bannerwrap").style.background = `url(${bannerdata[num]}) center no-repeat`;

const autoBanner = setInterval(function(){
    num++;
    num %= bannerdata.length;
    document.querySelector(".bannerwrap").style.background =`url(${bannerdata[num]}) center no-repeat`;
    document.querySelector("#bannerimg").setAttribute("src",bannerdata[num]) 
}, 3000)

document.querySelector(".bannerwrap button").addEventListener('click', function(){
    clearInterval(autoBanner);  // autoBanner 안에 있는 setInterval 을 지워라
    this.innerHTML = "PLAY";
})