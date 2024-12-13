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

---

## 🔐 Fitur Autentikasi
- **Login**
- **Register dengan OTP**
- **Logout**
- **Reset Password**
- **Forgot Password**
- **Profil User**: Melihat informasi profil pengguna.
- **Update Profile Password**

---

## 🚀 Routing Aplikasi

Berikut adalah daftar route yang digunakan dalam aplikasi ini:

1. **`/`**: Halaman Utama (Homepage)
   - Menampilkan informasi dan rekomendasi penerbangan.
   - Dapat diakses oleh semua pengguna yang belum login.

2. **`/reset-password`**: Reset Password
   - Digunakan oleh pengguna yang ingin mereset password.
   - Hanya dapat diakses oleh pengguna yang belum login (guest).

3. **`/otp-confirm`**: Halaman OTP
   - Digunakan untuk konfirmasi OTP setelah registrasi atau reset password.
   - Hanya dapat diakses oleh pengguna yang belum login (guest).

4. **`/login`**: Halaman Login
   - Digunakan oleh pengguna untuk masuk ke akun mereka.
   - Hanya dapat diakses oleh pengguna yang belum login (guest).

5. **`/register`**: Halaman Registrasi
   - Digunakan oleh pengguna baru untuk membuat akun.
   - Hanya dapat diakses oleh pengguna yang belum login (guest).

6. **`/payment`**: Halaman Pembayaran
   - Digunakan untuk melakukan pembayaran pesanan tiket.
   - Hanya dapat diakses oleh pengguna yang sudah login (auth).

7. **`/checkout`**: Halaman Pemesanan
   - Digunakan untuk memproses pemesanan tiket penerbangan.
   - Hanya dapat diakses oleh pengguna yang sudah login (auth).

8. **`/search`**: Halaman Pencarian Jadwal Penerbangan
   - Digunakan untuk mencari penerbangan yang tersedia.
   - Hanya dapat diakses oleh pengguna yang sudah login (auth).

9. **`/payment-success`**: Halaman Pembayaran Berhasil
   - Menampilkan status pembayaran setelah pembayaran berhasil.
   - Hanya dapat diakses oleh pengguna yang sudah login (auth).

10. **`/history-order`**: Riwayat Pemesanan
    - Menampilkan riwayat pembelian tiket penerbangan pengguna.
    - Hanya dapat diakses oleh pengguna yang sudah login (auth).

11. **`/notifikasi`**: Halaman Notifikasi
    - Menampilkan notifikasi terkait pembelian tiket.
    - Hanya dapat diakses oleh pengguna yang sudah login (auth).

12. **`/profile/:id`**: Halaman Profil Pengguna
    - Menampilkan informasi profil pengguna dan memungkinkan mereka untuk memperbarui data.
    - Hanya dapat diakses oleh pengguna yang sudah login (auth).

13. **`*`**: Halaman Not Found
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

---

## 🌟 Kontribusi
Kami menerima kontribusi untuk pengembangan lebih lanjut aplikasi ini. Jika Anda tertarik untuk berkontribusi, silakan buat pull request atau hubungi salah satu pengembang.

---

