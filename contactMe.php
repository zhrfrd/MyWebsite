<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact me</title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
</head>
<body>
    <?php include 'assets/header.php' ?>   <!-- Header of the page -->
    <?php include 'assets/navigation.php' ?>   <!-- Top navigtion menu -->
    <main id="main">
        <section class="section">
            <div id="myContactMe">
                <h1>Contact me</h1>
                <form action="/contactMe.php" method="post">
                    <label for="txtEmail">Email address: </label><br />
                    <input type="text" name="email_address" size="40" id="txtEmail">
                    <br />
                    <br />
                    <label for="txtEmailContent">Write your email with your feedback:</label><br />
                    <textarea name="feedback" cols="50" rows="10" id="txtEmailContent"></textarea>
                    <br />
                    <br />
                    <input type="submit" name="send" value="Submit">
                </form>
            </div>
        </section>
    </main>
    <?php include 'assets/footer.php' ?>   <!-- Footer of the page -->

    <!-- Javascript -->
    <script>

        changeNavActiveId();   //Change the id of the tab (inside the top navigation) relative the the actual page to "active" in order change the color through CSS

        function changeNavActiveId() 
        {
            document.getElementById("contactMe").id = "active";
        }

    </script>
</body>
</html>