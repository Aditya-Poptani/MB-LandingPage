const event_overlay = document.querySelector(".event-overlay");

const y_modal_video = document.querySelector(".y-modal-video");
const y_modal = document.querySelector(".y-modal");
const y_icon_container = document.querySelector(".y-event-con");
const y_closing_btn = document.querySelector(".y-closing-btn");

y_icon_container.addEventListener("click", () => {
    y_modal.style.setProperty("display", "grid");
    y_modal.style.setProperty("animation", "modal-pop 0.3s ease-in-out forwards");
    event_overlay.style.setProperty("display","block");
    event_overlay.style.setProperty("background","rgba(33, 32, 32, 0.773)");
    y_modal_video.style.setProperty("animation","fade-in 1s ease-in-out forwards 0.5s");
});
y_closing_btn.addEventListener("click", () => {
    y_modal.style.setProperty("animation", "modal-repop 0.3s ease-in-out forwards");
    event_overlay.style.setProperty("display","none");
    y_modal_video.style.setProperty("visibility","hidden");
});

const i_modal_video = document.querySelector(".i-modal-video");
const i_modal = document.querySelector(".i-modal");
const i_icon_container = document.querySelector(".i-event-con");
const i_closing_btn = document.querySelector(".i-closing-btn");

i_icon_container.addEventListener("click", () => {
    i_modal.style.setProperty("display", "grid");
    i_modal.style.setProperty("animation", "modal-pop 0.3s ease-in-out forwards");
    event_overlay.style.setProperty("display","block");
    event_overlay.style.setProperty("background","rgba(33, 32, 32, 0.773)");
    i_modal_video.style.setProperty("animation","fade-in 1s ease-in-out forwards 0.5s");
});
i_closing_btn.addEventListener("click", () => {
    i_modal.style.setProperty("animation", "modal-repop 0.3s ease-in-out forwards");
    event_overlay.style.setProperty("display","none");
    i_modal_video.style.setProperty("visibility","hidden");
});
