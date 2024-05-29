// let study = "프론트엔드";
// const myword = "자바스크립트 " + study + " 공부";
// const myword = `자바스크립트 ${study} 공부`;
// console.log(myword);



// 저는 6개월간의 프론트엔드 공부를 한 aaa입니다.
// let _month = 6;
// let _study = "프론트엔드";
// const _name ='aaa';
// const myword = `저는 ${_month}개월간의 ${_study} 공부를 한 ${_name}입니다.`
// console.log(myword);

let _month = [2, 3, 7];
let _study = ['피그마', '뷰', '리액트'];
const _name = ['aaa', 'bbb', 'ccc'];
const myword0 = `저는 ${_month[0]}개월간의 ${_study[0]} 공부를 한 ${_name[0]}입니다.`
const myword1 = `저는 ${_month[1]}개월간의 ${_study[1]} 공부를 한 ${_name[1]}입니다.`
const myword2 = `저는 ${_month[2]}개월간의 ${_study[2]} 공부를 한 ${_name[2]}입니다.`
// console.log(myword0, myword1, myword2);



const myarr = [ ["네이버", "http://www.naver.com"], 
                ["다음", "http://www.daum.com"], 
                ["구글", "http://www.google.com"] ]
                
console.log( "첫번째 배열", myarr[0], typeof myarr[0], 
             "첫번째배열의 첫번째값", myarr[0][0], typeof myarr[0][0] )

// console.log( `<a herf = "${myarr[0][1]}"> ${myarr[0][0]} </a>` ) 



// 대입식
const myarrobj = {
    _month : [2, 3, 7],
    _study : ['피그마', '뷰', '리액트'],
    _name : ['홍길동', '나훈아', '조명선']
}
console.log( myarrobj. _month[0], _study[0], _name[0] )

const gnb = {
    d1 : {
        text : "회사소개",
        href : "./company.html"
    },
    d2 : [
        {
            text : "ceo인사말",
            href : "./ceo.html"
        },
        {
            text : "조직도",
            href : "./organ.html"
        }
    ]
}

console.log( `<a herf="${gnb.d1.href}">${gnb.d1.text}</a>` )
console.log( `<a herf="${gnb.d2[0].href}">${gnb.d2[0].text}</a>`)
console.log( `<a herf="${gnb.d2[1].href}">${gnb.d2[1].text}</a>`)