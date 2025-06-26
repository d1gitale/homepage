export function Navbar() {
    return (
        <nav className="flex justify-end mt-3 space-x-3 cursor-pointer md:text-sm uppercase pe-5">
            <p className="hover:bg-black hover:text-white p-1 text-lg">
                Projects
            </p>
            <p className="hover:bg-black hover:text-white p-1 text-lg">
                Contacts
            </p>
        </nav>
    );
}