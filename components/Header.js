import Link from "next/link";
function Header(){
    return(
        <header className="flex justify-between p-5  max-w-7xl mt-auto">
        <div className="">
           <Link href="/">
            <img className="w-44 object-contain cursor-pointer" alt="" src="https://links.papareact.com/yvf"/>
           </Link>
        </div>
        <div className="hidden md:inline-flex items-center space-x-5">
            <h3>Home</h3>
            <h3>Portofolio</h3>
            <h3 className="text-white bg-red-600 px-4 py-1 rounded-full">Contact</h3>
        </div>
        <div className="flex items-center space-x-5 text-black-600">
            <h3>Sign In</h3>
            <h3 className="border px-6 py-1 rounded-full border-black-600">Get Started</h3>
        </div>
        </header>
    )
}
export default Header