import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
//dummy websites
import PlmunDummyWebsite from './pages/plmunDummy';
import LoaDummyWebsite from './pages/loaDummy';
import SbcaDummyWebsite from './pages/sbcaDummy'
import SmcDummyWebsite from './pages/smcDummy'
import ScaDummyWebsite from './pages/scaDummy'
import ImDummyWebsite from './pages/imDummy'
import BcaDummyWebsite from './pages/bcaDummy'
import MshsDummyWebsite from './pages/mshsDummy'
import LsoaDummyWebsite from './pages/lsoaDummy'
import MesDummyWebsite from './pages/mesDummy'
import PdhDummyWebsite from './pages/pdhDummy'


const App = () => {
	
	return (
		<>
		
		<Routes>
			<Route path='/' element={<Home />} /> 

			{/*Dummy Websites*/}
			<Route path='/dummy-website' element={<PlmunDummyWebsite />} />
			<Route path='/dummy-website2' element={<LoaDummyWebsite />} />
			<Route path='/dummy-website3' element={<SbcaDummyWebsite />} />
			<Route path='/dummy-website4' element={<SmcDummyWebsite />} />
			<Route path='/dummy-website5' element={<ScaDummyWebsite />} />

			<Route path='/dummy-website6' element={<ImDummyWebsite />} />
			<Route path='/dummy-website7' element={<BcaDummyWebsite />} />
			<Route path='/dummy-website8' element={<MshsDummyWebsite />} />

			<Route path='/dummy-website9' element={<LsoaDummyWebsite />} />
			<Route path='/dummy-website10' element={<MesDummyWebsite />} />
			<Route path='/dummy-website11' element={<PdhDummyWebsite />} />
		</Routes>

		</>
	);
};

export default App;
