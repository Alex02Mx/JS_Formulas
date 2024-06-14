// --- array de valores definicion areas y perimetros ---
const intro = [
    {
        value0 : [
            "Porcentaje :",
            "Existen varias maneras de obtener un porcentaje dependiendo del contexto y del tipo de datos con los que estés trabajando. Algunas formas comunes de calcular porcentajes:",
        
            "<span class='formulaSpan'>1. Porcentaje de una cantidad </span><br>Ejemplo: Si tienes 30 manzanas de un total de 150:</br>",
            "<div class='contImgForm'><img class='imgFormula' src='../assets2/porc_cant.png' alt=''></div>",

            "<span class='formulaSpan'>2. Cantidad de un porcentaje</span><br>Ejemplo: Para encontrar el 15% de 200:</br>",
            "<div class='contImgForm'><img class='imgFormula' src='../assets2/cant_porc.png' alt=''></div>",

            "<span class='formulaSpan'>3. Conversión de un decimal a porcentaje</span><br>Ejemplo: Para convertir 0.75 a porcentaje:</br>",
            "<div class='contImgForm'><img class='imgFormula' src='../assets2/dec_porc.png' alt=''></div>",

            "<span class='formulaSpan'>4. Conversión de un porcentaje a decimal</span><br>Ejemplo: Para convertir 25% a decimal:</br>",
            "<div class='contImgForm'><img class='imgFormula' src='../assets2/porc_dec.png' alt=''></div>",

            "<span class='formulaSpan'>5. Porcentaje de aumento</span><br>Ejemplo: Si un producto pasa de costar $50 a $70:</br>",
            "<div class='contImgForm'><img class='imgFormula' src='../assets2/aumento.png' alt=''></div>",

            "<span class='formulaSpan'>6. Porcentaje de disminución</span><br>Ejemplo: Si un producto pasa de costar $70 a $50:</br>",
            "<div class='contImgForm'><img class='imgFormula' src='../assets2/disminución.png' alt=''></div>",
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
            imgFiguraDb: "../assets2/porc_cant_img.png",

            titleDb: "Porcentaje de una cantidad",

            inputDb: [
                {
                    inputLabelDb: "Cantidad Total",
                    inputIdDb: "winCantTotP"
                },
                {
                    inputLabelDb: "Cantidad Parcial",
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
            imgFiguraDb: "../assets2/cant_porc_img.png",

            titleDb: "Cantidad de un porcentaje",

            inputDb: [
                {
                    inputLabelDb: "Cantidad Total",
                    inputIdDb: "winCantTotC"
                },
                {
                    inputLabelDb: "Porcentaje",
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
            imgFiguraDb: "../assets2/dec_porc_img.png",

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
            imgFiguraDb: "../assets2/porc_dec_img.png",

            titleDb: "Porcentaje a Decimal",

            inputDb: [
                {
                    inputLabelDb: "Porcentaje",
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
    idDb: "%_de_aumento_disminución",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Porcentaje de Aumento",
            imgFiguraDb: "../assets2/aumento_img.png",

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
            imgFiguraDb: "../assets2/disminución_img.png",

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

PorcentajeArray.push(porcCantData);
PorcentajeArray.push(decPorcData);
PorcentajeArray.push(aumDismData);



