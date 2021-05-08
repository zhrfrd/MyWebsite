<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skills</title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script type="text/javascript" src="../scripts/dropdownMenu.js"></script> 
</head>
<body>
    <!-- SKIP LINK (Accessibility) -->
    <a href="#main" class="skipLink">Skip to main content</a>

    <!-- HEADER -->
    <?php include 'assets/header.php' ?>

    <!-- NAVIGATION BAR -->
    <?php include 'assets/navigation.php' ?>

    <!-- MAIN CONTENT -->
    <main id="main">
        <section id="contentList">
            <div class="contentItem">
                <div tabindex="0" onclick="changeInfoContent('../images/programmingLanguages.jpg','Programming Languages', 'List of programming languages that I can use', '1')" onkeypress="changeInfoContent('../images/programmingLanguages.jpg','Programming Languages', 'List of programming languages that I can use', '1')"><h2 class="hTitle">Programming Languages</h2></div>
                <a href="/skills.php" class="aUrl" aria-label="Link to HEIW website">http://localhost:4000/skills.php</a>
                <p class="pDescription">This is a list of the programming languages that I can use.</p>
            </div>
            <div class="contentItem">
                <div tabindex="0" onclick="changeInfoContent('../images/webDeveloper.png','Web Development', 'My Web Development skills', '2')" onkeypress="changeInfoContent('../images/webDeveloper.png','Web Development', 'My Web Development skills', '2')"><h2 class="hTitle">Web Development</h2></div>
                <a href="/skills.php" class="aUrl" aria-label="Link to HEIW website">http://localhost:4000/skills.php</a>
                <p class="pDescription">Summary of my Web development skills.</p>
            </div>
            <div class="contentItem">
                <div tabindex="0" onclick="changeInfoContent('../images/database.png','Database', 'My Database skills', '3')" onkeypress="changeInfoContent('../images/database.png','Database', 'My Database skills', '2')"><h2 class="hTitle">Database</h2></div>
                <a href="/skills.php" class="aUrl" aria-label="Link to HEIW website">http://localhost:4000/skills.php</a>
                <p class="pDescription">Summary of my prolificacy using databases.</p>
            </div>
            <div class="contentItem">
                <div tabindex="0" onclick="changeInfoContent('../images/toolsAndFramework.png','Tools and Frameworks', 'List of Tools and Frameworks that I uses', '4')" onkeypress="changeInfoContent('../images/toolsAndFramework.png','Tools and Frameworks', 'List of Tools and Frameworks that I uses', '2')"><h2 class="hTitle">Tools and Frameworks</h2></div>
                <a href="/skills.php" class="aUrl" aria-label="Link to HEIW website">http://localhost:4000/skills.php</a>
                <p class="pDescription">List of Tools and Frameworks that I use.</p>
            </div>
            <div class="contentItem">
                <div tabindex="0" onclick="changeInfoContent('../images/personalSkills.jpg','Personal Skills', 'List of my personal skills usefull for work', '5')" onkeypress="changeInfoContent('../images/personalSkills.jpg','Personal Skills', 'List of personal skills usefull for work', '2')"><h2 class="hTitle">Personal Skills</h2></div>
                <a href="/skills.php" class="aUrl" aria-label="Link to HEIW website">http://localhost:4000/skills.php</a>
                <p class="pDescription">List of my personal skills that can be useful in a work environment.</p>
            </div>
        </section>

        <aside id="contentInfo">
            <div id="contentInfoImageContainer">
                <img src="../images/programmingLanguages.jpg" id="contentInfoImage" alt="Logo of HEIW" class="contentInfoImage">
            </div>
            <div id="contentInfoHeader">
                <h3 id="contentInfoTitle" tabindex="-1">Programming Languages</h3>
                <p id="contentInfoSubtitle">List of programming languages that I can use</p>
            </div>
            <div id="contentInfoTextContainer">
                <p>
                    <ul>
                        <li class="skillsList">Javascript&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span></li>
                        <li class="skillsList">Java&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span></li>
                        <li class="skillsList">PHP&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span></li>
                        <li class="skillsList">C#&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span></li>
                        <li class="skillsList">C++&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span></li>
                        <li class="skillsList">Visual Basic&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span></li>
                        <li class="skillsList">Python&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span></li>
                        <li class="skillsList">C&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span></li>
                    </ul>
                </p>
            </div>
        </aside>
    </main>

    <!-- FOOTER -->
    <?php include 'assets/footer.php' ?>

    <!-- Javascript -->
    <script>

        changeNavActiveId();   //Change the id of the tab (inside the top navigation) relative the the actual page to "active" in order change the color through CSS

        function changeNavActiveId() 
        {
            document.getElementById("skills").id = "active";
            document.getElementById("searchBarText").textContent = "Skills";
        }

        function changeInfoContent(infoImage, infoTitle, infoSubtitle, infoSection)
        {
            document.getElementById("contentInfoImage").src = infoImage;
            document.getElementById("contentInfoTitle").textContent = infoTitle;
            document.getElementById("contentInfoSubtitle").textContent = infoSubtitle;

            document.querySelector("h3").focus();   //Focus to the header of info content (Accessibility)

            switch (infoSection)
            {
                case "1":
                    document.getElementById("contentInfoImage").alt = "Icon programming languages";
                    document.getElementById("contentInfoTextContainer").innerHTML = '<p><ul><li class="skillsList">Javascript&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span></li> <li class="skillsList">Java&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">PHP&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">C#&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">C++&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">Visual Basic&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">Python&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">C&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span></li></ul></p>';
                    break;

                case "2":
                    document.getElementById("contentInfoImage").alt = "Icon web development";
                    document.getElementById("contentInfoTextContainer").innerHTML = '<p><ul> <li class="skillsList">Javascript&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span></li> <li class="skillsList">HTML5&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span></li> <li class="skillsList">CSS3&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span></li> <li class="skillsList">PHP&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">JQuery&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span></li> </ul></p>';
                    break;

                case "3":
                    document.getElementById("contentInfoImage").alt = "Icon database";
                    document.getElementById("contentInfoTextContainer").innerHTML = '<p><ul> <li class="skillsList">MySQL&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">SQL&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">MS Access&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span><span class="fa fa-star-o checked"></span></li> </ul></p>';
                    break;

                case "4":
                    document.getElementById("contentInfoImage").alt = "Icon tools and frameworks";
                    document.getElementById("contentInfoTextContainer").innerHTML = '<p><ul> <li class="skillsList">Git (GitHub & GitLab)&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span></li> <li class="skillsList">Node.js&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">Bootstrap&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">VS Code&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">NetBeans&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">Angular&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">Google APIs&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">Asp.NET&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">Visual Studio&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">MS SQL Server&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">MS Access&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span><span class="fa fa-star-o checked"></span><span class="fa fa-star-o checked"></span></li> </ul></p>';
                    break;

                case "5":
                    document.getElementById("contentInfoImage").alt = "Icon personal skills";
                    document.getElementById("contentInfoTextContainer").innerHTML = '<p><ul> <li class="skillsList">Communication&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span></li> <li class="skillsList">Teamworking&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span></li> <li class="skillsList">Problem-solving&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span></li> <li class="skillsList">Dynamicity&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span></li> <li class="skillsList">Motivation&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-half-o checked"></span></li> <li class="skillsList">Logical thinking&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">Accuracy&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span></li> <li class="skillsList">Organization & time-management&nbsp;<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o checked"></span></li> </ul></p>';
                    break;

                default:
            }
        }
    </script>
</body>
</html>