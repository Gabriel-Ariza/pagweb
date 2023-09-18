$(document).ready(function () {
    // Manejar el evento cuando se expande o colapsa el acordeón 1
    $('#flush-collapseOne').on('show.bs.collapse', function () {
        // Agregar la clase "expanded" a la imagen del acordeón 1
        $('#contenedor_receta1 .img_receta').addClass('expanded');
    });

    $('#flush-collapseOne').on('hide.bs.collapse', function () {
        $('#contenedor_receta1 .img_receta').removeClass('expanded');
    });

    /* ====================  EVENTO Y MANEJO CLASES ACORDEON 2  ==================== */
    $('#flush-collapseTwo').on('show.bs.collapse', function () {
        $('#contenedor_receta2 .img_receta2').addClass('expanded');
    });

    $('#flush-collapseTwo').on('hide.bs.collapse', function () {
        $('#contenedor_receta2 .img_receta2').removeClass('expanded');
    });

    /* ====================  EVENTO Y MANEJO CLASES ACORDEON 3  ==================== */
    $('#flush-collapseThree').on('show.bs.collapse', function () {
        $('#contenedor_receta3 .img_receta3').addClass('expanded');
    });

    $('#flush-collapseThree').on('hide.bs.collapse', function () {
        $('#contenedor_receta3 .img_receta3').removeClass('expanded');
    });
});


