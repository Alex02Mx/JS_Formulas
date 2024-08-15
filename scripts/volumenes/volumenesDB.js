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
            mensajeSigPlurDb: "s",
            titleFigDb: "Cubo",
            imgFiguraDb: "../assets2/cubo.png",

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
                    outputLabelDb: "Diag. Base",
                    outputIdDb: "winDiagBaseCuboCl"
                },
                {
                    outputLabelDb: "Área lateral",
                    outputIdDb: "winAreaLateralCuboCl"
                },
                {
                    outputLabelDb: "Área base",
                    outputIdDb: "winAreaBaseCuboCl"
                },
                {
                    outputLabelDb: "Área total",
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
            mensajeSigPlurDb: "s",
            titleFigDb: "Esfera",
            imgFiguraDb: "../assets2/esfera.png",

            titleDb: "Esfera",

            grupoDb: "grupoAreaVolumen",
            inputRadCmDb: "radAreaVolCmId",
            inputRadMtDb: "radAreaVolMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida radio",
                    inputIdDb: "winEsferaRadioId"
                },
            ],
            outputDb: [
                {
                    outputLabelDb: "Diametro",
                    outputIdDb: "winDiametroEsferaCl"
                },
                {
                    outputLabelDb: "Perímetro",
                    outputIdDb: "winPerometroEsferaCl"
                },
                {
                    outputLabelDb: "Área total",
                    outputIdDb: "winAreaTotalEsferaCl"
                },
                {
                    outputLabelDb: "Volumen",
                    outputIdDb: "winVolumenEsferaCl"
                },
                {
                    outputLabelDb: "V. Semi Circ.",
                    outputIdDb: "winVolumenSemiCircEsferaCl"
                },
            ],
            winResMensDb: "winMensAreaVolCl",
            btnClearDb: "btnClearAreaVolCl",
            btnResultDb: "btnResultAreaVolCl",
            logicaDb: "esferaFn",
        },
    ]
};
const cilindroObj = {
    idDb: "cilindro",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Cilindro",
            imgFiguraDb: "../assets2/cilindro.png",

            titleDb: "Cilindro",

            grupoDb: "grupoAreaVolumen",
            inputRadCmDb: "radAreaVolCmId",
            inputRadMtDb: "radAreaVolMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida radio",
                    inputIdDb: "winCilindroRadioId"
                },
                {
                    inputLabelDb: "Medida altura",
                    inputIdDb: "winCilindroAlturaId"
                },
            ],
            outputDb: [
                {
                    outputLabelDb: "Diametro",
                    outputIdDb: "winDiametroCilindroCl"
                },
                {
                    outputLabelDb: "Área lateral",
                    outputIdDb: "winAreaLateralCilindroCl"
                },
                {
                    outputLabelDb: "Área base",
                    outputIdDb: "winAreaBaseCilindroCl"
                },
                {
                    outputLabelDb: "Área total",
                    outputIdDb: "winAreaTotalCilindroCl"
                },
                {
                    outputLabelDb: "Volumen",
                    outputIdDb: "winVolumenCilindroCl"
                },
            ],
            winResMensDb: "winMensAreaVolCl",
            btnClearDb: "btnClearAreaVolCl",
            btnResultDb: "btnResultAreaVolCl",
            logicaDb: "cilindroFn",
        },
    ]
};
const conoObj = {
    idDb: "cono",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Cono",
            imgFiguraDb: "../assets2/cono.png",

            titleDb: "Cono",

            grupoDb: "grupoAreaVolumen",
            inputRadCmDb: "radAreaVolCmId",
            inputRadMtDb: "radAreaVolMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida radio",
                    inputIdDb: "winConoRadioId"
                },
                {
                    inputLabelDb: "Medida altura",
                    inputIdDb: "winConoAlturaId"
                },
            ],
            outputDb: [
                {
                    outputLabelDb: "Generatriz",
                    outputIdDb: "winGeneratrizConoCl"
                },
                {
                    outputLabelDb: "Área lateral",
                    outputIdDb: "winAreaLateralConoCl"
                },
                {
                    outputLabelDb: "Área base",
                    outputIdDb: "winAreaBaseConoCl"
                },
                {
                    outputLabelDb: "Área total",
                    outputIdDb: "winAreaTotalConoCl"
                },
                {
                    outputLabelDb: "Volumen",
                    outputIdDb: "winVolumenConoCl"
                },
            ],
            winResMensDb: "winMensAreaVolCl",
            btnClearDb: "btnClearAreaVolCl",
            btnResultDb: "btnResultAreaVolCl",
            logicaDb: "conoFn",
        },
    ]
};

