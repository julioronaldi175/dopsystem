import ApplicationLogo from "@/Components/ApplicationLogo";
import { Head } from "@inertiajs/react";
import Faq from "@/Components/Faq";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import HeroSection from "@/Components/HeroSection";
import LandingNavbar from "@/Components/LandingNavbar";
import LandingLayout from "@/Layouts/LandingLayout";

export default function Home(props) {
    return (
        <>
            <LandingLayout props={props}>
                {/* Hero Section */}
                <HeroSection
                    title="We are"
                    subtitle="your trusted partner in delivering excellence."
                    description={
                        <>
                            <p>
                                🚀 Meningkatkan Bisnis Anda dengan Strategi
                                Online Terbaik
                            </p>
                            <p>📈 SEO, PPC, Social Media, Content Marketing</p>
                            <p>Konsultasi Gratis dengan Hasil yang Terukur</p>
                        </>
                    }
                    primaryAction={{
                        text: "Daftar Sekarang",
                        link: route("landing.joinus"),
                    }}
                    secondaryAction={{
                        text: "Pelajari selengkapnya",
                        link: route("landing.about"),
                    }}
                    imageUrl="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                />

                {/* Section Instagram */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Follow Us on Instagram
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Lihat update terbaru kami di Instagram
                        </p>

                        {/* Instagram Embed */}
                        <div className="mt-6">
                            <div className="md:max-w-5xl md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                                <iframe
                                    src="https://www.instagram.com/p/DAP-Yocz1cf/embed"
                                    width="100%"
                                    height="480"
                                    allowTransparency="true"
                                    allow="encrypted-media"
                                    className="mx-auto"
                                ></iframe>
                                <iframe
                                    src="https://www.instagram.com/p/C_t-48bzQzO/embed"
                                    width="100%"
                                    height="480"
                                    allowTransparency="true"
                                    allow="encrypted-media"
                                    className="mx-auto"
                                ></iframe>
                            </div>
                        </div>
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
                <section className="py-12">
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
                <section className="py-12">
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
            </LandingLayout>
        </>
    );
}
