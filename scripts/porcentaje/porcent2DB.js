// --- array de valores definicion areas y perimetros ---
const intro = [
    {
        value0 : [
            "Qué es porcentaje ?",
            "El porcentaje es una forma de expresar una cantidad como una fracción de 100. Se utiliza comúnmente para comparar y representar proporciones. La palabra 'porcentaje' proviene del latín 'per centum', que significa 'por cada cien'. Para calcular el porcentaje de una cantidad, se utiliza la fórmula:",
            "<span class='formulaSpan'>Porcentaje = ( Parte / Total ) x 100.</span>",
            "Ejemplos:",
            "Si tienes 25 manzanas de un total de 100 manzanas, el porcentaje de manzanas que tienes es:",
            "<span class='formulaSpan'>( 25 / 100 ) x 100 = 25%.</span>",
            "Si en una clase de 30 estudiantes, 15 son mujeres, el porcentaje de mujeres en la clase es:",
            "<span class='formulaSpan'>( 15 / 30 ) x 100 = 50%.</span>",
        ],
    },
    {
        value1 : [
            "Regla de tres",
            "La regla de tres es un método matemático utilizado para resolver problemas de proporcionalidad. Consiste en encontrar un cuarto valor cuando se conocen tres valores y se sabe que las dos parejas de valores tienen la misma proporción. Existen dos tipos de regla de tres: ",
            "<span class='tipoSpan'>Regla de tres simple</span><br>La cual puede ser <span class='tipoSpan'>directa</span> o <span class='tipoSpan'>inversa.</span>",
            "<span class='tipoSpan'>Regla de tres compuesta.</span><br>La cual puede ser <span class='tipoSpan'>directa</span> o <span class='tipoSpan'>inversa.</span>",
        ],
    },
    {
        value2 : [
            "Regla de tres simple directa:",
            "La regla de tres simple directa, se usa cuando dos magnitudes son directamente proporcionales. Si una magnitud aumenta, la otra también aumenta en la misma proporción.",
            "Por ejemplo, si sabemos que 3 manzanas cuestan 6 pesos, ¿cuánto costarán 5 manzanas?",
            "<span class='tipoSpan'>3 Manzanas -> 6 Pesos.<br>5 Manzanas -> x Pesos.</span>",
            "Se resuelve de la siguiente manera:",
            "<span class='tipoSpan'>5 Manzanas x 6 Pesos / 3 Manzanas<br>x = 10 Pesos.</span>",
        ],
    },
    {
        value3 : [
            "Regla de tres simple inversa:",
            "La regla de tres simple inversa, se usa cuando dos magnitudes son inversamente proporcionales. Si una magnitud aumenta, la otra disminuye en la misma proporción.",
            "Por ejemplo, si 4 trabajadores tardan 10 días en hacer un trabajo, ¿cuántos días tardarían 8 trabajadores?",
            "<span class='tipoSpan'>4 Trabajadores -> 10 días<br>8 Trabajadores -> x días</span>",
            "Se resuelve de la siguiente manera:",
            "<span class='tipoSpan'>4 Trabajadores x 10 días / 8 Trabajadores<br>x = 5 días.</span>",
        ],
    },
    {
        value4 : [
            "Regla de tres compuesta directa:",
            "La regla de tres compuesta se utiliza cuando se tienen más de dos magnitudes relacionadas proporcionalmente. Se resuelve de forma similar a la regla de tres simple, pero tomando en cuenta todas las magnitudes implicadas.",
            "Por ejemplo, si 5 máquinas pueden producir 200 unidades en 8 horas, ¿cuántas unidades pueden producir 3 máquinas en 12 horas?",
            "Se estructura así:",
            
            "<span class='tipoSpan'>5 Maquinas -> 200 Unidades -> 8 Horas<br>3 Maquinas -> x Unidades -> 12 Horas</span>",

            "Para resolverlo:",

            "1-. Primero calculamos la producción de una sola máquina en una hora:",
            "Unidades por máquina por hora = 200 unidades / 5 máquinas x 8 horas = 5 unidades por máquina",
            
            "2-. Luego, calculamos cuántas unidades producen 3 máquinas en 12 horas:",
            "x = 3 máquinas x 12 horas x 5 unidades por máquina por hora = 180 unidades",
            
            "Estas reglas son herramientas útiles para resolver problemas de proporcionalidad de manera rápida y sencilla.",
        ],
    },
    {
        value5 : [
            "Regla de tres compuesta inversa:",
     
        ],
    },
    {
        value6 : [
            "Conclución :",
            "El porcentaje se usa ampliamente en diversos contextos, como en estadísticas, economía, finanzas, y para calcular descuentos en compras, tasas de interés, entre otros.",
        ],
    },
] ;
const introPorcentajeArray = [];
//--------------Intro----------------
const introPorcentaje = {
    defImg: "../assets/porcentaje_img.svg",
    defTitulo: "introducción",

    defPorcentajeTitulo: "Qué es porcentaje ?",
    defPorcentaje: "Es la forma de expresar un número como una fracción tiene como denominador el número 100, conocido, como tanto por ciento. ",
    defPorcentaje2Titulo: "Regla de tres",
    defPorcentaje2: "La regla de tres es una forma de resolver problemas de proporcionalidad entre tres valores conocidos y una incógnita. En ella se establece una relación de linealidad, proporcionalidad, entre los valores involucrados.",

    defNotaTitulo: "Directa o Inversa",
    defNota: "La relación de proporcionalidad puede ser directa o inversa. Será directa cuando a un mayor valor de A habrá un mayor valor de B, y será inversa cuando a un mayor valor de A corresponda un menor valor de B.",
    defGuiaTitulo: "Forma de uso :",
    defGuia: "Con el botón de <span>Más..</span> mostrará calculadoras y ejemplos de diferentes casos de la regla de tres,<br>Con el botón <span>Menú</span> regresarás al menú principal."
};
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
    definicion: "on",
    radios: "Descuento",
    id: "calcular_descuento",
    titleFig: "Instrucciones",
    imgFig: "../assets/calculadora_descuento.png",
    secMid: "sectionPCmiddleDesc",
    winPos: "winPosDesc",
    // mesCont : "mesDivDisc",
    mesParr: "messageDiscount",

    titlePorcentaje: "Porcentaje y Descuento",
    formulaPorcentaje: "Calculadora",
    inputPorcentaje: [
        {
            inputLabel: "Precio ",
            inputId: "winPrecio"
        },
        {
            inputLabel: "Descuento",
            inputId: "winDescuento"
        }
    ],
    resultClPC: "resultPCDESC",
    btnClPC: "btnResultPCDESC",
    btn2ClPC: "btnClearPCDESC",
    funcionPorcentaje: "pcDescuento",
    clearWindow: "clearSCD"
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
introPorcentajeArray.push(introPorcentaje);
introPorcentajeArray.push(RD3SDICalculadoraObj);
introPorcentajeArray.push(RD3CDIMCalculadoraObj);
introPorcentajeArray.push(RD3SDescCalculadoraObj);
introPorcentajeArray.push(RD3SimpleDirectaObj);
introPorcentajeArray.push(RD3SimpleInversaObj);
introPorcentajeArray.push(RD3CompuestaDirectaObj);
introPorcentajeArray.push(RD3CompuestaInversaObj);
introPorcentajeArray.push(RD3CompuestaMixtaObj);
introPorcentajeArray.push(RD3DescuentoObj);

