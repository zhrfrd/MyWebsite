<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roulette</title>
    <link rel="stylesheet" href="../stylesheets/pageStyle.css">
    <link rel="stylesheet" href="../stylesheets/rouletteStyle.css">
    
</head>
<body>
    <?php include '../assets/header.php' ?>   <!-- Header of the page -->
    <?php include '../assets/navigation.php' ?>   <!-- Top navigtion menu -->
    <main id="main">
        <section class="section">
            <table id="tableRoulette">
                <tr>
                    <td></td>
                    <td colspan="6" class="green">
                        <label style="text-align: center; display: block;">1 to 18</label>
                        <input type="text" size="1" id="firsthalf">
                    </td>
                    <td colspan="6" class="green">
                        <label style="text-align: center; display: block;">19 to 36</label>
                        <input type="text" size="1" id="secondhalf">
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td rowspan="3" class="green">
                        <label style="text-align: center; display: block;">0</label>
                        <input type="text" size="1" id="zero">
                    </td>
                    <td class="red">
                        <label style="text-align: center; display: block;">3</label>
                        <input type="text" size="1" id="three">
                    </td>
                    <td class="black">
                        <label style="text-align: center; display: block;">6</label>
                        <input type="text" size="1" id="six">
                    </td>
                    <td class="red">
                        <label style="text-align: center; display: block;">9</label>
                        <input type="text" size="1" id="nine">
                    </td>
                    <td class="red">
                        <label style="text-align: center; display: block;">12</label>
                        <input type="text" size="1" id="twelve">
                    </td>
                    <td class="black">
                        <label style="text-align: center; display: block;">15</label>
                        <input type="text" size="1" id="fifteen">
                    </td>
                    <td class="red">
                        <label style="text-align: center; display: block;">18</label>
                        <input type="text" size="1" id="eighteen">
                    </td>
                    <td class="red">
                        <label style="text-align: center; display: block;">21</label>
                        <input type="text" size="1" id="twentyone">
                    </td>
                    <td class="black">
                        <label style="text-align: center; display: block;">24</label>
                        <input type="text" size="1" id="twentyfour">
                    </td>
                    <td class="red">
                        <label style="text-align: center; display: block;">27</label>
                        <input type="text" size="1" id="twentyseven">
                    </td>
                    <td class="red">
                        <label style="text-align: center; display: block;">30</label>
                        <input type="text" size="1" id="thirty">
                    </td>
                    <td class="black">
                        <label style="text-align: center; display: block;">33</label>
                        <input type="text" size="1" id="thirtythree">
                    </td>
                    <td class="red">
                        <label style="text-align: center; display: block;">36</label>
                        <input type="text" size="1" id="thirtysix">
                    </td>
                    <td class="green">
                        <label style="text-align: center; display: block;">1 to 2</label>
                        <input type="text" size="1" id="rowone">
                    </td>
                </tr>
                <tr>
                    <td class="black">
                        <label style="text-align: center; display: block;">2</label>
                        <input type="text" size="1" id="two">
                    </td>
                    <td class="red">
                        <label style="text-align: center; display: block;">5</label>
                        <input type="text" size="1" id="five">
                    </td>
                    <td class="black">
                        <label style="text-align: center; display: block;">8</label>
                        <input type="text" size="1" id="eight">
                    </td>
                    <td class="black">
                        <label style="text-align: center; display: block;">11</label>
                        <input type="text" size="1" id="eleven">
                    </td>
                    <td class="red">
                        <label style="text-align: center; display: block;">14</label>
                        <input type="text" size="1" id="fourteen">
                    </td>
                    <td class="black">
                        <label style="text-align: center; display: block;">17</label>
                        <input type="text" size="1" id="seventeen">
                    </td>
                    <td class="black">
                        <label style="text-align: center; display: block;">20</label>
                        <input type="text" size="1" id="twenty">
                    </td>
                    <td class="red">
                        <label style="text-align: center; display: block;">23</label>
                        <input type="text" size="1" id="twentythree">
                    </td>
                    <td class="black">
                        <label style="text-align: center; display: block;">26</label>
                        <input type="text" size="1" id="twentysix">
                    </td>
                    <td class="black">
                        <label style="text-align: center; display: block;">29</label>
                        <input type="text" size="1" id="twentynine">
                    </td>
                    <td class="red">
                        <label style="text-align: center; display: block;">32</label>
                        <input type="text" size="1" id="thirtytwo">
                    </td>
                    <td class="black">
                        <label style="text-align: center; display: block;">35</label>
                        <input type="text" size="1" id="thirtyfive">
                    </td>
                    <td class="green">
                        <label style="text-align: center; display: block;">1 to 2</label>
                        <input type="text" size="1" id="rowtwo">
                    </td>
                </tr>
                <tr>
                    <td class="red">
                        <label style="text-align: center; display: block;">1</label>
                        <input type="text" size="1" id="one">
                    </td>
                    <td class="black">
                        <label style="text-align: center; display: block;">4</label>
                        <input type="text" size="1" id="four">
                    </td>
                    <td class="red">
                        <label style="text-align: center; display: block;">7</label>
                        <input type="text" size="1" id="seven">
                    </td>
                    <td class="black">
                        <label style="text-align: center; display: block;">10</label>
                        <input type="text" size="1" id="ten">
                    </td>
                    <td class="black">
                        <label style="text-align: center; display: block;">13</label>
                        <input type="text" size="1" id="thirteen">
                    </td>
                    <td class="red">
                        <label style="text-align: center; display: block;">16</label>
                        <input type="text" size="1" id="sixteen">
                    </td>
                    <td class="black">
                        <label style="text-align: center; display: block;">19</label>
                        <input type="text" size="1" id="nineteen">
                    </td>
                    <td class="black">
                        <label style="text-align: center; display: block;">22</label>
                        <input type="text" size="1" id="twentytwo">
                    </td>
                    <td class="red">
                        <label style="text-align: center; display: block;">25</label>
                        <input type="text" size="1" id="twentyfive">
                    </td>
                    <td class="black">
                        <label style="text-align: center; display: block;">28</label>
                        <input type="text" size="1" id="twentyeight">
                    </td>
                    <td class="black">
                        <label style="text-align: center; display: block;">31</label>
                        <input type="text" size="1" id="thirtyone">
                    </td>
                    <td class="red">
                        <label style="text-align: center; display: block;">34</label>
                        <input type="text" size="1" id="thirtyfour">
                    </td>
                    <td class="green">
                        <label style="text-align: center; display: block;">1 to 2</label>
                        <input type="text" size="1" id="rowthree">
                    </td>
                </tr>
                <tr>
                    <td rowspan="2"></td>
                    <td colspan="4" class="green">
                        <label style="text-align: center; display: block;">1st 12</label>
                        <input type="text" size="1" id="firsttwelve">
                    </td>
                    <td colspan="4" class="green">
                        <label style="text-align: center; display: block;">2nd 12</label>
                        <input type="text" size="1" id="secondtwelve">
                    </td>
                    <td colspan="4" class="green">
                        <label style="text-align: center; display: block;">3rd 12</label>
                        <input type="text" size="1" id="thirdtwelve">
                    </td>
                    <td rowspan="2"></td>
                </tr>
                <tr>
                    <td colspan="3" class="green">
                        <label style="text-align: center; display: block;">EVEN</label>
                        <input type="text" size="1" id="even">
                    </td>
                    <td colspan="3" class="red">
                        <label style="text-align: center; display: block;">RED</label>
                        <input type="text" size="1" id="red">
                    </td>
                    <td colspan="3" class="black">
                        <label style="text-align: center; display: block;">BLACK</label>
                        <input type="text" size="1" id="black">
                    </td>
                    <td colspan="3" class="green">
                        <label style="text-align: center; display: block;">ODD</label>
                        <input type="text" size="1" id="odd">
                    </td>
                </tr>
            </table>
        </section>
    </main>
    <?php include '../assets/footer.php' ?>   <!-- Footer of the page -->

    <!-- Javascript -->
    <script>

        changeNavActiveId();   //Change the id of the tab (inside the top navigation) relative the the actual page to "active" in order change the color through CSS

        function changeNavActiveId() 
        {
            document.getElementById("projects").id = "active";
        }
//gdjdsfjsf
    </script>
</body>
</html>