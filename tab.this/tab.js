window.onload = function(){
    const tabbtn = document.querySelectorAll("#tab li");
    tabbtn.forEach(function(ele, idx){
        ele.addEventListener('click', function(){
            // this.classList = 'on';  초기화
            // this.classList += ' on'; 

            const siblings = this.parentElement.children;
            // 나의 부모의 자식들(object)을 siblings 라고 저장
            for (let sibling of siblings) {
                sibling.classList.remove('on');
                // siblings 에 있는 on을 제거
            }
            this.classList.add('on');
            // 나한테 다시 on 을 줌
        })
    })
}