console.log("한번만 실행");

// for( 초기값선언; 조건; 조건을 거짓으로 만들어줄 연산식 )
// i 가 0일 때부터; 5보다 작을 때까지; 하나씩 증가하면서;
// 초기값을 읽고 조건을 읽고 참이라면 실행하고 연산식실행
// 아직도 참이라면 실행하고 연산식실행 ... 그러다가 조건이 거짓이 되는 순간 for문 종료

for( var i = 0; i < 5; i++ ){
    console.log("다섯번 실행");
}


// 연산식

// let count = 10;
// count++;  10 후치연산 (count += 1)
// count;    11 (앞의 후치연산으로 인해 11이 됨 -> 연산식을 예약해두는 개념)
// ++count;  12 전치연산

let count = 10;
    count += 100;    // 110
    count += 1;      // 111
    ++count;         // 112
    count++;         // 112 (이 순간에 1은 추가로 못가지고 다음에 1을 가져갈 수 있음)

    console.log(count)  // 113 (앞의 후치연산으로 인해 112가 됨)

let multy = 10;
    multy = multy * 3;      // 30 (multy *= 3;)
    multy = 10;
    multy = multy / 3;      // 3.3333 (multy /= 3;)


// 문자연산식

let mystudy = "리액트";
    mystudy = "리액트" + "뷰";  // 리액트뷰 (mystudy += "뷰";)

let startjs = 10;
    startjs += 10;      // 20
    startjs += "원";    // 20원 ("원"을 받아들이면서 문자로 변함)
    startjs += 100;     // 20원100
    startjs += 100;     // 20원100100