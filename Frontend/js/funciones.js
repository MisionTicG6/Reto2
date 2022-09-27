//FUNCIONES CLIENT
function leerClientes() {
    $.ajax({
        url: "https://gda56cef028a361-gtr87noit6hyuzrh.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'GET',
        dataType: 'JSON',

        success: function (respuesta) {
            pintarRespuesta(respuesta.items);
        },
        error: function (xhr, status) {
            alert("error");
        }
    }
    );
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
            complete: function () {
                leerClientes();
            }
        }
    );

}


function consultarClientId() {

    let codigo = $("#idCliente").val();

    $.ajax(
        {

            url: 'https://gda56cef028a361-gtr87noit6hyuzrh.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client/' + codigo,
            type: 'GET',
            dataType: 'json',
            success: function (respuesta) {
                pintarRespuesta(respuesta.items);
            },
            error: function (xhr, status) {
                alert('Operacion no satisfactoria,' + xhr.status);
            },



        }
    );
}

/////////////////////////////////////////////////////FUNCIONES CAR////////////////////////////////////////////////////////////

function leerCarros() {
    $.ajax({
        url: "https://gda56cef028a361-gtr87noit6hyuzrh.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/car/car",
        type: 'GET',
        dataType: 'JSON',

        success: function (respuesta) {

            pintarCarros(respuesta.items);

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

function pintarCarros(items) {

    $("#listaCarros").empty();

    //declarar variables js
    let myTable = "<table>";
    myTable += "<tr><th>Codigo</th><th>Marca</th> <th> Modelo</th><th>Cateroria_ID</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].brand + "</td>";
        myTable += "<td>" + items[i].model + "</td>";
        myTable += "<td>" + items[i].category_id + "</td>";
        myTable += "<td><button onclick='borrarCarro(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#listaCarros").append(myTable);
}

function guardarCarro() {
    //Obtiene los valores de los input del formulario
    let idCarro = $("#idCarro").val();
    let marca = $("#marcaCarro").val();
    let modelo = $("#modeloCarro").val();
    let categoryID = $("#category_ID").val();

    //guarda los datos del formulario en un arreglo
    let data = {
        id: idCarro,
        brand: marca,
        model: modelo,
        category_id: categoryID
    };

    //convierte el arreglo en formato JSON
    let dataToSend = JSON.stringify(data);


    $.ajax({
        url: "https://gda56cef028a361-gtr87noit6hyuzrh.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/car/car",
        type: 'POST',
        //dataType: 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success: function (anything) {
            $("#idCarro").val("");
            $("#marcaCarro").val("");
            $("#modeloCarro").val("");
            $("#category_ID").val("");
        },
        error: function (xhr, status) {
            alert("error");
        }
    }

    );
}

function borrarCarro(idElemento) {

    let myData = { id: idElemento }
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {

            url: 'https://gda56cef028a361-gtr87noit6hyuzrh.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/car/car',
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
            complete: function () {
                leerCarros();
            }
        }
    );

}

function actualizarCarro() {

    //Obtiene los valores de los input del formulario
    let idCarro = $("#idCarro").val();
    let marca = $("#marcaCarro").val();
    let modelo = $("#modeloCarro").val();
    let categoryID = $("#category_ID").val();

    //guarda los datos del formulario en un arreglo
    let data = {
        id: idCarro,
        brand: marca,
        model: modelo,
        category_id: categoryID
    };

    //convierte el arreglo en formato JSON
    let dataToSend = JSON.stringify(data);


    $.ajax({
        url: "https://gda56cef028a361-gtr87noit6hyuzrh.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/car/car",
        type: 'PUT',
        //dataType: 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success: function (algo) {
            $("#idCarro").val("");
            $("#marcaCarro").val("");
            $("#modeloCarro").val("");
            $("#category_ID").val("");
        },
        error: function (xhr, status) {
            alert("error");
        }
    }

    );

}

function consultarCarId() {

    let codigo = $("#idCarro").val();

    $.ajax(
        {

            url: 'https://gda56cef028a361-gtr87noit6hyuzrh.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/car/car/' + codigo,
            type: 'GET',
            dataType: 'json',
            success: function (respuesta) {
                pintarCarros(respuesta.items);
            },
            error: function (xhr, status) {
                alert('Operacion no satisfactoria,' + xhr.status);
            },



        }
    );
}


////////////////////////////////////////////////FUNCIONES MENSAJE/////////////////////////////////////////////////////////////////////////////////////

function leerMensajes() {
    $.ajax({
        url: "https://gda56cef028a361-gtr87noit6hyuzrh.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'GET',
        dataType: 'JSON',

        success: function (respuesta) {

            pintarMensajes(respuesta.items);

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

function pintarMensajes(items) {

    $("#listaMensajes").empty();

    //declarar variables js
    let myTable = "<table>";
    myTable += "<tr><th>Codigo</th><th>Mensaje</th> </tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].messagetext + "</td>";
        myTable += "<td><button onclick='borrarMensaje(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#listaMensajes").append(myTable);
}

function guardarMensaje() {
    //Obtiene los valores de los input del formulario
    let idMensaje = $("#idMensaje").val();
    let mensaje = $("#mensaje").val();

    //guarda los datos del formulario en un arreglo
    let data = {
        id: idMensaje,
        messagetext: mensaje,
    };

    //convierte el arreglo en formato JSON
    let dataToSend = JSON.stringify(data);


    $.ajax({
        url: "https://gda56cef028a361-gtr87noit6hyuzrh.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'POST',
        //dataType: 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success: function (anything) {
            $("#idMensaje").val("");
            $("#mensaje").val("");
        },
        error: function (xhr, status) {
            alert("error");
        }
    }

    );
}

function borrarMensaje(idElemento) {

    let myData = { id: idElemento }
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {

            url: 'https://gda56cef028a361-gtr87noit6hyuzrh.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
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
            complete: function () {
                leerMensajes();
            }
        }
    );

}

function actualizarMensaje() {

    //Obtiene los valores de los input del formulario
    let idCarro = $("#idMensaje").val();
    let marca = $("#mensaje").val();

    //guarda los datos del formulario en un arreglo
    let data = {
        id: idCarro,
        messagetext: marca,
    };

    //convierte el arreglo en formato JSON
    let dataToSend = JSON.stringify(data);


    $.ajax({
        url: "https://gda56cef028a361-gtr87noit6hyuzrh.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'PUT',
        //dataType: 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success: function (algo) {
            $("#idMensaje").val("");
            $("#mensaje").val("");
        },
        error: function (xhr, status) {
            alert("error");
        }
    }

    );

}

function consultarMensajeId() {

    let codigo = $("#idMensaje").val();

    $.ajax(
        {

            url: 'https://gda56cef028a361-gtr87noit6hyuzrh.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message/' + codigo,
            type: 'GET',
            dataType: 'json',
            success: function (respuesta) {
                pintarMensajes(respuesta.items);
            },
            error: function (xhr, status) {
                alert('Operacion no satisfactoria,' + xhr.status);
            },



        }
    );
}