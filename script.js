const display = document.getElementById("display");
const clicksound = document.getElementById("click-sound");

function playClick()
{
    clicksound.currentTime = 0; 
    clicksound.play();  
}

function appendToDisplay(input)
{
    playClick();
    display.value += input;
}

function clearDisplay()
{
    playClick();
    display.value ="";
}

function calculate()
{   playClick();
    try{display.value = eval(display.value);

    }

    catch(error)
    {
        display.value = "sike - error";
    }
}




