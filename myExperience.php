<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My experience</title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
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
                <div tabindex="0" onclick="changeInfoContent('../images/HEIWLogo.jpg','Software Developer and Accessibility Officer', 'Health Education and Improvement Wales (HEIW)', '1')" onkeypress="changeInfoContent('../images/HEIWLogo.jpg','Software Developer and Accessibility Officer', 'Health Education and Improvement Wales (HEIW)', '1')"><h2 class="hTitle">Software Developer and Accessibility Officer - Health Education and Improvement Wales (HEIW)</h2></div>
                <a href="https://heiw.nhs.wales/" class="aUrl" target="blank" aria-label="Link to HEIW website">https://heiw.nhs.wales/</a>
                <p class="pDescription">2021 till now - I joined HEIW in January 2021 with the role of <strong>Software Developer and Accessibility Officer</strong>.</p>
            </div>
            <div class="contentItem">
                <div tabindex="0" onclick="changeInfoContent('../images/southwarkLogo.png','Teacher Assistant (Computing)', 'Southwark College', '2')" onkeypress="changeInfoContent('../images/southwarkLogo.png','Teacher Assistant (Computing)', 'Southwark College', '2')"><h2 class="hTitle">Teacher Assistant (Computing) - Southwark College</h2></div>
                <a href="https://www.southwark.ac.uk/" class="aUrl" target="blank" aria-label="Link to Southwark College website">https://www.southwark.ac.uk/</a>
                <p class="pDescription">2019 to 2020 - During my final year at <em>University of Greenwich</em> I've been assigned the position of <strong>Teacher Assistant</strong> for the <strong>Computing</strong> course.</p>
            </div>
        </section>

        <aside id="contentInfo">
            <div id="contentInfoImageContainer">
                <img src="../images/HEIWLogo.jpg" id="contentInfoImage" alt="Logo of HEIW" class="contentInfoImage">
            </div>
            <div id="contentInfoHeader">
                <h3 id="contentInfoTitle" tabindex="-1">Software Developer and Accessibility Officer</h3>
                <p id="contentInfoSubtitle">Health Education and Improvement Wales (HEIW)</p>
            </div>
            <div id="contentInfoTextContainer">
                <p>In January 2021 I started working for <em>Health Education and Improvement Wales (HEIW)</em> as a <strong>Software Developer and Accessibility Officer</strong>.</p>
                <p>The main duties that I have are developing applications and making sure that the content follows the accesibilities requiremets.</p>
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
            document.getElementById("myExperience").id = "active";
            document.getElementById("searchBarText").textContent = "My experience";
        }

        function changeInfoContent(infoImage, infoTitle, infoSubtitle, infoSection)
        {
            document.getElementById("contentInfoImage").src = infoImage;
            document.getElementById("contentInfoTitle").textContent = infoTitle;
            document.getElementById("contentInfoSubtitle").textContent = infoSubtitle;

            document.querySelector("h3").focus();   //Focus to the header of ifo content (Accessibility)

            switch (infoSection)
            {
                case "1":
                    document.getElementById("contentInfoImage").alt = "Logo of HEIW";
                    document.getElementById("contentInfoTextContainer").innerHTML = '<p>In January 2021 I started working for <em>Health Education and Improvement Wales (HEIW)</em> as a <strong>Software Developer and Accessibility Officer</strong>.</p><p>The main duties that I have are developing applications and making sure that the content follows the accesibilities requiremets.</p>';
                    break;

                case "2":
                    document.getElementById("contentInfoImage").alt = "Logo of Southwark College";
                    document.getElementById("contentInfoTextContainer").innerHTML = '<p>During the ast year of unversity I fund a oition as <strong>Teacher Assistant</strong> for the <strong>Computing</strong> course. The main duties were delivering lectures for the Foundation year students and helping them during the development of their projects</p>';
                    break;

                default:
            }
        }
    </script>
</body>
</html>