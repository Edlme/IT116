// console.dir(document);
// The Different properties of the Document
console.log(document.domain); //<--Shows IP Address
console.log(document.URL);
// Title element
console.log(document.title);
// Returns the Document Type Declaration 
console.log(document.doctype);
//The head element 
console.log(document.head);
// The body element
console.log(document.body);
// Shows the entire elements in the DOM
console.log(document.all);
//Shows line 13
console.log(document.all)[13];
// we changed the header by calling the textContent function
document.all[10].textContent= 'We Just Changed The Header'
// how many forms are there in the document
console.log(document.forms);
//how many links are there in the document
console.log(document.links);
//how many images are there in the document
console.log(document.images);

////////////////////////////////////////////////////
// Accessing the DOM with GETELEMENTBYID

