// 데이터가 고르지 않을 때
// const store = ["이마트", "사과", "파인애플", "수박", "체리"];
// 데이터 검증 후 idx 1 부터  
// for ( let x = 1; ){}

// 변수 const 선언 데이터를 저장한 변수는 추후 절대 수정하지않는다.
// 그래서 const로 선언
// 유지보수할때는 값을 편집할 뿐 변수를 삭제하거나 하면 절대 안됨
const store = ["사과", "파인애플", "수박", "체리"]; 

// for
// x = 0 -> 대입식 (숫자) 
for (let x = 0; x < store.length; x++){
    console.log(store[x]);
}

// for in
// x -> idx (문자)
for (x in store){
    console.log(store[x]);
}

// forEach
// x -> 값
store.forEach((x , i)=>{
    console.log(x);
})

// `for` 루프
// 반복 횟수를 명확히 알고 있고, 인덱스를 사용하여 배열의 요소에 접근해야 할 때 사용.
// `for-in` 루프
// 객체의 열거 가능한 속성을 순회할 때 사용. 배열에 사용하면 예기치 않은 결과가 발생할 수 있음.
// `forEach` 메서드
// 배열의 각 요소에 대해 함수를 실행할 때 사용. 가독성이 좋고 간결한 코드 작성에 유리함.


const storetest = [
    ["사과", 10000, 7000]
   ,["딸기", 5000, ""] 
   ,["수박", 15000, ""] 
   ,["체리", 13000, 9000] 
]

// 체리는 원가가 13000원이고 할인해서 9000원에 판매중입니다.

// 1. 하나의 패턴 확인
console.log(`${storetest[3][0]}는 원가가 ${storetest[3][1]}원이고 할인해서 ${storetest[3][2]}원에 판매중입니다.`)

// 2. x 가 받아야 할 변수 확인
for (x in storetest){
    console.log(`${storetest[x][0]}는 원가가 ${storetest[x][1]}원이고 할인해서 ${storetest[x][2]}원에 판매중입니다.`)
}

// 3. forEach value 타입확인 정렬임
storetest.forEach((x , i)=>{
    console.log(`${x[0]}는 원가가 ${x[1]}원이고 할인해서 ${x[2]}원에 판매중입니다.`)
})


// string [], {}  ->  JSON.parse
// string  ->  array 전환 split 메서드
// array  ->  string 전환 join 메서드

// split
let characters = "Hello";
let charArray2 = characters.split("");
console.log(charArray2);
// 출력: ["H", "e", "l", "l", "o"]

// join
let charArray = ["H", "e", "l", "l", "o"];
let word = charArray.join("");
console.log(word);
// 출력: "Hello"

// 서울 종로구 까지만 출력되도록 하기 (split 사용)
const stringdataapi = "서울|종로구|명륜3가|감나무집";
const api = stringdataapi.split("|");
console.log(api[0], api[1])