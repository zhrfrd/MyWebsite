<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../stylesheets/homepageStyle.css">
</head>
<body>

    <!-- NAVIGATION BAR -->

    <nav id="navigation">
        <div class="navContent">
            <span class="navText"><a href="" class="navLink">Resume</a></span>
            <span class="navText"><a href="" class="navLink">Projects</a></span>
            <span class="navText"><img src="../images/gridIcon.png" alt="My social network icon"></span>
            <a href="contactMe.php" id="contactMeLink"><span class="navText" id="bttContactMe">Contact me</span></a>
        </div>
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
            <a href="" class="searchLink"><div class="buttonSearchBar">Work Experiences</div></a>
        </div>
    </main>

    <!-- FOOTER -->

    <?php include 'assets/footer.php' ?>

    <!-- Javascript (Typing and Deleting animation) -->
    <script>
        var i = 0;
        var arrCount = 0;
        var textresentation = ["Pleasure to meet you!", "My name is Farid Zouheir", "And I am a Software Developer", "With a big passion for technology.", "Do you like dynamic and curious people in your team?", "Then, drop me a message at any time!", "Farid Zouheir | Software Developer"];

        writingAnimation();

        function writingAnimation()
        {
            if (i < textresentation[arrCount].length)
            {
                document.getElementById("pTextPresentation").textContent += textresentation[arrCount].charAt(i);
                i++;
                setTimeout(writingAnimation, 50);
            }

            else if ((i >= textresentation[arrCount].length) && (arrCount != 6))
            {
                i --;
                setTimeout(deletingAnimation, 1000);   //Wait 1 second before deleting the text
            }
        }

        function deletingAnimation()
        {
		    if (i >= 0)
            {
                textresentation[arrCount] = textresentation[arrCount].substring(0, i);   //Remove last character from the string
                document.getElementById('pTextPresentation').textContent = textresentation[arrCount];
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