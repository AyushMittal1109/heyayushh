const pages = ["home", "contactMe","projects","career"]

const changePage = (activatePage) => {
    pages.forEach( page => {
        if (page === activatePage) {
            document.getElementById(page).style.display = "block";
        }
        else {
            document.getElementById(page).style.display = "none";
        }
    })
}

const openResume = () => {
    window.open("https://drive.google.com/file/d/10QlnCPKctdnBgDjN4G6-3Aa_A4Whmu2r/view", "_blank");
}
