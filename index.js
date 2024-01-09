//To submit data to the server
function submitData(name, email) {
    //Creating an object to represent the data to be sent to the request
    const formData = {
      name: name,
      email: email,
    };
  
    //Configuration object for the fetch request
    const configurationObject = {
      method: "POST", //To set the HTTP method to POST
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json", //Specifying the accepted response format as JSON
      },
      body: JSON.stringify(formData), //Converting the data object to a JSON string for the request body
    };
  
    // To make the POST request to /users with a name and email
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
        // Appending the new id to the DOM
        document.body.innerHTML += data.id;
      })
      .catch(error => {
        // Appending the error message to the DOM
        document.body.innerHTML += error.message;
      });
  }
  
  // Basic document mock for testing
  const document = {
    body: {
      innerHTML: '',
    }
  };
  
 