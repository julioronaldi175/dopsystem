import ApplicationLogo from "@/Components/ApplicationLogo";
import LandingLayout from "@/Layouts/LandingLayout";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Privacy(props) {
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
                        Bagaimana Kebijakan Privasi kami?
                    </h1>

                    <div className="py-12 flex flex-col gap-4 justify-center items-center">
                        {/* Section 2: Data Collection */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                Informasi yang Kami Kumpulkan
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Kami mengumpulkan beberapa jenis informasi untuk
                                membantu kami menyediakan dan meningkatkan
                                layanan kami. Termasuk informasi pribadi seperti
                                nama, alamat email, informasi perangkat, dan
                                data penggunaan.
                            </p>
                        </div>

                        {/* Section 3: Data Usage */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                Bagaimana Kami Menggunakan Informasi Anda
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Informasi Anda digunakan untuk mengoperasikan
                                dan meningkatkan layanan kami, berkomunikasi,
                                dan mempersonalisasi pengalaman Anda.
                            </p>
                        </div>

                        {/* Section 4: Data Protection */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                Keamanan Data Anda
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Kami mengambil langkah-langkah yang wajar untuk
                                melindungi data Anda dari akses, pengungkapan,
                                atau perusakan yang tidak sah.
                            </p>
                        </div>

                        {/* Section 5: Retensi Data */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                Retensi Data
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Kami hanya akan menyimpan informasi Anda selama
                                diperlukan untuk memenuhi tujuan yang dijelaskan
                                dalam kebijakan privasi ini.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </LandingLayout>
    );
}
