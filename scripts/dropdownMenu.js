function openDropdown() 
{
    document.getElementById("dropDownMenu").classList.toggle("menuShow");
}

//When you click outside the dropdown menu, close the drobdown menu
window.onclick = function(event) 
{
    if (!event.target.matches('.menuIcon')) 
    {
        var dropdowns = document.getElementsByClassName("menuContainer");
        var i;
    
        for (i = 0; i < dropdowns.length; i++) 
        {
            var openDropdown = dropdowns[i];
    
            if (openDropdown.classList.contains('menuShow')) 
                openDropdown.classList.remove('menuShow');
        }
    }
}