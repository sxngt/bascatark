import React, {useState} from 'react';
import {Menu, X, ChevronDown} from 'lucide-react';
import logo from "/src/assets/logo.png";

const navigation = [
	{
		id: 'attractions',
		title: '즐길거리',
		items: [
			{id: '1f', name: '1F 체험존 | 부바스티스', href: '/attractions/1f'},
			{id: 'b1', name: 'B1 힐링존 | 캣아크', href: '/attractions/b1'},
			{id: 'performance', name: '공연 및 패스티벌', href: '/attractions/performance'},
			{id: 'food', name: '푸드/쇼핑', href: '/attractions/food'}
		]
	},
	{
		id: 'guide',
		title: '이용가이드',
		items: [
			{id: 'operation', name: '운영/운휴', href: '/guide/operation'},
			{id: 'info', name: '파크 이용안내', href: '/guide/info'},
			{id: 'facilities', name: '편의시설/제도', href: '/guide/facilities'},
			{id: 'map', name: '가이드맵', href: '/guide/map'}
		]
	},
	{
		id: 'about',
		title: '바스캣아크 이야기',
		href: '/about'
	},
	{
		id: 'characters',
		title: '캐릭터 소개',
		href: '/characters'
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
					<a href={"/"}>
						<div className="flex-shrink-0">
							<img
								src={logo}
								alt="BASCATARK"
								className="h-8 w-auto"
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