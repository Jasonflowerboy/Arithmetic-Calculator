const display = document.getElementById("display");

function appendToDisplay(input)
{
    display.value += input;
}

function clearDisplay()
{
    display.value ="";
}

function calculate()
{
    try{display.value = eval(display.value);

    }

    catch(error)
    {
        display.value = "sike - error";
    }
}




/*Disabling Zoom on mobile browser */
let lastTouchEnd = 0;

document.addEventListener("touchend", function (e) {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);
