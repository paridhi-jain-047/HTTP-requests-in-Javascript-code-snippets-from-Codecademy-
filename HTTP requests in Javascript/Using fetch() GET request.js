fetch('https://api-to-call.com/endpoint').then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse;
});

//Boilerplate diagram link:-
//https://content.codecademy.com/courses/intermediate-javascript-requests/diagrams/fetch%20GET%20diagram.svg