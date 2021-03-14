import React from 'react';
import Card from './Card';

const CardList = ({ borrowers }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {
                borrowers.map(borrower => {
                    return <Card id={borrower.id} name={borrower.name} address={borrower.address} location={borrower.location} />
                })
            }
        </div>
    ); 
}

export default CardList;