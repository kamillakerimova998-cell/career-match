const jobs = [
 {title:'Frontend Developer Intern', company:'IT Park Uzbekistan', location:'Tashkent', match:85},
 {title:'UI/UX Designer', company:'EPAM Uzbekistan', location:'Tashkent', match:78},
 {title:'Business Analyst', company:'Uzum', location:'Tashkent', match:72}
];

function saveUser(user){
 localStorage.setItem('careerUser', JSON.stringify(user));
}

function getUser(){
 return JSON.parse(localStorage.getItem('careerUser'));
}

function saveMessages(messages){
 localStorage.setItem('messages', JSON.stringify(messages));
}

function getMessages(){
 return JSON.parse(localStorage.getItem('messages')) || [];
}
```javascript
const jobs = [
 {title:'Frontend Developer Intern', company:'IT Park Uzbekistan', location:'Tashkent'},
 {title:'UI/UX Designer', company:'EPAM Uzbekistan', location:'Tashkent'},
 {title:'Business Analyst', company:'Uzum', location:'Tashkent'}
];