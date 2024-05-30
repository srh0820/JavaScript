let dayoutput = "";
for(let joonm =0; joonm < 4; joonm++){
    for(let daynm = 1; daynm < 8; daynm++){    
        dayoutput +=`${daynm}\t`;
    }
    dayoutput +=`\n`;
}
console.log(dayoutput)


let gugudan = "";
for ( let i = 1; i <= 9; i++ ) {        
    for ( let j = 1; j <= 9; j++ ) {      
        gugudan += `${j} x ${i} = ${j * i} \ `; 
    }
    gugudan += `\n`;
}
console.log(gugudan)