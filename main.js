function leerClientes() {
    $.ajax({
        url: "https://gda56cef028a361-gtr87noit6hyuzrh.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'GET',
        dataType: 'JSON',

        success: function (respuesta) {

            pintarRespuesta(respuesta.items);

            // let cs=respuesta.items;

            // for(i=0;i<cs.length;i++){
            //     $("#listaClientes").append(cs[i].name);

            // }
        },
        error: function (xhr, status) {
            alert("error");
        }
    }

    )
}

function pintarRespuesta(items) {

    $("#listaClientes").empty();

    //declarar variables js
    let myTable = "<table>";
    myTable += "<tr><th>Codigo</th><th>Nombre</th> <th> Correo</th><th>Edad</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable += "<td><button onclick='borrarCliente(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#listaClientes").append(myTable);
}

function guardarCliente() {
    //Obtiene los valores de los input del formulario
    let idCliente = $("#idCliente").val();
    let nombre = $("#nombreCliente").val();
    let correo = $("#mailCliente").val();
    let edad = $("#edadCliente").val();

    //guarda los datos del formulario en un arreglo
    let data = {
        id: idCliente,
        name: nombre,
        email: correo,
        age: edad
    };

    //convierte el arreglo en formato JSON
    let dataToSend = JSON.stringify(data);


    $.ajax({
        url: "https://gda56cef028a361-gtr87noit6hyuzrh.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'POST',
        //dataType: 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success: function (algo) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
        },
        error: function (xhr, status) {
            alert("error");
        }
    }

    );
}

function borrarCliente(idElemento) {

    let myData = { id: idElemento }
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {

            url: 'https://gda56cef028a361-gtr87noit6hyuzrh.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
            type: 'DELETE',
            data: dataToSend,
            contentType: 'application/json',
            datatype: "JSON",
            success: function (respuesta) {
                // console.log(respuesta);
                alert("Borrado exitoso");
            },
            error: function (xhr, status) {
                alert('Operacion no satisfactoria,' + xhr.status);
            },
            //Muestra los clientes despues de borrarlos
            complete: function(){
                leerClientes();
            }
        }
    );

}

function actualizarCliente() {

    //Obtiene los valores de los input del formulario
    let idCliente = $("#idCliente").val();
    let nombre = $("#nombreCliente").val();
    let correo = $("#mailCliente").val();
    let edad = $("#edadCliente").val();

    //guarda los datos del formulario en un arreglo
    let data = {
        id: idCliente,
        name: nombre,
        email: correo,
        age: edad
    };

    //convierte el arreglo en formato JSON
    let dataToSend = JSON.stringify(data);


    $.ajax({
        url: "https://gda56cef028a361-gtr87noit6hyuzrh.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'PUT',
        //dataType: 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success: function (algo) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
        },
        error: function (xhr, status) {
            alert("error");
        }
    }

    );

}
