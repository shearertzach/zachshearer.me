"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { HomeIcon, PencilIcon } from '@heroicons/react/24/solid'
import NavbarIcon from "./navbaricon"
import Link from "next/link"


export default function Navbar() {
    const [showBlur, setShowBlur] = useState(false)

    // Sticky Scroll Listener
    useEffect(() => {
        function handleScroll() {
            const position = window.scrollY
            console.log(position)
            setShowBlur(position > 30)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className={`${showBlur && 'backdrop-blur-lg'} h-16 w-full fixed left-1/2 -translate-x-1/2 transition-all`}>
            <div className={`w-11/12 max-w-screen-md mx-auto flex items-center h-full`}>
                <Link href={'/'}>
                <Image src={'/img/NavbarIco.png'} alt='NavbarIcon' width={35} height={35}/>
                </Link>
                <div className="ml-auto flex gap-5">
                    <NavbarIcon icon={HomeIcon} path="/"/>
                    <NavbarIcon icon={PencilIcon} path="/blogs"/>
                </div>
            </div>
            <div className={`${showBlur ? 'opacity-100' : 'opacity-0'} w-11/12 max-w-screen-lg h-[0.5px] bg-white mx-auto transition-all`}/>
        </header>
    )
}