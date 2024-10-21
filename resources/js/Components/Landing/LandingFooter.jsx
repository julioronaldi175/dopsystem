import { usePage } from "@inertiajs/react";
import React from "react";
import ApplicationLogo from "../ApplicationLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const LandingFooter = () => {
    const props = usePage().props;
    return (
        <footer className="bg-[#1A1D2B]">
            <div className="container mx-auto p-0 md:p-8 xl:px-0">
                <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div className="select-none space-y-4">
                            <div>
                                <a href="/">
                                    <div className="flex items-center space-x-2 text-2xl font-medium">
                                        <span>
                                            <ApplicationLogo
                                                width={64}
                                            ></ApplicationLogo>
                                        </span>
                                        <span className="text-white">
                                            {props.appName}
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div className="max-w-md pr-16 text-md text-gray-200">
                                {props.appDesc}
                            </div>
                            <div className="flex space-x-2">
                                <a
                                    href="https://www.youtube.com/channel/UCuDZcp1SaeRr_FYH-N3vVFw"
                                    target="_blank"
                                    className="text-gray-200 hover:text-gray-200"
                                >
                                    <span className="sr-only">Youtube</span>

                                    <FontAwesomeIcon
                                        icon={faYoutube}
                                        className="w-6 h-6"
                                    ></FontAwesomeIcon>
                                </a>
                                <a
                                    href="https://instagram.com/digital.oborperubahan"
                                    target="_blank"
                                    className="text-gray-200 hover:text-gray-200"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        className="w-6 h-6"
                                    ></FontAwesomeIcon>
                                </a>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-md font-semibold leading-6 text-white">
                                    Sumber Daya
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a
                                            href={route("blog.home")}
                                            className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={route("landing.pricing")}
                                            className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                        >
                                            Harga Layanan
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={route("landing.privacy")}
                                            className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                        >
                                            Kebijakan Privasi
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-md font-semibold leading-6 text-white">
                                    Agensi
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a
                                            href={route("landing.about")}
                                            className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                        >
                                            Tentang Kami
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={route("landing.joinus")}
                                            className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                        >
                                            Pengajuan Kerjasama
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={route("landing.contact")}
                                            className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                        >
                                            Kontak Kami
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="select-none mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} {props.appCompany}. All
                            rights reserved.
                        </p>
                        {props.appAddress && (
                            <p className="text-gray-400 text-xs">
                                {props.appAddress}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default LandingFooter;
