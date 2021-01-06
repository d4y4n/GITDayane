/*

DAYANA GONZALEZ
Version2
contiene Validaciones JS

*/

$.validator.addMethod("terminaPor", function(value, element, parametro){

})

$("#actualizar-form").validate({
    rules: {
        idfactura: {
            number: true,
            required: true,
            min: 1,
            max: 9999
        },

        idventa: {
            number: true,
            required: true,
            min: 1,
            max: 999
        },

        fechag: {
            required: true
            
        },

        fechap: {
            required: true
           
        },

        subtotal: {
            number: true,
            required: true
        },

        impuesto: {
            number: true,
            required: true
        },

        total: {
            number: true,
            required: true
        }

    }
})


$("#guardar").click(function(){
    if($("#actualizar-form").valid() == false){
        return;
    }
    let idfactura = $("#idfactura").val()
    let idventa = $("#idventa").val()
    let fechag = $("#fechag").val()
    let fechap = $("#fechap").val()
    let subtotal = $("#subtotal").val()
    let impuesto = $("#impuesto").val()
    let total = $("#total").val()

    

    
});

$.validator.addMethod("terminaPor", function(value, element, parametro){

})

$("#guardar-producto-form").validate({
    rules: {
        idproducto: {
            number: true,
            required: true,
            min: 1,
            max: 9999
        },

        nomproducto: {
            required: true,
            minlength: 3,
            maxlength: 50
        },

        valorproducto: {
            number: true,
            required: true,
            min: 1,
            max: 999999
            
        },

        categoria: {
            required: true
           
        }

    }
})


$("#guardar-producto").click(function(){
    if($("#guardar-producto-form").valid() == false){
        return;
    }
    let idproducto = $("#idproducto").val()
    let nomproducto = $("#nomproducto").val()
    let valorproducto = $("#valorproducto").val()
    let categoria = $("#categoria").val() 
    
});

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES
 */
 
jQuery.extend(jQuery.validator.messages, {
    required: "Este campo es obligatorio.",
    remote: "Por favor, rellena este campo.",
    email: "Por favor, escribe una dirección de correo válida",
    url: "Por favor, escribe una URL válida.",
    date: "Por favor, escribe una fecha válida.",
    dateISO: "Por favor, escribe una fecha (ISO) válida.",
    number: "Por favor, escribe un número entero válido.",
    digits: "Por favor, escribe sólo dígitos.",
    creditcard: "Por favor, escribe un número de tarjeta válido.",
    equalTo: "Por favor, escribe el mismo valor de nuevo.",
    accept: "Por favor, escribe un valor con una extensión aceptada.",
    maxlength: jQuery.validator.format("Por favor, no escribas más de {0} caracteres."),
    minlength: jQuery.validator.format("Por favor, no escribas menos de {0} caracteres."),
    rangelength: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
    range: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1}."),
    max: jQuery.validator.format("Por favor, escribe un valor menor o igual a {0}."),
    min: jQuery.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
  });