const pTriEquObj = {
    idDb : "triangular_equilatero",
    datosDb : [
        {
            mensajeSigPlurDb: "s",
            titleFigDb: "Triangular Equilatero",
            imgFiguraDb: "../assets2/piramide_regular_triangular_equilatero.png",

            titleDb: "Triangular Equilatero",

            grupoDb: "grupoAreaVolumen",
            inputRadCmDb: "radAreaVolCmId",
            inputRadMtDb: "radAreaVolMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lado",
                    inputIdDb: "winLadoPirTriEquId"
                },
            ],
            outputDb: [
                {
                    outputLabelDb: "Altura",
                    outputIdDb: "winAltPirTriEquCl"
                },
                {
                    outputLabelDb: "Ap. Piramide",
                    outputIdDb: "winApoPirTriEquCl"
                },
                {
                    outputLabelDb: "Ap. Base",
                    outputIdDb: "winApoBasPirTriEquCl"
                },
                {
                    outputLabelDb: "Área total",
                    outputIdDb: "winAreaTotPirTriEquCl"
                },
                {
                    outputLabelDb: "Volumen",
                    outputIdDb: "winVolPirTriEquCl"
                },
            ],
            winResMensDb: "winMensAreaVolCl",
            btnClearDb: "btnClearAreaVolCl",
            btnResultDb: "btnResultAreaVolCl",
            logicaDb: "pTriEquFn",
        },
    ]
};
const pCuadEquObj = {
    idDb: "cuadrangular_equilatero",
    datosDb : [
        {
            mensajeSigPlurDb: "s",
            titleFigDb: "Cuadrangular Equilatero",
            imgFiguraDb: "../assets2/piramide_regular_cuadrangular_equilatero.png",

            titleDb: "Cuadrangular Equilatero",

            grupoDb: "grupoAreaVolumen",
            inputRadCmDb: "radAreaVolCmId",
            inputRadMtDb: "radAreaVolMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lado",
                    inputIdDb: "winLadoPirCuadrEquId"
                },
            ],
            outputDb: [
                {
                    outputLabelDb: "Altura",
                    outputIdDb: "winAltPirCuadrEquCl"
                },
                {
                    outputLabelDb: "Ap. Piramide",
                    outputIdDb: "winApoPirCuadrEquCl"
                },
                {
                    outputLabelDb: "Ap. Base",
                    outputIdDb: "winApoBasPirCuadrEquCl"
                },
                {
                    outputLabelDb: "Área total",
                    outputIdDb: "winAreaTotPirCuadrEquCl"
                },
                {
                    outputLabelDb: "Volumen",
                    outputIdDb: "winVolPirCuadrEquCl"
                },
            ],
            winResMensDb: "winMensAreaVolCl",
            btnClearDb: "btnClearAreaVolCl",
            btnResultDb: "btnResultAreaVolCl",
            logicaDb: "pCuadrEquFn",
        },
    ]
};
const pPentEquObj = {
    idDb: "pentagonal_equilatero",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Pentagonal Equilatero",
            imgFiguraDb: "../assets2/piramide_regular_pentagonal_equilatero.png",

            titleDb: "Pentagonal Equilatero",

            grupoDb: "grupoAreaVolumen",
            inputRadCmDb: "radAreaVolCmId",
            inputRadMtDb: "radAreaVolMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lado",
                    inputIdDb: "winLadoPirPentEquId"
                },
            ],
            outputDb: [
                {
                    outputLabelDb: "Altura",
                    outputIdDb: "winAltPirPentEquCl"
                },
                {
                    outputLabelDb: "Ap. Piramide",
                    outputIdDb: "winApoPirPentEquCl"
                },
                {
                    outputLabelDb: "Ap. Base",
                    outputIdDb: "winApoBasPirPentEquCl"
                },
                {
                    outputLabelDb: "Área total",
                    outputIdDb: "winAreaTotPirPentEquCl"
                },
                {
                    outputLabelDb: "Volumen",
                    outputIdDb: "winVolPirPentEquCl"
                },
            ],
            winResMensDb: "winMensAreaVolCl",
            btnClearDb: "btnClearAreaVolCl",
            btnResultDb: "btnResultAreaVolCl",
            logicaDb: "pPentEquFn",
        },
    ]
};

