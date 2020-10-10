// send mail with ajax
$('#send_mail').click(function(e){
		e.preventDefault();
		var data = {
			Nom: $('#Nom').val(),
			Prénom: $('#Prénom').val(),
			Adressederesidenceactuelle: $('#Adresse de residence actuelle').val(),
			CodePostal: $('#Code Postal').val(),
            Ville: $('#Ville').val(),
			Pays: $('#Pays').val(),
			Adressefrance: $('#Adresse france').val(),
			CodePostalfrance: $('#Code Postal france').val(),
            Villefrance: $('#Ville france').val(),
			TéléphonePortable: $('#Téléphone Portable').val(),
			Fax: $('#Fax').val(),
			Email: $('#Email').val(),
            NomemployeurFrance: $('#Nom employeur France').val(),
			Marque: $('#Marque').val(),
			modèle: $('#modèle').val(),
			Année: $('#Année').val(),
            Dateacquisition: $('#Date acquisition').val(),
			Numérodesérie: $('#Numéro de série').val()
		};
// AJAX
		$.ajax({
			url: "mail.php",
			type: 'POST',
			data: data,
			success: function(data) {
				$('#js_alert_success').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_success').css({'display' : 'none'});
					$('#Nom').val("");
                    $('#Prénom').val("");
                    $('#Adresse de residence actuelle').val("");
                    $('#Code Postal').val("");
                    $('#Ville').val("");
                    $('#Pays').val("");
                    $('#Adresse france').val("");
                    $('#Code Postal france').val("");
                    $('#Ville france').val("");
                    $('#Téléphone Portable').val("");
                    $('#Fax').val("");
                    $('#Email').val("");
                    $('#Nom employeur France').val("");
                    $('#Marque').val("");
                    $('#modèle').val("");
                    $('#Année').val("");
                    $('#Date acquisition').val("");
                    $('#Numéro de série').val("")
				}, 3000);
			},
			error: function(data) {
				$('#js_alert_danger').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_danger').css({'display' : 'none'});
					$('#js_alert_success').css({'display' : 'none'});
					$('#Nom').val("");
                    $('#Prénom').val("");
                    $('#Adresse de residence actuelle').val("");
                    $('#Code Postal').val("");
                    $('#Ville').val("");
                    $('#Pays').val("");
                    $('#Adresse france').val("");
                    $('#Code Postal france').val("");
                    $('#Ville france').val("");
                    $('#Téléphone Portable').val("");
                    $('#Fax').val("");
                    $('#Email').val("");
                    $('#Nom employeur France').val("");
                    $('#Marque').val("");
                    $('#modèle').val("");
                    $('#Année').val("");
                    $('#Date acquisition').val("");
                    $('#Numéro de série').val("")
				}, 3000);
			}
		});
	});