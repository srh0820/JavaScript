let count = "";
for(var i = 0; i < 4; i++){
    count += `<li>`;
    count += `<a href=''>${i}번 대메뉴</a>\n`;
    count += `<ul>`;
    for(var j = 0; j < 5; j++){
        count += `<li>${j}번 소메뉴</li>\n`;
    }
    count += `</ul>`;
    count += `</li>\n`;
}
console.log(count);