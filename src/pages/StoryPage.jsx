import storyImage from '../assets/slides/story.png';
import MainNavigation from "../components/MainNavigation.jsx";  // 상단에 이미지 import

const StoryPage = () => {
	const images = [
		storyImage,  // import한 이미지 사용
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

export default StoryPage;