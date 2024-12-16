import MainPage from "./pages/MainPage.jsx";
import OneFloorPage from "./pages/attractions/OneFloorPage.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BaseOnePage from "./pages/attractions/BaseOnePage.jsx";
import FoodAndSnackPage from "./pages/attractions/FoodAndSnackPage.jsx";
import OperationPage from "./pages/guides/OperationPage.jsx";
import MapPage from "./pages/guides/MapPage.jsx";
import FacilityPage from "./pages/guides/FacilityPage.jsx";
import StoryPage from "./pages/StoryPage.jsx";
import CharacterPage from "./pages/CharacterPage.jsx";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage/>}/>
				<Route path="/attractions/1f" element={<OneFloorPage/>}/>
				<Route path="/attractions/b1/" element={<BaseOnePage/>}/>
				<Route path="/attractions/food/" element={<FoodAndSnackPage/>}/>
				<Route path="/guide/operation/" element={<OperationPage/>}/>
				<Route path="/guide/map/" element={<MapPage/>}/>
				<Route path="/guide/facilities/" element={<FacilityPage/>}/>
				<Route path="/about/" element={<StoryPage/>}/>
				<Route path="/characters/" element={<CharacterPage/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
