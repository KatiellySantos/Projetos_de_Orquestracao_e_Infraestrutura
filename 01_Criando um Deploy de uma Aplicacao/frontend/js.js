$("#button-blue").on("click", function () {
  var txt_nome = $("#name").val();
  var txt_email = $("#email").val();
  var txt_comentario = $("#comment").val();

  $.ajax({
    url: "http://localhost:8080/insert.php", // Altere para a URL correta do backend
    type: "post",
    data: { nome: txt_nome, comentario: txt_comentario, email: txt_email },
    beforeSend: function () {
      console.log("Tentando enviar os dados....");
    },
  }).done(function (e) {
    alert("Dados Salvos");
  });
});

