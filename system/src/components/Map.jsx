import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents} from 'react-leaflet';
import searchIcon from '../assets/search_icon.png';
import schoolData from './modules/schoolData.json';
import mapData from './schools.js';
import TextExtractor from './Textractor.jsx';
import { useState } from 'react';
import stringSimilarity from 'string-similarity';

//custom map component
 function Map(props) {
  const { index, data } = props;

  return (
    <MapContainer   
      className='w-full h-[450px] lg:w-[70pc] lg:h-[50pc] md:w-[50pc] md:h-[30pc] sm:w-[20pc] sm:h-[30pc] xs:w-[10pc] xs:h-[30pc]'
      preferCanvas
      center={[121.047566,14.4081]}
      zoom={16}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></TileLayer>
      <Marker
        position={[
          data[index].coordinates.lat,
          data[index].coordinates.lang
        ]}
        
      >
        <Popup>{data[index].name}</Popup>
      </Marker>
      <SetViewOnClick
        coords={[
          data[index].coordinates.lat,
          data[index].coordinates.lang
        ]}
      />
    </MapContainer>
  );
}

//function on click on map
function SetViewOnClick({ coords }) {
  const map = useMap();
  map.flyTo(coords, 17);

  return null;
}

//main component for that outputs
const MapComponent = () => {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0); 
  const [selectedSchool, setSelectedSchool] = useState(null);

  // Update the selected school when a school is clicked
  const handleSchoolClick = (school) => {
    setSelectedSchool(school);
  };
  
  const filteredSchools = schoolData.filter((val) => {
    if (query === "") {
      return val !== schoolData[0];
    } else {
      return (
        val.name.toLowerCase().includes(query.toLowerCase()) ||
        val.type.toLowerCase().includes(query.toLowerCase())
        && val !== schoolData[0] )
    }
  });

  

  //compare filteredschools name to mapData name and get coordinates of the school
  const calculateSimilarity = (str1, str2) => {
    const similarity = stringSimilarity.compareTwoStrings(str1.toLowerCase(), str2.toLowerCase());
    return similarity * 100; 
  };

  //similalrity check filteredschools to map data
  const getIndex = (selectedSchool) => {
    if (selectedSchool) {
      const matchedSchool = mapData.find((mapSchool) => {
        const similarityPercentage = calculateSimilarity(selectedSchool.name, mapSchool.name);
        return similarityPercentage >= 75; // Set your threshold here
      });

      if (matchedSchool) {
        const index = mapData.findIndex((mapSchool) => mapSchool.name === matchedSchool.name);
        if (index !== -1) {
          setIndex(index);
        }
      } else {
        console.log("No matching school found in mapData for schools in filteredSchools");
      }
    } else {
      console.log("Selected school is undefined");
    }
  };

  return (
    <div id="about" className="overflow-hidden w-full bg-gray-950">

      {/* Main container for two*/}
      <div className="flex flex-col items-center p-4">
      


      {/* Container for map and schools etc. */}
      <div className="max-w-screen-2xl mx-auto flex space-x-0 lg:space-x-4 justify-center flex-col items-center lg:flex-row p-4">

      <Map data={mapData} index={index}> </Map>
    

        <div id="box-container" className="w-auto lg:w-1/2 flex flex-col space-y-4 text-center items-center lg:text-start lg:items-start py-4 px-4 mb-4">
          <form action="" className="border border-orange-500 rounded-full max-width-xl text-white flex flex-row">
            <input
              className="my-3 ml-4 outline-none text-white bg-black w-11/12 h-1/12"
              type="text"
              placeholder="Find School"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <img src={searchIcon} className="m-4 w-5 h-5" alt="search" />
          </form>

          <h1 className="text-xl font-medium text-orange-500 md:text-2xl lg:text-4xl tracking-tighter py-2">
            <span className="text-white">Schools of</span> Muntinlupa City
          </h1>

          <button className='text-white' onClick={() => {
            const index = mapData.findIndex((school) => school.id === 0);
              if (index !== -1) {
                setIndex(index);
              }
            }}>
              Center
              </button>
              
          <div id="school-container" className="border border-orange-500 md:w-[30pc] xs:min-w-[5pc] p-5 sm:min-h-[10pc] max-h-[450px] overflow-y-auto max-w-auto flex flex-col space-y-4 items-center">
            {filteredSchools.map((school, key) => (
              
              <div key={key}>    
                <a onClick={() => handleSchoolClick(school)} className="block">
                  <div className="border border-white-500 min-w-[10pc] w-[25pc] max-w-[35pc] text-white p-3 items-center hover:bg-amber-600 ">
                    <div className="flex flex-col space-y-3 xs:text-xs sm:text-s md:text-m lg:text-l text-start">
                      <div className="color-white">{school.name}</div>
                      <div className="color-white">{school.type}</div>
                      <div className="color-white" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{school.url}</div>
                    </div>
                  </div>
                </a>
                  <button className='text-white' onClick={() => getIndex(school) }>See location</button>
                  
              </div>
            ))} 

          </div>
        </div>
      </div>
  
    {/* Second Container for machine learning*/}
    <TextExtractor selectedSchool={selectedSchool}/>
    
    </div>
    </div>  
  );
};

export default MapComponent;
