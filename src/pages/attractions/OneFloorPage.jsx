import React from 'react';
import MainNavigation from "../../components/MainNavigation.jsx";

const OneFloorPage = () => {
	// 실제로는 각각 다른 이미지 경로가 들어갈 자리입니다
	const images = [
		'/src/assets/slides/1f/1.png',
		'/src/assets/slides/1f/2.png',
		'/src/assets/slides/1f/3.png',
		'/src/assets/slides/1f/4.png',
		'/src/assets/slides/1f/5.png'
	];

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