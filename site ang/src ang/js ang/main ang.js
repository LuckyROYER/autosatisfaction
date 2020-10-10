// send mail with ajax
$('#send_mail').click(function(e){
		e.preventDefault();
		var data = {
			Nom: $('#Nom').val(),
			Prénom: $('#Prénom').val(),
			Adresse de residence actuelle: $('#Adresse de residence actuelle').val(),
			Code Postal: $('#Code Postal').val(),
            Ville: $('#Ville').val(),
			Pays: $('#Pays').val(),
			Adresse france: $('#Adresse france').val(),
			Code Postal france: $('#Code Postal france').val(),
            Ville france: $('#Ville france').val(),
			Téléphone Portable: $('#Téléphone Portable').val(),
			Fax: $('#Fax').val(),
			Email: $('#Email').val(),
            Nom employeur France: $('#Nom employeur France').val(),
			Marque: $('#Marque').val(),
			modèle: $('#modèle').val(),
			Année: $('#Année').val(),
            Date acquisition: $('#Date acquisition').val(),
			Numéro de série: $('#Numéro de série').val()
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