import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BusinessStrategyTimeline = () => {
    return (
        <div className="container mx-auto md:px-4 py-8">
            <div className="relative wrap overflow-hidden">
                {/* Timeline line */}
                <div className="border-2 absolute border-opacity-20 border-gray-700 h-full left-1/2 transform -translate-x-1/2"></div>

                {/* Timeline Item 1 */}
                <div className="mb-8 flex justify-between items-center w-full md:flex-row flex-col right-timeline py-4 md:p-4">
                    <div className="order-1 w-full md:w-5/12"></div>
                    <div className="mb-4 md:mb-0 z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">
                            1
                        </h1>
                    </div>
                    <div className="order-1 bg-white border-2 border-gray-200 z-10 rounded-lg shadow-lg w-full md:w-5/12 px-6 py-8">
                        <h3 className="font-bold text-gray-700 text-xl md:text-2xl">
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className="text-green-500 mr-1"
                            />
                            Membangun Branding
                        </h3>
                        <p className="text-gray-400 mb-4">Bulan ke 1 s/d 3</p>
                        <p className="text-gray-500 leading-tight">
                            Strategi awal untuk membangun kesadaran merek
                            melalui branding yang kuat. Tahap ini meliputi
                            pembuatan identitas visual, seperti logo, desain,
                            dan profil perusahaan, serta perencanaan strategi
                            komunikasi dengan audiens target.
                        </p>
                    </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="mb-8 flex justify-between items-center w-full md:flex-row-reverse flex-col left-timeline py-4 md:p-4">
                    <div className="order-1 w-full md:w-5/12"></div>
                    <div className="mb-4 md:mb-0 z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">
                            2
                        </h1>
                    </div>
                    <div className="order-1 bg-white border-2 border-gray-200 z-10 rounded-lg shadow-lg w-full md:w-5/12 px-6 py-8">
                        <h3 className="font-bold text-gray-700 text-xl md:text-2xl">
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className="text-green-500 mr-1"
                            />
                            Mengelola Marketing
                        </h3>
                        <p className="text-gray-400 mb-4">Bulan ke 4 s/d 6</p>
                        <p className="text-gray-500 leading-tight">
                            Pada tahap ini, fokus utama adalah mengelola
                            strategi marketing yang telah dibuat. Ini mencakup
                            aktivitas pemasaran digital dan konvensional, serta
                            upaya untuk meningkatkan <i>awareness</i> dan
                            mengonversi calon konsumen menjadi pelanggan.
                        </p>
                    </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="mb-8 flex justify-between items-center w-full md:flex-row flex-col right-timeline py-4 md:p-4">
                    <div className="order-1 w-full md:w-5/12"></div>
                    <div className="mb-4 md:mb-0 z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">
                            3
                        </h1>
                    </div>
                    <div className="order-1 bg-white border-2 border-gray-200 z-10 rounded-lg shadow-lg w-full md:w-5/12 px-6 py-8">
                        <h3 className="font-bold text-gray-700 text-xl md:text-2xl">
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className="text-green-500 mr-1"
                            />
                            Menganalisa Produk
                        </h3>
                        <p className="text-gray-400 mb-4">Bulan ke 7 s/d 9</p>
                        <p className="text-gray-500 leading-tight">
                            Tahap terakhir mencakup analisa produk untuk
                            memastikan bahwa produk yang ditawarkan sesuai
                            dengan kebutuhan pasar. Ini termasuk evaluasi
                            performa produk, umpan balik dari konsumen, dan
                            penyesuaian strategi berdasarkan hasil analisa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessStrategyTimeline;
