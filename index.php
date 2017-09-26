<?php
$con=mysqli_connect("localhost","user","pass","ThermoDB");
// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$result = mysqli_query($con,"SELECT * FROM ThermoTable ORDER BY Id DESC LIMIT 20");

echo "<table border='1'>
<tr>
<th>Id</th>
<th>Temperature</th>
<th>Humidity</th>
<th>Time</th>
<th>IP-Address</th>
<th>User</th>
</tr>";

while($row = mysqli_fetch_array($result))
{
echo "<tr>";
echo "<td>" . $row['Id'] . "</td>";
echo "<td>" . $row['Temperature'] . "</td>";
echo "<td>" . $row['Humidity'] . "</td>";
echo "<td>" . $row['Time'] . "</td>";
echo "<td>" . $row['IP'] . "</td>";
echo "<td>" . $row['User'] . "</td>";
echo "</tr>";
}
echo "</table>";

mysqli_close($con);
?>
