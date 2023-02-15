import React from 'react';
import Quality from './qualitie';

const QualitiesList = ({qualities}) => {
    return  (
        <>
        {qualities.map((qual) => (
        <Quality key={qual._id} {...qual} />
    ))}
    </>
    )
    
}

export default QualitiesList;