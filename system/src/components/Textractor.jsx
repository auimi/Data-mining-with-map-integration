import axios from 'axios';
import React, { useState } from 'react';
import searchIcon from '../assets/search_icon.png';
import ReactJson from 'react-json-view';
const TextExtractor = ({selectedSchool}) => {
    const [searchText, setSearchText] = useState('');
    const [apiResponse, setApiResponse] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        const options = {
            method: 'POST',
            url: 'https://ai-textraction.p.rapidapi.com/textraction',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '8bd1f9b0eemshb1d349d8c94e815p1e7e2djsn307d1ff6cad3',
                'X-RapidAPI-Host': 'ai-textraction.p.rapidapi.com',
            },
            data: {
            text: selectedSchool.data,
            entities: [
                {
                description: searchText,
                type: 'string',
                var_name: 'Results',
                },
            ],
            },
        };
    
        try {
            const response = await axios.request(options);
            setApiResponse(response.data);
        } catch (error) {
            setError(error);
        }
    };
    
    // Call the fetchData function when the search button is clicked
    const handleSearch = () => {
        if (!searchText.trim()) {
            return;
        }
        fetchData();
    };

    return (
        <>
            <div className="border border-orange-500 sm:w-[20pc] md:w-[50pc] lg:w-full h-[30pc] overflow-y-auto">
                <h1 className="text-xl font-medium text-orange-500 md:text-2xl lg:text-4xl p-2">
                    <span className="text-white">Data <strong className='text-orange-500'>Miner</strong></span>
                </h1>
            <div id="searchBar" className="border border-orange-500 rounded-full max-width-xl text-white flex flex-row m-5">
            <input
                className="my-3 ml-4 outline-none text-white bg-black w-11/12 h-1/12"
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
                placeholder="Enter search text"
            />
            <button onClick={handleSearch}><img src={searchIcon} className="m-4 w-5 h-5" alt="search" /></button>
            </div>
    
            <div id="text" className="flex flex-row h-full p-2 space-x-5">
            
            {/* Data Container */}
            <div className='text-justify text-white w-full'>
                {/* Content for the first child container */}
                {selectedSchool && (
                    <p>{selectedSchool.data}</p>
                )}
            </div>
    

                {/* result */}
                <div className='border border-white h-full w-full text-white'>
                    {apiResponse && (
                    <>
                    <div className='p-5'><strong>Results: </strong> {apiResponse.results.Results}</div>
                    
                    </>
                )}
    
                {error && (
                    <div>
                        <h2>Error:</h2>
                        <pre>{JSON.stringify(error, null, 2)}</pre>
                    </div>
                )}
                </div>
            </div>
    
            
            </div>
        </>
    );
    };
    
    export default TextExtractor;