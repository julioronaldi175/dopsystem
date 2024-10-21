import ApplicationLogo from "@/Components/ApplicationLogo";
import LandingLayout from "@/Layouts/LandingLayout";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import officeImage from "@/Images/dop_office2.jpg";

export default function Contact(props) {
    return (
        <LandingLayout props={props}>
            {/* Section 1: Introduction */}
            <section className="py-16 bg-white select-none">
                <div className="max-w-5xl mx-auto text-center px-6">
                    {/* Company Logo */}
                    <div className="mb-8">
                        <ApplicationLogo
                            noText={false}
                            className="mx-auto w-auto md:h-40 md:w-auto"
                        ></ApplicationLogo>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900">
                        Bagaimana Menghubungi Kami?
                    </h1>
                    <p className="mt-6 text-balance md:text-center md:text-xl text-gray-600 leading-relaxed">
                        Anda dapat menghubungi official Digital Obor Perubahan
                        melalui kontak{" "}
                        <a
                            href="mailto:digitaloborperubahan@gmail.com"
                            className="font-bold"
                        >
                            digitaloborperubahan@gmail.com
                        </a>{" "}
                        dan nomor admin:{" "}
                        <p className="mt-4 select-text font-bold">
                            +62 852-4546-7864 (Mimin / Adi)
                        </p>
                        <p className="select-text font-bold">
                            +62 857-5245-4117 (Julio)
                        </p>
                        <p className="select-text font-bold">
                            +62 857-8797-1393 (Hariyadi)
                        </p>
                        <div className="w-full mx-auto py-8">
                            <img
                                src={officeImage}
                                className="rounded-2xl h-72 w-full md:w-[40%] object-cover mx-auto"
                                alt=""
                            />
                        </div>
                        PT. Mitra Pendidikan Nusantara - Jl. Merdeka No. 55,
                        Pontianak, Kalimantan Barat, Indonesia - 78111
                    </p>
                    <p className="mt-6">
                        <a
                            href="https://wa.link/6k68lj"
                            className="inline-block px-6 py-3 text-lg bg-green-600 text-white font-semibold rounded-md hover:bg-green-500"
                        >
                            <FontAwesomeIcon
                                icon={faWhatsapp}
                                className="mr-2"
                            ></FontAwesomeIcon>
                            Chat via WhatsApp
                        </a>
                    </p>
                </div>
            </section>

            {/* Section 4: Call to Action */}
            <section className="py-16 bg-orange-600 text-white select-none">
                <div className="max-w-5xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold">
                        Tertarik Lebih Lanjut?
                    </h2>
                    <p className="mt-6 text-xl leading-relaxed">
                        Jika Anda tertarik pada layanan yang kami tawarkan,
                        silahkan hubungi kami via email atau WhatsApp dan segera
                        konsultasi secara gratis!
                    </p>
                    <div className="mt-8">
                        <a
                            href={route("landing.about")}
                            className="px-6 py-3 text-lg bg-white text-orange-600 font-semibold rounded-md hover:bg-gray-100"
                        >
                            Lihat Profil Kami
                        </a>
                    </div>
                </div>
            </section>
        </LandingLayout>
    );
}
