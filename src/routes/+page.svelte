<script lang="ts">
  let currentTime = new Date().toLocaleTimeString("id-ID");
  let isMenuOpen = false;

  // Update time every second
  setInterval(() => {
    currentTime = new Date().toLocaleTimeString("id-ID");
  }, 1000);

  const services = [
    {
      icon: "💧",
      title: "Air Bersih Langsung Datang",
      desc: "Tinggal WhatsApp, air langsung meluncur ke rumah. Gak perlu ribet!",
      price: "Mulai 250rb",
    },
    {
      icon: "🚛",
      title: "Truk Tangki Kece",
      desc: "Armada kita bersih, sopir ramah, dan selalu on time. Dijamin!",
      price: "Kapasitas 7000-7500 Liter",
    },
    {
      icon: "⚡",
      title: "Respon Super Cepat",
      desc: "Chat sekarang, dalam 1-2 jam udah sampai. Secepat kilat!",
      price: "24/7 siaga",
    },
  ];

  const whyUs = [
    "Air jernih kayak hati yang bersih 💎",
    "Harga bersahabat, kantong aman 💰",
    "Sopir baik hati, gak galak 😊",
    "Selalu tepat waktu, gak PHP 🕐",
    "Kualitas terjamin, udah teruji 🏆",
  ];

  const areas = [
    "Alang-Alang Lebar",
    "Bukit Kecil",
    "Gandus",
    "Ilir Barat I",
    "Ilir Barat II",
    "Ilir Timur I",
    "Ilir Timur II",
    "Ilir Timur III",
    "Jakabaring",
    "Kalidoni",
    "Kemuning",
    "Kertapati",
    "Plaju",
    "Seberang Ulu I",
    "Seberang Ulu II",
    "Sematang Borang",
    "Sukarami",
    "Seberang Ulu I",
  ];

  const testimonials = [
    {
      name: "Bu Sari",
      location: "Ilir Timur",
      text: "Pelayanannya top banget! Air selalu bersih dan sopirnya ramah. Udah langganan 2 tahun!",
      rating: 5,
    },
    {
      name: "Pak Budi",
      location: "Kalidoni",
      text: "Cepet banget datangnya, harga juga masuk akal. Recommended deh!",
      rating: 5,
    },
    {
      name: "Ibu Rina",
      location: "Seberang Ulu",
      text: "Gak pernah telat, air selalu jernih. Pokoknya the best lah!",
      rating: 5,
    },
  ];
</script>

<svelte:head>
  <title>Putra Wajo Gemilang - Air Bersih Langsung Datang! 💧</title>
</svelte:head>

<!-- Background Elements -->
<div class="water-waves"></div>
<div class="grid-pattern"></div>

