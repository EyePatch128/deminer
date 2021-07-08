$('document').ready(function () {
    //navigation  bar animation
    $(".nav-logo").hover(function () {
        const hoverin = function () {
            var c1 = 1;
            var i1 = setInterval(function () {
                $(`.logo-letter:nth-child(${c1})`).addClass("logo_trans");
                c1++;
                if (c1 > $('.logo-letter').length) clearInterval(i1)
            }, 50);
        };
        const hoverout = function () {
            var c2 = 1;
            var i2 = setInterval(function () {
                $(`.logo-letter:nth-child(${c2})`).removeClass("logo_trans");
                c2++;
                if (c2 > $('.logo-letter').length) clearInterval(i2)
            }, 100);
        };
        hoverin();
        setTimeout(hoverout, 50)
        
    });

    //introduction title animation
    const introTitChangeColor = function () {
        const gradients = [["#FF416C", "#FF4B2B"], ["#C6FFDD", "#FBD786", "#f7797d"], ["#12c2e9", "#c471ed", "#f7797d"], ["#b92b27", "#1565C0"], ["#c31432", "#240b36"], ["#f12711", "#f5af19"], ["#555555", "#dd1818"], ["#DA4453", "#89216B"]];
        const gradients_directs = ["to right", "to left", "to top", "to bottom"];
        const gradient = Math.floor(Math.random() * 7);
        const gradient_direct = Math.floor(Math.random() * 3);
        const bg_val = `linear-gradient(${gradients_directs[gradient_direct]}, ${gradients[gradient].toString()})`;
        $(".intro h1").css("background", bg_val);
        $(".intro h1").css("-webkit-background-clip", "text");
    };
    setInterval(introTitChangeColor, 3000);
})