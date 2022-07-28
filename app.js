

const menu =[

    {
        name: 'pancake',
        category: 'breakfast',
        
    },
    {
        name: 'fried rice',
        category: 'lunch',
        
    },
    {
        name: 'jhal muri',
        category: 'snackes',
        
    },
    {
        name: 'biriyani',
        category: 'dinner',
        
    },
    {
        name: 'vaat',
        category: 'dinner',
        
    },

];


const categories =['All', ...new Set(menu.map((item) => item.category))];

console.log(categories);


const result = document.querySelector('#result');
result.innerHTML= categories.map((category)=> {
return `<button>${category}</button>`;
}).join(" ");


