const recipes = [
  {
    id: 1,
    title: 'Mie Goreng Spesial ala Chinese Resto',
    image: 'assets/mie-goreng.png',
    time: '25 Menit',
    author: 'Chef Devina',
    video: 'https://www.youtube.com/embed/46CsR1Ma0EA',
    desc: 'Kombinasi tekstur mie yang lembut dan sedikit kenyal dengan aroma bumbu tumis sederhana yang harum dan legit dalam satu waktu.',
    bahan: `
            <div class="md:col-span-1">
                <h2 class="font-bold text-2xl mb-4">Bahan-bahan</h2>
                <div class="overflow-x-auto rounded-lg shadow mb-6 bg-white">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="text-orange-800 border-b bg-orange-300">
                                <th class="text-base p-3 font-semibold">Bahan</th>
                                <th class="p-3 font-semibold">Takaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="p-3">Mie Rebus</td>
                                <td class="p-3">2 Porsi</td>
                            </tr>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="p-3">Telur Ayam</td>
                                <td class="p-3">2 Butir</td>
                            </tr>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="p-3">Bawang Merah & Putih</td>
                                <td class="p-3">5 Siung</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="p-3">Kecap Manis</td>
                                <td class="p-3">3 sdm</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="p-3">Kecap Asin</td>
                                <td class="p-3">1 sdm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,
    langkah: `
            <div class="leading-relaxed mb-10 space-y-4 text-gray-700">
                <p>
                    Langkah pertama untuk membuat mie goreng yang <u>lembut</u> dan tidak lembek adalah dengan menggunakan mie yang sudah didinginkan semalaman di kulkas. Panaskan wajan dengan sedikit minyak di atas api sedang.
                </p>
                <p>
                    Tumis bawang merah dan bawang putih yang sudah dihaluskan hingga sampai harum. Masukkan telur, <strong>lalu orak-arik hingga matang.</strong> Tambahkan mie, aduk rata dengan bumbu dan telur.
                </p>
                <p>
                    Tambah kecap manis, garam, dan lada secukupnya. Besarkan api sedikit agar tercipta aroma <i>smokey</i> dari wajan panas. Aduk cepat hingga semua tercampur rata dan matang sempurna. Sajikan selagi hangat!
                </p>
            </div>
        `,
    komentar: [
      {
        nama: 'Andi Saputra',
        tanggal: '2 hari yang lalu',
        rating: 5,
        teks: 'Wah mantap banget! Resepnya gampang diikutin.',
      },
      {
        nama: 'Maya Dian',
        tanggal: '1 minggu yang lalu',
        rating: 4,
        teks: 'Enak, tapi agak keasinan buat lidah saya.',
      },
    ],
  },
  {
    id: 2,
    title: 'Gulai Ayam Khas Minang',
    image: 'assets/gulai-ayam.jpg',
    time: '45 Menit',
    author: 'Mbok Midut',
    desc: 'Cita rasa kuah santan yang kental dan gurih bercampur harum semerbak aroma rempah yang kuat, berpadu hangat dengan tekstur daging ayam yang empuk.',
    video: 'https://www.youtube.com/embed/vBmxRPoVqIM?si=mfRVKmjn5QTkTwYI',
    bahan: `
            <div class="md:col-span-1">
                <h2 class="font-bold text-2xl mb-4">Bahan-bahan</h2>
                <div class="overflow-x-auto rounded-lg shadow mb-6 bg-white">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="text-orange-800 border-b bg-orange-300">
                                <th class="text-base p-3 font-semibold">Bahan</th>
                                <th class="p-3 font-semibold">Takaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="p-3">Ayam Kampung</td>
                                <td class="p-3">1 Ekor (Potong 8)</td>
                            </tr>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="p-3">Santan Kental</td>
                                <td class="p-3">500 ml</td>
                            </tr>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="p-3">Daun Kunyit & Jeruk</td>
                                <td class="p-3">Secukupnya</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="p-3">Bumbu Halus Gulai</td>
                                <td class="p-3">3 sdm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,
    langkah: `
            <div class="leading-relaxed mb-10 space-y-4 text-gray-700">
                <p>
                    Cuci bersih potongan ayam, lumuri dengan sedikit perasan jeruk nipis dan garam untuk menghilangkan bau amis. Diamkan selama kurang lebih 10 menit.
                </p>
                <p>
                    Panaskan minyak, tumis bumbu halus bersama daun kunyit, daun jeruk, dan serai hingga <strong>harum dan matang sempurna</strong>. Masukkan potongan ayam, aduk hingga daging berubah warna.
                </p>
                <p>
                    Tuangkan santan perlahan sambil <i>terus diaduk</i> agar santan tidak pecah. Masak dengan api kecil hingga bumbu meresap, kuah menyusut, dan daging ayam empuk. Gulai siap disajikan.
                </p>
            </div>
        `,
    komentar: [
      {
        nama: 'Budi Santoso',
        tanggal: '1 hari yang lalu',
        rating: 5,
        teks: 'Bumbunya medok banget, mirip masakan padang asli!',
      },
    ],
  },
  {
    id: 3,
    title: 'Mie Ayam Khas Wonogiri',
    image: 'assets/mie-ayam.jpg',
    time: '45 Menit',
    author: 'Ika Mardatillah',
    desc: 'Tekstur mie yang kenyal, aroma minyak bumbu yang harum hingga perpaduan rasa gurih dan manis dari topping ayam.',
    video: 'https://www.youtube.com/embed/EtGjNlOf_SA?si=68euE-1Jy_4ybSqY',
    bahan: `
            <div class="md:col-span-1">
                <h2 class="font-bold text-2xl mb-4">Bahan-bahan</h2>
                <div class="overflow-x-auto rounded-lg shadow mb-6 bg-white">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="text-orange-800 border-b bg-orange-300">
                                <th class="text-base p-3 font-semibold">Bahan</th>
                                <th class="p-3 font-semibold">Takaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="p-3">Mie Basah</td>
                                <td class="p-3">500 gram</td>
                            </tr>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="p-3">Daging Ayam Potong Dadu</td>
                                <td class="p-3">300 gram</td>
                            </tr>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="p-3">Sawi Hijau</td>
                                <td class="p-3">1 Ikat</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="p-3">Minyak Bawang</td>
                                <td class="p-3">Secukupnya</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,
    langkah: `
            <div class="leading-relaxed mb-10 space-y-4 text-gray-700">
                <p>
                    Buat *topping* ayam terlebih dahulu dengan menumis bumbu halus, masukkan potongan ayam, kecap manis, sedikit kecap asin, dan air. Masak hingga ayam empuk dan bumbu mengental legit.
                </p>
                <p>
                    Siapkan mangkuk saji. Tuang 1 sendok makan minyak bawang dan sedikit kecap asin ke dasar mangkuk. Rebus mie basah dan sawi hijau dalam air mendidih sebentar saja agar <u>teksturnya tetap kenyal</u>.
                </p>
                <p>
                    Tiriskan mie, masukkan ke dalam mangkuk berisi minyak bumbu, <strong>aduk rata segera</strong>. Beri topping ayam kecap di atasnya, taburi daun bawang, dan sajikan dengan kuah kaldu terpisah.
                </p>
            </div>
        `,
    komentar: [
      {
        nama: 'Rini Wati',
        tanggal: '3 hari yang lalu',
        rating: 4,
        teks: 'Anak-anak suka banget sama mie ayamnya.',
      },
      {
        nama: 'Tono',
        tanggal: '5 hari yang lalu',
        rating: 5,
        teks: 'Kuahnya seger, bikin nagih.',
      },
    ],
  },
  {
    id: 4,
    title: 'Seblak Spesial',
    image: 'assets/seblak.webp',
    time: '30 Menit',
    desc: 'Aroma kencur yang kuat, kuah medok yang pedas gurih, serta tekstur kerupuk yang kenyal berpadu dengan aneka topping tambahan lainnya yang selalu menjadi favorit.',
    author: 'Ika Mardatillah',
    video: 'https://www.youtube.com/embed/jNaij7X2c2g?si=on0yGqlrXX58fUwr',
    bahan: `
            <div class="md:col-span-1">
                <h2 class="font-bold text-2xl mb-4">Bahan-bahan</h2>
                <div class="overflow-x-auto rounded-lg shadow mb-6 bg-white">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="text-orange-800 border-b bg-orange-300">
                                <th class="text-base p-3 font-semibold">Bahan</th>
                                <th class="p-3 font-semibold">Takaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="p-3">Kerupuk Oren Mentah</td>
                                <td class="p-3">100 gram</td>
                            </tr>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="p-3">Kencur (Cikur)</td>
                                <td class="p-3">2 Ruas</td>
                            </tr>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="p-3">Sosis & Bakso</td>
                                <td class="p-3">Secukupnya</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="p-3">Cabai Rawit Merah</td>
                                <td class="p-3">Sesuai Selera</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,
    langkah: `
            <div class="leading-relaxed mb-10 space-y-4 text-gray-700">
                <p>
                    Rendam kerupuk mentah di dalam air panas atau rebus sebentar hingga setengah lembek. Tiriskan dan sisihkan agar kerupuk tidak keras saat dimasak nanti.
                </p>
                <p>
                    Haluskan kencur, bawang putih, bawang merah, dan cabai rawit. Tumis bumbu halus tersebut hingga matang dan mengeluarkan aroma khas kencur yang tajam.
                </p>
                <p>
                    Masukkan air secukupnya, tunggu hingga mendidih. Tambahkan telur lalu <strong>orak-arik kasar</strong> di dalam kuah. Masukkan kerupuk, sosis, bakso, garam, dan penyedap rasa. Masak hingga kuah mengental dan sajikan panas-panas!
                </p>
            </div>
        `,
    komentar: [
      {
        nama: 'Siti Badriah',
        tanggal: 'Baru saja',
        rating: 5,
        teks: 'Pedasnya nampol! Cocok buat cuaca hujan.',
      },
    ],
  },
  {
    id: 5,
    title: 'Pempek Palembang',
    image: 'assets/pempek.webp',
    time: '45 Menit',
    author: 'Ibu Ami',
    desc: 'Kelezatan rasa ikan yang dominan, tekstur yang empuk dan kenyal pas, serta perpaduan kuah cuko yang pedas asam, dan manis legit.',
    video: 'https://www.youtube.com/embed/R-eJAQIQKkE?si=6QnDRG-kHbj_FXyR',
    bahan: `
            <div class="md:col-span-1">
                <h2 class="font-bold text-2xl mb-4">Bahan-bahan</h2>
                <div class="overflow-x-auto rounded-lg shadow mb-6 bg-white">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="text-orange-800 border-b bg-orange-300">
                                <th class="text-base p-3 font-semibold">Bahan</th>
                                <th class="p-3 font-semibold">Takaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="p-3">Ikan Tenggiri Giling</td>
                                <td class="p-3">500 gram</td>
                            </tr>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="p-3">Tepung Tapioka/Sagu</td>
                                <td class="p-3">350 gram</td>
                            </tr>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="p-3">Gula Batok (Cuko)</td>
                                <td class="p-3">250 gram</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="p-3">Asam Jawa & Bawang Putih</td>
                                <td class="p-3">Secukupnya</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,
    langkah: `
            <div class="leading-relaxed mb-10 space-y-4 text-gray-700">
                <p>
                    Campurkan daging ikan tenggiri giling dengan air es, garam, dan penyedap. Aduk hingga teksturnya lengket. Masukkan tepung tapioka sedikit demi sedikit, aduk asal rata saja (jangan diuleni kuat agar <u>pempek tidak alot</u>).
                </p>
                <p>
                    Bentuk adonan menjadi lenjer (panjang) atau kapal selam (diisi kuning telur). Rebus dalam air mendidih yang sudah diberi sedikit minyak goreng. Angkat setelah pempek mengapung, lalu tiriskan.
                </p>
                <p>
                    Untuk kuah cuko: Rebus air bersama gula batok, bawang putih cincang, cabai rawit halus, asam jawa, dan sedikit garam. Masak hingga mendidih dan agak kental. Goreng pempek, potong-potong, lalu siram dengan cuko.
                </p>
            </div>
        `,
    komentar: [
      {
        nama: 'Witomo Bagyo',
        tanggal: '2 minggu yang lalu',
        rating: 5,
        teks: 'Cukonya pas banget, mantap nian!',
      },
      {
        nama: 'Darsam',
        tanggal: '1 bulan yang lalu',
        rating: 3,
        teks: 'Agak keras pempeknya, mungkin saya salah ngadon.',
      },
    ],
  },
  {
    id: 6,
    title: 'Nasi Goreng Spesial ala Rumahan',
    image: 'assets/nasi-goreng.jpg',
    time: '20 Menit',
    desc: 'Nasi goreng bumbu rempah autentik khas masakan ala rumahan dengan aroma sangit wajan yang khas, disajikan lengkap dengan telur ceplok.',
    author: 'Chef Devina',
    video: 'https://www.youtube.com/embed/i6yHVLgrELQ?si=DL3bpMPTA5lXn3Y8',
    bahan: `
            <div class="md:col-span-1">
                <h2 class="font-bold text-2xl mb-4">Bahan-bahan</h2>
                <div class="overflow-x-auto rounded-lg shadow mb-6 bg-white">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="text-orange-800 border-b bg-orange-300">
                                <th class="text-base p-3 font-semibold">Bahan</th>
                                <th class="p-3 font-semibold">Takaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="p-3">Nasi Putih Dingin</td>
                                <td class="p-3">2 Porsi</td>
                            </tr>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="p-3">Telur Ayam</td>
                                <td class="p-3">2 Butir</td>
                            </tr>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="p-3">Bawang Merah & Putih</td>
                                <td class="p-3">6 Siung</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="p-3">Kecap Manis & Saus Sambal</td>
                                <td class="p-3">Secukupnya</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,
    langkah: `
            <div class="leading-relaxed mb-10 space-y-4 text-gray-700">
                <p>
                    Pastikan nasi yang digunakan adalah nasi sisa semalam yang sudah diurai agar tidak menggumpal. Haluskan bawang merah, bawang putih, kemiri, dan cabai merah jika suka pedas.
                </p>
                <p>
                    Panaskan wajan dengan api cukup besar. Masukkan telur ayam dan buat orak-arik matang. Sisihkan telur di pinggir wajan, lalu tumis bumbu halus di tengah wajan hingga matang dan wangi.
                </p>
                <p>
                    Masukkan nasi putih, aduk cepat bersama bumbu dan telur. Tuang kecap manis, saus sambal, garam, dan lada. <strong>Terus aduk cepat dengan api besar</strong> hingga nasi sedikit kering dan beraroma <i>smokey</i>. Angkat dan sajikan!
                </p>
            </div>
        `,
    komentar: [],
  },
]
