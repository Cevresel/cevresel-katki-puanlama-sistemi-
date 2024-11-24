document.getElementById("veriGormeButonu").addEventListener("click", function() {
    document.getElementById("icerik").innerHTML = `
        <h2>Veri Görme Bölümü</h2>
        <p>Bu bölümde okulların geri dönüşüm verileri gösterilecektir...</p>
    `;
});

document.getElementById("veriGirimeButonu").addEventListener("click", function() {
    document.getElementById("icerik").innerHTML = `
        <h2>Veri Girme Bölümü</h2>
        <form id="veriGirmeFormu">
            <input type="text" placeholder="Okul Adı" required>
            <input type="number" placeholder="Toplanan Atık Miktarı (kg)" required>
            <input type="number" placeholder="Ekokredi Puanı" required>
            <button type="submit">Veri Gir</button>
        </form>
    `;

    document.getElementById("veriGirmeFormu").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Veri başarıyla girildi.");
    });
});

document.getElementById("kayitButonu").addEventListener("click", function() {
    document.getElementById("icerik").innerHTML = `
        <h2>Kayıt Ol</h2>
        <form id="kayitFormu">
            <input type="text" placeholder="Kullanıcı Adı" required>
            <input type="email" placeholder="E-posta" required>
            <input type="password" placeholder="Şifre" required>
            <button type="submit">Kayıt Ol</button>
        </form>
    `;

    document.getElementById("kayitFormu").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Kayıt başarıyla tamamlandı.");
    });
});

document.getElementById("girisButonu").addEventListener("click", function() {
    document.getElementById("icerik").innerHTML = `
        <h2>Giriş Yap</h2>
        <form id="girisFormu">
            <input type="text" placeholder="Kullanıcı Adı" required>
            <input type="password" placeholder="Şifre" required>
            <button type="submit">Giriş Yap</button>
        </form>
    `;

    document.getElementById("girisFormu").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Giriş başarılı.");
    });
});
