<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Binary Search</title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
    <script type="text/javascript" src="../scripts/binarySearch.js"></script> 
</head>
<body>
    <?php include '../assets/header.php' ?>   <!-- Header of the page -->
    <?php include '../assets/navigation.php' ?>   <!-- Top navigtion menu -->
    <main id="main">
        <section class="section">
            <div id="binarySearch">
                <h1>Binary search</h1>
                <p>The <strong>binary search</strong> algorithm, unlike the <em>linear search</em>, needs a <strong>sorted</strong> array in order to be performed.</p>
                <p>The search process consists on repeatedly dividing the search interval of the array in half until the <em>key</em> element is found. More in specific, the steps to undertake are the following:</p>
                <ol>
                    <li>Find the <em>middle</em> element of the array and compare it with the <em>key</em> element.</li>
                    <li>If the two elements match, return the <em>middle</em> element position.</li>
                    <li>Else, if the <em>key</em> element is <em>smaller</em> than the <em>middle</em> element, repeat the search process only for the half of the array with the elements smaller than the <em>middle</em> element. (The same process is applied in case the <em>key</em> is greater than <em>middle</em> element).</li>
                </ol>
                <ol>
                    <li>
                        <p>Insert the number of elements to populate the array: </p>
                        <label for="txtLength">Array size: </label>
                        <input type="text" size="5" id="txtLength">
                        <button id="bttPopulate" onclick="populate()">Populate array</button>
                    </li>
                    <li>
                        <p>Insert the number to search:</p>
                        <label for="txtKey">Key: </label>
                        <input type="text" size="5" id="txtKey">
                        <button id="bttSearch" disabled="true" onclick="binarySearch()">Binary search</button>
                        <button id="bttSearchRecursive" disabled="true" onclick="calculateBinarySearchRecursive()">Binary search recursive</button>
                    </li>
                </ol>
                <br>
                <label for="txtResult">Sorted array: </label>
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