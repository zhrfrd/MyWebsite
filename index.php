<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Farid Zouheir</title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
</head>
<body>
    <?php include 'assets/navigationHome.php' ?>   <!-- Top navigtion menu -->
    <main id="main">
        <div id="searchContent">
            <p id="firstSearchText"></p>
            <p class="searchText">My name is Farid Zouheir</p>
            <p class="searchText">I am a Software Developer</p>
            <p class="searchText">With a big passion for technology.</p>
            <p class="searchText">Do you like dynamic and curious people?</p>
            <p class="searchText">You can contact me at any time!</p>
            <p class="searchText">Farid Zouheir | Software Developer</p>
        </div>
        <div class="buttonsContainer">
            <div class="buttonSearchBar"><a href="" class="searchLink">My Education</a></div>
            <div class="buttonSearchBar"><a href="" class="searchLink">Work Experiences</a></div>
        </div>
    </main>
    <?php include 'assets/footer.php' ?>   <!-- Footer of the page -->

    <!-- Javascript -->
    <script>
        var i = 0;
        var txt1 = "Pleasure to meet you!";
        var txt2 = "My name is Farid Zouheir";
        var txt3 = "I am a Software Developer";
        var txt4 = "With a big passion for technology.";
        var txt5 = "Do you like dynamic and curious people?";
        var txt6 = "Then, drop me a message at any time!";
        var txt7 = "Farid Zouheir | Software Developer";

        writingAnimation();

        function writingAnimation()
        {
            if (i < txt1.length)
            {
                document.getElementById("firstSearchText").textContent += txt1.charAt(i);
                i++;
                setTimeout(writingAnimation, 100);
            }

            else
            {
                i --;
                setTimeout(deletingAnimation, 1000);   //Wait 1 second before deleting the text
            }
        }

        function deletingAnimation()
        {
		    if (i >= 0)
            {
                txt1 = txt1.substring(0, i);   //Remove last character from the string
                document.getElementById('firstSearchText').textContent = txt1;
                i --;
                setTimeout(deletingAnimation, 100);
		    } 
        }
    </script>
</body>
</html>