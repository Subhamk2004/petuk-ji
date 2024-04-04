<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $mobile = $_POST["mobile"];
    $email = $_POST["email"];
    $city = $_POST["city"];
    $state = $_POST["state"];
    $country = $_POST["country"];
    $area = $_POST["area"];
    $role = $_POST["role"];
    $remark = $_POST["remark"];

    // Compose email message
    $to = "customer.care@petukji.in";
    $subject = "Network Partner Request";
    $message = "Name: $name\nMobile: $mobile\nEmail: $email\nCity: $city\nState: $state\nCountry: $country\nArea: $area\nRole: $role\nRemark: $remark";

    // Send email
    mail($to, $subject, $message);

    // Redirect to WhatsApp
    header("Location: https://api.whatsapp.com/send?phone=911171279904&text=ForFranchise");
    exit;
}
?>
