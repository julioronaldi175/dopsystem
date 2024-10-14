import ApplicationLogo from "@/Components/ApplicationLogo";
import { Head } from "@inertiajs/react";
import Faq from "@/Components/Faq";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";

export default function Home(props) {
    return (
        <>
            <Head title="Landing Page" />
            <div className="overflow-x-hidden bg-gray-50">
                {/* Header */}
                <header className="bg-white shadow-lg sticky top-0 py-4 md:py-6 z-50">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between">
                            <div className="flex-shrink-0">
                                <a
                                    href={route("home")}
                                    className="flex items-center gap-2"
                                >
                                    <ApplicationLogo
                                        width="40"
                                        className="opacity-90"
                                    />
                                    <h1 className="text-3xl text-gray-700">
                                        {props.appName}
                                    </h1>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold text-gray-800">
                            Welcome to {props.appName}
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Your trusted partner in delivering excellence.
                        </p>
                    </div>
                </section>

                {/* Visi Misi */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-5xl mx-auto text-center px-4">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Our Vision & Mission
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Our vision is to provide the best services to our
                            clients and help them achieve success.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Our mission is to deliver innovative solutions that
                            drive results.
                        </p>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Our Pricing
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Explore our flexible pricing options tailored to
                            meet your needs.
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Contact Us
                        </h2>
                        <div className="mt-4 space-y-4">
                            <p className="text-gray-600">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="mr-2"
                                />
                                info@yourcompany.com
                            </p>
                            <p className="text-gray-600">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="mr-2"
                                />
                                +62 123 456 789
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pengajuan Kerja Sama */}
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Pengajuan Kerja Sama
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Interested in working with us? Fill out our
                            collaboration form!
                        </p>
                        <button className="mt-6 btn btn-primary">
                            <FontAwesomeIcon
                                icon={faHandshake}
                                className="mr-2"
                            />
                            Ajukan Kerja Sama
                        </button>
                    </div>
                </section>

                {/* Footer */}
                <section className="px-4 py-6 bg-gray-100 text-center select-none">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} {props.appCompany}. All
                        rights reserved.
                    </p>
                    {props.appAddress && (
                        <p className="text-gray-600 text-xs">
                            {props.appAddress}
                        </p>
                    )}
                </section>
            </div>
        </>
    );
}
