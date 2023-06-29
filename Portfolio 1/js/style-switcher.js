/* =========================== theme colors =========================== */
const alternatestyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternatestyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}