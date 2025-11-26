// Step 1: Define an async function to fetch and display user data
async function fetchUserData ()
{
  // Step 2: API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 3: Select the container where user data will be displayed
  const dataContainer = document.getElementById( 'api-data' );

  try
  {
    // Step 4: Fetch data from the API
    const response = await fetch( apiUrl );

    // Convert the response to JSON
    const users = await response.json();

    // Step 5: Clear any loading message
    dataContainer.innerHTML = '';

    // Step 6: Create a <ul> element to hold the list of users
    const userList = document.createElement( 'ul' );

    // Step 7: Loop through the users array
    users.forEach( user =>
    {
      const li = document.createElement( 'li' ); // Create a list item
      li.textContent = user.name; // Set the user's name as text
      userList.appendChild( li ); // Add the <li> to the <ul>
    } );

    // Step 8: Append the <ul> to the data container
    dataContainer.appendChild( userList );
  } catch ( error )
  {
    // Step 9: Handle errors
    dataContainer.innerHTML = ''; // Clear any loading message
    dataContainer.textContent = 'Failed to load user data.'; // Show error message
    console.error( 'Error fetching user data:', error ); // Optional: log the error
  }
}

// Step 10: Run fetchUserData after the HTML has fully loaded
document.addEventListener( 'DOMContentLoaded', fetchUserData );
