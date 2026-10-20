// Mengambil elemen tombol HTML yang memiliki ID 'sapaButton' dan menyimpannya ke dalam memori JavaScript
const tombolSapa = document.getElementById('sapaButton');

// Memberikan "pendengar" pada tombol. Saat tombol 'diklik' ('click'), ia akan menjalankan tugas di dalam kurung kurawal
tombolSapa.addEventListener('click', function() {
  
  // Memunculkan kotak notifikasi peringatan di bagian atas browser
  alert('Halo! Terima kasih sudah berkunjung!');
  
});
