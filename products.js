const express = require("express");
const app = express();

const products = [
  { id: 1, ad: "Süd", qiymet: 2, miqdar: 20 },
  { id: 2, ad: "Çörək", qiymet: 1, miqdar: 50 },
  { id: 3, ad: "Pendirlər", qiymet: 4, miqdar: 15 },
  { id: 4, ad: "Yağ", qiymet: 6, miqdar: 10 },
  { id: 5, ad: "Şəkər", qiymet: 2.5, miqdar: 30 },
  { id: 6, ad: "Duz", qiymet: 1, miqdar: 40 },
  { id: 7, ad: "Yumurta", qiymet: 3, miqdar: 25 },
  { id: 8, ad: "Çay", qiymet: 5, miqdar: 12 },
  { id: 9, ad: "Kofe", qiymet: 7, miqdar: 8 },
  { id: 10, ad: "Makaron", qiymet: 2, miqdar: 22 },
];

app.get("/products", (req, res) => {
  let html = "<h2>Məhsullar Siyahısı</h2><ul>";
  products.forEach((p) => {
    html += `<li>ID: ${p.id}; Ad: ${p.ad}; Qiymət: ${p.qiymet} AZN; Miqdar: ${p.miqdar} ədəd</li>`;
  });
  html += "</ul>";
  res.send(html);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);

  if (product) {
    res.send(`<h3>Məhsul Məlumatı</h3>
              <p>ID: ${product.id}</p>
              <p>Ad: ${product.ad}</p>
              <p>Qiymət: ${product.qiymet} AZN</p>
              <p>Miqdar: ${product.miqdar} ədəd</p>`);
  } else {
    res.status(404).send("<h3>Belə bir məhsul tapılmadı!</h3>");
  }
});

app.get("/", (req, res) => {
  res.send(
    '<h1>Mağaza Serveri</h1><p><a href="/products">Məhsullara bax</a></p>'
  );
});

app.listen(4500, () => {
  console.log(`Server http://localhost:4500 ünvanında işləyir`);
});
