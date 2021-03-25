<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home page</title>
    <link rel="stylesheet" href="../stylesheets/homepageStyle.css">
</head>
<body>

    <!-- NAVIGATION BAR -->

    <nav id="nav">
        <a href="../skills.php" class="navLink navItem">Skills</a>
        <a href="../projects.php" class="navLink navItem">Projects</a>
        <a href="" class="navItem"><img src="../images/gridIcon.png" alt="My social network icon"></a>
        <a href="../contactMe.php" id="contactMeLink" class="navItem"><div id="bttContactMe">Contact me</div></a>
    </nav>

    <!-- MAIN CONTENT -->

    <main id="main">
        <div id="logoFarid" style="font-family: 'Open Sans';">
            <img src="../images/homepageLogo.jpg" alt="Farid Zouheir logo">
        </div>
        <div id="searchBar">
            <p id="pTextPresentation"></p>
        </div>
        <div class="buttonsContainer">
            <a href="../myEducation.php" class="searchLink"><div class="buttonSearchBar">My Education</div></a>
            <a href="../myExperience.php" class="searchLink"><div class="buttonSearchBar">Work Experiences</div></a>
        </div>
    </main>

    <!-- FOOTER -->

    <?php include 'assets/footer.php' ?>

    <!-- Javascript (Typing and Deleting animation) -->
    <script>
        var i = 0;
        var arrCount = 0;
        var textPresentation = ["Pleasure to meet you!", "My name is Farid Zouheir", "And I am a Software Developer", "With a big passion for technology.", "Do you like dynamic and curious people in your team?", "Then, drop me a message at any time!", "Farid Zouheir | Software Developer"];

        writingAnimation();

        function writingAnimation()
        {
            if (i < textPresentation[arrCount].length)
            {
                document.getElementById("pTextPresentation").textContent += textPresentation[arrCount].charAt(i);
                i++;
                setTimeout(writingAnimation, 50);
            }

            else if ((i >= textPresentation[arrCount].length) && (arrCount != 6))
            {
                i --;
                setTimeout(deletingAnimation, 1000);   //Wait 1 second before deleting the text
            }
        }

        function deletingAnimation()
        {
		    if (i >= 0)
            {
                textPresentation[arrCount] = textPresentation[arrCount].substring(0, i);   //Remove last character from the string
                document.getElementById('pTextPresentation').textContent = textPresentation[arrCount];
                i --;
                setTimeout(deletingAnimation, 50);
		    }

            else
            {
                i ++;
                arrCount ++;
                writingAnimation();
            }
        }
    </script>
</body>
</html>