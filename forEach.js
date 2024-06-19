const mydata = ["영어", "중국어", "일본어"];

mydata.forEach(function(value, i){
    console.log("forEach", value); // forEach 첫번째 매개인자 - value 까지 접근
    console.log("array", mydata[i]); // array문 그대로 가져다 씀 - index 접근
})

for(i in mydata){
    console.log("for in", mydata[i]); // for in문
}


const testdata = [
    [ "네이버", "naver" ],
    [ "다음", "daum" ],
    [ "구글", "google" ]
]
// 1번문제 - 콘솔창에 daum 이 출력되도록 한다.
console.log(testdata[1][1]);

// 2번문제 - 콘솔창에 네이버, 다음, 구글이 출력되도록 한다. (forEach 사용하기)
testdata.forEach(function(value, i){
    console.log(value[0]);
})
testdata.forEach((v, i)=>{
    console.log(v[0]);
})


const testdataobj = [
    {
        nm : "네이버"
    },
    {
        nm : "다음"
    },
    {
        nm : "구글"
    }
]
testdataobj.forEach(function(value, i){
    console.log(value.nm);
})
testdataobj.forEach((v, i)=>{
    console.log(v.nm)
    console.log(v["nm"])
})


const testdataobj2 = [
    {
        nm : "네이버",
        href : "http://www.naver.com",
        cls : "naver"
    },
    {
        nm : "다음",
        href : "http://www.daum.co.kr",
        cls : "daum"
    },
    {
        nm : "구글",
        href : "http://www.google.com",
        cls : "google"
    }
]
// 백틱을 사용해서
// <li><a href="http://www.naver.com">네이버</a></li> * 3줄이 출력되도록 한다.
testdataobj2.forEach((v, i)=>{
    console.log(`<li><a href="${v.href}">${v.nm}</a></li>`);
    console.log(`<li><a href="${v["href"]}">${v["nm"]}</a></li>`);
})

// cls 값으로 li 클래스 추가 
testdataobj2.forEach((v, i)=>{
    console.log(`<li cls="${v.cls}"><a href="${v.href}">${v.nm}</a></li>`);
    console.log(`<li cls="${v["cls"]}" ><a href="${v["href"]}">${v["nm"]}</a></li>`);
})


function nomalfun(a, b){
    // 함수 선언식 : 위치 상관 없이 먼저 읽힘. 중요한 함수 선언할 때. 무거움 
}
const nomalfun = (a, b)=>{
    // 함수 표현식 : 위치 엄청 중요함. 1회용 함수
}

// 주요 차이점 요약
// 1. 호이스팅
//     - 함수 선언식  ->  전체 스코프의 맨 위로 끌어올려져서 어디서든 호출 가능.
//     - 함수 표현식  ->  변수와 동일하게 정의된 후에만 호출 가능.
// 2. `this` 바인딩
//     - 함수 선언식  ->  함수 호출 시의 컨텍스트에 따라 달라짐.
//     - 화살표 함수  ->  선언될 때의 상위 스코프의 `this`를 사용 (lexical `this`).
// 3. 문법과 사용 용도
//     - 함수 선언식  ->  전통적인 방식으로 함수가 명확하게 정의됨.
//     - 화살표 함수  ->  더 간결한 문법, 특히 콜백 함수나 간단한 함수 정의에 유용.