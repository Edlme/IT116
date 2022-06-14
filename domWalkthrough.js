// // Passing the document to the console window to access to the DOM and see everything in this particular document
// // is the way to see evverything about the HTML page (all the properties of a specified JavaScript object) in console.
// // This helps the developer to easily get the properties of the object.
console.dir(document);
// // // // The Different properties of the Document
// // The domain property returns the domain name of the server (the document was loaded from). 
// // The domain property returns null if the document was created in memory.
console.log(document.domain); //<--Shows IP Address
// // This shows the actual location of the html file.
// // It returns the document location as a string.
// // When running everything locally on a machine, it will show the local path
console.log(document.URL);
/////////////////////////// Accessing the elements through the DOM using the document. functionality
// // This will access the Title element, which is in the head of the HTML file, from the DOM and dispays the output in the console window. 
// // In this case, document is the title of the page; we maintained the default title.
console.log(document.title);
// // Checking the doc type
// // Returns the Document Type Declaration. In this case html 
console.log(document.doctype);
// // This shows everything in the head element 
console.log(document.head);
// // This is when we want to see everything in the body element via the console window
console.log(document.body);
// // We use the following when we want to see everything in actual document itself.
// // This shows the entire DOM
console.log(document.all);
// // As we have seen in the document.all, each of the particular tree elements will have an index assigned to them.
// // Hence, we can just call a particular element using its index.
// //The following shows the element of this particular index; in this case the h2 with the class of title.
console.log(document.all[13]);
// // Changing the content of header title using the index of the actual alement from the DOM tree and calling the textContent function
// // Hence, we used the document.all attribute and the textContent function
document.all[10].textContent= 'We Just Changed The Header'
//////////////////////////Checking to see if we have certain elements inside of the actual tree. Length tells us the number of that particular element in the DOM tree
// // To see how many forms are there in the document and what they look like. 
// // In this case, the length is 1, which means we have one form
console.log(document.forms);
// // how many links are there in the document
// // In this case, the length is 0, which means we have no link in the html file
console.log(document.links);
// // how many images are there in the document
// // In this case, the length is 0, which means we have no image in the html file
console.log(document.images);

// /////////////////////////////////////////////////////////////////////
// // // // // // Accessing the DOM with GETELEMENTBYID // // // // // //

// // Displaying the h1 element that has an id of header-title from the dom tree
console.log(document.getElementById('header-title'));
// Creation of an object variable using the document function.
let headerTitle = document.getElementById('header-title');
// // textContent and innerText are important to change the content of the element.
headerTitle.textContent = "Im Changing the Header";
headerTitle.innerText = "I Am Changing It Again.";
headerTitle.style.color = 'hotpink'; 


//////////////////////////////////////////
/////////////////////////GetElementByClassName///////////

var items = document.getElementsByClassName('list-group-item');
// This will output the items
console.log(items);
// // we are using index
console.log(items[1]); 

// // Styling Property Attributes through the variable.

// // styling the element with index number 0
items[0].style.fontWeight = 'bold';
items[0].style.backgroundColor = 'red';
items[0].textContent = 'Oooop - Coleman Love';
items[0].style.color = 'white';
// // styling the element with index number 1
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'pink';
items[1].textContent = 'Alpha Kappa Alpha';
items[1].style.color = 'green';
// // styling the element with index number 2
items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'blue';
items[2].textContent = 'Zee Phiiii - Zeta Phi Beta';
items[2].style.color = 'white';

// This is a counter which loops all the way until 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);

 }
// // This is an increament by 2
for (let i = 0; i <=20; i +=2) {
    console.log(i);
}
// // This is decreamenting by 2
for (let i = 100; i >= 0; i -=2) {

    console.log(i);

}
// // this is an increamenting in a forloop
for (var i = 0; i < items.length; i++) {

    items[i].style.backgroundColor = 'grey';
    items[i].textContent = 'I Changed The List';
    items[i].style.color = 'green';

}
// // producing an array and a forloop
const myDiamonds = ['Snacky','Scary','Piggy','Pinchie','Lily','IttyBitty','Nibbles','Lanky','Kibbles'];

for(let i = 0; i < myDiamonds.length;i++){

}
    console.log(i, myDiamonds[i]);



//////////////////////////////////////////////////////////////////////////////
///////////////GetElementByTagName////////////////////////////////

var li = document.getElementsByTagName('li');

console.log(li);
// // we are using index
console.log(li[1]);
// // Styling property Attributes via the variable
li[1].textContent = "Hello 2";
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'crimson';
li[1].style.color = 'white';

// // Declaring a variable
// // checking the length of the list
// // incrementing through each particular item
for(var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = 'lightgrey';
    li[i].textContent = 'Changed Text'; 

}
//////////////////////////////////////////////////////////////////////////////
//////////////// - Query Selector//////////////////////////////////////////////

// // Selecting main-header  
var header = document.querySelector('#main-header');
// styling the header
header.style.borderBottom = 'solid 4px hotpink';
// // Changing the input box text
var input = document.querySelector('input');
input.value = "Changed The Input Box Text";
// // Changing the text to SEND 
var submit = document.querySelector("input[type='submit']");
submit.value = "SEND"; 
// // Selecting the first item from the list and changing the text color to red
var item = document.querySelector('.list-group-item');
item.style.color = 'red';
// // Declaring the last item of the list 
var lastItem = document.querySelector('.list-group-item:last-child');
// // Changing the text color 
lastItem.style.color = 'coral';

////////////////////////////////////////////////////////////////////
//////////QuerySelectorALL///////////////////////////////////////
// // The variable name connects to title of the html page
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Thank you for the wonderful class, @Monte';  
// // This selects all of the odd listed-items
var odd = document.querySelectorAll('li:nth-child(odd)');
// // This selects all of the even listed-items
var even = document.querySelectorAll('li:nth-child(even)');
// // for loop iterating via each of the variables
for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'grey';
    even[i].style.backgroundColor = 'green';
    even[i].style.color = 'whitesmoke';
}




