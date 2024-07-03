// --- array de valores definicion areas y perimetros ---
const intro = [
    {
        value0 : [
            "Porcentaje :",
            "Existen varias maneras de obtener un porcentaje dependiendo del contexto y del tipo de datos con los que estés trabajando. Algunas formas comunes de calcular porcentajes:",
        
            "<span class='formulaSpan'>1. Porcentaje de una cantidad </span><br><br>Ejemplo: Si tienes 30 manzanas de una cantidad total de 150 manzanas.<br>Qué porcentaje del total de 150 representan 30 manzanas ? </br>",
            "<div class='contImgForm'><img class='imgFormula' src='https://i.ibb.co/JjbgF4F/porc-cant.png' alt=''></div>",

            "<span class='formulaSpan'>2. Cantidad de un porcentaje</span><br>Ejemplo: Para encontrar el 15% de 200:</br>",
            "<div class='contImgForm'><img class='imgFormula' src='https://i.ibb.co/V9P3YW1/cant-porc.png' alt=''></div>",

            "<span class='formulaSpan'>3. Conversión de un decimal a porcentaje</span><br>Ejemplo: Para convertir 0.75 a porcentaje:</br>",
            "<div class='contImgForm'><img class='imgFormula' src='https://i.ibb.co/p3p1QTG/dec-porc.png' alt=''></div>",

            "<span class='formulaSpan'>4. Conversión de un porcentaje a decimal</span><br>Ejemplo: Para convertir 25% a decimal:</br>",
            "<div class='contImgForm'><img class='imgFormula' src='https://i.ibb.co/CQ7Df5J/porc-dec.png' alt=''></div>",

            "<span class='formulaSpan'>5. Porcentaje de aumento</span><br>Ejemplo: Si un producto pasa de costar $50 a $70:</br>",
            "<div class='contImgForm'><img class='imgFormula' src='https://i.ibb.co/F0dwqdn/aumento.png' alt=''></div>",

            "<span class='formulaSpan'>6. Porcentaje de disminución</span><br>Ejemplo: Si un producto pasa de costar $70 a $50:</br>",
            "<div class='contImgForm'><img class='imgFormula' src='https://i.ibb.co/q0V2xy9/disminuci-n.png' alt=''></div>",

            "<span class='formulaSpan'>7. Descuento</span><br>Ejemplo: Para calcular el precio a pagar después de aplicar un descuento del 20% al precio de $ 3500</br>",
            "<div class='contImgForm'><img class='imgFormula' src='https://i.ibb.co/YL0ggW3/descuento.png' alt=''></div>",
        ],
    },
    {
        value1 : [
            "Conclución:",
            "El porcentaje se usa ampliamente en diversos contextos, como en estadísticas, economía, finanzas, y para calcular descuentos en compras, tasas de interés, entre otros.",
        ]
    },

] ;
const PorcentajeArray = [];

