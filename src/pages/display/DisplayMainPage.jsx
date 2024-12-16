import React, {useEffect, useRef, useState} from 'react';
import {Menu, X, ChevronDown, Clock, MapPin, Ticket} from 'lucide-react';
import video from '/src/assets/placehoder/display-video.mp4'
import image from '/src/assets/placehoder/display-slogan.png'
import DisplayNavigation from "../../components/DisplayNavigation.jsx";

const MainPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.currentTime = 34; // 33초부터 시작
		}
		document.body.style.margin = '0';
		document.body.style.padding = '0';
		document.body.style.overflow = 'hidden';
	}, []);


	const menuItems = [
		{
			title: '즐길거리',
			subItems: [
				'1F 체험존 | 부바스티스',
				'B1 힐링존 | 캣아크',
				'공연 및 패스티벌',
				'푸드/쇼핑'
			]
		},
		{
			title: '이용가이드',
			subItems: [
				'운영/운휴',
				'파크 이용안내',
				'편의시설/제도',
				'가이드맵'
			]
		},
		{title: '바스캣아크 이야기'},
		{title: '캐릭터 소개'}
	];

	return (
		<div className="min-h-screen bg-gray-50 fixed inset-0 w-screen h-screen overflow-y-auto">
			<DisplayNavigation/>

			{/* Hero Section with Autoplay Video */}
			<div className="relative w-full h-screen">
				<video
					ref={videoRef}
					className="absolute top-0 left-0 w-full h-full object-cover"
					autoPlay
					loop
					muted
					playsInline
				>
					<source src={video} type="video/mp4"/>
					Your browser does not support the video tag.
				</video>

				{/* Overlay with image */}
				<div className="relative z-10 h-full flex flex-col items-center justify-center bg-black bg-opacity-40">
					<img
						src={image}
						alt="사라진 황금 레시피"
						className="w-auto h-96 md:h-144 lg:h-192"
					/>
					<a href={'/ticket'}>
						<button
							className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors">
							지금 예매하기
						</button>
					</a>
				</div>
			</div>

			{/* Info Section */}
			<div className="w-full bg-white py-12">
				<div className="container mx-auto px-8">
					<div className="grid md:grid-cols-3 gap-8">
						{/* Operating Hours */}
						<div className="bg-gray-50 p-6 rounded-lg shadow-md">
							<div className="flex items-center space-x-2 mb-4">
								<Clock className="text-yellow-500"/>
								<h3 className="text-lg font-semibold">운영시간</h3>
							</div>
							<p className="text-gray-600">10:00 - 22:00</p>
						</div>

						{/* Location */}
						<div className="bg-gray-50 p-6 rounded-lg shadow-md">
							<div className="flex items-center space-x-2 mb-4">
								<MapPin className="text-yellow-500"/>
								<h3 className="text-lg font-semibold">위치안내</h3>
							</div>
							<p className="text-gray-600">지도 API 연동 예정</p>
						</div>

						{/* Tickets */}
						<div className="bg-gray-50 p-6 rounded-lg shadow-md">
							<div className="flex items-center space-x-2 mb-4">
								<Ticket className="text-yellow-500"/>
								<h3 className="text-lg font-semibold">티켓예매</h3>
							</div>
							<button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
								예매하기
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;