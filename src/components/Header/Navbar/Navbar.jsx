import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className='flex items-center justify-center'>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<NavLink to='/'>Home</NavLink>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<NavLink to='/about'>About</NavLink>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<NavLink to='/services'>Services</NavLink>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<NavLink to='/projects'>Projects</NavLink>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<NavLink to='/blogs'>Blogs</NavLink>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<NavLink to='/contact'>Contact</NavLink>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>More</NavigationMenuTrigger>
						<NavigationMenuContent>
							<NavigationMenuLink asChild>
								<NavLink to='/jobs'>Jobs</NavLink>
							</NavigationMenuLink>

							<NavigationMenuLink asChild>
								<NavLink to='/faq'>FAQ</NavLink>
							</NavigationMenuLink>

							<NavigationMenuLink asChild>
								<NavLink to='/teams'>Teams</NavLink>
							</NavigationMenuLink>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</nav>
	);
}
