// map hoitese ekta array method..ja browser e data display korte help kore
// map method ekta array return kore new array actual array er size change kore na


const people =[

    {
        name: 'Kawsar',
        age: 23,
        position: 'Software Engineer',
    },
    {
        name: 'Eva',
        age: 22,
        position: 'Software Engineer',
    },
    {
        name: 'Sarfaraz',
        age: 23,
        position: 'Software Engineer',
    },
    {
        name: 'Alfi',
        age: 10,
        position: 'Software Engineer',
    },

];
// const getAges=(person)=>person.age;
// const ages= people.map(getAges);
// console.log(ages);




// object create kore class er shob data mapping
const newPeople = people.map((item) => {
    return{
        firstName: item.name.toUpperCase(),
        agePer: item.age,
    };
});
console.log(newPeople);
// 

// html boilerplate e inject korar jonno
const names= people.map((person)=> `<h2> ${person.name} </h2>`
// names name er ekta object banaye people class ta re map method e ekta key dhore nilam person
//  ei key diye proti ta person(index wise) h2 te show kortesi
);
const result = document.querySelector('#result');
result.innerHTML= names.join(" ");
// rsult name er intance create kore query selecter er maddhome
// result er inner html e oi class er name index er value boshaye dilam