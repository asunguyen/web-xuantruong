export default {
    mounted() {
        $(document).ready(function () {
            let clicked = false;
            // Cache selectors
            var lastId,
                topMenu = $(".sidebar"),
                topMenuHeight = topMenu.outerHeight(),
                // All list items
                menuItems = topMenu.find("a"),
                // Anchors corresponding to menu items
                scrollItems = menuItems.map(function () {
                    var item = $($(this).attr("href"));
                    if (item.length) {
                        return item;
                    }
                });

            // Bind click handler to menu items
            // so we can get a fancy scroll animation
            menuItems.click(function (e) {
                e.preventDefault();
                clicked = true;

                var href = $(this).attr("href"),
                    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 550;

                $("html, body").stop().animate({
                    scrollTop: offsetTop
                }, 1000, function () {
                    clicked = false;
                });

                e.stopPropagation();
            });

            // Bind to scroll
            $(window).scroll(function () {
                // Get container scroll position
                var fromTop = $(this).scrollTop() + topMenuHeight;

                // Get id of current scroll item
                var cur = scrollItems.map(function () {
                    if ($(this).offset().top < fromTop) return this;
                });
                // Get the id of the current element
                cur = cur[cur.length - 1];
                var id = cur && cur.length ? cur[0].id : "";

                if (lastId !== id && clicked == false) {
                    lastId = id;
                    // Set/remove active class
                    menuItems
                        .siblings(".desc")
                        .stop()
                        .slideUp()
                        .end()
                        .parent()
                        .removeClass("active")
                        .end()
                        .filter("[href='#" + id + "']")
                        .parent()
                        .addClass("active")
                        .end()
                        .siblings(".desc")
                        .stop()
                        .slideDown();
                }
            });
        });
    }

}