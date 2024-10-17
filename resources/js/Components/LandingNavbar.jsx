import React, { useState } from "react";
import NavigationItem from "./NavigationItem";
import { navLinks } from "@/Constants/Navigation";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import ApplicationLogo from "./ApplicationLogo";
import { usePage } from "@inertiajs/react";

const LandingNavbar = () => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const props = usePage().props;

    return (
        <>
            <header className="bg-white shadow-lg sticky top-0 py-4 md:py-6 z-50">
                <div className="flex justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <a
                                href={route("home")}
                                className="flex items-center gap-2"
                            >
                                <ApplicationLogo
                                    width="64"
                                    className="opacity-90"
                                />
                                <h1 className="text-xl text-gray-700">
                                    {props.appName}
                                </h1>
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        {navLinks.map((link, index) => (
                            <NavigationItem
                                key={index}
                                href={link.href}
                                label={link.label}
                                subLinks={link.subLinks}
                            />
                        ))}
                    </div>
                    <div className="-me-2 flex items-center md:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink
                            href={route("home")}
                            active={route().current("home")}
                        >
                            Home
                        </ResponsiveNavLink>
                    </div>
                </div>
            </header>
        </>
    );
};

export default LandingNavbar;
