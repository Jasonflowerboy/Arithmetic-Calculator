const display = document.getElementById("display");
const clicksound = document.getElementById("click-sound");

function playClick()
{
    clicksound.currentTime = 0.2; /*Found out my audio is a bit delayed so we start from 0.2 instead of 0 everytime*/
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




