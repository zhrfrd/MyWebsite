<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My experience</title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
</head>
<body>
    <!-- HEADER -->
    <?php include 'assets/header.php' ?>

    <!-- NAVIGATION BAR -->
    <?php include 'assets/navigation.php' ?>

    <!-- MAIN CONTENT -->
    <main id="main">
        <section id="contentList">
            <div class="contentItem">
                <h2 class="hTitle" tabindex="0" onclick="changeInfoContent('../images/HEIWLogo.jpg','Software Developer and Accessibility Officer', 'Health Education and Improvement Wales (HEIW)', '1')">Software Developer and Accessibility Officer - Health Education and Improvement Wales (HEIW)</h2>
                <a href="https://heiw-new.nhs.wales/" class="aUrl">https://heiw-new.nhs.wales/</a>
                <p class="pDescription">2021 till now - I joined HEIW in January 2021 with the role of <strong>Software Developer and Accessibility Officer</strong>.</p>
            </div>
            <div class="contentItem">
                <h2 class="hTitle" tabindex="0" onclick="changeInfoContent('../images/southwarkLogo.png','Teacher Assistant (Computing)', 'Southwark College', '2')">Teacher Assistant (Computing) - Southwark College</h2>
                <a href="https://www.southwark.ac.uk/" class="aUrl">https://www.southwark.ac.uk/</a>
                <p class="pDescription">2019 to 2020 - During my final year at <em>University of Greenwich</em> I also got the position as <strong>Teacher Assistant</strong> for the <strong>Computing</strong> course.</p>
            </div>
        </section>

        <aside id="contentInfo">
            <div id="contentInfoImageContainer">
                <img src="../images/HEIWLogo.jpg" id="contentInfoImage" alt="Logo of HEIW" class="contentInfoImage">
            </div>
            <div id="contentInfoHeader">
                <h3 id="contentInfoTitle">Software Developer and Accessibility Officer</h3>
                <p id="contentInfoSubtitle">Health Education and Improvement Wales (HEIW)</p>
            </div>
            <div id="contentInfoTextContainer">
                <p>After following the Bachelor of Science programme in Computing, I graduated at <em>University of Greenwich</em> in June 2020 with <strong>First Class Honours</strong>. This course gave me solid foundations about <a href="">algorithms and modelling</a>, software development by using different <a href="">frameworks and platforms</a> and, also, database administration for the collection and manipulation of data.</p>
                <p>Furthermore, as part of my programme, I had the opportunity to work as <a href="../myExperience.php">teacher assistant</a> for the Foundation year students in <a href="https://www.southwark.ac.uk/">Southwark College</a>.</p>
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

            switch (infoSection)
            {
                case "1":
                    document.getElementById("contentInfoImage").alt = "Logo of HEIW";
                    document.getElementById("contentInfoTextContainer").innerHTML = '<p>After following the Bachelor of Science programme in Computing, I graduated at <em>University of Greenwich</em> in June 2020 with <strong>First Class Honours</strong>. This course gave me solid foundations about <a href="">algorithms and modelling</a>, software development by using different <a href="">frameworks and platforms</a> and, also, database administration for the collection and manipulation of data.</p><p>Furthermore, as part of my programme, I had the opportunity to work as <a href="../myExperience.php">teacher assistant</a> for the Foundation year students in <a href="https://www.southwark.ac.uk/">Southwark College</a>.</p>';
                    break;

                case "2":
                    document.getElementById("contentInfoImage").alt = "Logo of Southwark College";
                    document.getElementById("contentInfoTextContainer").innerHTML = '<p>After following the Foundation years in Business Information Technology at <em>University of Greenwich</em>, in June 2019 I graduated with <strong>Distinction</strong>. During the accademic years I learned how to use a multitude of <a href="../skills.php">programming languages</a> for the creation of different projects that allowed me, also, to understand the foundamentals of <a href="">data structures</a> and <a href="../projects.php">algorithms</a>.</p><p>In addition, I took some networking lessons which provided me the tools to understand and, also, configurate computer networks.</p>';
                    break;

                default:
            }
        }

    </script>
</body>
</html>