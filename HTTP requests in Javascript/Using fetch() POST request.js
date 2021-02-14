fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: "200"})
}).then(response => {
  if(response.ok){
	  return response.json();  
  }
	throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  console.log(jsonResponse);
})

//Boilerplate code diagram link:-
//https://content.codecademy.com/courses/intermediate-javascript-requests/diagrams/fetch%20POST%20diagram.svg