const pTriIsoscObj = {
    idDb : "triangular_isosceles",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Triangular Isosceles",
            imgFiguraDb: "../assets2/piramide_regular_triangular_isosceles.png",

            titleDb: "Triangular Isosceles",

            grupoDb: "grupoAreaVolumen",
            inputRadCmDb: "radAreaVolCmId",
            inputRadMtDb: "radAreaVolMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lado",
                    inputIdDb: "winLadoPirTriIsoscId"
                },
                {
                    inputLabelDb: "Medida altura",
                    inputIdDb: "winAltPirTriIsoscId"
                },
            ],
            outputDb: [
                {
                    outputLabelDb: "Ap. Lateral",
                    outputIdDb: "winApoLateralTriIsoscCl"
                },
                {
                    outputLabelDb: "Área lateral",
                    outputIdDb: "winAreaLateralPirTriIsoscCl"
                },
                {
                    outputLabelDb: "Área Base",
                    outputIdDb: "winAreaBasePirTriIsoscCl"
                },
                {
                    outputLabelDb: "Área total",
                    outputIdDb: "winAreaTotPirTriIsoscCl"
                },
                {
                    outputLabelDb: "Volumen",
                    outputIdDb: "winVolPirTriEquCl"
                },
            ],
            winResMensDb: "winMensAreaVolCl",
            btnClearDb: "btnClearAreaVolCl",
            btnResultDb: "btnResultAreaVolCl",
            logicaDb: "pTriIsoscFn",
        },
    ]
};
const pCuadIsoscObj = {
    idDb: "cuadrangular_isosceles",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Cuadrangular Isosceles",
            imgFiguraDb: "../assets2/piramide_regular_cuadrangular_isosceles.png",

            titleDb: "Cuadrangular Isosceles",

            grupoDb: "grupoAreaVolumen",
            inputRadCmDb: "radAreaVolCmId",
            inputRadMtDb: "radAreaVolMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lado",
                    inputIdDb: "winLadoPirCuadrIsoscId"
                },
                {
                    inputLabelDb: "Medida altura",
                    inputIdDb: "winAlturaPirCuadrIsoscId"
                },
            ],
            outputDb: [
                {
                    outputLabelDb: "Altura",
                    outputIdDb: "winAltPirCuadrIsoscCl"
                },
                {
                    outputLabelDb: "Ap. Piramide",
                    outputIdDb: "winApoPirCuadrIsoscCl"
                },
                {
                    outputLabelDb: "Ap. Base",
                    outputIdDb: "winApoBasPirCuadrIsoscCl"
                },
                {
                    outputLabelDb: "Área total",
                    outputIdDb: "winAreaTotPirCuadrIsoscCl"
                },
                {
                    outputLabelDb: "Volumen",
                    outputIdDb: "winVolPirCuadrIsoscCl"
                },
            ],
            winResMensDb: "winMensAreaVolCl",
            btnClearDb: "btnClearAreaVolCl",
            btnResultDb: "btnResultAreaVolCl",
            logicaDb: "pCuadrIsoscFn",
        },
    ]
};
const pPentIsoscObj = {
    idDb: "pentagonal_isosceles",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Pentagonal Isosceles",
            imgFiguraDb: "../assets2/piramide_regular_pentagonal_isosceles.png",

            titleDb: "Pentagonal Isosceles",

            grupoDb: "grupoAreaVolumen",
            inputRadCmDb: "radAreaVolCmId",
            inputRadMtDb: "radAreaVolMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lado",
                    inputIdDb: "winLadoPirPentIsoscId"
                },
                {
                    inputLabelDb: "Medida altura",
                    inputIdDb: "winAlturaPirPentIsoscId"
                },
            ],
            outputDb: [
                {
                    outputLabelDb: "Altura",
                    outputIdDb: "winAltPirPentIsoscCl"
                },
                {
                    outputLabelDb: "Ap. Piramide",
                    outputIdDb: "winApoPirPentIsoscCl"
                },
                {
                    outputLabelDb: "Ap. Base",
                    outputIdDb: "winApoBasPirPentIsoscCl"
                },
                {
                    outputLabelDb: "Área total",
                    outputIdDb: "winAreaTotPirPentIsoscCl"
                },
                {
                    outputLabelDb: "Volumen",
                    outputIdDb: "winVolPirPentIsoscCl"
                },
            ],
            winResMensDb: "winMensAreaVolCl",
            btnClearDb: "btnClearAreaVolCl",
            btnResultDb: "btnResultAreaVolCl",
            logicaDb: "pPentIsoscFn",
        },
    ]
};
const pHextIsoscObj = {
    idDb: "hexagonal_isosceles",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Hexagonal Isosceles",
            imgFiguraDb: "../assets2/piramide_regular_hexagonal_isosceles.png",

            titleDb: "Hexagonal Isosceles",

            grupoDb: "grupoAreaVolumen",
            inputRadCmDb: "radAreaVolCmId",
            inputRadMtDb: "radAreaVolMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lado",
                    inputIdDb: "winLadoPirPentIsoscId"
                },
                {
                    inputLabelDb: "Medida altura",
                    inputIdDb: "winAlturaPirPentIsoscId"
                },
            ],
            outputDb: [
                {
                    outputLabelDb: "Altura",
                    outputIdDb: "winAltPirPentIsoscCl"
                },
                {
                    outputLabelDb: "Ap. Piramide",
                    outputIdDb: "winApoPirPentIsoscCl"
                },
                {
                    outputLabelDb: "Ap. Base",
                    outputIdDb: "winApoBasPirPentIsoscCl"
                },
                {
                    outputLabelDb: "Área total",
                    outputIdDb: "winAreaTotPirPentIsoscCl"
                },
                {
                    outputLabelDb: "Volumen",
                    outputIdDb: "winVolPirPentIsoscCl"
                },
            ],
            winResMensDb: "winMensAreaVolCl",
            btnClearDb: "btnClearAreaVolCl",
            btnResultDb: "btnResultAreaVolCl",
            logicaDb: "pHexIsoscFn",
        },
    ]
};

