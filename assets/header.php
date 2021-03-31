<?php 
    echo '
        <header id="header">
            <div id="headerContainerLeft">
                <a href="../index.php" class="headerItem"><img src="../images/faridLogo.png" alt="Farid logo"></a>
                <div id="searchBar" class="headerItem">
                    <h1 id="searchBarText"></h1>
                    <div id="searchBarIconContainer"><img src="../images/searchIcon.png" alt="Magnifier icon" id="searchBarIcon"></div>
                </div>
            </div>
            <div id="headerContainerRight">
                <div class="menuBlock" role="button" tabindex="0" aria-pressed="false" onkeypress="openDropdown()" onclick="openDropdown()">
                    <img src="../images/gridIcon.png" class="menuIcon navItem" alt="My social network icon">
                    <div id="dropDownMenu" class="menuContainer">
                        <div class="menuImageContainer" role="button" tabindex="-1" aria-pressed="false"><a href="https://www.linkedin.com/in/farid-zouheir-6bb329172/" target="blank"><img class="menuImage" src="../images/linkedinLogo.png" alt="Farid logo" style="height: 40px;"></a><p class="menuImageP">LinkedIn</p></div>
                        <div class="menuImageContainer" role="button" tabindex="-1" aria-pressed="false"><a href="https://github.com/zhrfrd" target="blank"><img class="menuImage" src="../images/githubLogo.png" alt="Github logo" style="height: 40px;"></a><p class="menuImageP">GitHub</p></div>
                        <div class="menuImageContainer" role="button" tabindex="-1" aria-pressed="false"><a href=""><img class="menuImage" src="../images/gmailLogo.png" alt="Gmail logo" style="height: 40px;"></a><p class="menuImageP">Gmail</p></div>
                    </div>
                </div>
                <a href="../contactMe.php" id="contactMeLink" class="headerItem"><div id="contactMeButton">Contact me</div></a>
            </div>
        </header>
    ';
?>