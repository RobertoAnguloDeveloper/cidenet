function validations (data){
    console.log(data.fecha_ingreso);
    numeros_id = [];
    invalid_attributes = [];
    invalid_attributes.push("ninguno");

    const regexNames = /^[A-Z]{1,20}$/;
    const regexOtros = /^[A-Z]{1,50}$/;
    const regexNumId = /^[A-Za-z0-9-]{1,20}$/;

    listGlobal.forEach(element => {
        numeros_id.push(element.numero_id);
    });

    if(data.numero_id != ""){
        if (numeros_id.includes(data.numero_id) && !data.update){
            alert("El numero de identificación ya existe");
            invalid_attributes.push("numero_id_existe");
        }
        if(!regexNumId.test(data.numero_id)){
            invalid_attributes.push("numero_id");
            alert("Revise que su numero de identificación no contenga más de 20 caracteres y/o tenga caracteres especiales distintos a \"-\"");
        }
    }else{
        invalid_attributes.push("numero_id vacio");
        alert("Por favor ingrese el numero de identificación");
    }

    if(data.apellido1 != ""){
        if(!regexNames.test(data.apellido1)){
            alert("Revise que su Primer apellido esté en Mayúsculas y/o no contenga más de 20 letras y/o tenga caracteres especiales");
            invalid_attributes.push("apellido1");
        }
    }else{
        invalid_attributes.push("apellido1 vacio");
        alert("Por favor ingrese el Primer apellido");
    }

    if(data.apellido2 != ""){
        if(!regexNames.test(data.apellido2)){
            alert("Revise que su Segundo apellido esté en Mayúsculas y/o no contenga más de 20 letras y/o tenga caracteres especiales");
            invalid_attributes.push("apellido2");
        }
    }else{
        invalid_attributes.push("apellido2 vacio");
        alert("Por favor ingrese el Segundo apellido");
    }

    if(data.nombre1 != ""){
        if(!regexNames.test(data.nombre1)){
            alert("Revise que su Primer nombre esté en Mayúsculas y/o no contenga más de 20 letras y/o tenga caracteres especiales");
            invalid_attributes.push("nombre1");
        }
    }else{
        invalid_attributes.push("nombre1 vacio");
        alert("Por favor ingrese el Primer nombre");
    }

    if(data.otros != ""){
        if(!regexOtros.test(data.otros)){
            alert("Revise que su Otro nombre esté en Mayúsculas y/o no contenga más de 50 letras y/o tenga caracteres especiales");
            invalid_attributes.push("otros");
        }
    }

    if(data.fecha_ingreso == ""){
        invalid_attributes.push("fecha_ingreso");
        alert("Por favor ingrese la fecha de ingreso");
    }
    
    return invalid_attributes;
}