const prisTriObj = {
    idDb : "triangular",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Prisma Triangular",
            imgFiguraDb: "../assets2/prisma_regular_triangular.png",

            titleDb: "Prisma Triangular",

            grupoDb: "grupoAreaVolumen",
            inputRadCmDb: "radAreaVolCmId",
            inputRadMtDb: "radAreaVolMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lado",
                    inputIdDb: "winLadoPirTriIsoscId"
                },
                {
                    inputLabelDb: "Medida altura",
                    inputIdDb: "winAltPirTriIsoscId"
                },
            ],
            outputDb: [
                {
                    outputLabelDb: "Altura base",
                    outputIdDb: "winAltPirTriIsoscCl"
                },
                {
                    outputLabelDb: "Área lateral",
                    outputIdDb: "winApoPirTriIsoscCl"
                },
                {
                    outputLabelDb: "Área base",
                    outputIdDb: "winApoBasPirTriIsoscCl"
                },
                {
                    outputLabelDb: "Área total",
                    outputIdDb: "winAreaTotPirTriIsoscCl"
                },
                {
                    outputLabelDb: "Volumen",
                    outputIdDb: "winVolPirTriEquCl"
                },
            ],
            winResMensDb: "winMensAreaVolCl",
            btnClearDb: "btnClearAreaVolCl",
            btnResultDb: "btnResultAreaVolCl",
            logicaDb: "pTriIsoscFn",
        },
    ]
};
const prisCuadObj = {
    idDb: "cuadrangular",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            sizeDb : "lg",
            titleFigDb: "Prisma Cuadrangular",
            imgFiguraDb: "../assets2/prisma_regular_cuadrangular.png",

            titleDb: "Prisma Cuadrangular",

            grupoDb: "grupoAreaVolumen",
            inputRadCmDb: "radAreaVolCmId",
            inputRadMtDb: "radAreaVolMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lado",
                    inputIdDb: "winLadoPirCuadrIsoscId"
                },
                {
                    inputLabelDb: "Medida altura",
                    inputIdDb: "winAlturaPirCuadrIsoscId"
                },
            ],
            outputDb: [
                {
                    outputLabelDb: "Ap. Base",
                    outputIdDb: "winAltPirCuadrIsoscCl"
                },
                {
                    outputLabelDb: "Área lateral",
                    outputIdDb: "winApoPirCuadrIsoscCl"
                },
                {
                    outputLabelDb: "Área base",
                    outputIdDb: "winApoBasPirCuadrIsoscCl"
                },
                {
                    outputLabelDb: "Área total",
                    outputIdDb: "winAreaTotPirCuadrIsoscCl"
                },
                {
                    outputLabelDb: "Volumen",
                    outputIdDb: "winVolPirCuadrIsoscCl"
                },
            ],
            winResMensDb: "winMensAreaVolCl",
            btnClearDb: "btnClearAreaVolCl",
            btnResultDb: "btnResultAreaVolCl",
            logicaDb: "pCuadrIsoscFn",
        },
    ]
};
const prisPentObj = {
    idDb: "pentagonal",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Prisma Pentagonal",
            imgFiguraDb: "../assets2/prisma_regular_pentagonal.png",

            titleDb: "Prisma Pentagonal",

            grupoDb: "grupoAreaVolumen",
            inputRadCmDb: "radAreaVolCmId",
            inputRadMtDb: "radAreaVolMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lado",
                    inputIdDb: "winLadoPirPentIsoscId"
                },
                {
                    inputLabelDb: "Medida altura",
                    inputIdDb: "winAlturaPirPentIsoscId"
                },
            ],
            outputDb: [
                {
                    outputLabelDb: "Ap. Base",
                    outputIdDb: "winAltPirPentIsoscCl"
                },
                {
                    outputLabelDb: "Área lateral",
                    outputIdDb: "winApoPirPentIsoscCl"
                },
                {
                    outputLabelDb: "Área base",
                    outputIdDb: "winApoBasPirPentIsoscCl"
                },
                {
                    outputLabelDb: "Área total",
                    outputIdDb: "winAreaTotPirPentIsoscCl"
                },
                {
                    outputLabelDb: "Volumen",
                    outputIdDb: "winVolPirPentIsoscCl"
                },
            ],
            winResMensDb: "winMensAreaVolCl",
            btnClearDb: "btnClearAreaVolCl",
            btnResultDb: "btnResultAreaVolCl",
            logicaDb: "pPentIsoscFn",
        },
    ]
};
const prisHexObj = {
    idDb: "hexagonal",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Prisma Hexagonal",
            imgFiguraDb: "../assets2/prisma_regular_hexagonal.png",

            titleDb: "Prisma Hexagonal",

            grupoDb: "grupoAreaVolumen",
            inputRadCmDb: "radAreaVolCmId",
            inputRadMtDb: "radAreaVolMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lado",
                    inputIdDb: "winLadoPirPentIsoscId"
                },
                {
                    inputLabelDb: "Medida altura",
                    inputIdDb: "winAlturaPirPentIsoscId"
                },
            ],
            outputDb: [
                {
                    outputLabelDb: "Ap. Base",
                    outputIdDb: "winAltPirPentIsoscCl"
                },
                {
                    outputLabelDb: "Área lateral",
                    outputIdDb: "winApoPirPentIsoscCl"
                },
                {
                    outputLabelDb: "Área base",
                    outputIdDb: "winApoBasPirPentIsoscCl"
                },
                {
                    outputLabelDb: "Área total",
                    outputIdDb: "winAreaTotPirPentIsoscCl"
                },
                {
                    outputLabelDb: "Volumen",
                    outputIdDb: "winVolPirPentIsoscCl"
                },
            ],
            winResMensDb: "winMensAreaVolCl",
            btnClearDb: "btnClearAreaVolCl",
            btnResultDb: "btnResultAreaVolCl",
            logicaDb: "pHexIsoscFn",
        },
    ]
};
// --- Guardado de objetos de valores al array ---
volumenesArray.push(cuboObj);
volumenesArray.push(esferaObj);
volumenesArray.push(cilindroObj);
volumenesArray.push(conoObj);

volumenesArray.push(pTriEquObj);
volumenesArray.push(pCuadEquObj);
volumenesArray.push(pPentEquObj);

volumenesArray.push(pTriIsoscObj);
volumenesArray.push(pCuadIsoscObj);
volumenesArray.push(pPentIsoscObj);
volumenesArray.push(pHextIsoscObj);

volumenesArray.push(prisTriObj);
volumenesArray.push(prisCuadObj);
volumenesArray.push(prisPentObj);
volumenesArray.push(prisHexObj);



