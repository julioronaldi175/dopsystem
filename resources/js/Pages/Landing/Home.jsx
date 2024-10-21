import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartLine,
    faGlobe,
    faUsersCog,
} from "@fortawesome/free-solid-svg-icons";
import HeroSection from "@/Components/Landing/HeroSection";
import LandingLayout from "@/Layouts/LandingLayout";
import heroImage from "@/Images/dop_office.jpg";
import FeatureGrid from "@/Components/Landing/FeatureGrid";
import { FEATURES_MISSIONS } from "@/Constants/Features";
import Carousel from "@/Components/Carousel";
import PricingVideoReels from "@/Components/Pricing/PricingVideoReels";
import PricingDigitalMarketing from "@/Components/Pricing/PricingDigitalMarketing";
import strategyImage from "@/Images/branding.png";
import BusinessStrategyTimeline from "@/Components/Landing/BusinessStrategyTimeline";

export default function Home(props) {
    const slidesPricing = [PricingVideoReels, PricingDigitalMarketing];
    return (
        <>
            <LandingLayout props={props}>
                {/* Hero Section */}
                <HeroSection
                    title="Kami adalah"
                    subtitle="mitra terpercaya Anda dalam memberikan keunggulan."
                    description={
                        <>
                            <p>
                                Kami menawarkan solusi SEO, PPC, Sosial Media,
                                Web Development & Maintenance, dan Pemasaran
                                Konten. Konsultasi Awal Gratis! Begitu pula
                                dengan Hasil yang terukur.
                            </p>
                        </>
                    }
                    primaryAction={{
                        text: "Lihat Penawaran",
                        link: route("landing.services"),
                    }}
                    secondaryAction={{
                        text: "Pelajari selengkapnya",
                        link: route("landing.about"),
                    }}
                    imageUrl={heroImage}
                />

                {/* Visi */}
                <section className="py-16 bg-gray-50 select-none">
                    <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
                        {/* Vision */}
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-semibold text-gray-900">
                                Visi Kami
                            </h2>
                            <p className="mt-4 text-lg text-gray-400">
                                Memberdayakan teknologi digital dengan
                                meningkatkan kinerja dan memaksimalkan sumber
                                daya yang tersedia demi kesejahteraan bersama.
                            </p>
                        </div>
                        <div className="text-gray-400 text-6xl flex items-center justify-center gap-8">
                            <FontAwesomeIcon
                                icon={faUsersCog}
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                                icon={faChartLine}
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                        </div>
                    </div>
                </section>

                {/* Section: Mission */}
                <FeatureGrid
                    features={FEATURES_MISSIONS}
                    title="Misi Kami"
                ></FeatureGrid>

                {/* Section: Branding */}
                <section className="py-16 bg-gray-50 select-none">
                    <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
                        {/* Vision */}
                        <div className="text-center md:text-end">
                            <h2 className="text-3xl font-semibold text-gray-900">
                                Strategi Bisnis yang Baik itu Seperti Apa?
                            </h2>
                            <p className="mt-4 text-lg text-gray-400">
                                Lihat bagaimana konsep keseimbangan antara
                                Branding yang baik, Produk yang baik, dan
                                Marketing yang baik, maka akan menghasilkan
                                brand yang sustainable.
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={strategyImage} alt="" width={256} />
                        </div>
                        <div className=" p-4 col-span-2">
                            <BusinessStrategyTimeline></BusinessStrategyTimeline>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center select-none">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Bagaimana Awal Mula Semua Ini?
                        </h2>
                        <p className="max-w-4xl mx-auto text-lg mt-4 text-gray-400">
                            Banyak perusahaan, terutama yang baru berkembang
                            atau usaha kecil dan menengah, menghadapi tantangan
                            dalam mengelola branding, pemasaran digital, dan
                            pengembangan produk secara efektif.
                            <br />
                            <br />
                            Dengan keterbatasan sumber daya dan kurangnya
                            pengetahuan tentang alat-alat digital, mereka
                            seringkali kesulitan untuk memaksimalkan potensi
                            pasar mereka. Oleh karena itu, ada kebutuhan yang
                            mendesak untuk jasa yang dapat memberikan solusi
                            menyeluruh dalam bidang-bidang tersebut.
                        </p>

                        <h2 className="mt-6 text-xl font-bold text-gray-400">
                            Maka dengan Itu Kami Menawarkan ...
                        </h2>

                        <div className="relative my-12 rounded-xl shadow-lg overflow-hidden">
                            {/* Background pattern */}
                            <div
                                className="absolute inset-0 pattern-zigzag-3d pattern-indigo-400 pattern-bg-white
  pattern-size-24 pattern-opacity-10"
                            ></div>

                            {/* Content goes here */}
                            <div className="relative z-10">
                                <Carousel
                                    slides={slidesPricing}
                                    autoSlideInterval={25000}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Instagram */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Instagram Kami
                        </h2>
                        <p className="text-lg mt-4 text-gray-400">
                            Agar tidak ketinggalan informasi, lihat dan ikuti
                            perkembangan terbaru dari kami di Instagram
                        </p>

                        {/* Instagram Embed */}
                        <div className="my-12">
                            <div className="md:max-w-3xl md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                                <iframe
                                    scro
                                    src="https://www.instagram.com/p/DAP-Yocz1cf/embed"
                                    width="100%"
                                    height="540"
                                    allowTransparency="true"
                                    allow="encrypted-media"
                                    className="mx-auto"
                                ></iframe>
                                <iframe
                                    src="https://www.instagram.com/p/C_t-48bzQzO/embed"
                                    width="100%"
                                    height="540"
                                    allowTransparency="true"
                                    allow="encrypted-media"
                                    className="mx-auto"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </LandingLayout>
        </>
    );
}