<!-- Floating Navigation -->
<nav class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
  <div class="glass-effect px-6 py-3 rounded-2xl shadow-xl neon-blue">
    <div class="flex items-center gap-6">
      <div class="flex items-center gap-3">
        <div>
          <img src="/logo.png" alt="Logo" class="h-8" />
        </div>
        <!-- <span class="font-bold text-xl text-white">PWG</span> -->
      </div>

      <div class="hidden md:flex items-center gap-6 text-sm">
        <a
          href="#layanan"
          class="text-gray-300 hover:text-yellow-400 transition-colors"
          >Layanan</a
        >
        <a
          href="#area"
          class="text-gray-300 hover:text-yellow-400 transition-colors">Area</a
        >
        <a
          href="#testimoni"
          class="text-gray-300 hover:text-yellow-400 transition-colors"
          >Testimoni</a
        >
        <a
          href="#kontak"
          class="text-gray-300 hover:text-yellow-400 transition-colors"
          >Kontak</a
        >
      </div>

      <div class="text-xs text-gray-400">{currentTime}</div>

      <button
        class="md:hidden text-white"
        on:click={() => (isMenuOpen = !isMenuOpen)}
      >
        <div class="w-6 h-6 flex items-center justify-center">☰</div>
      </button>
    </div>

    {#if isMenuOpen}
      <div class="md:hidden mt-4 pt-4 border-t border-gray-700">
        <div class="flex flex-col gap-3 text-sm">
          <a
            href="#layanan"
            class="text-gray-300 hover:text-yellow-400 transition-colors"
            on:click={() => (isMenuOpen = false)}>Layanan</a
          >
          <a
            href="#area"
            class="text-gray-300 hover:text-yellow-400 transition-colors"
            on:click={() => (isMenuOpen = false)}>Area</a
          >
          <a
            href="#testimoni"
            class="text-gray-300 hover:text-yellow-400 transition-colors"
            on:click={() => (isMenuOpen = false)}>Testimoni</a
          >
          <a
            href="#kontak"
            class="text-gray-300 hover:text-yellow-400 transition-colors"
            on:click={() => (isMenuOpen = false)}>Kontak</a
          >
        </div>
      </div>
    {/if}
  </div>
</nav>

<!-- Hero Section -->
<section class="min-h-screen flex items-center justify-center px-4 pt-20">
  <div class="max-w-6xl mx-auto text-center">
    <div class="mb-8">
      <h1 class="text-6xl md:text-8xl font-black mb-4 text-white">
        Butuh Air Bersih? 💧
      </h1>
      <!-- <h2 class="text-4xl md:text-6xl font-bold mb-6 text-white">
        Air Bersih <span class="text-yellow-400">Langsung</span> Datang!
      </h2> -->
    </div>

    <p
      class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
    >
      Gak usah ribet cari air bersih!
      <span class="text-yellow-400 font-semibold">Putra Wajo Gemilang</span>
      siap antar air jernih langsung ke rumah kamu.
      <span class="text-blue-400">Cepet, murah, terpercaya!</span>
    </p>

    <div
      class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
    >
      <a
        href="https://wa.me/6285117574858?text=Halo%20kak%2C%20mau%20pesan%20air%20bersih%20dong!"
        class="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-black text-lg rounded-2xl hover:scale-105 transition-transform shadow-lg"
      >
        💬 Chat Sekarang Yuk!
      </a>

      <div class="flex items-center gap-2 text-sm text-gray-400">
        <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <span>Online 24/7</span>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      <div
        class="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50"
      >
        <div class="text-3xl font-black text-blue-400">1000+</div>
        <div class="text-sm text-gray-400">Pelanggan Happy</div>
      </div>
      <div
        class="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50"
      >
        <div class="text-3xl font-black text-yellow-400">24/7</div>
        <div class="text-sm text-gray-400">Siap Antar</div>
      </div>
      <div
        class="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50"
      >
        <div class="text-3xl font-black text-green-400">1-2</div>
        <div class="text-sm text-gray-400">Jam Sampai</div>
      </div>
      <div
        class="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50"
      >
        <div class="text-3xl font-black text-purple-400">5⭐</div>
        <div class="text-sm text-gray-400">Rating Kece</div>
      </div>
    </div>
  </div>
</section>

<!-- Services Section -->
<section id="layanan" class="py-20 px-4">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-black mb-4 text-white">
        Layanan Kita
      </h2>
      <p class="text-xl text-gray-300">Simple aja, pilih yang kamu butuhin!</p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      {#each services as service, i}
        <div
          class="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 text-center hover:-translate-y-2 transition-all duration-300 group"
        >
          <div class="text-4xl mb-6 group-hover:scale-110 transition-transform">
            {service.icon}
          </div>
          <h3 class="text-2xl font-bold mb-4 text-white">{service.title}</h3>
          <p class="text-gray-300 mb-6 leading-relaxed">{service.desc}</p>
          <div class="text-yellow-400 font-bold text-lg mb-4">
            {service.price}
          </div>
          <button
            class="w-full py-3 bg-gradient-to-r from-blue-500 to-yellow-500 text-white font-bold rounded-xl hover:scale-105 transition-transform"
          >
            Pesan Sekarang
          </button>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Why Choose Us -->
<section class="py-20 px-4 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-4xl md:text-5xl font-black mb-4 text-white">
      Kenapa Pilih Kita?
    </h2>
    <p class="text-xl text-gray-300 mb-12">
      Banyak alasan kenapa kamu bakal suka sama kita!
    </p>

    <div class="grid md:grid-cols-2 gap-6">
      {#each whyUs as reason, i}
        <div
          class="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 flex items-center gap-4 hover:scale-105 transition-transform"
        >
          <div class="text-2xl">✨</div>
          <span class="text-lg text-gray-200">{reason}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Coverage Area -->
<section id="area" class="py-20 px-4">
  <div class="max-w-6xl mx-auto text-center">
    <h2 class="text-4xl md:text-5xl font-black mb-4 text-white">
      Area Jangkauan
    </h2>
    <p class="text-xl text-gray-300 mb-12">
      Kita melayani seluruh Palembang dan sekitarnya!
    </p>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {#each areas as area, i}
        <div
          class="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 text-center hover:scale-105 transition-transform"
        >
          <div class="text-2xl mb-3">📍</div>
          <div class="font-semibold text-gray-200">{area}</div>
        </div>
      {/each}
    </div>

    <div
      class="mt-12 bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 inline-block"
    >
      <div class="flex items-center gap-3">
        <div class="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
        <span class="text-lg text-gray-200">Gak ada area kamu? Chat aja..!</span
        >
      </div>
    </div>
  </div>
</section>

<!-- Testimonials -->
<section
  id="testimoni"
  class="py-20 px-4 bg-gradient-to-r from-slate-800/30 to-slate-900/30"
>
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-black mb-4 text-white">
        Kata Pelanggan
      </h2>
      <p class="text-xl text-gray-300">Mereka udah buktiin sendiri!</p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      {#each testimonials as testimonial, i}
        <div
          class="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:scale-105 transition-transform"
        >
          <div class="flex items-center gap-1 mb-4">
            {#each Array(testimonial.rating) as _, j}
              <span class="text-yellow-400 text-xl">⭐</span>
            {/each}
          </div>
          <p class="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
          <div class="flex items-center gap-3">
            <div
              class="w-12 h-12 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold"
            >
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <div class="font-semibold text-white">{testimonial.name}</div>
              <div class="text-sm text-gray-400">{testimonial.location}</div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="kontak" class="py-20 px-4">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-4xl md:text-5xl font-black mb-4 text-white">
      Yuk Chat Kita!
    </h2>
    <p class="text-xl text-gray-300 mb-12">
      Gampang banget, tinggal klik tombol di bawah!
    </p>

    <div
      class="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 max-w-2xl mx-auto"
    >
      <div class="text-4xl mb-4">💬</div>
      <h3 class="text-2xl font-bold mb-4 text-white">WhatsApp Kita</h3>
      <p class="text-gray-300 mb-8">
        Langsung aja chat, kita balas cepet kok! Mau tanya harga, jadwal, atau
        apa aja boleh.
      </p>

      <a
        href="https://wa.me/6285117574858?text=Halo%20Putra%20Wajo%20Gemilang%2C%20mau%20tanya%20tentang%20air%20bersih%20dong!"
        class="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-black text-xl rounded-2xl hover:scale-105 transition-transform shadow-lg mb-6"
      >
        🚀 Chat WhatsApp Sekarang!
      </a>

      <div class="text-sm text-gray-400">
        <div class="flex items-center justify-center gap-2">
          <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Biasanya balas dalam 5 menit</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="py-12 px-4 border-t border-gray-800">
  <div class="max-w-4xl mx-auto text-center">
    <div class="flex items-center justify-center gap-3 mb-6">
      <div>
        <img src="/logo.png" alt="Logo" class="h-12" />
      </div>
      <div>
        <div class="text-2xl font-black text-white">Putra Wajo Gemilang</div>
        <div class="text-sm text-gray-400">Layanan Air Bersih Berkualitas</div>
      </div>
    </div>

    <p class="text-gray-400 mb-4">
      Melayani dengan hati, mengantarkan air bersih untuk keluarga Indonesia 🇮🇩
    </p>

    <div class="text-sm text-gray-300">
      &copy; 2025 Putra Wajo Gemilang • Made with &hearts; in Palembang
    </div>
  </div>
</footer>

<!-- Floating WhatsApp Button -->
<a
  href="https://wa.me/6285117574858?text=Halo%20kak%2C%20mau%20pesan%20air%20bersih!"
  class="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-transform animate-bounce"
  title="Chat WhatsApp"
>
  &#x1F4AC;
</a>
