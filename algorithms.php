<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Algorithms</title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
</head>
<body>
    <?php include 'assets/header.php' ?>   <!-- Header of the page -->
    <?php include 'assets/navigation.php' ?>   <!-- Top navigtion menu -->
    <main id="main">
        <section class="section">
            <div id="myAlgorithms">
                <h1>Algorithms</h1>
                <p>This section contains a series of algorithms, written in Javascript.</p>
                <h2>Search algorithms</h2>
                <ul>
                    <li><a href="algorithms/linearSearch.php">Linear search</a></li>
                    <li><a href="algorithms/binarySearch.php">Binary search</a></li>
                </ul>
                <h2>Sorting algorithms</h2>
                <ul>
                    <li><a href="algorithms/selectionSort.php">Selection sort</a></li>
                    <li><a href="algorithms/bubbleSort.php">Bubble sort</a></li>
                    <li><a href="algorithms/insertionSort.php">Insertion sort</a></li>
                    <li><a href="algorithms/mergeSort.php">Merge sort</a><strong> Not working!</strong></li>
                </ul>
                <h2>Mathematics</h2>
                <ul>
                    <li><a href="algorithms/factorial.php">Factorial</a></li>
                </ul>
            </div>
        </section>
    </main>
    <?php include 'assets/footer.php' ?>   <!-- Footer of the page -->

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