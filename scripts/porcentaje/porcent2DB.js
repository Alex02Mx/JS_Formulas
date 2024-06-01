// --- array de valores definicion areas y perimetros ---
const intro = [
    {
        value0 : [
            "Porcentaje :",
            "Existen varias maneras de obtener un porcentaje dependiendo del contexto y del tipo de datos con los que estés trabajando. Algunas formas comunes de calcular porcentajes:",
        
            "<span class='formulaSpan'>1. Porcentaje de una cantidad </span>",
            "Ejemplo: Si tienes 30 manzanas de un total de 150:",
            "<img class='imgFormula' src='../assets2/porc_formula.png' alt=''>",

            "<span class='formulaSpan'>2. Porcentaje de aumento o disminución</span>",
            "Ejemplo: Si un producto pasa de costar $50 a $70:",
            "<img class='imgFormula' src='../assets2/porc_aumento_formula.png' alt=''>",

            "<span class='formulaSpan'>3. Conversión de un decimal a porcentaje</span>",
            "Ejemplo: Para convertir 0.75 a porcentaje:",
            "<img class='imgFormula' src='../assets2/decim_porc_formula.png' alt=''>",

            "<span class='formulaSpan'>4. Conversión de un porcentaje a decimal</span>",
            "Ejemplo: Para convertir 25% a decimal:",
            "<img class='imgFormula' src='../assets2/porc_decim_formula.png' alt=''>",

            "<span class='formulaSpan'>5. Hallar el valor que corresponde a un porcentaje de una cantidad</span>",
            "Ejemplo: Para encontrar el 15% de 200:",
            "<img class='imgFormula' src='../assets2/valor_corres.png' alt=''>",
            "El porcentaje se usa ampliamente en diversos contextos, como en estadísticas, economía, finanzas, y para calcular descuentos en compras, tasas de interés, entre otros.",

        ],
    },

] ;
const introPorcentajeArray = [];

//-----------Calculadoras------------
const RD3SDICalculadoraObj = {
    definicion: "on",
    radios: "Simple",
    id: "regla_de_3_simple",
    titleFig: "Instrucciones",
    imgFig: "../assets/calculadora_simple.png",
    secMid: "sectionPCmiddleS",
    titlePorcentaje: "Regla de tres Simple",
    formulaPorcentaje: "Calculadora",
    winPos: "winPosDirInv",
    inputPorcentaje: [
        {
            inputLabel: "A",
            inputId: "winSDIvalorA"
        },
        {
            inputLabel: "B",
            inputId: "winSDIvalorB"
        },
        {
            inputLabel: "W",
            inputId: "winSDIvalorW"
        },
        {
            inputLabel: "Y",
            inputId: "winSDIvalorY"
        }
    ],
    resultClPC: "resultPCSDI",
    btnClPC: "btnResultPCSDI",
    btn2ClPC: "btnClearPCSDI",
    funcionPorcentaje: "pcSDI",
    clearWindow: "clearSCD"
};
const RD3CDIMCalculadoraObj = {
    definicion: "on",
    radios: "Compuesta",
    id: "regla_de_3_compuesta",
    titleFig: "Instrucciones",
    imgFig: "../assets/calculadora_compuesta.png",
    secMid: "sectionPCmiddleC",
    titlePorcentaje: "Regla de tres Compuesta",
    formulaPorcentaje: "Calculadora",
    winPos: "winPosDirInv",
    lista: [
        {
            family: "radPCCL",
            radX: "divRadioPCCLX",
            radD: "divRadioPCCLD",
            radI: "divRadioPCCLI",
            idForX: "radPCLX",
            idForD: "radPCLD",
            idForI: "radPCLI",
            textoX: "X",
            textoD: "D",
            textoI: "I",
            posDiv: "divRadioPCCL",
        },
        {
            family: "radPCCC",
            radX: "divRadioPCCCX",
            radD: "divRadioPCCCD",
            radI: "divRadioPCCCI",
            idForX: "radPCCX",
            idForD: "radPCCD",
            idForI: "radPCCI",
            textoX: "X",
            textoD: "D",
            textoI: "I",
            posDiv: "divRadioPCCC",
        },
        {
            family: "radPCCR",
            radX: "divRadioPCCRX",
            radD: "divRadioPCCRD",
            radI: "divRadioPCCRI",
            idForX: "radPCRX",
            idForD: "radPCRD",
            idForI: "radPCRI",
            textoX: "X",
            textoD: "D",
            textoI: "I",
            posDiv: "divRadioPCCR",
        }
    ],
    inputPorcentaje: [
        {
            inputLabel: "A",
            inputId: "winCDIMvalorA"
        },
        {
            inputLabel: "B",
            inputId: "winCDIMvalorB"
        },
        {
            inputLabel: "C",
            inputId: "winCDIMvalorC"
        },
        {
            inputLabel: "W",
            inputId: "winCDIMvalorW"
        },
        {
            inputLabel: "Y",
            inputId: "winCDIMvalorY"
        },
        {
            inputLabel: "Z",
            inputId: "winCDIMvalorZ"
        }
    ],
    resultClPC: "resultPCCDIM",
    btnClPC: "btnResultPCCDIM",
    btn2ClPC: "btnClearPCCDIM",
    funcionPorcentaje: "pcCDIM",
    clearWindow: "clearSCD"
};
const RD3SDescCalculadoraObj = {
    idDb: "calcular_descuento",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Descuento",
            imgFiguraDb: "../assets/calculadora_descuento.png",

            titleDb: "Descuento",

            grupoDb: "grupoporcentaje",
            inputRadCmDb: "radPorcentajeCmId",
            inputRadMtDb: "radPorcentajeMtId",

            inputDb: [
                {
                    inputLabel: "Precio ",
                    inputId: "winPrecio"
                },
                {
                    inputLabel: "Descuento",
                    inputId: "winDescuento"
                },
            ],
            winResMensDb: "winResMensPorcentajeCl",
            btnClearDb: "btnClearPorcentajeCl",
            btnResultDb: "btnResultPorcentajeCl",
            logicaDb: "pcDescuento",
        },
    ]

    // definicion: "on",
    // radios: "Descuento",
    // id: "calcular_descuento",
    // titleFig: "Instrucciones",
    // imgFig: "../assets/calculadora_descuento.png",
    // secMid: "sectionPCmiddleDesc",
    // winPos: "winPosDesc",
    // mesParr: "messageDiscount",

    // titlePorcentaje: "Porcentaje y Descuento",
    // formulaPorcentaje: "Calculadora",
    // inputPorcentaje: [
    //     {
    //         inputLabel: "Precio ",
    //         inputId: "winPrecio"
    //     },
    //     {
    //         inputLabel: "Descuento",
    //         inputId: "winDescuento"
    //     }
    // ],
    // resultClPC: "resultPCDESC",
    // btnClPC: "btnResultPCDESC",
    // btn2ClPC: "btnClearPCDESC",
    // funcionPorcentaje: "pcDescuento",
    // clearWindow: "clearSCD"
};



