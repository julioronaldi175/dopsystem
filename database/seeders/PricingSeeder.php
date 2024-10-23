<?php

namespace Database\Seeders;

use App\Models\Pricing;
use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PricingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Pricing::truncate(); // Clear the pricing table

        // Fetch services by name
        $digitalMarketingService = Service::where('name', 'Digital Marketing')->first();
        $webCommunityService = Service::where('name', 'Web Community')->first();
        $webBusinessService = Service::where('name', 'Web Business')->first();
        $logoDesignService = Service::where('name', 'Logo Design')->first();
        $reelsContentService = Service::where('name', 'Reels Content')->first();

        // Define pricing packages
        $packagesReels = [
            [
                'service_id' => $reelsContentService->id,
                'package_name' => 'Starter',
                'details' => json_encode([
                    "3 video Reels promosi (durasi maksimal 30 detik per video)",
                    "Penulisan skrip singkat dengan call-to-action (CTA) sederhana",
                    "Pengeditan dasar (cutting, teks, color grading, dan musik latar bebas royalti)",
                    "2 kali revisi per video",
                    "Format akhir: MP4 (resolusi HD)",
                    "Estimasi waktu pengerjaan: 5 hari kerja",
                    "Strategi hashtag dan caption sederhana",
                ]),
                'price' => 2500000,
                'is_popular' => false,
            ],
            [
                'service_id' => $reelsContentService->id,
                'package_name' => 'Growth',
                'details' => json_encode([
                    "5 video Reels promosi (durasi maksimal 45 detik per video)",
                    "Pengeditan lanjutan (transisi, teks animasi, color grading, efek visual, dan musik latar bebas royalti)",
                    "3 kali revisi per video",
                    "Format akhir: MP4 (resolusi HD & Full HD)",
                    "Estimasi waktu pengerjaan: 7-10 hari kerja",
                    "Strategi hashtag, caption, dan analisis waktu posting optimal",
                ]),
                'price' => 5500000,
                'is_popular' => false,
            ],
            [
                'service_id' => $reelsContentService->id,
                'package_name' => 'Premium',
                'details' => json_encode([
                    "8 video Reels promosi (durasi maksimal 60 detik per video)",
                    "Pengeditan profesional (efek visual, teks animasi, transisi, color grading, sound design)",
                    "Revisi tanpa batas",
                    "Format akhir: MP4 (resolusi HD, Full HD, dan 4K)",
                    "Estimasi waktu pengerjaan: 10-14 hari kerja",
                    "Strategi pemasaran komprehensif (hashtag, caption, waktu posting, dan influencer marketing)",
                    "Laporan analitik kinerja konten setelah 1 bulan postingan",
                ]),
                'price' => 8500000,
                'is_popular' => true,
            ],
        ];

        $packagesDigitalMarketing = [
            [
                'service_id' => $digitalMarketingService->id,
                'package_name' => 'Paket 1',
                'details' => json_encode([
                    "28 Konten yang terdiri dari 26 Design Feed/Foto, dan 2 Video Reels",
                    "SEO (Search Engine Optimization): Membantu mesin telusur agar memahami konten, serta membantu pengguna menemukan akun secara optimal",
                    "Laporan Konten: Membuat laporan konten secara berjangka untuk memahami strategi yang tepat untuk konten yang akan datang",
                ]),
                'price' => 3000000,
                'is_popular' => false,
            ],
            [
                'service_id' => $digitalMarketingService->id,
                'package_name' => 'Paket 2',
                'details' => json_encode([
                    "28 Konten yang terdiri dari 26 Design Feed/Foto, dan 2 Video Reels",
                    "SEO (Search Engine Optimization): Membantu mesin telusur agar memahami konten, serta membantu pengguna menemukan akun secara optimal",
                    "Laporan Konten: Membuat laporan konten secara berjangka untuk memahami strategi yang tepat untuk konten yang akan datang",
                    "SWOT Analisis: Untuk mengidentifikasi kekuatan, kelemahan, peluang, dan ancaman untuk bisnis yang dikerjakan",
                    "Pengelolaan ADS: Untuk pengelolaan Iklan Sosmed akan kita bantu dalam pengelolaannya",
                ]),
                'price' => 5000000,
                'is_popular' => false,
            ],
            [
                'service_id' => $digitalMarketingService->id,
                'package_name' => 'Paket 3',
                'details' => json_encode([
                    "28 Konten yang terdiri dari 24 Design Feed/Foto, dan 4 Video Reels",
                    "SEO (Search Engine Optimization): Membantu mesin telusur agar memahami konten, serta membantu pengguna menemukan akun secara optimal",
                    "Laporan Konten: Membuat laporan konten secara berjangka untuk memahami strategi yang tepat untuk konten yang akan datang",
                    "SWOT Analisis: Untuk mengidentifikasi kekuatan, kelemahan, peluang, dan ancaman untuk bisnis yang dikerjakan",
                    "Admin Sosmed: Admin Pengelola akun untuk memposting/membaca insight dan melaporkan perkembangan akun Sosmed",
                    "Pengelolaan ADS: Untuk pengelolaan Iklan Sosmed akan kita bantu dalam pengelolaannya",
                ]),
                'price' => 10000000,
                'is_popular' => true,
            ],
        ];

        $packagesLogo = [
            [
                'service_id' => $logoDesignService->id,
                'package_name' => 'BASIC',
                'details' => json_encode([
                    "2 konsep desain logo",
                    "5 kali revisi",
                    "File akhir: PNG, JPEG",
                    "Estimasi waktu pengerjaan: 3 hari kerja",
                    "Tidak termasuk hak cipta penuh",
                ]),
                'price' => 1000000,
                'is_popular' => false,
            ],
            [
                'service_id' => $logoDesignService->id,
                'package_name' => 'STANDAR',
                'details' => json_encode([
                    "3 konsep desain logo",
                    "5 kali revisi",
                    "File akhir: PNG, JPEG, PDF, SVG",
                    "Panduan penggunaan logo (color palette, typography)",
                    "Estimasi waktu pengerjaan: 5 hari kerja",
                    "Hak cipta penuh",
                ]),
                'price' => 3000000,
                'is_popular' => false,
            ],
            [
                'service_id' => $logoDesignService->id,
                'package_name' => 'PREMIUM',
                'details' => json_encode([
                    "5 konsep desain logo",
                    "Revisi tanpa batas",
                    "File akhir: PNG, JPEG, PDF, SVG, AI",
                    "Panduan branding lengkap (color palette, typography, logo usage)",
                    "Mockup aplikasi logo (kartu nama, kop surat, media sosial)",
                    "Estimasi waktu pengerjaan: 7 hari kerja",
                    "Hak cipta penuh dan eksklusivitas",
                ]),
                'price' => 5000000,
                'is_popular' => true,
            ],
        ];

        // Combine all pricing data
        $pricingPackages = array_merge($packagesReels, $packagesDigitalMarketing, $packagesLogo);

        // Insert pricing packages into the database
        foreach ($pricingPackages as $package) {
            Pricing::create($package);
        }
    }
}
