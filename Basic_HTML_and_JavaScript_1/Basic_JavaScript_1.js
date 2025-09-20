<!DOCTYPE html>
<html>
<head>
    <title>Basic HTML Example</title>
</head>
<body>
    <h1>Welcome to My Page</h1>
    
  
    <script>
		alert("Hello, this is my first external JavaScript!");

	</script>
	
		<button onclick="My_First_Function()"></button>
	<p id="Irish"></p>

	<script>
	function My_First_Function(){
		var String = "Kiss me, I'm Irish!";
		var result = String.fontcolor("green");
		document.getElementById("Irish").innerHTML = result;
	}
	</script>
</body>
</html>
