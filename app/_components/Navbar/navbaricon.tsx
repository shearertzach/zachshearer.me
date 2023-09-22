import Link from "next/link";


export default function NavbarIcon(NavbarIcon: NavbarIcon): JSX.Element {
    return (
        <Link href={NavbarIcon.path}>
            <NavbarIcon.icon className={`w-5 h-5 text-[#d3d6d7] transition-all hover:text-white ${NavbarIcon.classname}`}/>
        </Link>
    )
}