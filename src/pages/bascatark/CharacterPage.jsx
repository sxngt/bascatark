import React from "react";
import MainNavigation from "../../components/MainNavigation.jsx";
import characterImage from "/src/assets/slides/character.png";

const CharacterPage = () => {
	const images = [
		characterImage
	];

	return (
		<div className="fixed inset-0 w-screen h-screen bg-white">
			<MainNavigation/>
			<div className="absolute top-16 w-full h-[calc(100vh-4rem)]">
				{images.map((src, index) => (
					<div key={index} className="w-full h-full">
						<img
							src={src}
							alt={`캐릭터 이미지 ${index + 1}`}
							className="w-full h-full object-contain"
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default CharacterPage;