document.addEventListener( 'DOMContentLoaded', function ()
{
  const form = document.getElementById( 'registration-form' );
  const feedbackDiv = document.getElementById( 'form-feedback' );

  form.addEventListener( 'submit', function ( event )
  {
    event.preventDefault(); // stops the form from sending to the server
    
    const username = document.getElementById( 'username' ).value.trim();
    const email = document.getElementById( 'email' ).value.trim();
    const password = document.getElementById( 'password' ).value.trim();

    let isValid = true; // assume everything is fine at first
    let messages = [];  // store any errors we find

    if ( username.length < 3 )
    {
      isValid = false;
      messages.push( "Username must be at least 3 characters long." );
    }

    if ( !email.includes( '@' ) || !email.includes( '.' ) )
    {
      isValid = false;
      messages.push( "Email must include '@' and '.'" );
    }

    if ( password.length < 8 )
    {
      isValid = false;
      messages.push( "Password must be at least 8 characters long." );
    }

    feedbackDiv.style.display = "block"; // make the div visible

    if ( isValid )
    {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // green for success
    } else
    {
      feedbackDiv.innerHTML = messages.join( "<br>" ) // show errors
      feedbackDiv.style.color = "#dc3545"; // red for errors
    }

  } );

} );