import React from 'react';
import schoolData from '../components/schools';
import { Link } from 'react-router-dom';


const PdhDummyWebsite = () => {
  const selectedSchool = schoolData.find((school) => school.id === 11);

  return (
    <>
     <h1 className='text-4xl'>Dummy Website Only </h1>
     <p> <Link className='hover:text-gray-500' to='/'> Back To Home </Link> </p>

     <div>
    <img src={selectedSchool.image} alt={selectedSchool.name} />
        {Object.keys(selectedSchool)
          .filter((key) => key !== 'id' && key !== 'link' && key !== 'image' && key !== 'lat' && key !== 'long')
          .map((key) => (
            <p key={key}>
              <strong>{key}:</strong> {selectedSchool[key]}
            </p>
          ))}
        </div>
    </>
  );
};

export default PdhDummyWebsite ;