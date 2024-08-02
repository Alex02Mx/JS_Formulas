// --- array de valores volumenes ---
const intro = [
    {
        value0 : [
            "Qué es el Área total ?",
            "El área total de un sólido se refiere a la suma de las áreas de todas las superficies que componen ese sólido. En otras palabras, es la medida de la superficie externa total del objeto. Dependiendo de la forma del sólido, el cálculo del área total puede variar:",
        ],
    },
    {
        value1 : [
            "Características:",
            "<span class='formulaSpan'>Cubo:</span><br>El área total de un cubo es la suma de las áreas de sus seis caras cuadradas.",
            "<span class='formulaSpan'>Cilindro:</span><br>El área total de un cilindro incluye las áreas de las dos bases circulares y el área de la superficie lateral.",
            "<span class='formulaSpan'>Cono:</span><br>El área total de un cono incluye el área de la base circular y el área de la superficie lateral. ",
        ],
    },
    {
        value2 : [
            "",
            "<span class='formulaSpan'>Aplicaciones prácticas:</span><br>El cálculo del área total de un sólido tiene muchas aplicaciones prácticas en diversas disciplinas y actividades. Algunas de estas aplicaciones incluyen:",
            "<span class='formulaSpan'>Diseño y Construcción:</span><br>Los ingenieros y arquitectos utilizan el área total para calcular la cantidad de materiales necesarios para construir una estructura, como la cantidad de pintura, revestimientos o recubrimientos.",
            "<span class='formulaSpan'>Resistencia de Materiales:</span><br>Conocer el área superficial ayuda a evaluar la resistencia y durabilidad de los materiales frente a factores como la corrosión y el desgaste.",
            "<span class='formulaSpan'>Transferencia de Calor:</span><br>En estudios de transferencia de calor, el área superficial total de un objeto influye en la cantidad de calor que puede ser transferido hacia o desde el objeto.",
            "<span class='formulaSpan'>Reacciones Químicas:</span><br>En química y biotecnología, la superficie de los sólidos afecta la velocidad de las reacciones químicas y la eficiencia de los catalizadores.",
        ],
    },
    {
        value3 : [
            "Qué es el Volumen ?",
            "El volumen de una figura geométrica es una medida cuantitativa del espacio tridimensional que ocupa dicha figura. Es una magnitud escalar que se expresa en unidades cúbicas, tales como centímetros cúbicos (cm³), metros cúbicos (m³), litros (L), entre otros.A diferencia del área, que mide el espacio en dos dimensiones, el volumen mide el espacio en tres dimensiones.",
        ],
    },
    {
        value4 : [
            "Características:",
            "<span class='formulaSpan'>Espacio Ocupado:</span><br>El volumen indica la cantidad de espacio que una figura ocupa dentro de un contenedor tridimensional imaginario.",
            "<span class='formulaSpan'>Unidades de Medida:</span><br>Se expresa en unidades cúbicas, debido a que abarca tres dimensiones (largo, ancho y alto).",
            "<span class='formulaSpan'>Cálculo Según su Forma:</span><br>Las fórmulas para calcular el volumen varían según la forma de la figura geométrica.",
        ],
    },
    {
        value5 : [
            "",
            "<span class='formulaSpan'>Aplicaciones Prácticas:</span><br>El cálculo del volumen es fundamental en diversas disciplinas como la arquitectura, ingeniería, física y química. Por ejemplo, en la construcción para determinar la cantidad de materiales necesarios, en la química para medir la capacidad de contenedores, y en la física para determinar la densidad de un objeto.",
            "<span class='formulaSpan'>Concepto Físico:</span><br>El volumen también se relaciona con otros conceptos físicos como la masa y la densidad. La densidad (p) de un objeto se define como su masa (m) dividida por su volumen (v)",
            "<span class='formulaSpan'>Geometría y Matemáticas:</span><br>En el ámbito matemático, el estudio del volumen involucra el uso de integrales y funciones, especialmente cuando se trata de figuras con formas irregulares.",
        ],
    },
    {
        value6 : [
            "Conclución :",
            "El cálculo del área total de un sólido es una herramienta fundamental en múltiples campos, ayudando a optimizar recursos, mejorar diseños y garantizar la eficiencia y seguridad en diversas aplicaciones prácticas.<br>",
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
            imgFiguraDb: "../../assets2/cubo.png",

            titleDb: "Cubo",

            grupoDb: "grupoAreaVolumen",
            inputRadCmDb: "radAreaVolCmId",
            inputRadMtDb: "radAreaVolMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lado",
                    inputIdDb: "winCuboLadoId"
                },
            ],
            outputDb: [
                {
                    outputLabelDb: "Área Total",
                    outputIdDb: "winAreaTotalCuboCl"
                },
                {
                    outputLabelDb: "Volumen",
                    outputIdDb: "winVolumenCuboCl"
                },
            ],
            winResMensDb: "winMensAreaVolCl",
            btnClearDb: "btnClearAreaVolCl",
            btnResultDb: "btnResultAreaVolCl",
            logicaDb: "cuboFn",
        },
    ]
};
const esferaObj = {
    idDb: "esfera",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Esfera",
            imgFiguraDb: "../../assets2/esfera.png",

            titleDb: "Volumen Esfera",

            grupoDb: "grupoArea",
            inputRadCmDb: "radAreaCmId",
            inputRadMtDb: "radAreaMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida radio",
                    inputIdDb: "winAreaParalBaseId"
                },
            ],
            winResMensDb: "winResMensAreaCl",
            btnClearDb: "btnClearAreaCl",
            btnResultDb: "btnResultAreaCl",
            logicaDb: "aParalelogramoFn",
        },
    ]
};
const cilindroObj = {
    idDb: "cilindro",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Cilindro",
            imgFiguraDb: "../../assets2/cilindro.png",

            titleDb: "Volumen Cilindro",

            grupoDb: "grupoArea",
            inputRadCmDb: "radAreaCmId",
            inputRadMtDb: "radAreaMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida radio",
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
const conoObj = {
    idDb: "cono",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Cono",
            imgFiguraDb: "../../assets2/cono.png",

            titleDb: "Volumen Cono",

            grupoDb: "grupoArea",
            inputRadCmDb: "radAreaCmId",
            inputRadMtDb: "radAreaMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida radio",
                    inputIdDb: "winAreaTrapBaseMayId"
                },
                {
                    inputLabelDb: "Medida altura",
                    inputIdDb: "winAreaTrapBaseMenId"
                },
            ],
            winResMensDb: "winResMensAreaCl",
            btnClearDb: "btnClearAreaCl",
            btnResultDb: "btnResultAreaCl",
            logicaDb: "aTrapecioFn",
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

// --- Guardado de objetos de valores al array ---
volumenesArray.push(cuboObj);
volumenesArray.push(esferaObj);
volumenesArray.push(cilindroObj);
volumenesArray.push(conoObj);
volumenesArray.push(prismaRectangularObj);


