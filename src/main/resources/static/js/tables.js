var auto_increment_value = 0;
var listGlobal = [{}];

var fields = [
    $("#apellido1"), 
    $("#apellido2"),
    $("#nombre1"),
    $("#otros"),
    $("#pais"),
    $("#tipo_id"),
    $("#numero_id"),
    $("#fecha_ingreso"),
    $("#area"),
]

function cleanFields(){
    for (let i = 0; i < fields.length; i++) {
        fields[i].val("");
    }
}

var app = {
    backend: 'http://144.22.204.157:8080/api/Empleado',
    table : null,

    init: function() {
        app.initDatatable('#empleados_table');

        let i = 0;
        $('#empleados_table tfoot th').each(function () {
            i++;

            if(i != 1 && i != 10 && i != 11 && i != 13 && i != 14){
                var title = $(this).text();
            $(this).html('<input class="form-control" style="width: 110%; max-width: 100px;" type="text" placeholder="' + title + '"/>');
            }
            
        });

        function getAutoIncrementValue(){
            $.ajax({
                url: app.backend + '/auto_increment_value',
                type: 'GET',
                dataType: 'json',
                
                success: function (result) {
                    auto_increment_value = result;
                }
            });
        }

        function getList(){
            $.ajax({
                url: app.backend + '/all',
                type: 'GET',
                dataType: 'json',
                
                success: function (list) {
                    listGlobal = list;
                }
            });
        
            return listGlobal;
        }

        $("#save").click(function(){
            
            getAutoIncrementValue();
            getList();

            var date = new Date();
            var timestamp = date.getDate() + '/' 
                + (date.getMonth() + 1) + '/' 
                + date.getFullYear() + ' ' 
                + date.getHours() + ':' 
                + date.getMinutes() + ':' 
                + date.getSeconds();

            let apellido1 = $("#apellido1").val();
            let apellido2 = $("#apellido2").val();
            let nombre1 = $("#nombre1").val();
            let otros = $("#otros").val();
            let pais = $("#pais").val();
            let tipo_id = $("#tipo_id").val();
            let numero_id = $("#numero_id").val();
            let email = "";
            let fecha_ingreso = $("#fecha_ingreso").val();
            let area = $("#area").val();
            let estado = "Activo";
            let fecha_hora_registro = timestamp;

            emails = [];

            setTimeout(()=>{

                listGlobal.forEach(element => {
                    emails.push(element.email);
                });

                if(apellido1.includes(" ")){
                    apellido1 = apellido1.replace(/\s/g, '').toLowerCase();
                }
    
                if(emails.includes(nombre1.toLowerCase()+"."+apellido1.toLowerCase()+"@cidenet.com.co")){
                    id = auto_increment_value;
                    email = nombre1.toLowerCase()+"."+apellido1.toLowerCase()+id+"@cidenet.com.co";
                }else{
                    email = nombre1.toLowerCase()+"."+apellido1.toLowerCase()+"@cidenet.com.co";
                }
    
                let empleado = {
                    apellido1: apellido1,
                    apellido2: apellido2,
                    nombre1: nombre1,
                    otros: otros,
                    pais: pais,
                    tipo_id: tipo_id,
                    numero_id: numero_id,
                    email: email,
                    fecha_ingreso: fecha_ingreso,
                    area: area,
                    estado: estado,
                    fecha_hora_registro: fecha_hora_registro
                };

                let result = [];

                setTimeout(()=>{
                    empleado.update = false;
                    result = validations(empleado);
                }, 250);
                
                setTimeout(()=>{
                    if (result.length === 1) {
                        app.save({
                            apellido1: apellido1,
                            apellido2: apellido2,
                            nombre1: nombre1,
                            otros: otros,
                            pais: pais,
                            tipo_id: tipo_id,
                            numero_id: numero_id,
                            email: email,
                            fecha_ingreso: fecha_ingreso,
                            area: area,
                            estado: estado,
                            fecha_hora_registro: fecha_hora_registro
                        });
                    }
                },1000);
            }, 1000);            
        });

        $("#update").click(function(){
            getAutoIncrementValue();
            getList();

            let date = new Date();
            let timestamp = date.getDate() + '/' 
                + (date.getMonth() + 1) + '/' 
                + date.getFullYear() + ' ' 
                + date.getHours() + ':' 
                + date.getMinutes() + ':' 
                + date.getSeconds();

            let id = $("#ide").val();
            let apellido1 = $("#apellido1e").val();
            let apellido2 = $("#apellido2e").val();
            let nombre1 = $("#nombre1e").val();
            let otros = $("#otrose").val();
            let pais = $("#paise").val();
            let tipo_id = $("#tipo_ide").val();
            let numero_id = $("#numero_ide").val();
            let email = "";
            let fecha_ingreso = $("#fecha_ingresoe").val();
            let area = $("#areae").val();
            let estado = "Activo";
            let fecha_hora_registro = timestamp;

            let emails = [];

            setTimeout(()=>{

                listGlobal.forEach(element => {
                    emails.push(element.email);
                });

                if(apellido1.includes(" ")){
                    apellido1 = apellido1.replace(/\s/g, '').toLowerCase();
                }
    
                if(emails.includes(nombre1.toLowerCase()+"."+apellido1.toLowerCase()+"@cidenet.com.co")){
                    id = auto_increment_value;
                    email = nombre1.toLowerCase()+"."+apellido1.toLowerCase()+id+"@cidenet.com.co";
                }else{
                    email = nombre1.toLowerCase()+"."+apellido1.toLowerCase()+"@cidenet.com.co";
                }
    
                let empleado = {
                    id: id,
                    apellido1: apellido1,
                    apellido2: apellido2,
                    nombre1: nombre1,
                    otros: otros,
                    pais: pais,
                    tipo_id: tipo_id,
                    numero_id: numero_id,
                    email: email,
                    fecha_ingreso: fecha_ingreso,
                    area: area,
                    estado: estado,
                    fecha_hora_registro: fecha_hora_registro
                };

                let result = [];

                setTimeout(()=>{
                    empleado.update = true;
                    result = validations(empleado);
                }, 250);
                
                setTimeout(()=>{
                    if (result.length === 1){
                        app.update({
                            id: id,
                            apellido1: apellido1,
                            apellido2: apellido2,
                            nombre1: nombre1,
                            otros: otros,
                            pais: pais,
                            tipo_id: tipo_id,
                            numero_id: numero_id,
                            email: email,
                            fecha_ingreso: fecha_ingreso,
                            area: area,
                            estado: estado,
                            fecha_hora_registro: fecha_hora_registro
                        });
                    }
                },1000);
            }, 1000);
        });
    },

    initDatatable : function(id) {
        
        app.table = $(id).DataTable({
            language: {
                url: 'https://cdn.datatables.net/plug-ins/1.13.1/i18n/es-MX.json'
            },
    
            initComplete: function () {
                this.api()
                    .columns()
                    .every(function () {
                        var that = this;
     
                        $('input', this.footer()).on('keyup change clear', function () {
                            if (that.search() !== this.value) {
                                that.search(this.value).draw();
                            }
                        });
                    });
            },
            ajax : {
                url : app.backend + '/all',
                dataSrc : function(json) {
                return json;
                }
            },
            dom: 'Bfrtip',
            columns : [
                {data: "id"},
                {data: "apellido1"},
                {data: "apellido2"},
                {data: "nombre1"},
                {data: "otros"},
                {data: "pais"},
                {data: "tipo_id"},
                {data: "numero_id"},
                {data: "email"},
                {data: "fecha_ingreso"},
                {data: "area"},
                {data: "estado"},
                {data: "fecha_hora_registro"}
            ],
            buttons: [
                {
                    text : 'Registrar',
                    action : function(e, dt, node, config) {
                        $('#empleadoModal').modal();
                    }
                },
                {
                    text : 'Editar',
                    action : function(e, dt, node, config) {
                        let data = dt.rows('.table-active').data()[0];
                        if(data != undefined){
                            app.setDataToModalEdit(data);
                            $('#empleadoModalEdit').modal();
                        }else{
                            alert("Debe seleccionar un emplado antes");
                        }
                    }
                },
                {
                    text : 'Eliminar',
                    action : function(e, dt, node, config) {
                        let data = dt.rows('.table-active').data()[0];
                        if(data != undefined){
                            app.delete(data.id);
                        }else{
                            alert("Debe seleccionar un emplado antes");
                        }
                    }
                }
            ]
        });

        $('#empleados_table tbody').on('click', 'tr', function(){
            if ($(this).hasClass('table-active')) {
                $(this).removeClass('table-active');
            } else {
                app.table.$('tr.table-active').removeClass('table-active');
                $(this).addClass('table-active');
            }
        });
    },

    setDataToModal : function(data) {
        $("#apellido1").val(data.apellido1);
        $("#apellido2").val(data.apellido2);
        $("#nombre1").val(data.nombre1);
        $("#otros").val(data.otros);
        $("#pais").val(data.pais);
        $("#tipo_id").val(data.tipo_id);
        $("#numero_id").val(data.numero_id);
        $("#fecha_ingreso").val(data.fecha_ingreso);
        $("#area").val(data.area);
    },

    setDataToModalEdit : function(data) {
        $("#ide").val(data.id);
        $("#apellido1e").val(data.apellido1);
        $("#apellido2e").val(data.apellido2);
        $("#nombre1e").val(data.nombre1);
        $("#otrose").val(data.otros);
        $("#paise").val(data.pais);
        $("#tipo_ide").val(data.tipo_id);
        $("#numero_ide").val(data.numero_id);
        $("#fecha_ingresoe").val(data.fecha_ingreso);
        $("#areae").val(data.area);
    },

    save : function(data) {
        $.ajax({
            url: app.backend + '/save',
            data : JSON.stringify(data),
            method: 'POST',
            dataType : 'json',
            contentType: "application/json; charset=utf-8",
            complete : function(json) {
                $("#msg").toggleClass("alert-success");
                $("#msg").text('Se guardó el empleado correctamente');
                $("#msg").show();
                $('#empleadoModal').modal('hide');
                
                cleanFields();
                setTimeout(() => {
                    $("#msg").hide();
                }, 2000);
                app.table.ajax.reload();
            },
            error : function(error) {
                
            }
        });
    },

    update : function(data) {
        $.ajax({
            url: app.backend + '/update',
            data : JSON.stringify(data),
            method: 'PUT',
            dataType : 'json',
            contentType: "application/json; charset=utf-8",
            success : function(json) {
                $("#msg").toggleClass("alert-success");
                $("#msg").text('Se guardó el empleado correctamente');
                $("#msg").show();
                $('#empleadoModalEdit').modal('hide');
                setTimeout(() => {
                    $("#msg").hide();
                }, 2000);
                app.table.ajax.reload();
            },
            error : function(error) {
                alert("Ha ocurrido un error, no se ha podido editar");
            }
        })
    },

    delete : function(id) {
        $.ajax({
            url: app.backend + '/'+id,
            method: 'DELETE',
            dataType : 'json',
            contentType: "application/json; charset=utf-8",
            success : function(json) {
                $("#msg").toggleClass("alert-success");
                $("#msg").text('Se eliminó el empleado correctamente');
                $("#msg").show();
                $('#empleadoModal').modal('hide');
                setTimeout(() => {
                    $("#msg").hide();
                }, 2000);
                app.table.ajax.reload();
            },
            error : function(error) {
                alert("Ha ocurrido un error, no se ha podido eliminar");
            }
        })
    },
};

$(document).ready(function(){
    app.init();
});
