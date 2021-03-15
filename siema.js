function initialize() {
    openPage(1);
}

function openPage(pageNumebr) {
    let pages = document.getElementById('page-container').children;
    Array.from(pages).forEach(page => {
        if (pageNumebr != page.id) {
            page.className = 'd-none';
        } else {
            page.className = 'd-block';
        }
    });
    console.log(pages);

}