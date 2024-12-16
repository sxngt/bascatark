import MainNavigation from "../../components/MainNavigation.jsx";
import React from "react";
import image1 from "/src/assets/slides/b1/1.png"

const BaseOnePage = () => {
	const images =[image1]
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

export default BaseOnePage;