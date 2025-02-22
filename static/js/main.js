const addEventListeners = () => {
    const btnAddRevenue = document.getElementById("add-revenue");
    const btnAddExpense = document.getElementById("add-expense");

    btnAddRevenue.addEventListener("click", () => {
        $('#ModalRevenue').modal('show');
    });

    btnAddExpense.addEventListener("click", () => {
        $('#ModalExpense').modal('show');
    });
}

const sidebarFunctions = () => {
    const btnDashboard = document.getElementById("dashboard");
    const btnExtract = document.getElementById("extract");
    const btnAbout = document.getElementById("about");
    const path = window.location.pathname;

    switch (path) {
        case "/dashboard":
            btnDashboard.classList.add("active");
            btnDashboard.style.background = "rgba(128, 0, 128, 0.7)";
            btnExtract.classList.add("text-body");
            btnAbout.classList.add("text-body");
            break;
        case "/extract":
            btnExtract.classList.add("active");
            btnExtract.style.background = "rgba(128, 0, 128, 0.7)";
            btnDashboard.classList.add("text-body");
            btnAbout.classList.add("text-body");
            break;
        case "/about":
            btnAbout.classList.add("active");
            btnAbout.style.background = "rgba(128, 0, 128, 0.7)";
            btnDashboard.classList.add("text-body");
            btnExtract.classList.add("text-body");
            break;
        default:
            btnDashboard.classList.add("active");
            b.style.background = "rgba(128, 0, 128, 0.7)";
            btnExtract.classList.add("text-body");
            break;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    addEventListeners();
    sidebarFunctions();
});