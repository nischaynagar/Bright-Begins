import React from 'react';

export default function DataContainer({ key, infoName, infoPhone }) {
    return (
        <div>
            <h1>Name:  {infoName}</h1>
            <h1>Phone:  {infoPhone}</h1>
        </div>
    );
};
