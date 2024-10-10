import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";
import { LogoutButton } from "./LogoutButton";


// Use async for server-side session fetching
export const Navbar = async () => {
    const session = await getServerAuthSession();

    return (
        <header className='navbar'>
            <div className='navbar-start manrope-bold text-5xl  text-[#e5cfa2] hover:text-[#cda24c] transition-colors duration-300'>
                <Link href='/'>
                    Glance
                </Link>
            </div>
            <div className='navbar-end'>
                <div className='px-5 fira-code-bold text-neutral-500 hover:text-neutral-700 transition-colors duration-300'>
                    <Link href='/dashboard'>
                        Dashboard
                    </Link>
                </div>
                <div className='px-5 fira-code-bold  text-neutral-500 hover:text-neutral-700 transition-colors duration-300'>
                    <Link href='/insights'>
                        Insights
                    </Link>
                </div>
                <div className='px-5 fira-code-bold  text-neutral-500 hover:text-neutral-700 transition-colors duration-300'>
                    <Link href='/fraudcheck'>
                        FraudCheck
                    </Link>
                </div>
                <div className='px-5 fira-code-bold  text-neutral-500 hover:text-neutral-700 transition-colors duration-300'>
                    {session ? (
                            <LogoutButton />
                    ) : (
                        <Link href='/login'>
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};