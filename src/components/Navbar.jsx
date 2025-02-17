export default function Navbar() {
    return <nav className="flex justify-between items-center py-3 px-6 border-b border-gray-200 z-20 fixed w-full  bg-white">
        <img src="/blue-logo-border.png" alt="logo" className="h-10" />

        <div className="flex font-bold space-x-4">
            <a href="/" className="hover:text-[#2596BE]" >Home</a>
            <a href="/about" className="hover:text-[#2596BE]" >About</a>
            <a href="/services" className="hover:text-[#2596BE]" >Services</a>
            <a href="/projects" className="hover:text-[#2596BE]" >Projects</a>
            <a href="/contact" className="hover:text-[#2596BE]" >Contact</a>
        </div>

        <a href="/contact" className="font-bold bg-[#31addb] px-3 py-2 text-white rounded-md cursor-pointer">Book Now!</a>

    </nav>
}