document.addEventListener("DOMContentLoaded", () => {
    const envolpe = document.getElementById("envolpe");
    const cover = document.getElementById("cover");
    const content = document.getElementById("content");

    envolpe.addEventListener("click", () => {
        cover.classList.add("fade-out");

        setTimeout(() => {
            cover.classList.remove("active");
            content.classList.add("active");
        }, 600);
    });
});