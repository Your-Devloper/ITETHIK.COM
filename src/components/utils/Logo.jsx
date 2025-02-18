import { Link } from 'react-router-dom';
import SiteLogo from '@/assets/images/logo.webp';

export default function Logo() {
	return (
		<Link to='/'>
			<img src={SiteLogo} alt='Logo' className='w-30' />
		</Link>
	);
}
