!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.setAttribute("disabled","true"),e.removeAttribute("disabled"),timerSwitch=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.setAttribute("disabled","true"),clearInterval(timerSwitch)})),e.setAttribute("disabled","true")}();
//# sourceMappingURL=01-color-switcher.4743f537.js.map
