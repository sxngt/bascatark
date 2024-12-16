import React from 'react';
import DisplayNavigation from "../../components/DisplayNavigation.jsx";


const YoutubeEmbed = ({ embedId }) => (
	<div className="relative w-full aspect-video">
		<iframe
			className="absolute top-0 left-0 w-full h-full rounded-lg"
			src={`https://www.youtube.com/embed/${embedId}`}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title="Embedded youtube"
		/>
	</div>
);

const MetaverseInfoPage = () => {
	const youtubeVideoId = "GTO19XWbQtU"; // 여기에 실제 YouTube 비디오 ID를 넣으세요

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
			<DisplayNavigation/>
			<div className="container mx-auto px-4 pt-24 pb-16">
				{/* Header */}
				<h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-500 mb-4">
					관람 가이드
				</h1>
				<div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-16"></div>

				{/* Video Container */}
				<div className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 p-6 rounded-lg border border-yellow-700/30">
					<YoutubeEmbed embedId={youtubeVideoId} />

					{/* Optional: Video Description */}
					<div className="mt-6 text-yellow-100/80">
						<h2 className="text-2xl font-bold text-yellow-500 mb-4">메타버스 가이드 / 소개 영상</h2>
						<p className="mb-4">
							이 영상을 통해 메타버스 테마에 대하여 알아볼 수 있습니다.
						</p>
						{/* 추가 설명이나 정보를 이곳에 넣을 수 있습니다 */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MetaverseInfoPage;