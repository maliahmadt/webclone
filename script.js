WebFont.load({
    google: {
        families: ["Oswald:200,300,400,500,600,700", "Urbanist:300,regular,500,600,700,800", "Playfair Display:regular,500italic,600italic,700italic", "Poppins:300,regular,500,700"]
    }
});
window.__WEBFLOW_CURRENCY_SETTINGS = {
    "currencyCode": "USD",
    "symbol": "$",
    "decimal": ".",
    "fractionDigits": 2,
    "group": ",",
    "template": "{{wf {\"path\":\"symbol\",\"type\":\"PlainText\"} }} {{wf {\"path\":\"amount\",\"type\":\"CommercePrice\"} }} {{wf {\"path\":\"currencyCode\",\"type\":\"PlainText\"} }}",
    "hideDecimalForWholeNumbers": false
};
!function (o, c) {
    var n = c.documentElement,
        t = " w-mod-";
    n.className += t + "js",
        ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
}(window, document);

document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".service-process-step");
    function updateProgress() {
        steps.forEach((step, index) => {
            const rect = step.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            if (rect.top < viewportHeight && rect.bottom > 0) {
                setTimeout(() => {
                    const scrollPercentage = Math.min(1, (viewportHeight - rect.top) / rect.height);
                    const progressBar = step.querySelector(".service-step-progress");
                    progressBar.style.transform = `scaleY(${scrollPercentage})`;
                }, index * 400);
            }
        });
    }
    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);
});