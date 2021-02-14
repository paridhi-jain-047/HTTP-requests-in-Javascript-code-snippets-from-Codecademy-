
const getData = async () => {
    try {
      const response = await fetch('https://api-to-call.com/endpoint', {
        method: 'POST',
        body: JSON.stringify({id: 200})
      })
      if(response.ok){
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      throw new Error('Request failed!');
    } catch(error) {
      console.log(error);
    }
  }
//Boilerplate code diagram link:-
//https://content.codecademy.com/courses/intermediate-javascript-requests/diagrams/async%20await%20POST%20diagram.svg