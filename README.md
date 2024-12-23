# React Front-End - Aplikasi Pemesanan Tiket

Aplikasi ini dibuat untuk mempermudah pengguna dalam melakukan pemesanan tiket penerbangan. Dibangun menggunakan framework JavaScript **React.js** dengan bantuan framework **Tailwind CSS** untuk styling, aplikasi ini menghadirkan pengalaman pemesanan yang cepat dan responsif.

---

## 📌 Fitur Utama

### 🏠 **Homepage**
- Halaman utama yang menampilkan informasi dan rekomendasi penerbangan.

### 🔍 **Pencarian Jadwal Penerbangan**
- Fitur untuk mencari jadwal penerbangan berdasarkan kriteria pengguna.

### ✈️ **Rekomendasi Tujuan Penerbangan**
- Menampilkan destinasi populer berdasarkan data perjalanan.

### 🛠️ **Filterasi Jadwal**
- Filter penerbangan berdasarkan harga, waktu, maskapai, dan lainnya.

### 📝 **Pemesanan Penerbangan**
- Memungkinkan pengguna untuk memesan tiket penerbangan yang dipilih.

### 💳 **Pembayaran**
- Pilihan metode pembayaran yang beragam untuk kemudahan transaksi.

### 📄 **Riwayat Pembelian**
- Melacak pembelian tiket yang telah dilakukan.

### 🔔 **Notifikasi**
- Memberikan pemberitahuan terkait pembelian tiket.
- Memberikan pemberitahuan terkait update profile akun.

---

## 🔐 Fitur Autentikasi
- **Login**
- **Register dengan OTP**
- **Logout**
- **Reset Password**
- **Forgot Password**
- **Profil User**
- **Update Profile Password**

---

## 🚀 Routing Aplikasi

Berikut adalah daftar route yang digunakan dalam aplikasi ini:

1. **`/login`**: Halaman Login
   - Digunakan oleh pengguna untuk masuk ke akun mereka.
   - Hanya dapat diakses oleh pengguna yang belum login (guest).

2. **`/register`**: Halaman Registrasi
   - Digunakan oleh pengguna baru untuk membuat akun.
   - Hanya dapat diakses oleh pengguna yang belum login (guest).

3. **`/otp-confirm`**: Halaman OTP
   - Digunakan untuk konfirmasi OTP setelah registrasi atau reset password.

4. **`/reset-password`**: Reset Password
   - Digunakan oleh pengguna yang ingin mereset password.
   - Hanya dapat diakses oleh pengguna yang belum login (guest).
   - Hanya dapat diakses oleh pengguna yang belum login (guest).

5. **`/forgot-password`**: Forgot Password
   - Digunakan oleh pengguna mengirim token untuk reset password.
   - Hanya dapat diakses oleh pengguna yang belum login (guest).
   - Hanya dapat diakses oleh pengguna yang belum login (guest).

6. **`/`**: Halaman Utama (Homepage)
   - Menampilkan informasi dan rekomendasi penerbangan.
   - Dapat diakses oleh semua pengguna yang belum login.

7. **`/search`**: Halaman Pencarian Jadwal Penerbangan
   - Digunakan untuk mencari penerbangan yang tersedia.
   - Hanya dapat diakses oleh pengguna yang sudah login (auth).

8. **`/checkout`**: Halaman Pemesanan
   - Digunakan untuk memproses pemesanan tiket penerbangan.
   - Hanya dapat diakses oleh pengguna yang sudah login (auth).

9. **`/history-order`**: Riwayat Pemesanan
    - Menampilkan riwayat pembelian tiket penerbangan pengguna.
    - Hanya dapat diakses oleh pengguna yang sudah login (auth).

10. **`/notification`**: Halaman Notifikasi
    - Menampilkan notifikasi terkait pembelian tiket.
    - Hanya dapat diakses oleh pengguna yang sudah login (auth).

11. **`/profile/:id`**: Halaman Profil Pengguna
    - Menampilkan informasi profil pengguna dan memungkinkan mereka untuk memperbarui data.
    - Hanya dapat diakses oleh pengguna yang sudah login (auth).

12. **`/payment:bookCode`**: Halaman Pembayaran
   - Digunakan untuk melakukan pembayaran pesanan tiket.
   - Hanya dapat diakses oleh pengguna yang sudah login (auth).

13. **`/payment-success:bookCode`**: Halaman Pembayaran Berhasil
   - Menampilkan status pembayaran setelah pembayaran berhasil.
   - Hanya dapat diakses oleh pengguna yang sudah login (auth).

14. **`/print-ticket:bookCode`**: Halaman Cetak Tiket
   - Menampilkan detail tiket yang sudah di berhasil melakukan transaksi.
   - Dapat melakukan download tiket dalam format pdf.

15. **`*`**: Halaman Not Found
    - Menampilkan halaman error jika route yang diminta tidak ditemukan.


