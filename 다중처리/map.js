const mydb = [
    {
        atext : "네이버",
        href : "http://www.naver.com"
    },
    {
        atext : "구글",
        href : "http://www.google.co.kr"
    }
]

mydb.map(function(v, i){
    return(`<li><a href='${v.href}'>${v.atext}</a></li>`)
})

const mylist = mydb.map(
    (v, i) => `<li><a href='${v.href}'>${v.atext}</a></li>`
)
console.log(mylist, "정렬데이터 맞는지 t / f", Array.isArray(mylist));
// map 을 통해서 return 받을 경우 array 로 나가게 된다. 