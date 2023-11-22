const birthYr = prompt('Enter your birth year:');
const city = prompt('Enter your city:');
const sport = prompt('Enter your favorite sport:');

const currentYr = new Date().getFullYear();
let ageReply;
if (birthYr) {
    if (birthYr > currentYr) {
        ageReply = `Your birth year must be in the past, silly :D`;
    } else {
        ageReply = `You're ${+currentYr - +birthYr} years old.`;
    }

} else {
    ageReply = `Oh, I know, sharing your age could be difficult ;)`;
}

const capitals = new Map([
    ['Great Britain', 'London'],
    ['Ukraine', 'Kyiv'],
    ['USA', 'DC']
]);
let cityReply = ``;
if (city) {
    cityReply = `You live in ${city}.`;
    for (let pair of capitals.entries()) {
        if (city.toLowerCase() === pair[1].toLowerCase()) {
            cityReply = `You live in the capital of ${pair[0]}.`;
            break;
        }
    }
} else {
    cityReply = `It's a pity you don't wanna share your city...`;
}

const champions = new Map([
    ['Michael Schumacher', 'Formula 1'],
    ['Lionel Messi', 'football'],
    ['Michael Jordan', 'basketball']
]);
let sportReply = ``;
if (sport) {
    for (let pair of champions) {
        if (sport.toLowerCase() === pair[1].toLowerCase()) {
            sportReply = `Wow! Wanna be like ${pair[0]}?`;
            break;
        }
    }
} else {
    sportReply = `Don't like any sport? Me neither :)`;
}

let sumReply = `${ageReply}\n${cityReply}`;
if (sportReply) {
    sumReply += `\n${sportReply}`;
}
alert(sumReply);