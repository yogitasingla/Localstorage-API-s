// Name and Password from the register-form

var name = document.getElementById('username').value;
	var pw = document.getElementById('p').value;

// entered data from the login-form

    var userName = document.getElementById('username').value;
    var userPw = document.getElementById('password').value;

// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();
let json = JSON.stringify({
  name: name,
  password: pw
});
xhr.open("POST", '/register')
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhr.send(json);
store(){


// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    alert(`Done, got ${xhr.response.length} bytes`); // responseText is the server
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // no Content-Length
  }

};

xhr.onerror = function() {
  alert("Request failed");
};

}



let xhr = new XMLHttpRequest();
let json = JSON.stringify({
  name: userName,
  password:  userPw
});
xhr.open("POST", '/login')
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhr.send(json);



// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    alert(`Done, got ${xhr.response.length} bytes`); // responseText is the server
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // no Content-Length
  }

};

xhr.onerror = function() {
  alert("Request failed");
};












/*
var personDB = [];
function store() {

	var name = document.getElementById('username').value;
	var pw = document.getElementById('p').value;
	var list=document.getElementById('ul');
    //localStorage.setItem('name', name);
   // localStorage.setItem('pw', pw);

var person={};
person.username=name;
person.password=pw;

personDB.push(person);	


localStorage.setItem('person1',JSON.stringify(personDB));
var localData= JSON.parse(localStorage.getItem('person1'));




console.log(personDB);

}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
   // var localData= JSON.parse(localStorage.getItem('person1'));

    //var storedName = person1.username;
    //var storedPw = person1.password;

    // entered data from the login-form

    var userName = document.getElementById('username').value;
    var userPw = document.getElementById('password').value;

    // check if stored data from register-form is equal to data from login form
    
    if(localData == storedName && localData == storedPw)
     {
        alert('You are loged in.');
    }
    else {
        alert('ERROR.');
    }
}
/*

function store(){


const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('username')

let itemsArray = localStorage.getItem('items') ? 
JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('username', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('username'))
console.log(data);
const liMaker = text => {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
}



form.addEventListener('submit', function(e) {
    e.preventDefault()

    itemsArray.push(username.value)
    localStorage.setItem('username',JSON.stringify(itemsArray))
   liMaker(input.value)
    input.value = ''
})
console.log(data);
console.log(data.values())
data.values().foreach(username=>{
    	liMaker(username)
    })







}

siteData={
	username:
	password:
}



*/













