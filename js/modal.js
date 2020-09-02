document.addEventListener("DOMContentLoaded", function () {
    var modalButtons = document.querySelectorAll(".js-open-modal"),
        overlay = document.querySelector(".js-overlay-modal");

    modalButtons.forEach(function (item) {
        item.addEventListener("click", function (e) {
            e.preventDefault();

            var modalId = this.getAttribute("data-modal"),
                modalElem = document.querySelector(
                    '.modal[data-modal="' + modalId + '"]'
                );

            modalElem.classList.add("active");
            overlay.classList.add("active");

            document.body.style.overflow = "hidden";
        });
    });

    overlay.addEventListener("click", function () {
        document.querySelector(".modal.active").classList.remove("active");
        this.classList.remove("active");

        document.body.style.overflow = "auto";
    });
});
