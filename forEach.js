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