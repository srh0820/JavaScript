let count = 0;

// 0부터 출력하기
setInterval(function(){
    console.log(count);
    count++;
}, 500)

// 0부터 9까지 출력하기
setInterval(function(){
    console.log(count);
    count++;
    count %= 10;    // count = count % 10; (10으로 나눈 나머지를 다시 대입하겠다 = return)
}, 500)

// navidata.length 만큼 돌아가며 출력하기
const navidata = ["네이버", "다음", "구글", "아마존", "깃"];

setInterval(function(){
    console.log(navidata[count]);
    count++;
    count %= navidata.length;
}, 500)