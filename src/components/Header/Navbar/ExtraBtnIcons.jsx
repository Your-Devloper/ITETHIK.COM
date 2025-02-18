import { Button } from '@/components/ui/button';
import { Search, MessagesSquare, Sun, Moon } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useTheme } from '@/components/utils/theme-provider';

export default function ExtraBtnIcons() {
	const { theme, setTheme } = useTheme();
	return (
		<div className='flex items-center justify-center gap-4'>
			<Popover>
				<PopoverTrigger asChild>
					<Button variant='outline' size='icon' className='cursor-pointer'>
						<Search />
					</Button>
				</PopoverTrigger>
				<PopoverContent className='mt-4'>
					<Command>
						<CommandInput placeholder='Get recent updates or Search' />
						<CommandList>
							<CommandEmpty>
								<div className='flex flex-col items-center justify-center gap-2'>
									<span>No resources found</span>
									<Button variant='outline' className='cursor-pointer'>
										<MessagesSquare />
										Suggest Us
									</Button>
								</div>
							</CommandEmpty>
							<CommandGroup heading='Suggestions'>
								<CommandItem>Recent Blog</CommandItem>
								<CommandItem>Recent Project</CommandItem>
								<CommandItem>Recent Job</CommandItem>
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>

			<Button variant='outline' size='icon' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='cursor-pointer'>
				{theme === 'dark' ? <Sun /> : <Moon />}
			</Button>
		</div>
	);
}
