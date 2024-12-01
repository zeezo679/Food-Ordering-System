document.addEventListener("DOMContentLoaded", () => {
    function filterDivs(category) {
        const items = document.querySelectorAll("#meals .m1");
        items.forEach((item) => {
            const itemCategory = item.getAttribute("data-category");
            if (category === "all" || itemCategory === category) {                
                item.classList.remove("hidden"); 
            } else {
                item.classList.add("hidden"); 
            }
        });
    }

    const buttons = document.querySelectorAll("#filter-controls button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {            
            const category = button.getAttribute("data-category");
            filterDivs(category);
        });
    });

    filterDivs("all");
});