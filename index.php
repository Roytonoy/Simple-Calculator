<?php include "header.php";
	  include "function.php";	
?>

   <form action="" method="post">

   	<table>

   		<tr>
   			<td>Enter the first number</td>
   			<td><input type="number" name="num1" value="num1" /></td>
   		</tr>

   		<tr>
   			<td>Enter the secound number</td>
   			<td><input type="number" name="num2" value="num2" /></td>
   		</tr>

   		<tr>
   			<td></td>
   			<td><input type="submit" name="calculation" value="calculate"/></td>
   		</tr>


   	</table>
   </form>


<?php
	if (isset($_POST['calculation'])) {
	 	$num1 = $_POST['num1'];
	 	$num2 = $_POST['num2'];
	 	if (empty($num1) or empty($num2)) {
	 		echo "<span style ='color :red'>Field must not be empty. </span>";
	 	}else{
	 		echo "First number is : ".$num1 . " and Secound number is : ".$num2."<br/>";

	 	$cal =new calculation;
	 	$cal->add($num1, $num2);
	 	$cal->sub($num1, $num2);
	 	$cal->div($num1, $num2);
	 	$cal->mul($num1, $num2);
	 } 
	}
 ?>


   <?php include 'footer.php'; ?>
   
     
   
 