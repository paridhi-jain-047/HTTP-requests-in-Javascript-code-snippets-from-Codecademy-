const xhr = new XMLHttpRequest;
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';

xhr.onreadystatechange = () =>{
  if(xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
};

xhr.open('GET',url);
xhr.send();


//BoilerPlate code diagram :-
//https://content.codecademy.com/courses/intermediate-javascript-requests/diagrams/XHR%20GET%20diagram.svg