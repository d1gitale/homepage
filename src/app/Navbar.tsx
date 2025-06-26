export function Navbar() {
    return (
        <nav className="flex justify-end items-center h-[10vh] space-x-3 cursor-pointer md:text-sm uppercase pe-10">
            <p className="hover:bg-black hover:text-white p-1 text-lg">
                Projects
            </p>
            <p className="hover:bg-black hover:text-white p-1 text-lg">
                Contacts
            </p>
        </nav>
    );
}