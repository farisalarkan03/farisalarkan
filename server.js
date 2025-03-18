document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const images = [
        "img/Photo from Faris Al Arkan (3).jpg",
        "img/Photo from Faris Al Arkan (2).jpg",
        "img/image3.jpg",
        "img/image4.jpg"
    ]; // Gantilah dengan nama file yang ada di folder img/

    images.forEach(image => {
        const img = document.createElement("img");
        img.src = image;
        img.alt = image.split("/").pop().split(".")[0];
        img.addEventListener("click", () => {
            document.getElementById("popup-img").src = img.src;
            document.getElementById("popup").style.display = "flex";
        });
        gallery.appendChild(img);
    });

    document.querySelector(".close").addEventListener("click", () => {
        document.getElementById("popup").style.display = "none";
    });
});
