import React from 'react';

const Card = ({ id, name, address, location }) => {
    return (
        <div class="mw5 bg-white br3 pa2 pa4-ns ma3 ba b--black-10" id="card">
            <a href={location} className="no-underline black" target="_blank" rel="noopener noreferrer">
                <img src={`https://robohash.org/${id}?size=200x200`} class="br-100 h4 w4 dib ba b--black-05 pa2" alt="a monster"/>
                <h2 class="f3 fw4 mb3">{name}</h2>
                <h3 class="f5 fw4 gray mt0">{address}</h3>
            </a>
        </div>
    );
}

export default Card;