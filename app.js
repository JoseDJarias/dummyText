const text = [
    `Jeely Jeely fish sweet dream come here, Kaaulis get em twice
    dreaming about life, Jo kage meets the revenue in a park avenue
    like me, like yis, there no ko fe in jackpot heigth.
    Squezees Squeezes here the bill, got to paid, got to laid,
    around in di cubana, beenie hanas in bananas
    hawaianas,pastranas? clumpig start at the edge of the dwarf.
    Stronger and stronger running in humbles,wait!; kamels case, no way!
    `,
    `Gettng arounnd of the black, jack behind the bars, so yeah we fun,
    we good, great an kasum. Foreach kasum hasum samble to ramble,
    mapples in the kitchen watching em.
    Sweet late dream in bananans dreams, Sweet dream in  late beach,
    Kort bain is claim,, no more no claymore, just clay and more,
    not a joke at the coat, not a single one, kajak, sweet Paradise' 
    `,
    `Next ruby in or  on? the rail `,
    `I se your damm in dm,so i  hit with a visa`,
    `Mable table wrapped, so get waffed,dc 10, whit`
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById('amount');
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = parseInt(amount.value);
    const rnd = Math.random()
    const random = Math.floor(Math.random() * text.length);

    if (isNaN(value) || value <= 0 || value > 9) {
        result.innerHTML = `<p class="result">${text[random]} </p>`
        console.log(random)
    } else {
        let tempText = text.slice(0, value);
        tempText = tempText.map(function (item) {
            return `<p class='result'>${item}</p>`
        })
            .join("");
        result.innerHTML = tempText;
    }

});




