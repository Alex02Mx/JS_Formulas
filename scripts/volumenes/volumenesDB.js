// --- array de valores volumenes ---
const intro = [
    {
        value0 : [
            "Qué es el Volumen ?",
            "El volumen de una figura geométrica es una medida cuantitativa del espacio tridimensional que ocupa dicha figura. Es una magnitud escalar que se expresa en unidades cúbicas, tales como centímetros cúbicos (cm³), metros cúbicos (m³), litros (L), entre otros.A diferencia del área, que mide el espacio en dos dimensiones, el volumen mide el espacio en tres dimensiones.",
        ],
    },
    {
        value1 : [
            "Características:",
            "<span class='formulaSpan'>Espacio Ocupado:</span><br>El volumen indica la cantidad de espacio que una figura ocupa dentro de un contenedor tridimensional imaginario.",
            "<span class='formulaSpan'>Unidades de Medida:</span><br>Se expresa en unidades cúbicas, debido a que abarca tres dimensiones (largo, ancho y alto).",
            "<span class='formulaSpan'>Cálculo Según su Forma:</span><br>Las fórmulas para calcular el volumen varían según la forma de la figura geométrica.",
        ],
    },
    {
        value2 : [
            "",
            "<span class='formulaSpan'>Aplicaciones Prácticas:</span><br>El cálculo del volumen es fundamental en diversas disciplinas como la arquitectura, ingeniería, física y química. Por ejemplo, en la construcción para determinar la cantidad de materiales necesarios, en la química para medir la capacidad de contenedores, y en la física para determinar la densidad de un objeto.",
            "<span class='formulaSpan'>Concepto Físico:</span><br>El volumen también se relaciona con otros conceptos físicos como la masa y la densidad. La densidad (p) de un objeto se define como su masa (m) dividida por su volumen (v)",
            "<span class='formulaSpan'>Geometría y Matemáticas:</span><br>En el ámbito matemático, el estudio del volumen involucra el uso de integrales y funciones, especialmente cuando se trata de figuras con formas irregulares.",
        ],
    },
    {
        value3 : [
            "Conclución :",
            "El volumen es una propiedad fundamental que ayuda a describir y entender mejor el mundo tridimensional que nos rodea, facilitando la comprensión y el manejo de objetos y espacios en diversas áreas de conocimiento y aplicaciones prácticas.",
        ],
    },
] ;
// --- Array de figuras geometricas y valores ---
const volumenesArray = [];
// --- Objetos con los Valores de figuras Geometricas ---
const cuboObj = {
    idDb: "cubo",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Cubo",
            imgFiguraDb: "https://i.ibb.co/JRgKNwy/triangulo-equilatero-area.png",

            titleDb: "Volumen Cubo",

            grupoDb: "grupoArea",
            inputRadCmDb: "radAreaCmId",
            inputRadMtDb: "radAreaMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida base",
                    inputIdDb: "winAreaTriEquBaseId"
                },
                {
                    inputLabelDb: "Medida altura",
                    inputIdDb: "winAreaTriEquAltId"
                },
            ],
            winResMensDb: "winResMensAreaCl",
            btnClearDb: "btnClearAreaCl",
            btnResultDb: "btnResultAreaCl",
            logicaDb: "aTriangleFn",
        },
    ]
};
const prismaRectangularObj = {
    idDb: "prisma_rectangular",
    datosDb : [
        {
            mensajeSigPlurDb: "s",
            titleFigDb: "Prisma Rectangular",
            imgFiguraDb: "https://i.ibb.co/cDP4f9q/cuadrado-area.png",

            titleDb: "Volumen Prisma",

            grupoDb: "grupoArea",
            inputRadCmDb: "radAreaCmId",
            inputRadMtDb: "radAreaMtId",

            inputDb: [
                {
                    inputLabelDb:  "Medida lado",
                    inputIdDb: "winAreaSqr"
                },
            ],
            winResMensDb: "winResMensAreaCl",
            btnClearDb: "btnClearAreaCl",
            btnResultDb: "btnResultAreaCl",
            logicaDb: "aSquareFn",
        },
    ]
};
const cilindroObj = {
    idDb: "cilindro",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Cilindro",
            imgFiguraDb: "https://i.ibb.co/qN25cKp/rectangulo-area.png",

            titleDb: "Volumen Cilindro",

            grupoDb: "grupoArea",
            inputRadCmDb: "radAreaCmId",
            inputRadMtDb: "radAreaMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida base",
                    inputIdDb: "winAreaRecBaseId"
                },
                {
                    inputLabelDb: "Medida altura",
                    inputIdDb: "winAreaRecAltId"
                },
            ],
            winResMensDb: "winResMensAreaCl",
            btnClearDb: "btnClearAreaCl",
            btnResultDb: "btnResultAreaCl",
            logicaDb: "aRectanguloFn",
        },
    ]
};
const esferaObj = {
    idDb: "esfera",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Esfera",
            imgFiguraDb: "https://i.ibb.co/vQtP9ZK/paralelogramo-area.png",

            titleDb: "Volumen Esfera",

            grupoDb: "grupoArea",
            inputRadCmDb: "radAreaCmId",
            inputRadMtDb: "radAreaMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida base",
                    inputIdDb: "winAreaParalBaseId"
                },
                {
                    inputLabelDb: "Medida altura",
                    inputIdDb: "winAreaParalAltId"
                },
            ],
            winResMensDb: "winResMensAreaCl",
            btnClearDb: "btnClearAreaCl",
            btnResultDb: "btnResultAreaCl",
            logicaDb: "aParalelogramoFn",
        },
    ]
};
const conoObj = {
    idDb: "cono",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Cono",
            imgFiguraDb: "https://i.ibb.co/HYNrKh1/trapecio-area.png",

            titleDb: "Volumen Cono",

            grupoDb: "grupoArea",
            inputRadCmDb: "radAreaCmId",
            inputRadMtDb: "radAreaMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida de B",
                    inputIdDb: "winAreaTrapBaseMayId"
                },
                {
                    inputLabelDb: "Medida de b",
                    inputIdDb: "winAreaTrapBaseMenId"
                },
                {
                    inputLabelDb: "Medida de h",
                    inputIdDb: "winAreaTrapAltId"
                },
            ],
            winResMensDb: "winResMensAreaCl",
            btnClearDb: "btnClearAreaCl",
            btnResultDb: "btnResultAreaCl",
            logicaDb: "aTrapecioFn",
        },
    ]
};
// --- Guardado de objetos de valores al array ---
volumenesArray.push(cuboObj);
volumenesArray.push(prismaRectangularObj);
volumenesArray.push(cilindroObj);
volumenesArray.push(esferaObj);
volumenesArray.push(conoObj);


