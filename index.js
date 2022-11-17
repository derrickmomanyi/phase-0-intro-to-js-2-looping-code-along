const gifts = ["teddy bear", "drone", "doll"]


function wrapGifts() {
    for(i=0; i<gifts.length;i++) {
        console.log(`WRAPPED ${gifts[i]} and added a bow!`)

}
return gifts;
}

wrapGifts(gifts);

const cards = ["Ada", "Brendan", "Ali"]
console.log(cards.length)
function writeCards(){
        for(i=0; i<cards.length;i++) {
            console.log(`Thank you, ${cards[i]}, for the wonderful birthday gift!`)
        }
return cards;

}

writeCards(cards);


function countDown() {
    let count = 10;
    while (count >= 0) {
        console.log(count)
        count --;
        
}}

console.log(countDown(10));