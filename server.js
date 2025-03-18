const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const imgDir = path.join(__dirname, "img");

app.use(express.static("public"));
app.use("/img", express.static(imgDir));

app.get("/img", (req, res) => {
    fs.readdir(imgDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: "Gagal membaca folder gambar." });
        }
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        res.json(imageFiles);
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
