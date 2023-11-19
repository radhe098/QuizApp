var username = document.getElementById('UserName');
var password = document.getElementById('pass');
var Submitbtn = document.getElementById('SignUp');
var facts = document.querySelector('.factsdis h2')
// let Uname = /radhe098/;
// let Passw = /Admin@123/;
const newPageUrl ="MakeSelection.html";

Submitbtn.addEventListener("click",function(){
    // if(Uname.test(username.value) && Passw.test(password.value)){
        window.location.href = newPageUrl;
    // }
    // else{
    //     alert("Invalid username");
    // }
});

var quotes=[
    "The only way to do great work is to love what you do. - Steve Jobs",
"Learning never exhausts the mind. - Leonardo da Vinci",
"The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
"Education is the kindling of a flame, not the filling of a vessel. - Socrates",
"Knowledge is power. - Francis Bacon",
"The beautiful thing about learning is that no one can take it away from you. - B.B. King"
]

const randomFact = quotes[Math.floor(Math.random() * quotes.length)];
facts.textContent = randomFact;