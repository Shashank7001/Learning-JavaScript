// let elements = document.querySelector('#heading');// 1st element
// // let allElements = document.querySelectorAll('p');// all elements
// // console.log(allElements);
// // console.log(elements);
// // console.log(elements.tagName);
// // console.dir(document.body.firstChild); // to get the first child of body
// let div = document.querySelector('div');
// console.dir(div);

// let elements = document.querySelector('h2');

// elements.innerText = `${elements.innerText} from Apna College students`;

// let elements = document.querySelectorAll('.container');

// for (let i in elements) {
//     console.log(elements[i].innerText=`This is a container ${parseInt(i) + 1}`);
    
// }
// console.log(elements[0]);

// let div =document.querySelector('div');
// console.log(div);

// let id = div.getAttribute('id');
// console.log(id);

// let name = div.getAttribute('name');
// console.log(name);

// let para = document.querySelector('p');\
// console.log(para.setAttribute('class',"newClass"));


let elements = document.querySelector('p');
elements.style.backgroundColor = 'red';
elements.style.color = 'white';
elements.style.fontSize = '20px';
elements.innerText = 'This is a new paragraph with red background and white text color.';



let btn =document.createElement('button');
btn.innerText = 'Click Me';

let div = document.querySelector('div');
div.after(btn);

let h= document.createElement('h1');
h.style.color = 'blue';
h.innerText = 'Welcome to JavaScript Learning';

document.querySelector('body').prepend(h);
