'use client'

import React, {useState} from 'react'
import {FileJson2, Menu, Search, ShoppingCart, X} from 'lucide-react'
import {Dialog, DialogBackdrop, DialogPanel,} from '@headlessui/react'
import Link from 'next/link'
import {signOut, useSession} from "next-auth/react"
import {Button} from "@/components/ui/button";
import NavUser from "@/components/navbar/nav-user";
import {AuthUser} from "@/types/auth";


const navigation = {
    pages: [
        {name: 'Products', href: '/products'},
        {name: 'Posts', href: '/posts'},
    ],
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const {data: session} = useSession()
    console.log(session?.user.username)
    const user = session?.user as AuthUser
    console.log(user)


    return (
        <div>
            {/* Mobile menu */}
            <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                />

                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
                    >
                        <div className="flex px-4 pt-5 pb-2">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                            >
                                <span className="absolute -inset-0.5"/>
                                <span className="sr-only">Close menu</span>
                                <X aria-hidden="true" className="size-6"/>
                            </button>
                        </div>

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            {navigation.pages.map((page) => (
                                <div key={page.name} className="flow-root">
                                    <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                        {page.name}
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            <div className="flow-root">
                                {session ? (<NavUser user={user} signOut={signOut}/>) : (
                                    <Link href="/signin" className="-m-2 block p-2 font-medium text-gray-900">
                                        Sign in
                                    </Link>
                                )}
                            </div>
                        </div>

                    </DialogPanel>
                </div>
            </Dialog>

            <header className="relative overflow-hidden">
                {/* Top navigation */}
                <nav aria-label="Top" className="relative z-20 bg-white/90 backdrop-blur-xl backdrop-filter">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                            >
                                <span className="absolute -inset-0.5"/>
                                <span className="sr-only">Open menu</span>
                                <Menu aria-hidden="true" className="size-6"/>
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/">
                                    <span className="sr-only">Your Company</span>
                                    <FileJson2/>
                                </Link>
                            </div>

                            <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {navigation.pages.map((page) => (
                                        <Link
                                            key={page.name}
                                            href={page.href}
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                        >
                                            {page.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="ml-auto flex items-center">
                                <div className="hidden md:flex md:flex-row md:gap-4 md:items-center">
                                    {session ?
                                        (<NavUser user={user} signOut={signOut}/>) :
                                        (<Link href="/signin">
                                            <Button>Sign In</Button>
                                        </Link>)}
                                </div>


                                {/* Search */}
                                <div className="flex lg:ml-6">
                                    <Link href="#" className="p-2 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Search</span>
                                        <Search aria-hidden="true" className="size-6"/>
                                    </Link>
                                </div>

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <Link href="#" className="group -m-2 flex items-center p-2">
                                        <ShoppingCart
                                            aria-hidden="true"
                                            className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                                        />
                                        <span
                                            className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                        <span className="sr-only">items in cart, view bag</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
