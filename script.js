// GRADIENT TOP

var gt = document.getElementById('gradient-top'),
    topctx = gt.getContext("2d"),
    w = window.innerWidth;

var grdTop = topctx.createLinearGradient(100, 0, 100, 100);

grdTop.addColorStop(0.5, "rgba(255, 255, 255, 1.0)");
grdTop.addColorStop(1, "rgba(255, 255, 255, 0)");

topctx.fillStyle = grdTop;
topctx.fillRect(0,0,w,100);

// GRADIENT BOTTOM

var gb = document.getElementById('gradient-bottom'),
    bottomctx = gb.getContext("2d");

var grdBottom = bottomctx.createLinearGradient(0, 200, 0, 0);

grdBottom.addColorStop(0.5, "rgba(255, 255, 255, 1.0)");
grdBottom.addColorStop(1, "rgba(255, 255, 255, 0)");

bottomctx.fillStyle = grdBottom;
bottomctx.fillRect(0,0,w,200);
