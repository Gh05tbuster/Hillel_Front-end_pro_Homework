const blackListWords = [
    'підманула', 'підвела',
    'понеділок', 'вівторок', 'середу', 'четвер', 'п’ятницю', 'суботу', 'неділю',
    'bitch'
];

const comment = `
Ти казала в понеділок – підем разом по барвінок.
Я прийшов, тебе нема, підманула, підвела.
Ти ж мене підманула, ти ж мене підвела.
Ти ж мене, молодого, з ума розуму звела.

Я казала у вівторок – поцілую разів сорок.
Ти прийшов, мене нема, підманула, підвела.
Я ж тебе підманула, я ж тебе підвела.
Я ж тебе, молодого, з ума розуму звела.

Ти казала у середу – підем разом по череду.
Я прийшов, тебе нема, підманула, підвела.
Ти ж мене підманула, ти ж мене підвела.
Ти ж мене, молодого, з ума розуму звела.

Я казала у четвер – підем разом на концерт.
Ти прийшов, мене нема, підманула, підвела.
Ти ж мене підманула, ти ж мене підвела.
Ти ж мене, молодого, з ума розуму звела.

Ти казала у п’ятницю – підем разом по пшеницю.
Я прийшов, тебе нема, підманула, підвела.
Я ж тебе підманула, ти ж мене підвела.
Ти ж його, молодого, з ума розуму звела.

Я казала у суботу – підем разом на роботу.
Я прийшов, тебе нема, підманула, підвела.
Я ж тебе підманула, ти ж мене підвела.
Ти ж його, молодого, з ума розуму звела.

Я казала у неділю – підем разом на весілля.
Я прийшов, тебе нема, підманула, підвела.
Ти ж мене підманула, ти ж мене підвела.
Ти ж мене, молодого, з ума розуму звела bitch.
`;

function censor(string, badWords) {
    badWords.forEach(word => {
        const asterisks = '*'.repeat(word.length - 2);
        string = string.replaceAll(word, `${word[0]}${asterisks}${word[word.length - 1]}`);
    });
    return string;
}

const censoredComment = censor(comment, blackListWords);
console.log(censoredComment);

const swearings = ['bitch', 'b1tch', 'asshole', 'a$$hole'];
const swearComment = 'See you in hell, a$$hole!';

function generateBadWordsRegex(badWords) {
    const escapedBadWords = badWords.map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regexString = `\\b(?:${escapedBadWords.join('|')})\\b`;
    return new RegExp(regexString, 'gi');
}

const regex = generateBadWordsRegex(blackListWords);
const censoredRegexComment = comment.replaceAll(regex, '*****');
console.log(censoredRegexComment);
