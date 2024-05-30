const nav_data = [
    {
        gnb_li_a : "회사소개",
        gnb_li_href : "./company.html"
    },
    {
        gnb_li_a : "제품소개",
        gnb_li_href : "./product.html"
    },
    {
        gnb_li_a : "커뮤니티",
        gnb_li_href : "./board.html"
    }
]
let mygnb = "";
for ( let liea = 0; liea < nav_data.length; liea++ ){
    mygnb += nav_data[liea].gnb_li_href;
}
console.log( mygnb );
// ./company.html./product.html./board.html

let mygnb2 = "";
for ( let v in nav_data[0]){
    mygnb2 += nav_data[0][v];
}
console.log( mygnb2 );
// 회사소개./company.html

let mygnb3 = "";
for ( let v in nav_data[1]){
    mygnb3 += nav_data[1][v];
}
console.log( mygnb3 );
// 제품소개./product.html