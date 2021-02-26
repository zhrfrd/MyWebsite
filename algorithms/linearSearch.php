<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linear Search</title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
    <script type="text/javascript" src="../scripts/linearSearch.js"></script> 
</head>
<body>
    <?php include '../assets/header.php' ?>   <!-- Header of the page -->
    <?php include '../assets/navigation.php' ?>   <!-- Top navigtion menu -->
    <main id="main">
        <section class="section">
            <div id="linearSearch">
                <h1>Linear search</h1>
                <ol>
                    <li>
                        <p>Insert the number of elements to populate the array: </p>
                        <input type="text" id="txtLength">
                        <button id="bttPopulate" onclick="populate()">Populate array</button>
                    </li>
                    <li>
                        <p>Insert the number to search:</p>
                        <input type="text" id="txtKey">
                        <button id="bttSearch" disabled="true" onclick="linearSearch()">Linear search</button>
                    </li>
                </ol>
                <br>
                <textarea id="txtResult" rows="20" cols="100"></textarea>
            </div>
        </section>
    </main>
    <?php include '../assets/footer.php' ?>   <!-- Footer of the page -->

    <!-- Javascript -->
    <script>
        changeNavActiveId();   //Change the id of the tab (inside the top navigation) relative the the actual page to "active" in order change the color through CSS

        function changeNavActiveId() 
        {
            document.getElementById("algorithms").id = "active";
        }
    </script>
</body>
</html>