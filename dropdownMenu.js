// const openItem = iten => {
//     const container = item.closest(".inhabitantText");
//     const contentBlock = container.fing(".inhabitantHidden");
//     const reqHeight = contentBlock.height();

//     container.addClass("active");
//     contentBlock.height(reqHeight);
// }


const inhabitantHeader = document.querySelectorAll(".inHabitantTitle");

inhabitantHeader.forEach(function(item) {
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);


        inhabitantHeader.forEach(function(item) {
            item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    });
});