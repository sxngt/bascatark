import DisplayNavigation from "../../components/DisplayNavigation.jsx";
import image from '../../assets/title.png';

const OverviewSection = ({ title, content, icon }) => (
	<div className="bg-gradient-to-br from-yellow-900/10 to-yellow-700/10 rounded-lg p-8 border border-yellow-600/30 backdrop-blur-sm hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300">
		<div className="flex items-start gap-4">
			{icon}
			<div>
				<h3 className="text-2xl font-bold text-yellow-500 mb-4">{title}</h3>
				<div className="text-gray-200 space-y-2">
					{Array.isArray(content) ? (
						<ul className="list-none space-y-2">
							{content.map((item, idx) => (
								<li key={idx} className="flex items-start gap-2">
									<span className="text-yellow-500 mt-1.5">•</span>
									<span>{item}</span>
								</li>
							))}
						</ul>
					) : (
						<p>{content}</p>
					)}
				</div>
			</div>
		</div>
	</div>
);

export default function OutLinePage() {
	return (
		<>
			<DisplayNavigation />
			<div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
				{/* 전시 개요 섹션 */}
				<div className="container mx-auto px-4 pt-24">
					<h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-500 mb-4">
						전시 개요
					</h1>
					<div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-16"></div>

					<div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
						{/* 유물 섹션 */}
						<OverviewSection
							title="유물"
							icon={<svg className="w-12 h-12 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
								<circle cx="12" cy="10" r="3" />
							</svg>}
							content="고대 이집트 맥주 양조 관련 유물 전시"
						/>

						{/* 실감콘텐츠 섹션 */}
						<OverviewSection
							title="실감콘텐츠"
							icon={<svg className="w-12 h-12 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
								<line x1="8" y1="21" x2="16" y2="21" />
								<line x1="12" y1="17" x2="12" y2="21" />
							</svg>}
							content={[
								"다양한 실감콘텐츠를 통해 스토리라인을 이해하고 맥주공정을 체험",
								"쌍방향 콘텐츠 : 범인 지목 콘텐츠 등",
								"디지털 휴먼 : 가상인물 네페르티티 구현",
								"미디어 파사드 : 완성된 맥주 운반 장면 등"
							]}
						/>

						{/* 시식체험 섹션 */}
						<OverviewSection
							title="시식체험"
							icon={<svg className="w-12 h-12 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M17.5 2.5c-1.5 1.5-2 5.5-2 5.5s4-.5 5.5-2s2.5-4 2.5-4-4.5-.5-6 .5z" />
								<path d="M14.5 10L4 20.5" />
								<path d="M6 17l-2 2" />
							</svg>}
							content={[
								"아직 실감미디어 기술로 구현에 한계가 있는 미각을 '맥주 시음＇을 통해 구현",
								"오감 전시에서 다뤄지지 않는 영역 충족",
								"'맥주'라는 주제에 대한 관람객 체험 욕구 충족"
							]}
						/>
					</div>
				</div>

				{/* 전시 방향 섹션 */}
				<div className="container mx-auto px-4 py-24">
					<h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-500 mb-4">
						전시 방향 설정
					</h1>
					<div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-16"></div>

					{/* 이미지 컨테이너 */}
					<div className="max-w-3xl mx-auto">
						<img
							src={image} // 이미지 경로를 실제 경로로 변경해주세요
							alt="전시 방향 설정"
							className="w-full h-auto rounded-lg shadow-lg shadow-yellow-500/10"
						/>
					</div>
				</div>
			</div>
		</>
	);
}