import MainPage from "./pages/bascatark/MainPage.jsx";
import OneFloorPage from "./pages/bascatark/attractions/OneFloorPage.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BaseOnePage from "./pages/bascatark/attractions/BaseOnePage.jsx";
import FoodAndSnackPage from "./pages/bascatark/attractions/FoodAndSnackPage.jsx";
import OperationPage from "./pages/bascatark/guides/OperationPage.jsx";
import MapPage from "./pages/bascatark/guides/MapPage.jsx";
import FacilityPage from "./pages/bascatark/guides/FacilityPage.jsx";
import StoryPage from "./pages/bascatark/StoryPage.jsx";
import CharacterPage from "./pages/bascatark/CharacterPage.jsx";
import DisplayMainPage from "./pages/display/DisplayMainPage.jsx";
import IntroducePage from "./pages/display/IntroducePage.jsx";
import GalleryPage from "./pages/display/GalleryPage.jsx";
import OutLinePage from "./pages/display/OutLinePage.jsx";
import TicketPage from "./pages/display/TicketPage.jsx";
import GuideInfoPage from "./pages/bascatark/guides/GuideInfoPage.jsx";
import ConceptPage from "./pages/display/ConceptPage.jsx";
import MetaverseInfoPage from "./pages/display/MetaverseInfoPage.jsx";

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
				<Route path="/guide/info/" element={<GuideInfoPage/>}/>
				<Route path="/about/" element={<StoryPage/>}/>
				<Route path="/characters/" element={<CharacterPage/>}/>


				<Route path="/display/" element={<DisplayMainPage/>}/>
				<Route path="/info/introduce/" element={<IntroducePage/>}/>
				<Route path="/info/story/" element={<ConceptPage/>}/>
				<Route path="/gallery/" element={<GalleryPage/>}/>
				<Route path="/info/outline/" element={<OutLinePage/>}/>
				<Route path="/ticket/" element={<TicketPage/>}/>
				<Route path="/metaverse/intro" element={<MetaverseInfoPage/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
