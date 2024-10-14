import ApplicationLogo from "@/Components/ApplicationLogo";
import React, { useState } from "react";
import { Head, router } from "@inertiajs/react";
import Faq from "@/Components/Faq";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import HeroSlider from "@/Components/HeroSlider";

export default function Welcome(props) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const startGiving = () => {
        router.visit(route("register"));
    };

    return (
        <>
            <Head title="Home"></Head>
            <div className="overflow-x-hidden bg-gray-50">
                <header className="bg-base-100 shadow-lg sticky top-0 py-4 md:py-6 z-50">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between">
                            <div className="flex-shrink-0">
                                <a
                                    href={route("home")}
                                    title=""
                                    className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 items-center gap-2"
                                >
                                    <ApplicationLogo
                                        width="40"
                                        className="opacity-90"
                                    ></ApplicationLogo>

                                    <div className="flex flex-col">
                                        <h1 className="text-3xl text-gray-700">
                                            {props.appName}
                                        </h1>
                                    </div>
                                </a>
                            </div>

                            <div className="flex lg:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    type="button"
                                    className="text-gray-900"
                                >
                                    <svg
                                        className="w-7 h-7"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        ></path>
                                    </svg>
                                </button>
                            </div>

                            <div className="hidden lg:absolute lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
                                {props.navLinks.map((item, index) => {
                                    const active = route().current(item.route);
                                    let activeClass =
                                        "font-medium text-gray-500";
                                    if (active)
                                        activeClass =
                                            "font-medium text-gray-900";
                                    return (
                                        <a
                                            key={index}
                                            href={route(item.route)}
                                            title=""
                                            className={`text-base ${activeClass} transition-all duration-200 rounded focus:outline-none font-pj hover:text-gray-600  focus:ring-1 focus:ring-gray-700 focus:ring-offset-2`}
                                        >
                                            {" "}
                                            {item.title}{" "}
                                        </a>
                                    );
                                })}
                            </div>

                            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-4"></div>
                        </div>
                    </div>

                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden"
                        }
                    >
                        <div className="pt-2 pb-3 space-y-1">
                            {props.navLinks.map((item, index) => {
                                return (
                                    <ResponsiveNavLink
                                        key={index}
                                        href={route(item.route)}
                                        active={route().current(item.route)}
                                    >
                                        {item.title}
                                    </ResponsiveNavLink>
                                );
                            })}
                        </div>
                    </div>
                </header>

                <section className="py-8 md:py-12 lg:pt-10 xl:pb-0 h-auto">
                    <div className="flex mb-6">
                        <p className="select-none mx-auto w-auto px-4 py-2 text-base text-center text-gray-500 border border-gray-200 rounded-full font-pj">
                            Dari Dominikan, Untuk Semua
                        </p>
                    </div>
                    <HeroSlider></HeroSlider>
                </section>

                <section className="mt-0 md:mt-6 py-2">
                    <div className="max-w-5xl px-6 mx-auto text-center select-none">
                        <p className="max-w-2xl mx-auto mt-6 text-md leading-7 text-gray-600 font-inter">
                            Torch menggunakan gambar yang sama sebagai simbol
                            dari cahaya Injil yang memurnikan yang harus menyala
                            di dalam hati kita dan menerangi mereka yang kepada
                            mereka kita diutus untuk berkhotbah.
                        </p>
                        <button
                            className="btn btn-warning btn-lg font-bold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 mt-6"
                            onClick={() => startGiving()}
                        >
                            <FontAwesomeIcon
                                icon={faHandHoldingUsd}
                            ></FontAwesomeIcon>
                            Gabung sebagai Donatur
                        </button>
                    </div>
                </section>

                <div className="mt-24 md:mt-12">
                    <img
                        className="object-cover object-top w-full h-48 md:h-96 mx-auto scale-150 2xl:max-w-screen-2xl xl:scale-100"
                        src="images/hero.jpg"
                        alt=""
                    />
                </div>
                <Faq></Faq>

                <section className="px-4 pb-12 mx-auto">
                    <p className="select-none text-center text-gray-600 text-sm">
                        Copyright © Yayasan Martinus de Porres 2024
                    </p>
                </section>
            </div>
        </>
    );
}
