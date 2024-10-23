<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Service::truncate(); // Clear the services table
        Service::create([
            'name' => 'Digital Marketing',
            'description' => 'Solusi untuk meningkatkan kehadiran online bisnis Anda melalui berbagai platform digital.',
            'features' => json_encode([
                [
                    'title' => 'Pemasaran Media Sosial',
                    'description' => 'Mengelola dan mengoptimalkan akun media sosial untuk menarik lebih banyak pelanggan.'
                ],
                [
                    'title' => 'SEO',
                    'description' => 'Mengoptimalkan website Anda agar lebih mudah ditemukan di mesin pencari.'
                ],
                [
                    'title' => 'Kampanye Iklan Berbayar',
                    'description' => 'Membuat dan mengelola iklan berbayar di platform seperti Google Ads dan Facebook Ads.'
                ],
            ]),
        ]);

        Service::create([
            'name' => 'Web Community',
            'description' => 'Pengembangan dan pemeliharaan situs web untuk memastikan kinerja optimal.',
            'features' => json_encode([
                [
                    'title' => 'Desain Responsif',
                    'description' => 'Membuat situs web yang responsif untuk semua perangkat.'
                ],
                [
                    'title' => 'Pemeliharaan Berkala',
                    'description' => 'Memastikan situs Anda selalu up-to-date dan aman.'
                ],
                [
                    'title' => 'Optimasi Kecepatan',
                    'description' => 'Meningkatkan kecepatan dan performa situs web Anda.'
                ],
            ]),
        ]);

        Service::create([
            'name' => 'Web Business',
            'description' => 'Pengembangan dan pemeliharaan situs web untuk memastikan kinerja optimal.',
            'features' => json_encode([
                [
                    'title' => 'Desain Responsif',
                    'description' => 'Membuat situs web yang responsif untuk semua perangkat.'
                ],
                [
                    'title' => 'Pemeliharaan Berkala',
                    'description' => 'Memastikan situs Anda selalu up-to-date dan aman.'
                ],
                [
                    'title' => 'Optimasi Kecepatan',
                    'description' => 'Meningkatkan kecepatan dan performa situs web Anda.'
                ],
            ]),
        ]);

        Service::create([
            'name' => 'Logo Design',
            'description' => 'Desain logo yang mencerminkan identitas dan nilai perusahaan Anda.',
            'features' => json_encode([
                [
                    'title' => 'Desain Kustom',
                    'description' => 'Logo yang dirancang khusus sesuai dengan visi perusahaan Anda.'
                ],
                [
                    'title' => 'Berkualitas Tinggi',
                    'description' => 'Logo dalam format berkualitas tinggi untuk penggunaan cetak dan digital.'
                ],
            ]),
        ]);

        Service::create([
            'name' => 'Reels Content',
            'description' => 'Konten video singkat untuk menarik perhatian audiens di media sosial.',
            'features' => json_encode([
                [
                    'title' => 'Konten Menarik',
                    'description' => 'Membuat video singkat yang menarik dan informatif.'
                ],
                [
                    'title' => 'Pemasaran Kreatif',
                    'description' => 'Menggunakan teknik pemasaran kreatif untuk meningkatkan engagement.'
                ],
            ]),
        ]);
    }
}
