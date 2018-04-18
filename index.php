<!doctype html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>modaal</title>
    <link rel="stylesheet" href="css.css">
</head>
<body>
<div id="modaalachtergrond">
    <div id="modaalvenster">
        <button id="sluitknop">sluiten</button>
        <div id="inhoud"></div>
    </div>
</div>
    <?php
    for ($i = 1; $i < 27; $i++){
        echo "<a  href=\"#team".$i."\" class=\"trigger\"><img src=\"afb/".$i. ".jpg\" alt=\"team".$i."\"></a>
              <section id=\"team".$i."\" class=\"inhoud\"> 
               <img src=\"afb/".$i. ".jpg\" alt=\"team\"> <br>
               dit is plaatje ".$i."
</section>";

    }
    ?>





<script src="modaal.js"></script>
</body>
</html>