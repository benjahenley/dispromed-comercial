<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false]);
    exit;
}

$name    = isset($input['name'])    ? strip_tags(trim($input['name']))    : '';
$email   = isset($input['email'])   ? strip_tags(trim($input['email']))   : '';
$phone   = isset($input['phone'])   ? strip_tags(trim($input['phone']))   : '';
$subject = isset($input['subject']) ? strip_tags(trim($input['subject'])) : '';
$message = isset($input['message']) ? strip_tags(trim($input['message'])) : '';

if (!$name || !$email || !$subject || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false]);
    exit;
}

$to      = 'ventas@dispromedcomercial.com.ar';
$subj    = 'Consulta web: ' . $subject;
$body    = "Nombre: $name\n";
$body   .= "Email: $email\n";
if ($phone) $body .= "Telefono: $phone\n";
$body   .= "\nMensaje:\n$message";

$headers  = "From: ventas@dispromedcomercial.com.ar\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subj, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false]);
}
