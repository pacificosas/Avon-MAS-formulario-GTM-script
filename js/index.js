import { PacificaPopup } from "./popup";
var popup;
var keyname = "popupForm";
window.addEventListener('message', function (event) {
    var status = event.data;
    switch (status) {
        case "submit":
            popup.close();
            sessionStorage.setItem(keyname, "true");
            break;
        case "error":
            break;
        case "invalid":
            break;
        case "notAgain":
            localStorage.setItem(keyname, "true");
            break;
        case "cancelNotAgain":
            localStorage.removeItem(keyname);
            break;
        default:
            break;
    }
});
function injectForm(injectSite, popupPath) {
    if (popupPath && window.location.pathname != popupPath) {
        return false;
    }
    if (sessionStorage.getItem(keyname)) {
        return false;
    }
    if (localStorage.getItem(keyname)) {
        return false;
    }
    popup = new PacificaPopup({
        html: "<iframe src=" + injectSite + " height=100% width=100% style=\"border:none; background:white;\"></iframe>\n\t\t<span style=\"position:absolute;top:1.5rem; font-weight:500;font-size:1.5rem;color:#00000078;cursor:pointer;right:2rem;background:#ffffffa1;padding:0rem 0.5rem; border-radius:50px;\">X</span>\n\t",
        open: true,
        closeOnClickOf: "span",
        popupCss: {
            default: {
                background: "transparent",
                textAlign: "center",
                height: '700px',
                width: '100%',
                maxWidth: "1100px",
                zIndex: "5000000000",
                top: '50vh',
                maxHeight: '100%'
            },
            mobile: {}
        },
        overlayCss: {
            default: {
                background: "#000000a6"
            },
            desktop: {},
            mobile: {}
        },
    });
}
top.paciform = injectForm;
//# sourceMappingURL=index.js.map