//--------------Ejemplos--------------
const RD3SimpleDirectaObj = {
    definicion: "off",
    id: "regla_de_3_simple_directa",
    titleFig: "Simple directa",
    imgFig: "../assets/simple_directa_top.png",
    imgFig2: "../assets/simple_directa_bottom.png",
    titlePorcentaje: "Procedimiento"
};
const RD3SimpleInversaObj = {
    definicion: "off",
    id: "regla_de_3_simple_inversa",
    titleFig: "Simple inversa",
    imgFig: "../assets/simple_inversa_top.png",
    imgFig2: "../assets/simple_inversa_bottom.png",
    titlePorcentaje: "Procedimiento"
};
const RD3CompuestaDirectaObj = {
    definicion: "off",
    id: "regla_de_3_compuesta_directa",
    titleFig: "Compuesta directa",
    imgFig: "../assets/compuesta_directa_top.png",
    imgFig2: "../assets/compuesta_directa_bottom.png",
    titlePorcentaje: "Procedimiento"
};
const RD3CompuestaInversaObj = {
    definicion: "off",
    id: "regla_de_3_compuesta_inversa",
    titleFig: "Compuesta inversa",
    imgFig: "../assets/compuesta_inversa_top.png",
    imgFig2: "../assets/compuesta_inversa_bottom.png",
    titlePorcentaje: "Procedimiento"
};
const RD3CompuestaMixtaObj = {
    definicion: "off",
    id: "regla_de_3_compuesta_mixta",
    titleFig: "Compuesta mixta",
    imgFig: "../assets/compuesta_mixta_top.png",
    imgFig2: "../assets/compuesta_mixta_bottom.png",
    titlePorcentaje: "Procedimiento"
};
const RD3DescuentoObj = {
    definicion: "off",
    id: "descuento",
    titleFig: "Descuento",
    imgFig: "../assets/descuento_top.png",
    imgFig2: "../assets/descuento_bottom.png",
    titlePorcentaje: "Procedimiento"
};
//-----------Agregar al array---------
// introPorcentajeArray.push(RD3SDICalculadoraObj);
// introPorcentajeArray.push(RD3CDIMCalculadoraObj);
introPorcentajeArray.push(RD3SDescCalculadoraObj);

// introPorcentajeArray.push(RD3SimpleDirectaObj);
// introPorcentajeArray.push(RD3SimpleInversaObj);
// introPorcentajeArray.push(RD3CompuestaDirectaObj);
// introPorcentajeArray.push(RD3CompuestaInversaObj);
// introPorcentajeArray.push(RD3CompuestaMixtaObj);
// introPorcentajeArray.push(RD3DescuentoObj);

