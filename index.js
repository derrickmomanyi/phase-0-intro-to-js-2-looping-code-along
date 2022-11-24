
const names = (["Ada", "Brendan", "Ali"], "birthday");
let thankYouArray = [];

function writeCards(names, event){
        for (let i=0; i<names.length; i++) {
            thankYouArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
         
        }
        return thankYouArray;
}



function countDown() {
    let count = 10;
    while (count >= 0) {
        console.log(count)
        count --;
        
}}

