$('.inhabitantVisible').click(e => {

    const $this = $(e.currentTarget);
    const container = $this.closest('.inhabitantContent');
    const elemContainer = $this.closest(".inhabitantCards");

    if (elemContainer.hasClass("active")) {
        
    closeEveryItem(container);

    } else {

    closeEveryItem(container);
    openItem($this);
        
    }    
})

const openItem = item => {

    const container = item.closest(".inhabitantCards");
    const contentBlock = container.find(".inhabitantHidden");
    const textBlock = contentBlock.find(".inhabitantHiddenBlock");
    const reqHeight = textBlock.height();

    container.addClass("active");
    contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
    const items = container.find('.inhabitantHidden');
    const itemContainer = container.find(".inhabitantCards");

    itemContainer.removeClass("active");
    items.height(0);
}
