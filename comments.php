<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=0.75">

<link rel="stylesheet" type="text/css" href="css/enlight.css">
		
		<link href="https://fonts.googleapis.com/css?family=Lilita+One|Merienda" rel="stylesheet">
		<title>
			Welcome to Enlightened Ale!
		</title>
</head>
<body>
	<div id="logo_container" style="width:500px; height:100%; margin: auto;">
<?php
function array2ul($array) {
    $out = "<ul>";
    foreach($array as $key => $elem){
        if(!is_array($elem)){
                $out .= "<li><span>$elem</span></li>";
        }
        else $out .= "<li><span>$key</span>".array2ul($elem)."</li>";
    }
    $out .= "</ul>";
    return $out; 
}


$comments = file_get_contents("comments.txt");
$comArray = explode("\n",$comments);
$filtered_array = array_filter($comArray);
$times = array_values($filtered_array);
$uniComm = array_unique($times);

//echo '<pre>'; print_r($uniComm); echo '</pre>';

echo(array2ul($uniComm));

?>
</div>


	

</body>
</html>