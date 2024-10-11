import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";
import { LogoutButton } from "./LogoutButton";



// navbar component
export const Navbar = async () => {
    const session = await getServerAuthSession();

    return (
        <>
            <header className='navbar z-50 relative'>
                <div className='navbar-start manrope-bold text-5xl  text-[#e5cfa2] hover:text-[#cda24c] transition-colors duration-300 mx-4'>
                    <Link href='/'>
                        Glance
                    </Link>
                </div>

                {/* TODO different colors can be used here, use tailwind color functionality first (text-[color]-[some amount]) */}

                <div className='navbar-center'>
                    <div className='px-5 fira-code-bold text-neutral-content hover:text-neutral-600 transition-colors duration-300 text-sm md:text-base lg:text-lg'>
                        <Link href='/dashboard'>
                            Dashboard
                        </Link>
                    </div>
                    <div className='px-5 fira-code-bold  text-neutral-content hover:text-neutral-600 transition-colors duration-300 text-sm md:text-base lg:text-lg'>
                        <Link href='/insights'>
                            Insights
                        </Link>
                    </div>
                    <div className='px-5 fira-code-bold  text-neutral-content hover:text-neutral-600 transition-colors duration-300 text-sm md:text-base lg:text-lg'>
                        <Link href='/fraudcheck'>
                            FraudCheck
                        </Link>
                    </div>

                </div>

                <div className="navbar-end">
                    <div className='px-5 fira-code-bold  text-neutral-content hover:text-neutral-600 transition-colors duration-300 text-sm md:text-base lg:text-lg'>
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
            <hr className="border-t border-gray-300 mx-5 my-2.5" />

        </>
    );
};