<?php
$correo = htmlspecialchars($_POST["correo"]); 
$confirmarPassword = $_POST["confirmarPassword"];


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

    $sql = "INSERT INTO contactos (correo, confirmarPassword) VALUES (?, ?)";
    $stmt= $conn->prepare($sql);
    $stmt->execute([$correo, $confirmarPassword]);

    echo "Mensaje enviado con éxito.";
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$conn = null;
?>