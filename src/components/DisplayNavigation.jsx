import React, {useState} from 'react';
import {Menu, X, ChevronDown} from 'lucide-react';
import logo from "/src/assets/logo2.png";

const navigation = [
	{
		id: 'info',
		title: '전시',
		items: [
			{id: 'outline', name: '전시 개요', href: '/info/outline'},
			{id: 'story', name: '전시 스토리', href: '/info/story'},
			{id: 'introduce', name: '전시관 소개', href: '/info/introduce'},
			{id: 'operating', name: '운영 시간', href: '/operating'}
		]
	},
	{
		id: 'ticket',
		title: '티켓 예매',
		href: '/ticket',
	},
	{
		id: 'online',
		title: '온라인 전시관',
		items: [
			{id: 'metaverse', name: '메타버스 공간 체험하기', href: 'https://zep.us/play/pnr9l6'},
			{id: 'metaverse-intro', name: '메타버스 튜토리얼 / 소개', href: '/metaverse/intro'},
		]
	},
	{
		id: 'gallery',
		title: '갤러리',
		href: '/gallery',
	}
];

const DesktopDropdownMenu = ({menu}) => (
	<div className="relative group">
		<button className="flex items-center space-x-1 text-gray-700 hover:text-yellow-500 py-2">
			<span>{menu.title}</span>
			<ChevronDown size={16}/>
		</button>
		<div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 rounded-md z-50 top-full">
			{menu.items?.map((item) => (
				<a
					key={item.id}
					href={item.href}
					className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50"
				>
					{item.name}
				</a>
			))}
		</div>
	</div>
);

const MobileDropdownMenu = ({menu, isOpen, onToggle}) => (
	<div className="border-b border-gray-200 last:border-0">
		<button
			className="flex items-center justify-between w-full py-2 text-gray-700"
			onClick={onToggle}
		>
			<span>{menu.title}</span>
			<ChevronDown
				size={16}
				className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
			/>
		</button>
		{isOpen && menu.items && (
			<div className="pl-4 pb-2">
				{menu.items.map((item) => (
					<a
						key={item.id}
						href={item.href}
						className="block py-2 text-sm text-gray-600 hover:text-yellow-500"
					>
						{item.name}
					</a>
				))}
			</div>
		)}
	</div>
);

const MainNavigation = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [openMenus, setOpenMenus] = useState({});

	const toggleMenu = (menuId) => {
		setOpenMenus(prev => ({
			...prev,
			[menuId]: !prev[menuId]
		}));
	};

	return (
		<nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
			<div className="max-w-7xl mx-auto px-7">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<a href={"/display"}>
						<div className="flex-shrink-0">
							<img
								src={logo}
								alt="BASCATARK"
								className="h-14 w-auto"
							/>
						</div>
					</a>
					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navigation.map(menu => (
							menu.items ? (
								<DesktopDropdownMenu key={menu.id} menu={menu}/>
							) : (
								<a
									key={menu.id}
									href={menu.href}
									className="text-gray-700 hover:text-yellow-500"
								>
									{menu.title}
								</a>
							)
						))}
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="text-gray-700"
						>
							{isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMobileMenuOpen && (
				<div className="md:hidden bg-white border-t border-gray-200">
					<div className="px-4 py-2 space-y-1">
						{navigation.map(menu => (
							menu.items ? (
								<MobileDropdownMenu
									key={menu.id}
									menu={menu}
									isOpen={openMenus[menu.id]}
									onToggle={() => toggleMenu(menu.id)}
								/>
							) : (
								<a
									key={menu.id}
									href={menu.href}
									className="block py-2 text-gray-700 hover:text-yellow-500"
								>
									{menu.title}
								</a>
							)
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default MainNavigation;