import MainNavigation from "../../../components/MainNavigation.jsx";
import React from "react";
import foodImage from "/src/assets/slides/food-snack/1.png";

const FoodAndSnackPage = () => {
	const images = [
		foodImage
	];

	return (
		<div className="fixed inset-0 w-screen h-screen bg-white">
			<MainNavigation/>
			<div className="absolute top-16 w-full h-[calc(100vh-4rem)]">
				{images.map((src, index) => (
					<div key={index} className="w-full h-full">
						<img
							src={src}
							alt={`스토리 이미지 ${index + 1}`}
							className="w-full h-full object-contain"
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default FoodAndSnackPage;