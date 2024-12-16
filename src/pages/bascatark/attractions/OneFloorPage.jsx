import React from 'react';
import MainNavigation from "../../../components/MainNavigation.jsx";
import image1 from '/src/assets/slides/1f/1.png';
import image2 from '/src/assets/slides/1f/2.png';
import image3 from '/src/assets/slides/1f/3.png';
import image4 from '/src/assets/slides/1f/4.png';
import image5 from '/src/assets/slides/1f/5.png';

const OneFloorPage = () => {
	// 실제로는 각각 다른 이미지 경로가 들어갈 자리입니다
	const images = [image1, image2, image3, image4, image5];

	return (
		<div className="fixed inset-0 w-screen h-screen bg-white overflow-y-auto">
			<MainNavigation/>
			<div className="pt-16">
				{images.map((src, index) => (
					<div key={index} className="w-full">
						<img
							src={src}
							alt={`1F 체험존 이미지 ${index + 1}`}
							className="w-full"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default OneFloorPage;