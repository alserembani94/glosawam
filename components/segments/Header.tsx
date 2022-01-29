import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface HeaderProps {

}

const pages = [
    {
        href: "/",
        label: "Muka",
    },
    {
        href: "/undian-pengistilahan",
        label: "Undian Pengistilahan",
    },
    {
        href: "/cadang-terjemah",
        label: "Cadang Terjemah",
    },
    {
        href: "/tentang-glosawam",
        label: "Tentang Glosawam",
    },
];

const Header: React.FC<HeaderProps> = () => {
    const router = useRouter();

    return (
        <header className="flex flex-row gap-4 justify-between px-8 py-4 w-full bg-slate-50 items-center sticky top-0 shadow-sm">
            <Link href="/">
                <a>
                    <Image
                        src="/vercel.svg"
                        alt="Logo"
                        width={100}
                        height={40}
                    />
                </a>
            </Link>

            <nav className="flex flex-row gap-6">
                {pages.map(({ href, label }) => (
                    <Link href={href} key={label}>
                        <a className={`text-slate-600 hover:text-slate-200 ${router.pathname === href ? 'text-violet-800 font-bold' : ''}`}>
                            {label}
                        </a>
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;