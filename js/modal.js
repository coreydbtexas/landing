document.addEventListener("DOMContentLoaded", function () {
    var modalButtons = document.querySelectorAll(".js-open-modal"),
        overlay = document.querySelector(".js-overlay-modal"),
        closeButtons = document.querySelectorAll('.js-modal-close');

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

    closeButtons.forEach(function(item){

        item.addEventListener('click', function(e) {
            var parentModal = this.closest('.modal');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');

            document.body.style.overflow = 'auto';
        });

    });

    overlay.addEventListener("click", function () {
        document.querySelector(".modal.active").classList.remove("active");
        this.classList.remove("active");

        document.body.style.overflow = "auto";
    });
});
