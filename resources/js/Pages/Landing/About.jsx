import ApplicationLogo from "@/Components/ApplicationLogo";
import LandingLayout from "@/Layouts/LandingLayout";
import {
    faChalkboardTeacher,
    faChartLine,
    faGlobe,
    faHandshake,
    faSeedling,
    faUsers,
    faUsersCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import image1 from "@/Images/marketing1.jpg";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

import officeImage from "@/Images/dop_office.jpg";

export default function About(props) {
    return (
        <LandingLayout props={props}>
            {/* Section 1: Introduction */}
            <section className="pb-16 pt-8 md:py-16 bg-white select-none">
                <div className="max-w-5xl mx-auto text-center px-6">
                    {/* Company Logo */}
                    <div className="grid md:grid-cols-2 items-center justify-center mb-8">
                        <ApplicationLogo
                            noText={false}
                            className="mx-auto w-auto md:h-40 md:w-auto"
                        ></ApplicationLogo>
                        <div className="mt-4 md:mt-0 flex justify-center items-center">
                            <img
                                className="w-full md:w-[80%] h-40 md:h-64 object-cover rounded-xl"
                                src={officeImage}
                                alt=""
                            />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900">
                        Tentang Kami
                    </h1>
                    <p className="mt-6 text-balance md:text-center md:text-xl text-gray-600 leading-relaxed">
                        Di era digital yang terus berkembang, kami di Digital
                        Obor Perubahan percaya bahwa teknologi adalah kunci
                        untuk memberdayakan masyarakat dan meningkatkan
                        kesejahteraan bersama.
                        <br />
                        <br />
                        Kami berdiri untuk membantu bisnis, instansi, dan
                        komunitas lokal dalam mengoptimalkan potensi teknologi
                        digital.
                    </p>
                    <p className="mt-6">
                        <a
                            href="/files/profile_dop.pdf"
                            download
                            className="inline-block px-6 py-3 md:text-lg bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500"
                        >
                            Unduh Profil Digital Obor Perubahan
                        </a>
                    </p>
                    <div className="w-full flex gap-2 space-x-2 justify-center mt-6">
                        <a
                            href="https://www.youtube.com/channel/UCuDZcp1SaeRr_FYH-N3vVFw"
                            target="_blank"
                            className="text-gray-300 hover:text-gray-500"
                        >
                            <span className="sr-only">Youtube</span>

                            <FontAwesomeIcon
                                icon={faYoutube}
                                className="w-8 h-8"
                            ></FontAwesomeIcon>
                        </a>
                        <a
                            href="https://instagram.com/digital.oborperubahan"
                            target="_blank"
                            className="text-gray-300 hover:text-gray-500"
                        >
                            <span className="sr-only">Instagram</span>
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="w-8 h-8"
                            ></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
            </section>

            {/* Section 2: Vision & Mission */}
            <section className="py-16 bg-gray-50 select-none">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
                    {/* Vision */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-semibold text-gray-900">
                            Visi Kami
                        </h2>
                        <p className="mt-4 text-lg text-gray-400">
                            Memberdayakan teknologi digital dengan meningkatkan
                            kinerja dan memaksimalkan sumber daya yang tersedia
                            demi kesejahteraan bersama.
                        </p>
                    </div>
                    <div className="text-gray-400 text-6xl flex items-center justify-center gap-8">
                        <FontAwesomeIcon icon={faUsersCog}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                    </div>
                </div>
            </section>

            <section className="py-12 select-none">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Misi Kami
                    </h2>

                    {/* Additional Icon-Based Content */}
                    <div className="mt-12 max-w-5xl mx-auto text-start">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                        {/* Icon */}
                                        <FontAwesomeIcon
                                            icon={faChalkboardTeacher}
                                        ></FontAwesomeIcon>
                                    </div>
                                    <p className="ml-16 text-xl leading-6 font-medium text-gray-700">
                                        Peningkatan Keterampilan
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-sm md:text-base text-gray-400">
                                    Menyediakan pelatihan yang komprehensif
                                    untuk mengembangkan keterampilan individu,
                                    sehingga setiap orang siap untuk berkarya
                                    dengan profesionalisme.
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                        {/* Icon */}

                                        <FontAwesomeIcon
                                            icon={faHandshake}
                                        ></FontAwesomeIcon>
                                    </div>
                                    <p className="ml-16 text-xl leading-6 font-medium text-gray-700">
                                        Kolaborasi Kesejahteraan
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-sm md:text-base text-gray-400">
                                    Membangun kemitraan strategis dengan
                                    berbagai instansi, baik swasta maupun
                                    pemerintah, untuk mendorong kesejahteraan
                                    masyarakat di Kalimantan Barat.
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                        {/* Icon */}

                                        <FontAwesomeIcon
                                            icon={faSeedling}
                                        ></FontAwesomeIcon>
                                    </div>
                                    <p className="ml-16 text-xl leading-6 font-medium text-gray-700">
                                        Inovasi Berkelanjutan
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-sm md:text-base text-gray-400">
                                    Mengembangkan dan mempromosikan teknologi
                                    inovatif yang mendukung solusi
                                    berkelanjutan, ramah lingkungan, dan mampu
                                    menjawab tantangan masa depan.
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                        {/* Icon */}

                                        <FontAwesomeIcon
                                            icon={faUsers}
                                        ></FontAwesomeIcon>
                                    </div>
                                    <p className="ml-16 text-xl leading-6 font-medium text-gray-700">
                                        Kemitraan Inklusif
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-sm md:text-base text-gray-400">
                                    Bekerjasama dengan komunitas lokal untuk
                                    memastikan bahwa teknologi digital dapat
                                    diakses dan dimanfaatkan secara inklusif
                                    serta merata bagi seluruh lapisan
                                    masyarakat.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>

            {/* Section 3: Our Approach */}
            <section className="py-16 bg-gray-50 select-none">
                <div className="max-w-5xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Pendekatan Kami
                    </h2>

                    <p className="mt-6 text-base text-balance text-start md:text-center md:text-xl text-gray-600 leading-relaxed">
                        Digital Obor Perubahan mengintegrasikan branding,
                        pemasaran digital, dan pengembangan produk ke dalam satu
                        layanan yang lengkap. Kami memahami tantangan yang
                        dihadapi oleh usaha kecil dan menengah, dan kami hadir
                        untuk memberikan solusi menyeluruh untuk meningkatkan
                        potensi pasar dan daya saing mereka.
                    </p>
                    <img
                        src={image1}
                        alt=""
                        className="w-full md:w-auto md:h-80 mx-auto pt-6 rounded-lg"
                    />
                    <p className="mt-8 text-base text-balance text-end md:text-center md:text-xl text-gray-600 leading-relaxed">
                        Dengan pendekatan yang berfokus pada kolaborasi dan
                        inovasi, kami berkomitmen untuk memberikan dampak
                        positif yang nyata bagi komunitas lokal dan ekosistem
                        bisnis di Kalimantan Barat.
                    </p>
                </div>
            </section>

            {/* Section 4: Call to Action */}
            <section className="py-16 bg-orange-600 text-white select-none">
                <div className="max-w-5xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold">
                        Siap Menjadi Bagian dari Perubahan?
                    </h2>
                    <p className="mt-6 text-xl leading-relaxed">
                        Bergabunglah bersama kami dalam memberdayakan teknologi
                        digital untuk menciptakan dampak positif yang luas dan
                        merata.
                    </p>
                    <div className="mt-8">
                        <a
                            href={route("landing.contact")}
                            className="px-6 py-3 text-lg bg-white text-orange-600 font-semibold rounded-md hover:bg-gray-100"
                        >
                            Hubungi Kami
                        </a>
                    </div>
                </div>
            </section>
        </LandingLayout>
    );
}
