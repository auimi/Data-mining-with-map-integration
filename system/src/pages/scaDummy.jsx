import React from 'react';
import schoolData from '../components/schools';
import { Link } from 'react-router-dom';


const ScaDummyWebsite = () => {
  const selectedSchool = schoolData.find((school) => school.id === 5);

  return (
    <>
     <h1 className='text-4xl'>Dummy Website Only </h1>
     <p> <Link className='hover:text-gray-500' to='/'> Back To Home </Link> </p>

     <div>
    <img src={selectedSchool.image} alt={selectedSchool.name} />
        {Object.keys(selectedSchool)
         .filter((key) => key !== 'id' && key !== 'link' && key !== 'image' && key !== 'coordinates')
          .map((key) => (
            <p key={key}>
              <strong>{key}:</strong> {selectedSchool[key]}
            </p>
          ))}
        </div>
    </>
  );
};

export default ScaDummyWebsite ;