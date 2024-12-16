import React from "react";
import image1 from "/src/assets/slides2/1.png"
import image2 from "/src/assets/slides2/2.png"
import image3 from "/src/assets/slides2/3.png"
import image4 from "/src/assets/slides2/4.png"
import image5 from "/src/assets/slides2/5.png"
import image6 from "/src/assets/slides2/6.png"
import image7 from "/src/assets/slides2/7.png"
import image8 from "/src/assets/slides2/8.png"
import image9 from "/src/assets/slides2/9.png"

import DisplayNavigation from "../../components/DisplayNavigation.jsx";

const GalleryPage = () => {
	const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

	return (
		<div className="bg-white">
			<DisplayNavigation/>

			{/* Content container */}
			<div className="pt-16"> {/* Space for navigation */}
				{/* First image - fullscreen */}
				<div className="w-screen h-[calc(100vh-4rem)] relative overflow-hidden">
					<img
						src={images[0]}
						alt="스토리 이미지 1"
						className="absolute inset-0 w-full h-full object-cover"
					/>
				</div>

				{/* Remaining images - no spacing */}
				<div className="flex flex-col">
					{images.slice(1).map((src, index) => (
						<img
							key={index + 1}
							src={src}
							alt={`스토리 이미지 ${index + 2}`}
							className="w-full object-contain"
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default GalleryPage;