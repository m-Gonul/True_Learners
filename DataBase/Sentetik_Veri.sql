-- ============================================
-- Test Verileri - Sentetik Veri Yüklemesi
-- Mockaroo tarzında üretilmiş veriler
-- ============================================

USE proje;





-- ============================================
-- 0. MEVCUT TEST VERİLERİNİ TEMİZLE
-- ============================================
-- Foreign key constraint'ler nedeniyle ters sırayla siliyoruz

SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE OgrenciSinavSonuclari;
TRUNCATE TABLE Secenekler;
TRUNCATE TABLE Sorular;
TRUNCATE TABLE Sinavlar;
TRUNCATE TABLE OgrenciDersKayitlari;
TRUNCATE TABLE Dersler;
TRUNCATE TABLE Kullanicilar;

SET FOREIGN_KEY_CHECKS = 1;

-- ============================================
-- 1. KULLANICILAR (5 Öğretmen + 30 Öğrenci)
-- ============================================

-- Öğretmenler (5 kişi)
-- Tüm şifreler: "password123" (bcrypt hash)
INSERT INTO Kullanicilar (KullaniciAdi, SifreHash, AdSoyad, Eposta, ROL) VALUES
('ogretmen1', '$2b$10$YourBcryptHashHere1234567890abcdefghijklmnopqrstuvwx', 'Ahmet Yılmaz', 'ahmet.yilmaz@universite.edu.tr', 'Ogretmen'),
('ogretmen2', '$2b$10$YourBcryptHashHere1234567890abcdefghijklmnopqrstuvwx', 'Ayşe Demir', 'ayse.demir@universite.edu.tr', 'Ogretmen'),
('ogretmen3', '$2b$10$YourBcryptHashHere1234567890abcdefghijklmnopqrstuvwx', 'Mehmet Kaya', 'mehmet.kaya@universite.edu.tr', 'Ogretmen'),
('ogretmen4', '$2b$10$YourBcryptHashHere1234567890abcdefghijklmnopqrstuvwx', 'Fatma Şahin', 'fatma.sahin@universite.edu.tr', 'Ogretmen'),
('ogretmen5', '$2b$10$YourBcryptHashHere1234567890abcdefghijklmnopqrstuvwx', 'Ali Çelik', 'ali.celik@universite.edu.tr', 'Ogretmen');

-- Öğrenciler (30 kişi)
-- Tüm şifreler: "student123" (bcrypt hash)
INSERT INTO Kullanicilar (KullaniciAdi, SifreHash, AdSoyad, Eposta, ROL) VALUES
('ogrenci1', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Zeynep Acar', 'zeynep.acar@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci2', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Can Öztürk', 'can.ozturk@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci3', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Elif Arslan', 'elif.arslan@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci4', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Burak Yıldız', 'burak.yildiz@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci5', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Selin Koç', 'selin.koc@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci6', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Emre Aydın', 'emre.aydin@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci7', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Deniz Yılmaz', 'deniz.yilmaz@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci8', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Ece Kara', 'ece.kara@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci9', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Mert Demir', 'mert.demir@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci10', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'İrem Şahin', 'irem.sahin@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci11', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Barış Özer', 'baris.ozer@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci12', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Gizem Kurt', 'gizem.kurt@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci13', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Onur Tekin', 'onur.tekin@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci14', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Pınar Çetin', 'pinar.cetin@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci15', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Kaan Yıldırım', 'kaan.yildirim@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci16', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Aylin Aksoy', 'aylin.aksoy@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci17', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Arda Güneş', 'arda.gunes@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci18', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Ceren Özkaya', 'ceren.ozkaya@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci19', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Tolga Erdem', 'tolga.erdem@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci20', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Duygu Aktaş', 'duygu.aktas@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci21', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Serkan Bulut', 'serkan.bulut@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci22', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Nihan Doğan', 'nihan.dogan@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci23', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Sinan Polat', 'sinan.polat@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci24', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Burcu Özkan', 'burcu.ozkan@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci25', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Kerem Aslan', 'kerem.aslan@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci26', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Merve Çakır', 'merve.cakir@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci27', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Berkay Yurt', 'berkay.yurt@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci28', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Seda Çelik', 'seda.celik@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci29', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Yunus Kılıç', 'yunus.kilic@ogrenci.edu.tr', 'Ogrenci'),
('ogrenci30', '$2b$10$DifferentBcryptHashForStudents123456789abcdefghijklmno', 'Gamze Taş', 'gamze.tas@ogrenci.edu.tr', 'Ogrenci');

-- ============================================
-- 2. DERSLER (5 ders)
-- ============================================

INSERT INTO Dersler (DersKodu, DersAdi, DersOgretmenID) VALUES
('BIL101', 'Bilgisayar Programlama I', 1),
('MAT201', 'Diferansiyel Denklemler', 2),
('FIZ102', 'Genel Fizik II', 3),
('VYS301', 'Veritabanı Yönetim Sistemleri', 4),
('YZM401', 'Yapay Zeka ve Makine Öğrenmesi', 5);

-- ============================================
-- 3. ÖĞRENCİ DERS KAYITLARI
-- Her öğrenci 1-2 derse kayıtlı (toplam ~45 kayıt)
-- ============================================

INSERT INTO OgrenciDersKayitlari (OgrenciID, DersID) VALUES
-- BIL101 öğrencileri (10 öğrenci)
(6, 1), (7, 1), (8, 1), (9, 1), (10, 1), (11, 1), (12, 1), (13, 1), (14, 1), (15, 1),

-- MAT201 öğrencileri (8 öğrenci)
(16, 2), (17, 2), (18, 2), (19, 2), (20, 2), (21, 2), (22, 2), (23, 2),

-- FIZ102 öğrencileri (9 öğrenci)
(6, 3), (9, 3), (12, 3), (15, 3), (24, 3), (25, 3), (26, 3), (27, 3), (28, 3),

-- VYS301 öğrencileri (10 öğrenci)
(7, 4), (10, 4), (13, 4), (16, 4), (19, 4), (22, 4), (29, 4), (30, 4), (31, 4), (32, 4),

-- YZM401 öğrencileri (8 öğrenci)
(8, 5), (11, 5), (14, 5), (17, 5), (20, 5), (23, 5), (33, 5), (34, 5);

-- ============================================
-- 4. SINAVLAR (Her derste 2 sınav = 10 sınav)
-- ============================================



-- ============================================
-- VERİ YÜKLEMESİ TAMAMLANDI
-- ============================================
-- Özet:
-- - 5 Öğretmen
-- - 30 Öğrenci
-- - 5 Ders
-- - ~45 Öğrenci-Ders Kaydı
-- - 10 Sınav (Her derste 2)
-- - ~40 Soru (Her sınavda 3-5)
-- - ~100 Seçenek
-- - 55 Sınav Sonucu (%60 katılım)
-- ============================================ 

INSERT INTO Dersler (DersKodu, DersAdi, DersOgretmenID) VALUES
('mat1', 'Bilgisayar Programlama I', 37),
('fiz1', 'Diferansiyel Denklemler', 37),
('kim1', 'Genel Fizik II', 37),
('bil1', 'Veritabanı Yönetim Sistemleri', 37),
('yap1', 'Yapay Zeka ve Makine Öğrenmesi', 37);

INSERT INTO OgrenciDersKayitlari (OgrenciID, DersID) VALUES
-- BIL101 öğrencileri (10 öğrenci)
(36, 6), (36, 7), (36, 8), (36, 9), (36, 10);




SELECT 'Veri yükleme işlemi başarıyla tamamlandı!' AS Mesaj;