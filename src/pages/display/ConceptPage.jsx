import React from 'react';
import DisplayNavigation from "../../components/DisplayNavigation.jsx";
import { Scroll, Crown, User, Search, Target, Star } from 'lucide-react';

const StorySection = ({ icon: Icon, title, content }) => (
	<div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 p-6 rounded-lg border border-yellow-700/30 hover:border-yellow-600/50 transition-all duration-300">
		<div className="flex items-start gap-4">
			<div className="p-3 bg-yellow-500/10 rounded-lg">
				<Icon size={24} className="text-yellow-500" />
			</div>
			<div>
				<h3 className="text-xl font-bold text-yellow-500 mb-3">{title}</h3>
				<p className="text-yellow-100/80 leading-relaxed">{content}</p>
			</div>
		</div>
	</div>
);

const ConceptPage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
			<DisplayNavigation />

			<div className="container mx-auto px-4 pt-24 pb-16">
				{/* Header */}
				<h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-500 mb-4">
					전시 스토리
				</h1>
				<div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6"></div>

				{/* Main character introduction */}
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h2 className="text-2xl text-yellow-400 font-bold mb-4">
						『고대 이집트 맥주의 전설』
					</h2>
					<p className="text-yellow-100/80 text-lg leading-relaxed">
						성공한 맥주 양조업자 네페르티티의 이야기에 오신 것을 환영합니다
					</p>
				</div>

				{/* Story Timeline */}
				<div className="max-w-4xl mx-auto grid gap-6">
					<StorySection
						icon={Crown}
						title="성공한 양조업자 네페르티티"
						content="네페르티티는 하토르 축제에 맥주를 납품할 정도로 명성을 쌓은 성공한 맥주 양조업자입니다."
					/>

					<div className="w-1 h-8 bg-gradient-to-b from-yellow-500/50 to-transparent mx-auto"></div>

					<StorySection
						icon={Scroll}
						title="왕실의 특별 요청"
						content="어느 날, 파라오의 시종이 찾아와 왕실을 위한 특별한 맥주를 양조하라고 요청합니다."
					/>

					<div className="w-1 h-8 bg-gradient-to-b from-yellow-500/50 to-transparent mx-auto"></div>

					<StorySection
						icon={Search}
						title="사라진 레시피"
						content="축제를 앞두고 양조의 핵심인 레시피가 사라지는 충격적인 사건이 발생합니다."
					/>

					<div className="w-1 h-8 bg-gradient-to-b from-yellow-500/50 to-transparent mx-auto"></div>

					<StorySection
						icon={User}
						title="관람객의 역할"
						content="관람객은 네페르티티의 조수가 되어 맥주를 양조하며 레시피를 찾고, 사건의 범인을 밝혀야 합니다."
					/>

					<div className="w-1 h-8 bg-gradient-to-b from-yellow-500/50 to-transparent mx-auto"></div>

					<StorySection
						icon={Target}
						title="충격적인 진실"
						content="여러 단서를 통해 밝혀지는 진실은 레시피를 훔친 범인이 처음 찾아왔던 파라오의 시종이라는 것입니다. 그는 레시피를 경쟁 양조업자에게 팔아넘기려 했던 산업 스파이였습니다."
					/>

					<div className="w-1 h-8 bg-gradient-to-b from-yellow-500/50 to-transparent mx-auto"></div>

					<StorySection
						icon={Star}
						title="축제의 성공"
						content="관람객은 네페르티티와 함께 사건을 해결하고 하토르 축제를 성공적으로 완수하게 됩니다."
					/>
				</div>
			</div>
		</div>
	);
};

export default ConceptPage;