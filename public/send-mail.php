<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
    exit;
}

$name    = isset($input['name'])    ? strip_tags(trim($input['name']))    : '';
$email   = isset($input['email'])   ? strip_tags(trim($input['email']))   : '';
$phone   = isset($input['phone'])   ? strip_tags(trim($input['phone']))   : '';
$subject = isset($input['subject']) ? strip_tags(trim($input['subject'])) : '';
$message = isset($input['message']) ? strip_tags(trim($input['message'])) : '';

if (!$name || !$email || !$subject || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email']);
    exit;
}

$to   = 'ventas@dispromedcomercial.com.ar';
$subj = '=?UTF-8?B?' . base64_encode('Consulta web: ' . $subject) . '?=';

$body  = "Nombre: $name\r\n";
$body .= "Email: $email\r\n";
if ($phone) $body .= "Telefono: $phone\r\n";
$body .= "\r\nMensaje:\r\n$message";

$headers  = "From: ventas@dispromedcomercial.com.ar\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// -f flag sets the envelope sender, required by many shared hosts
$sent = mail($to, $subj, $body, $headers, '-f ventas@dispromedcomercial.com.ar');

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    $lastError = error_get_last();
    $errorMsg  = $lastError ? $lastError['message'] : 'mail() returned false';
    error_log("send-mail.php FAILED: " . $errorMsg);
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Mail delivery failed']);
}