## 🛠️ Library yang Digunakan

| Library                  | Versi    | Fungsi                                                                 |
|--------------------------|----------|------------------------------------------------------------------------|
| `axios`                 | ^1.7.7   | Untuk melakukan HTTP request ke backend (GET, POST, PUT, DELETE).     |
| `js-cookie`             | ^3.0.5   | Mengelola cookie di browser, seperti menyimpan token autentikasi.     |
| `jwt-decode`            | ^4.0.0   | Memproses dan membaca payload token JWT untuk validasi user.          |
| `react-hook-form`       | ^7.53.2  | Mengelola form dengan mudah dan efisien, termasuk validasi input.     |
| `react-loading-skeleton`| ^3.5.0   | Menampilkan skeleton loading untuk meningkatkan pengalaman pengguna.  |
| `react-router-dom`      | ^7.0.0   | Mengelola routing di aplikasi React, seperti navigasi antar halaman.  |
| `flowbite`              | ^2.5.2   | Menyediakan komponen UI berbasis Tailwind CSS untuk pengembangan cepat.|
| `html2canvas`           | ^1.4.1   | Mengambil tangkapan layar dari elemen HTML dan mengubahnya menjadi canvas. |
| `jspdf`                 | ^2.5.2   | Membuat dan mengunduh file PDF langsung dari browser.                  |
| `lucide-react`          | ^0.460.0 | Menyediakan ikon SVG modern yang dapat digunakan di aplikasi React.    |
| `prettier`              | ^3.3.3   | Alat untuk memastikan konsistensi format kode secara otomatis.         |
| `react-hot-toast`       | ^2.4.1   | Menampilkan notifikasi ringan dan interaktif di aplikasi React.        |
| `react-icon`            | ^1.0.0   | Menyediakan ikon berbasis SVG untuk digunakan di aplikasi React.       |
| `react-icons`           | ^5.3.0   | Menyediakan kumpulan ikon populer seperti FontAwesome dan Material Icons. |
| `react`                 | ^18.3.1  | Library utama untuk membangun antarmuka pengguna berbasis komponen.    |

---

## 📂 Cara Clone dan Jalankan Proyek

## Instruksi Instalasi dan Menjalankan Aplikasi

1. **Clone Repository**
   Clone repository aplikasi ini dari GitHub dengan perintah berikut:

   ```bash
   git clone https://github.com/Binar-KM7-Team-10/React-Front-End.git
   ```

2. **Masuk ke Direktori**
   Pindah ke direktori proyek yang baru saja di-clone:

   ```bash
   cd React-Front-End
   ```

3. **Setup Environment Variables**
   Buat file `.env` di root proyek berdasarkan contoh yang disediakan di `.env.example`. Masukkan variabel backend URL Anda sebagai berikut:

   ```
   VITE_BACKEND_URI=[URL-backend-Anda]
   ```

4. **Install Dependencies**
   Install dependensi yang diperlukan oleh aplikasi dengan menggunakan **npm** atau **yarn**:

   ```bash
   npm install
   ```

5. **Menjalankan Aplikasi**
   Jalankan aplikasi menggunakan Vite:

   ```bash
   npm run dev
   ```

6. **Akses Aplikasi**
   Setelah berhasil dijalankan, buka aplikasi di browser dengan mengunjungi [http://localhost:5173](http://localhost:5173) atau URL yang diberikan oleh Vite.

---

## 🧑‍💻 Tim Pengembang

- Ahmad Alif Ramadhan - [GitHub](https://github.com/neobitose)
- Wahyu Anang Zulfikri - [GitHub](https://github.com/wahyuanang)
- Irfan Muria - [GitHub](https://github.com/irpanzy)
- Muhammad Hanif Algifari - [GitHub](https://github.com/niff099)

---

## ✨ Teknologi yang Digunakan

- **React.js**: Library JavaScript untuk membangun antarmuka pengguna.
- **Tailwind CSS**: Framework CSS untuk styling yang cepat dan responsif.
- **Node.js**: Runtime JavaScript di sisi server untuk membangun backend aplikasi.
- **Vite**: Build tool modern yang cepat untuk pengembangan aplikasi berbasis JavaScript.
- **Vercel**: Platform untuk melakukan deployment aplikasi secara cepat, dengan dukungan serverless.
- **Axios**: Library untuk melakukan HTTP request ke backend (GET, POST, PUT, DELETE).
- **Postman**: Tool API testing yang digunakan untuk menguji endpoint backend.
- **JavaScript**: Bahasa pemrograman utama yang digunakan untuk logika aplikasi di frontend dan backend.

---

## 🌟 Kontribusi
Kami menerima kontribusi untuk pengembangan lebih lanjut aplikasi ini. Jika Anda tertarik untuk berkontribusi, silakan buat pull request atau hubungi salah satu pengembang.

---

