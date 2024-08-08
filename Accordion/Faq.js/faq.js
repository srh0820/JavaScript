window.addEventListener('load', function(){
    document.querySelectorAll("#faq h3").forEach(function( ele, idx ){
        ele.addEventListener('click', function(){
            this.parentElement.classList.add('open');
            
            // 부모태그까지 포함된 상태
            let siblings = this.parentElement.parentElement.children;

            // 항상 검수하기
            console.log(
                "데이터 : " + siblings , 
                "데이터타입 : " + typeof siblings , 
                "정렬? : " + Array.isArray(siblings) ,
                "objKey : " + Object.keys(siblings)
            )
            
            // forEach 대신에 for of 쓰기
            for (let siblings of siblings) {
                // for of array 아니면서 array형 데이터에서 씀
                if (siblings !== this.parentElement) { // 부모빼고
                    siblings.classList.remove('open');
                }
            }
        })
    })
})