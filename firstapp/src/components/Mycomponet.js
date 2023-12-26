import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyComponent() {
  return (
    <div className="container">
      {/* Bootstrap container class for a responsive fixed-width container */}
      
      <div className="jumbotron">
        {/* Bootstrap jumbotron class for a large container with rounded corners */}
        
        <h1 className="display-4">Hello, world!</h1>
        {/* Bootstrap display-4 class for a very large heading */}
        
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        {/* Bootstrap lead class for emphasizing a paragraph */}
        
        <hr className="my-4" />
        {/* Bootstrap my-4 class for adding margin to the bottom */}
        
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      </div>

      <div className="alert alert-success" role="alert">
        {/* Bootstrap alert class for displaying alert messages */}
        
        This is a success alert—check it out!
      </div>

      <button type="button" className="btn btn-primary">
        {/* Bootstrap btn and btn-primary classes for styling a button */}
        
        Primary Button
      </button>
    </div>
  );
}

export default MyComponent;
