// 데이터가 고르지 않을 때
// const store = ["이마트", "사과", "파인애플", "수박", "체리"];
// 데이터 검증 후 idx 1 부터  
// for ( let x = 1; ){}

// 변수 const 선언
// 변수 존재여부, 값 편집
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