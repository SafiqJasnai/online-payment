<?php 
    include("DbConnect.php");
    $conn = new DbConnect();
    $db = $conn->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method) {
        case 'POST':
            $user = json_decode(file_get_contents('php://input'));
            $name = $_REQUEST['name'];
            $email = $_REQUEST['email'];
            $mobile = $_REQUEST['mobile'];
            $sql = "INSERT INTO users(id, name, email, mobile, created_at) values(null, :name, :email, :mobile, :created_at)";
            $stmt = $db->prepare($sql);
            $date = date('Y-m-d');
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':mobile', $mobile);
            $stmt->bindParam(':created_at', $date);
            if($stmt->execute()) {
                echo 'good';
            } else {
                echo 'bad';
            }
            break;
        case 'GET':
            $sql = "SELECT * FROM users";
            $stmt = $db->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);        
            echo json_encode($users);
            break;
    }
?>