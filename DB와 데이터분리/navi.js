import hd_yys from "./navi.json";

// const hd_yys ={
//     logo : {
//         Text : "uglyus",
//         href : "/uglyus/",
//         img : "/uglyus/img/img_yys/svg/ugly_us_logo.svg",
//         cls : ["me-3"]
//     },
//     gnb : [
//         {
//         Text : "우리의미션",
//         href : "misson.html",
//         cls : ["nav-mission me-5 gnb_li rel","d-block gnb_a","gnb_ul abs","gnb_ul_li"],
//         gnb_ul_li : [
//             {
//                 Text : "미션",
//                 href : "mission.html",
//             },
//             {
//                 Text : "소싱철학",
//                 href : "social.html"
//             }
//         ]
//     },
//     {
//         Text : "정기배송",
//         href : "misson.html",
//         cls : ["nav-mission me-5 gnb_li rel","d-block gnb_a","gnb_ul abs","gnb_ul_li"],
//         gnb_ul_li : [
//             {
//                 Text : "후기",
//                 href : "mission.html"
//             },
//             {
//                 Text : "혜택",
//                 href : "social.html"
//             },
//             {
//                 Text : "이용안내",
//                 href : "social.html"
//             }
//         ]
//     },
//     {
//         Text : "싱싱마켓",
//         href : "misson.html",
//         cls : ["nav-mission me-5 gnb_li rel","d-block gnb_a","gnb_ul abs","gnb_ul_li"],
//         gnb_ul_li : [
//             // {
//             //     Text : "인기상품",
//             //     href : "mission.html"
//             // },
//             // {
//             //     Text : "대기중인상품",
//             //     href : "social.html"
//             // }
//         ]
//     },
//     {
//         Text : "커뮤니티",
//         href : "misson.html",
//         cls : ["nav-mission me-5 gnb_li rel","d-block gnb_a","gnb_ul abs","gnb_ul_li"],
//         gnb_ul_li : [
//             {
//                 Text : "오늘의레시피",
//                 href : "mission.html"
//             },
//             {
//                 Text : "채소이야기",
//                 href : "social.html"
//             },
//             {
//                 Text : "어글리어스밥풀루언서",
//                 href : "social.html"
//             }
//         ]
//     }
//     ],
//     util : [
//         {
//             Text : "로그인",
//             href : "login.html",
//             cls : ["d-flex px-0 my-0","me-3 font_login","nav-link font_login"]
//         },
//         {
//             Text : "회원가입",
//             href : "consumer.html",
//             cls : ["d-flex px-0 my-0","font_login","nav-link me-0 font_login"]
//         }
//     ]
// }

window.onload = function(){
    // document.body.innerHTML = hd_yys["gnb"][0].Text;
    // document.querySelector("#gnb li").innerHTML = `<a href="${hd_yys["gnb"][0].href}">${hd_yys["gnb"][0].Text}</a>`;

    let navitag = "";

    for(x in hd_yys.gnb){
        navitag += `<li class='${hd_yys.gnb[x].cls[0]}'>
            <a href='${hd_yys.gnb[x].href}' class='${hd_yys.gnb[x].cls[1]}'>
                ${hd_yys.gnb[x].Text}
            </a>`;
        if(hd_yys.gnb[x].gnb_ul_li.length > 0) navitag += `<ul>`;   
        for(j in hd_yys.gnb[x].gnb_ul_li){
        navitag +=`<li>
            <a href='${hd_yys.gnb[x].gnb_ul_li[j].href}'>
                ${hd_yys.gnb[x].gnb_ul_li[j].Text}
            </a>
            </li>`  
        }
        if(hd_yys.gnb[x].gnb_ul_li.length > 0) navitag += `</ul>`;  
        navitag += `</li>`;     
    }  
    document.querySelector("#gnb").innerHTML = navitag;
}

// window.getElementByID("gnb").onclick = function(){}
// window.addEventListener("load", function(){})