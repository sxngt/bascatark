import React, {useEffect, useState} from 'react';
import {Menu, X, ChevronDown, Clock, MapPin, Ticket} from 'lucide-react';
import MainNavigation from "../../components/MainNavigation.jsx";
import video from '/src/assets/placehoder/main-video.mp4'


const MainPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
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
			<MainNavigation/>

			{/* Hero Section with Autoplay Video */}
			<div className="relative w-full h-screen">
				<video
					className="absolute top-0 left-0 w-full h-full object-cover"
					autoPlay
					loop
					muted
					playsInline
				>
					<source src={video} type="video/mp4"/>
					Your browser does not support the video tag.
				</video>

				{/* Overlay with text */}
				<div className="relative z-10 h-full flex flex-col items-center justify-center bg-black bg-opacity-40">
					<h1 className="text-5xl md:text-6xl font-bold text-white mb-6 px-4 text-center">
						바스캣아크에 오신 것을 환영합니다
					</h1>
					<p className="text-xl md:text-2xl text-white mb-8 px-4 text-center">
						특별한 추억을 만들어보세요
					</p>
					<button
						className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors">
						지금 예매하기
					</button>
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