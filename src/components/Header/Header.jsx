import Logo from '../utils/Logo';
import ExtraBtnIcons from './Navbar/ExtraBtnIcons';
import Navbar from './Navbar/Navbar';

export default function Header() {
	return (
		<header className='container mx-auto flex items-center justify-between px-16 py-5 border-b bg-transparent'> 
			<Logo />
			<Navbar />
			<ExtraBtnIcons />
		</header>
	);
}
