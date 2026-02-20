function enableTooltips() {
  var tooltip = document.createElement("div");
  tooltip.style.cssText =
    "position:fixed;z-index:9999;max-width:420px;padding:10px 12px;border:1px solid #111;background:#fff;color:#111;pointer-events:none;display:none;";
  document.body.appendChild(tooltip);

  var hints = document.querySelectorAll(".hint");

  hints.forEach(function (el) {
    var text = el.getAttribute("title") || "";
    el.setAttribute("data-tip", text);
    el.removeAttribute("title");

    el.addEventListener("mouseenter", function () {
      var t = el.getAttribute("data-tip") || "";
      if (!t) return;

      tooltip.textContent = t;
      tooltip.style.display = "block";

      var r = el.getBoundingClientRect();
      var gap = 10;
      var pad = 10;

      var x = r.left;
      var y = r.bottom + gap;

      var w = tooltip.offsetWidth;
      var h = tooltip.offsetHeight;

      if (x + w + pad > window.innerWidth) x = window.innerWidth - w - pad;
      if (x < pad) x = pad;

      if (y + h + pad > window.innerHeight) y = r.top - h - gap;
      if (y < pad) y = pad;

      tooltip.style.left = Math.round(x) + "px";
      tooltip.style.top = Math.round(y) + "px";
    });

    el.addEventListener("mouseleave", function () {
      tooltip.style.display = "none";
    });
  });
}

window.enableTooltips = enableTooltips;
