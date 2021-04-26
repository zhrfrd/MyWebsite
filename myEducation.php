<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My education</title>
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
                <div role="button" tabindex="0" onclick="changeInfoContent('../images/greenwichUniversityLogo.jpeg','BSc (Hons) Computing', 'University of Greenwich', '1')" onkeypress="changeInfoContent('../images/greenwichUniversityLogo.jpeg','BSc (Hons) Computing', 'University of Greenwich', '1')"><h2 class="hTitle">BSc (Hons) Computing - University of Greenwich</h2></div>
                <a href="https://www.gre.ac.uk/" class="aUrl" target="blank" aria-label="Link to University of Greenwich website">https://www.gre.ac.uk/</a>
                <p class="pDescription">2019 to 2020 - I graduated in June 2020 in Computing with <strong>First class Honours</strong>.</p>
            </div>
            <div class="contentItem">
                <div role="button" tabindex="0" onclick="changeInfoContent('../images/greenwichUniversityLogo.jpeg','FdSc Business Information Technology', 'University of Greenwich', '2')" onkeypress="changeInfoContent('../images/greenwichUniversityLogo.jpeg','FdSc Business Information Technology', 'University of Greenwich', '2')"><h2 class="hTitle">FdSc Business Information Technology - University of Greenwich</h2></div>
                <a href="https://www.gre.ac.uk/" class="aUrl" target="blank" aria-label="Link to University of Greenwich website">https://www.gre.ac.uk/</a>
                <p class="pDescription">2017 to 2019 - I graduated in June 2019 in Business Information Technology with <strong>Distinction</strong>.</p>
            </div>
            <div class="contentItem">
                <div role="button" tabindex="0" onclick="changeInfoContent('../images/lewishamLogo.png','HE Computing', 'Lewisham  College', '3')" onkeypress="changeInfoContent('../images/lewishamLogo.png','HE Computing', 'Lewisham  College', '3')"><h2 class="hTitle">HE Computing - Lewisham College</h2></div>
                <a href="https://www.lewisham.ac.uk/" class="aUrl" target="blank" aria-label="Link to Lewisham College website">https://www.lewisham.ac.uk/</a>
                <p class="pDescription">2016 to 2017 - I received my Access to Higher Education diploma in June 2017 after following the Computing programme.</p>
            </div>
            <div class="contentItem">
                <div role="button" tabindex="0" onclick="changeInfoContent('../images/southwarkLogo.png','GCSE Math', 'Southwark College', '4')" onkeypress="changeInfoContent('../images/southwarkLogo.png','GCSE Math', 'Southwark College', '4')"><h2 class="hTitle">GCSE Math - Southwark College</h2></div>
                <a href="https://www.southwark.ac.uk/" class="aUrl" target="blank" aria-label="Link to Southwark College website">https://www.southwark.ac.uk/</a>
                <p class="pDescription">2018 to 2019 - During the last year of Foundation (FdSc) I followed, in parallel, the GCSE Math course at Southwark College.</p>
            </div>
            <div class="contentItem">
                <div role="button" tabindex="0" onclick="changeInfoContent('../images/southwarkLogo.png','GCSE English', 'Southwark College', '5')" onkeypress="changeInfoContent('../images/southwarkLogo.png','GCSE English', 'Southwark College', '5')"><h2 class="hTitle">GCSE English - Southwark College</h2></div>
                <a href="https://www.southwark.ac.uk/" class="aUrl" target="blank" aria-label="Link to Southwark College website">https://www.southwark.ac.uk/</a>
                <p class="pDescription">2018 to 2019 - During the last year of Foundation (FdSc) I followed, together with GCSE Math, the GCSE English course at Southwark College</p>
            </div>
            <div class="contentItem">
                <div role="button" tabindex="0" onclick="changeInfoContent('../images/southwarkLogo.png','English Entry Level 1', 'Southwark College', '6')" onkeypress="changeInfoContent('../images/southwarkLogo.png','English Entry Level 1', 'Southwark College', '6')"><h2 class="hTitle">English Entry Level 1 - Southwark College</h2></div>
                <a href="https://www.southwark.ac.uk/" class="aUrl" target="blank" aria-label="Link to Southwark College website">https://www.southwark.ac.uk/</a>
                <p class="pDescription">2014 to 2015 - When I moved to London, from Italy, I undertook the English Entry Level 1 course to learn and improve my English language.</p>
            </div>
            <div class="contentItem">
                <div role="button" tabindex="0" onclick="changeInfoContent('../images/itisLogo.png','Computer Science', 'I.T.I.S. Enrico Fermi', '7')" onkeypress="changeInfoContent('../images/itisLogo.png','Computer Science', 'I.T.I.S. Enrico Fermi', '7')"><h2 class="hTitle">Computer science - I.T.I.S. Enrico Fermi</h2></div>
                <a href="https://www.fermibassano.edu.it/" class="aUrl" target="blank">https://www.fermibassano.edu.it/</a>
                <p class="pDescription">2009 to 2014 - When I was living in Italy, I undertook the Computer Science course at I.T.I.S. E.Fermi College.</p>
            </div>
        </section>

        <aside id="contentInfo">
            <div id="contentInfoImageContainer">
                <img src="../images/greenwichUniversityLogo.jpeg" id="contentInfoImage" alt="Logo of University of Greenwich" class="contentInfoImage">
            </div>
            <div id="contentInfoHeader">
                <h3 id="contentInfoTitle" tabindex="-1">BSc (Hons) Computing</h3>
                <p id="contentInfoSubtitle">University of Greenwich</p>
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
            document.getElementById("myEducation").id = "active";
            document.getElementById("searchBarText").textContent = "My education";
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
                    document.getElementById("contentInfoImage").alt = "Logo of University of Greenwich";
                    document.getElementById("contentInfoTextContainer").innerHTML = '<p>After following the Bachelor of Science programme in Computing, I graduated at <em>University of Greenwich</em> in June 2020 with <strong>First Class Honours</strong>. This course gave me solid foundations about <a href="">algorithms and modelling</a>, software development by using different <a href="">frameworks and platforms</a> and, also, database administration for the collection and manipulation of data.</p><p>Furthermore, as part of my programme, I had the opportunity to work as <a href="../myExperience.php">teacher assistant</a> for the Foundation year students in <a href="https://www.southwark.ac.uk/">Southwark College</a>.</p>';
                    break;

                case "2":
                    document.getElementById("contentInfoImage").alt = "Logo of University of Greenwich";
                    document.getElementById("contentInfoTextContainer").innerHTML = '<p>After following the Foundation years in Business Information Technology at <em>University of Greenwich</em>, in June 2019 I graduated with <strong>Distinction</strong>. During the accademic years I learned how to use a multitude of <a href="../skills.php">programming languages</a> for the creation of different projects that allowed me, also, to understand the foundamentals of <a href="">data structures</a> and <a href="../projects.php">algorithms</a>.</p><p>In addition, I took some networking lessons which provided me the tools to understand and, also, configurate computer networks.</p>';
                    break;

                case "3":
                    document.getElementById("contentInfoImage").alt = "Logo of Lewisham College";
                    document.getElementById("contentInfoTextContainer").innerHTML = '<p>At <em>Lewisham College</em> I undertook the Access To Higher Education course in Computing which gave solid foundation to successfully start university the following year.</p><p>The main topics covered were desktop application development (using Java), web appliation development (using HTML, CSS and Javascript) and networking foundamentals.</p>';
                    break;

                case "4":
                    document.getElementById("contentInfoImage").alt = "Logo of Southwark College";
                    document.getElementById("contentInfoTextContainer").innerHTML = '<p>While I was doing the Foundation year at <em>University of Greenwich</em> I followed the GCSE class in Math, together with GCSE in English, at <em>Southwark College</em>.</p>';
                    break;

                case "5":
                    document.getElementById("contentInfoImage").alt = "Logo of Southwark College";
                    document.getElementById("contentInfoTextContainer").innerHTML = '<p>I followed the GCSE class in English and Math at <em>Southwark College</em> while I was frequenting the Business Information Technology course at <em>University of Greenwich</em>.</p>';
                    break;

                case "6":
                    document.getElementById("contentInfoImage").alt = "Logo of Southwark College";
                    document.getElementById("contentInfoTextContainer").innerHTML = '<p>Straight after I moved from Italy to London, I applied for an Entry Level 1 course in English in <em>Southwark College</em> which provided me a basic knowledge of the English language and allowed me start frequenting the English schools and university.</p>';
                    break;

                case "7":
                    document.getElementById("contentInfoImage").alt = "Logo of I.T.I.S E. Fermi College";
                    document.getElementById("contentInfoTextContainer").innerHTML = '<p>After developing a big passion for software development from the age of 14 years old, I decided to apply to the Computer Science college at <em>ITIS Enrico Fermi</em> in Bassano del Grappa (Italy).</p><p>During these years I received solid foundations about <a href="../skills.php">algorithms</a>, software development and networking and my passion for the field increased more and more.</p>';
                    break;

                default:
            }
        }
    </script>
</body>
</html>