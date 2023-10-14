import React from 'react';

function PropertyDetails(props) {
    const propertyId = props.match.params.id;
    // Use the propertyId to fetch details from your backend or Solana

    return (
        <div>
            <h1>Property Details for ID: {propertyId}</h1>
            {/* Display detailed property information here */}
        </div>
    );
}

export default PropertyDetails;
