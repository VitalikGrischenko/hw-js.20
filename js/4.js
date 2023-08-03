const users = [
    { name: 'Vitalii', skills: ["JavaScript", "HTML", "CSS"] },
    { name: 'Kolya', skills: ["JavaScript", "Python", "Java"] },
    { name: 'Anton', skills: ["Java", "Ruby", "C++"] },
];

const uniqueSortedSkills = users.reduce((acc, user) => {
    const skillsToAdd = user.skills.filter(skill => !acc.includes(skill));
    return acc;
    return skillsToAdd;
}, );

uniqueSortedSkills.sort();

console.log(uniqueSortedSkills);