const getData = async () => {
    try {
      const response = await fetch('https://api-to-call.com/endpoint');
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);	
    }
  }
//Boilerplate code diagram link:-
//https://content.codecademy.com/courses/intermediate-javascript-requests/diagrams/async%20await%20GET%20diagram.svg