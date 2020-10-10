<?php
if($_POST){
  $Nom = $_POST['Nom'];
  $Prénom = $_POST['Prénom'];
  $Adressederesidenceactuelle = $_POST['Adresse de residence actuelle'];
  $CodePostal = $_POST['Code Postal'];
  $Ville = $_POST['Ville'];
  $Pays = $_POST['Pays'];
  $Adressefrance = $_POST['Adresse france'];
  $CodePostalfrance = $_POST['Code Postal france'];
  $Villefrance = $_POST['Ville france'];
  $TéléphonePortable = $_POST['Téléphone Portable'];
  $Email = $_POST['Email'];
  $NomemployeurFrance = $_POST['Nom employeur France'];
  $Marque = $_POST['marque'];
  $modèle = $_POST['modèle'];
  $Année = $_POST['Année'];
  $Dateacquisition = $_POST['Date acquisition'];
  $Numérodesérie = $_POST['Numéro de série'];
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
  $headers .= "From: $name <$email>\r\nReply-to : $name <$email>\nX-Mailer:PHP";
  $subject="";
  $destinataire="luckyluc78510@gmail.com";
  $body="$Nom,$Prénom,$Adressederesidenceactuelle,$CodePostal,$Ville,$Pays,$Adressefrance,$CodePostalfrance,$Villefrance,$TéléphonePortable,$Fax,$Email,$NomemployeurFrance,$Marque,$modèle,$Année,$Dateacquisition,$Numérodesérie";
  if(mail($destinataire,$subject,$body,$headers)) {
    $response['status'] = 'success';
    $response['msg'] = 'your mail is sent';
  } else {
    $response['status'] = 'error';
    $response['msg'] = 'Something went wrong';
  }
  echo json_encode($response);
}
?>