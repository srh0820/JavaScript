// 제이쿼리문제 + 자바스크립트
// 아이디 gnb의 첫번째 li에 클래스 on을 줘라  
`addClass("on")`
    
    
    $("#gnb li").eq(0).addClass("on")
    
    
// <h1>
// <a href=""><img src="logo.jpg"></a>
// </h1>
//    로고의 링크값을 네이버로 처리  `attr()`
    
   
    $("h1  a").attr("href","[http://www.naver.com](http://www.naver.com/)")
   
    
// 2번의 태그구조에서 로고를 롤오버했을때 logoover.jpg로 변경처리
// 메서드 `attr()` 이벤트 `hover(function(){})`
    

    $("h1  img").hover(function(){
    	$(this).attr("src","logoover.jpg");
    	}, function(){
    	$(this).attr("src","logo.jpg");
    })