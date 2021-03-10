<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selection sort</title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
    <script type="text/javascript" src="../scripts/selectionSort.js"></script> 
</head>
<body>
    <?php include '../assets/header.php' ?>   <!-- Header of the page -->
    <?php include '../assets/navigation.php' ?>   <!-- Top navigtion menu -->
    <main id="main">
        <section class="section">
            <div id="selectionSort">
                <h1>Selection sort</h1>
                <ol>
                    <li>
                        <p>Insert the number of elements to populate the array: </p>
                        <label for="txtLength">Array length: </label>
                        <input type="text" size="5" id="txtLength">
                        <button id="bttPopulate" onclick="populate()">Populate array</button>
                    </li>
                    <br>
                    <label for="txtUnsortedArray">Unsorted array</label><br>
                    <textarea id="txtUnsortedArray" rows="20" cols="100"></textarea>
                    <br>
                    <li>
                        <p>Click the button below to sort the array:</p>
                        <button id="bttSelectionSort" disabled="true" onclick="selectionSort()">Selection sort</button>
                        <button id="bttSelectionSortRecursive" disabled="true" onclick="calculateSelectionSortRecursive()">Selection sort recursive</button>
                    </li>
                    <br>
                    <label for="txtSortedArray">Sorted array</label><br>
                    <textarea id="txtSortedArray" rows="20" cols="100"></textarea>
                </ol>
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