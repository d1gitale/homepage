export function Navbar() {
    return (
        <nav className="flex justify-end items-center h-[10vh] space-x-3 cursor-pointer text-sm md:text-lg uppercase pe-5 md:pe-10">
            <a className="hover:bg-black hover:text-white active:bg-black active:text-white p-1" href="#projects">
                Projects
            </a>
            <a className="hover:bg-black hover:text-white active:bg-black active:text-white p-1" href="#contacts">
                Contacts
            </a>
        </nav>
    );
}