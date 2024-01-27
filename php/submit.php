<?php
$nombre = htmlspecialchars($_POST["nombre"]);
$apellido = htmlspecialchars($_POST["apellido"]);
$correo = htmlspecialchars($_POST["correo"]); 
$confirmarPassword = $_POST["confirmarPassword"];
$telefono = htmlspecialchars($_POST["telefono"]);

if ($password != $confirmarPassword) {
    echo "Las contraseñas no coinciden. Vuelve a intentarlo.";
    exit;
}
$host = "localhost";
$dbname = "miBD";
$user = "alejandro";
$password = "holamundo394";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "INSERT INTO contactos (nombre, apellido, correo, confirmarPassword, telefono) VALUES (?, ?, ?, ?, ?)";
    $stmt= $conn->prepare($sql);
    $stmt->execute([$nombre, $apellido, $correo, $confirmarPassword, $telefono ]);

    echo "Mensaje enviado con éxito.";
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$conn = null;
?>



