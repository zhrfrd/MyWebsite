populateArray();

//Size
var rngSize = document.getElementById("rngSize");
var spnSizeOutput = document.getElementById("spnSize");

//Speed
var rngSpeed = document.getElementById("rngSpeed");
var spnSpeedOutput = document.getElementById("spnSpeed");

spnSizeOutput.innerHTML = rngSize.value;
spnSpeedOutput.innerHTML = rngSpeed.value + " ms";

//Update in realtime the size of the array with the movement of the range tag
rngSize.oninput = function()
{
    spnSizeOutput.innerHTML = this.value;
    populateArray();
}

//Set sorting speed
rngSpeed.oninput = function()
{
    spnSpeedOutput.innerHTML = this.value + " ms";
}