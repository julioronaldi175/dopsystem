<?php

namespace Database\Seeders;

use App\Models\Pricing;
use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PricingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Pricing::truncate();

        // Video Reels Packages
        $reels1 = [
            'service_id' => 5, // Assuming service_id = 1 corresponds to Video Reels
            'name' => 'Starter',
            'price' => 'Rp 2,5 jt',
            'price_interval' => null, // No interval (one-time price)
            'sub_points' => json_encode([
                "3 video Reels promosi (durasi maksimal 30 detik per video)",
                "Penulisan skrip singkat dengan call-to-action (CTA) sederhana",
                "Pengeditan dasar (cutting, teks, color grading, dan musik latar bebas royalti)",
                "2 kali revisi per video",
                "Format akhir: MP4 (resolusi HD)",
                "Estimasi waktu pengerjaan: 5 hari kerja",
                "Strategi hashtag dan caption sederhana"
            ]),
            'is_popular' => false,
        ];
        $reels2 = [
            'service_id' => 5,
            'name' => 'Growth',
            'price' => 'Rp 5,5 jt',
            'price_interval' => null,
            'sub_points' => json_encode([
                "5 video Reels promosi (durasi maksimal 45 detik per video)",
                "Pengeditan lanjutan (transisi, teks animasi, color grading, efek visual, dan musik latar bebas royalti)",
                "3 kali revisi per video",
                "Format akhir: MP4 (resolusi HD & Full HD)",
                "Estimasi waktu pengerjaan: 7-10 hari kerja",
                "Strategi hashtag, caption, dan analisis waktu posting optimal"
            ]),
            'is_popular' => false,
        ];
        $reels3 = [
            'service_id' => 5,
            'name' => 'Premium',
            'price' => 'Rp 8,5 jt',
            'price_interval' => null,
            'sub_points' => json_encode([
                "8 video Reels promosi (durasi maksimal 60 detik per video)",
                "Pengeditan profesional (efek visual, teks animasi, transisi, color grading, sound design)",
                "Revisi tanpa batas",
                "Format akhir: MP4 (resolusi HD, Full HD, dan 4K)",
                "Estimasi waktu pengerjaan: 10-14 hari kerja",
                "Strategi pemasaran komprehensif (hashtag, caption, waktu posting, dan influencer marketing)",
                "Laporan analitik kinerja konten setelah 1 bulan postingan"
            ]),
            'is_popular' => true,
        ];

        // Digital Marketing Packages
        $digital1 = [
            'service_id' => 1, // Assuming service_id = 2 corresponds to Digital Marketing
            'name' => 'Paket 1',
            'price' => 'Rp 3 jt',
            'price_interval' => '/ bulan',
            'sub_points' => json_encode([
                "28 Konten yang terdiri dari 26 Design Feed/Foto, dan 2 Video Reels",
                "SEO (Search Engine Optimization): Membantu mesin telusur agar memahami konten, serta membantu pengguna menemukan akun secara optimal",
                "Laporan Konten: Membuat laporan konten secara berjangka untuk memahami strategi yang tepat untuk konten yang akan datang"
            ]),
            'is_popular' => false,
        ];
        $digital2 = [
            'service_id' => 1,
            'name' => 'Paket 2',
            'price' => 'Rp 5 jt',
            'price_interval' => '/ bulan',
            'sub_points' => json_encode([
                "28 Konten yang terdiri dari 26 Design Feed/Foto, dan 2 Video Reels",
                "SEO (Search Engine Optimization)",
                "Laporan Konten",
                "SWOT Analisis: Untuk mengidentifikasi kekuatan, kelemahan, peluang, dan ancaman",
                "Pengelolaan ADS"
            ]),
            'is_popular' => false,
        ];
        $digital3 = [
            'service_id' => 1,
            'name' => 'Paket 3',
            'price' => 'Rp 10 jt',
            'price_interval' => '/ bulan',
            'sub_points' => json_encode([
                "28 Konten yang terdiri dari 24 Design Feed/Foto, dan 4 Video Reels",
                "SEO (Search Engine Optimization)",
                "Laporan Konten",
                "SWOT Analisis",
                "Admin Sosmed: Admin Pengelola akun untuk posting & melaporkan perkembangan akun",
                "Pengelolaan ADS"
            ]),
            'is_popular' => true,
        ];

        // Logo Design Packages
        $logo1 = [
            'service_id' => 4, // Assuming service_id = 3 corresponds to Logo Design
            'name' => 'BASIC',
            'price' => 'Rp 1 jt',
            'price_interval' => null,
            'sub_points' => json_encode([
                "2 konsep desain logo",
                "5 kali revisi",
                "File akhir: PNG, JPEG",
                "Estimasi waktu pengerjaan: 3 hari kerja",
                "Tidak termasuk hak cipta penuh"
            ]),
            'is_popular' => false,
        ];
        $logo2 = [
            'service_id' => 4,
            'name' => 'STANDAR',
            'price' => 'Rp 3 jt',
            'price_interval' => null,
            'sub_points' => json_encode([
                "3 konsep desain logo",
                "5 kali revisi",
                "File akhir: PNG, JPEG, PDF, SVG",
                "Panduan penggunaan logo (color palette, typography)",
                "Estimasi waktu pengerjaan: 5 hari kerja",
                "Hak cipta penuh"
            ]),
            'is_popular' => false,
        ];
        $logo3 = [
            'service_id' => 4,
            'name' => 'PREMIUM',
            'price' => 'Rp 5 jt',
            'price_interval' => null,
            'sub_points' => json_encode([
                "5 konsep desain logo",
                "Revisi tanpa batas",
                "File akhir: PNG, JPEG, PDF, SVG, AI",
                "Panduan branding lengkap",
                "Mockup aplikasi logo",
                "Estimasi waktu pengerjaan: 7 hari kerja",
                "Hak cipta penuh dan eksklusivitas"
            ]),
            'is_popular' => true,
        ];

        // Web Community Packages
        $webCommunity1 = [
            'service_id' => 2,
            'name' => 'STARTER',
            'price' => 'Rp 6 jt',
            'price_interval' => null,
            'sub_points' => json_encode([
                "Desain Responsif",
                "Halaman Utama",
                "Masa Aktif 2 Tahun",
                "Maintenance (start 1 tahun)",
                "Integrasi Media Sosial"
            ]),
            'is_popular' => false,
        ];
        $webCommunity2 = [
            'service_id' => 2,
            'name' => 'GROWTH',
            'price' => 'Rp 12 jt',
            'price_interval' => null,
            'sub_points' => json_encode([
                "Desain Responsif",
                "Halaman Utama & Halaman Sistem",
                "Masa Aktif 2 tahun",
                "Maintenance (Start 1 tahun)",
                "Integrasi Media Sosial",
                "Payment Gateway (+)"
            ]),
            'is_popular' => true,
        ];

        // Web Business Packages
        $webBusiness1 = [
            'service_id' => 3,
            'name' => 'BASIC',
            'price' => 'Rp 16 jt',
            'price_interval' => null,
            'sub_points' => json_encode([
                "Desain Responsif",
                "Halaman Utama lengkap",
                "Sistem Manajemen Antrean/Formulir/Data (dasar)",
                "Masa Aktif (Hosting & Domain) 2 Tahun",
                "Maintenance/Support (Start 1 tahun)",
                "Integrasi Media Sosial"
            ]),
            'is_popular' => false,
        ];
        $webBusiness2 = [
            'service_id' => 3,
            'name' => 'PRO',
            'price' => 'Rp 25 jt',
            'price_interval' => null,
            'sub_points' => json_encode([
                "Desain Responsif",
                "Halaman Utama lengkap",
                "Sistem Manajemen Antrean/Formulir/Data",
                "Masa Aktif (Hosting & Domain) 2 Tahun",
                "Maintenance/Support (Start 1 tahun)",
                "Integrasi Media Sosial",
                "SEO (Search Engine Optimization)"
            ]),
            'is_popular' => true,
        ];

        Pricing::create($digital1);
        Pricing::create($digital2);
        Pricing::create($digital3);

        Pricing::create($webCommunity1);
        Pricing::create($webCommunity2);

        Pricing::create($webBusiness1);
        Pricing::create($webBusiness2);

        Pricing::create($logo1);
        Pricing::create($logo2);
        Pricing::create($logo3);

        Pricing::create($reels1);
        Pricing::create($reels2);
        Pricing::create($reels3);
    }
}