//-----------Calculadoras------------
const porcCantData = {
    idDb: "porcentaje_de_una_cantidad_cantidad_de_un_porcentaje",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Porcentaje de una cantidad",
            imgFiguraDb: "https://i.ibb.co/Y8gcbgt/porc-cant-img.png",

            titleDb: "Porcentaje de una cantidad",

            inputDb: [
                {
                    inputLabelDb: "Cantidad Total",
                    inputIdDb: "winCantTotP"
                },
                {
                    inputLabelDb: "Cantidad Parcial ",
                    inputIdDb: "winCanParc"
                },
            ],
            winResMensDb: "winResMensCalcTopCl",
            btnClearDb: "btnClearCalcTopCl",
            btnResultDb: "btnResultCalcTopCl",
            logicaDb: "porcentajeFn",
        },
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Cantidad de un porcentaje",
            imgFiguraDb: "https://i.ibb.co/sW1wpN1/cant-porc-img.png",

            titleDb: "Cantidad de un porcentaje",

            inputDb: [
                {
                    inputLabelDb: "Cantidad Total",
                    inputIdDb: "winCantTotC"
                },
                {
                    inputLabelDb: "Porcentaje %",
                    inputIdDb: "winPorc"
                },
            ],
            winResMensDb: "winResMensCalcBottomCl",
            btnClearDb: "btnClearCalcBottomCl",
            btnResultDb: "btnResultCalcBottomCl",
            logicaDb: "cantidadFn",
        },
    ]

};
const decPorcData = {
    idDb: "decimal_a_porcentaje_porcentaje_a_decimal",
    datosDb : [
        {
            mensajeSigPlurDb: "s",
            titleFigDb: "Decimal a Porcentaje",
            imgFiguraDb: "https://i.ibb.co/tmXddNx/dec-porc-img.png",

            titleDb: "Decimal a Porcentaje",

            inputDb: [
                {
                    inputLabelDb: "Decimal",
                    inputIdDb: "winCantTotP"
                },
            ],
            winResMensDb: "winResMensCalcTopCl",
            btnClearDb: "btnClearCalcTopCl",
            btnResultDb: "btnResultCalcTopCl",
            logicaDb: "decimPorcFn",
        },
        {
            mensajeSigPlurDb: "s",
            titleFigDb: "Porcentaje a Decimal",
            imgFiguraDb: "https://i.ibb.co/9yznbRk/porc-dec-img.png",

            titleDb: "Porcentaje a Decimal",

            inputDb: [
                {
                    inputLabelDb: "Porcentaje %",
                    inputIdDb: "winCantTotC"
                },
            ],
            winResMensDb: "winResMensCalcBottomCl",
            btnClearDb: "btnClearCalcBottomCl",
            btnResultDb: "btnResultCalcBottomCl",
            logicaDb: "porcDecimFn",
        },
    ]
};
const aumDismData = {
    idDb: "porcentaje_de_aumento_porcentaje_de_disminución",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Porcentaje de Aumento",
            imgFiguraDb: "https://i.ibb.co/FgVqbPF/aumento-img.png",

            titleDb: "Porcentaje de Aumento",

            inputDb: [
                {
                    inputLabelDb: "Cantidad inicial",
                    inputIdDb: "winCantTotA"
                },
                {
                    inputLabelDb: "Cantidad con Aumento",
                    inputIdDb: "winCantCnAumen"
                },
            ],
            winResMensDb: "winResMensCalcTopCl",
            btnClearDb: "btnClearCalcTopCl",
            btnResultDb: "btnResultCalcTopCl",
            logicaDb: "aumentoFn",
        },
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Porcentaje de Disminución",
            imgFiguraDb: "https://i.ibb.co/6tb65sr/disminuci-n-img.png",

            titleDb: "Porcentaje de Disminución",

            inputDb: [
                {
                    inputLabelDb: "Cantidad inicial",
                    inputIdDb: "winCantTotD"
                },
                {
                    inputLabelDb: "Cantidad con Disminución",
                    inputIdDb: "winCantCnDismin"
                },
            ],
            winResMensDb: "winResMensCalcBottomCl",
            btnClearDb: "btnClearCalcBottomCl",
            btnResultDb: "btnResultCalcBottomCl",
            logicaDb: "disminucionFn",
        },
    ]
};
const descuentoData = {
    idDb: "descuento",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Descuento",
            imgFiguraDb: "https://i.ibb.co/hVM1WMv/descuento-img.png",

            titleDb: "Descuento",

            inputDb: [
                {
                    inputLabelDb: "Precio $",
                    inputIdDb: "winPrecio"
                },
                {
                    inputLabelDb: "Descuento %",
                    inputIdDb: "winDescuento"
                },
            ],
            winResMensDb: "winResMensCalcTopCl",
            btnClearDb: "btnClearCalcTopCl",
            btnResultDb: "btnResultCalcTopCl",
            logicaDb: "descuentoFn",
        },
    ]
};
PorcentajeArray.push(porcCantData);
PorcentajeArray.push(decPorcData);
PorcentajeArray.push(aumDismData);
PorcentajeArray.push(descuentoData);



