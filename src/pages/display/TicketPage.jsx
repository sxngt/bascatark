import React, { useState } from 'react';
import DisplayNavigation from "../../components/DisplayNavigation.jsx";
import { Calendar, Users, Clock, Ticket } from 'lucide-react';

const TicketOption = ({ title, price, description, selected, onSelect }) => (
	<div
		className={`cursor-pointer p-6 rounded-lg border-2 transition-all duration-300 ${
			selected
				? 'border-yellow-500 bg-gradient-to-br from-yellow-900/30 to-yellow-800/30'
				: 'border-yellow-700/30 bg-gradient-to-br from-yellow-900/10 to-yellow-800/10 hover:border-yellow-600/50'
		}`}
		onClick={onSelect}
	>
		<h3 className="text-2xl font-bold text-yellow-500 mb-2">{title}</h3>
		<p className="text-3xl font-bold text-yellow-400 mb-4">{price}원</p>
		<p className="text-yellow-100/80">{description}</p>
	</div>
);

const TicketPage = () => {
	const [selectedDate, setSelectedDate] = useState('');
	const [selectedTime, setSelectedTime] = useState('');
	const [selectedTicket, setSelectedTicket] = useState(null);
	const [quantity, setQuantity] = useState(1);

	const timeSlots = [
		"10:00", "11:00", "12:00", "13:00", "14:00",
		"15:00", "16:00", "17:00", "18:00", "19:00"
	];

	const tickets = [
		{
			id: 1,
			title: "일반 입장권",
			price: 25000,
			description: "기본 전시 관람 및 맥주 시음 1잔 포함"
		},
		{
			id: 2,
			title: "프리미엄 입장권",
			price: 35000,
			description: "전시 관람, VIP 라운지 이용, 맥주 시음 2잔 포함"
		},
		{
			id: 3,
			title: "패밀리 패키지",
			price: 80000,
			description: "4인 입장권, 맥주 시음 4잔, 기념품 증정"
		}
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
			<DisplayNavigation />

			<div className="container mx-auto px-4 pt-24 pb-16">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
						이집트 맥주 전시 입장권
					</h1>
					<div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
					<p className="text-yellow-100/80 text-lg">고대 이집트의 신비로운 맥주 제조 과정을 체험해보세요</p>
				</div>

				{/* Booking Form */}
				<div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2">
					{/* Left Column - Date & Time Selection */}
					<div className="space-y-8">
						{/* Date Selection */}
						<div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 p-6 rounded-lg border border-yellow-700/30">
							<div className="flex items-center gap-3 mb-4">
								<Calendar className="text-yellow-500" />
								<h2 className="text-2xl font-bold text-yellow-500">날짜 선택</h2>
							</div>
							<input
								type="date"
								className="w-full bg-gray-800 border border-yellow-700/30 rounded px-4 py-2 text-yellow-100"
								value={selectedDate}
								onChange={(e) => setSelectedDate(e.target.value)}
							/>
						</div>

						{/* Time Selection */}
						<div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 p-6 rounded-lg border border-yellow-700/30">
							<div className="flex items-center gap-3 mb-4">
								<Clock className="text-yellow-500" />
								<h2 className="text-2xl font-bold text-yellow-500">시간 선택</h2>
							</div>
							<div className="grid grid-cols-2 md:grid-cols-3 gap-2">
								{timeSlots.map((time) => (
									<button
										key={time}
										className={`py-2 px-4 rounded ${
											selectedTime === time
												? 'bg-yellow-500 text-gray-900'
												: 'bg-gray-800 text-yellow-100 hover:bg-gray-700'
										}`}
										onClick={() => setSelectedTime(time)}
									>
										{time}
									</button>
								))}
							</div>
						</div>

						{/* Quantity Selection */}
						<div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 p-6 rounded-lg border border-yellow-700/30">
							<div className="flex items-center gap-3 mb-4">
								<Users className="text-yellow-500" />
								<h2 className="text-2xl font-bold text-yellow-500">인원 선택</h2>
							</div>
							<div className="flex items-center gap-4">
								<button
									className="px-4 py-2 bg-gray-800 text-yellow-500 rounded hover:bg-gray-700"
									onClick={() => setQuantity(Math.max(1, quantity - 1))}
								>
									-
								</button>
								<span className="text-2xl text-yellow-100">{quantity}</span>
								<button
									className="px-4 py-2 bg-gray-800 text-yellow-500 rounded hover:bg-gray-700"
									onClick={() => setQuantity(quantity + 1)}
								>
									+
								</button>
							</div>
						</div>
					</div>

					{/* Right Column - Ticket Selection */}
					<div className="space-y-8">
						<div className="flex items-center gap-3 mb-4">
							<Ticket className="text-yellow-500" />
							<h2 className="text-2xl font-bold text-yellow-500">티켓 선택</h2>
						</div>
						{tickets.map((ticket) => (
							<TicketOption
								key={ticket.id}
								{...ticket}
								selected={selectedTicket?.id === ticket.id}
								onSelect={() => setSelectedTicket(ticket)}
							/>
						))}

						{/* Book Button */}
						<button
							className="w-full py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-gray-900 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 mt-8"
							onClick={() => {
								// Handle booking logic
								console.log('Booking:', { selectedDate, selectedTime, selectedTicket, quantity });
							}}
						>
							예매하기
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TicketPage;