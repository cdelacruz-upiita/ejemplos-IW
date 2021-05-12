$(document).ready(function() {
    $('#example').DataTable( {
            responsive: true,
            "language": {
            "lengthMenu": "Mostrando _MENU_ registros por página",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros disponibles",
            "infoFiltered": "(filtrado de _MAX_ registros totales)",
            "sSearch": "Buscar",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                    "sFirst":    "Primero",
                    "sLast":     "Último",
                    "sNext":     "Siguiente",
                    "sPrevious": "Anterior"
                }
        },
        ajax :{ /* POST o GET */
            url: "../../json/productos.json" // ruta para un servicio que retorne un JSON
        },
        columns: [
            { data: "Nombre" },
            { data: "Descripcion" },
            { data: "Precio" },
            { data: "Imagen",
            "render": function(data, type, row, meta){
                if(type === 'display'){
                    data = '<img src="../../' + data + '" height="50px" weight="40px"/>';
                }
                return data;
                }
            }
        ]
    } );
} );