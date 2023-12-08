import React from 'react';
import schoolData from '../components/schools';
import { Link } from 'react-router-dom';

const Extract = () => {
  const [showResults, setShowResults] = React.useState(false);

  const handleClick = () => {
    setShowResults(true);
  };

  return (
    <>
    <p>
    <Link className='hover:text-gray-500' to='/'>
      Back To Home
    </Link>
  </p>
    <div>
      {!showResults ? (
        <button type="submit" value="Extract Plmun" onClick={handleClick} className='border border-orange-500 rounded-full my-3 ml-4 p-2'>
          Extract Plmun
        </button>
      ) : (
        <PlmunDummyWebsite />
      )}
    </div>
    </>
  );
};

const PlmunDummyWebsite = () => {
  const selectedSchool = schoolData.find((school) => school.id === 1);

  return (
    <>
    <button className='border border-orange-500 rounded-full my-3 ml-4 p-2'>Extract Plmun</button>
      <h1 className='text-4xl'>Dummy Website Only </h1>
     

      <div>
        <img src={selectedSchool.image} alt={selectedSchool.name} />
        {Object.keys(selectedSchool)
          .filter(
            (key) =>
              key !== 'id' &&
              key !== 'link' &&
              key !== 'image' &&
              key !== 'coordinates'
          )
          .map((key) => (
            <p key={key}>
              <strong>{key}:</strong> {selectedSchool[key]}
            </p>
          ))}
      </div>

      
    </>
  );
};

export default Extract;