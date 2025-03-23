// 1. Create an array of states in India and remove names starting with vowels
const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

const filteredStates = states.filter(state => !/^[AEIOU]/i.test(state));
console.log(filteredStates);

// 2. Reverse the words in a string
let str = 'I love my India';
console.log(str.split(' ').reverse().join(' '));

// 3. Modify string using splice
let string = ['I', 'N', 'D', 'I', 'A'];
string.splice(3, 0, 'O', 'N', 'E', 'S');
console.log(string.join(''));

// 4. Count consonants and vowels
function countVowelsAndConsonants(text) {
    let vowels = text.match(/[aeiouAEIOU]/g)?.length || 0;
    let consonants = text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length || 0;
    return { vowels, consonants };
}
console.log(countVowelsAndConsonants("This is a sample text with more than twenty characters."));

// 5. Replace wrong word with correct word
function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}
console.log(correctfn("I love JvaScript", "JvaScript", "JavaScript"));

// 6. Filter numbers greater than 5
const inputArr = [1,2,3,9,10,7,5,4,3];
const resultArr = inputArr.filter(num => num > 5);
console.log(resultArr);

// 7. Compute average score for each student
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] }
];

const studentAverages = students.map(student => ({
    name: student.name,
    average: student.scores.reduce((a, b) => a + b, 0) / student.scores.length
}));
console.log(studentAverages);

// 8. Find repeated sum of digits until single digit
function sumDigits(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    }
    return num;
}
console.log(sumDigits(456));

// 9. Count words in a paragraph
function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}
console.log(countWords("This is an example paragraph with multiple words."));

// 10. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello"));

// 11. Compute average marks for each student
const studentsData = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

const studentAveragesData = Object.fromEntries(
    Object.entries(studentsData).map(([key, subjects]) => {
        const scores = Object.values(subjects);
        return [key, { average: scores.reduce((a, b) => a + b, 0) / scores.length }];
    })
);
console.log(studentAveragesData);
