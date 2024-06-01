// --- array de valores definicion areas y perimetros ---
const intro = [
    {
        value0 : [
            "Qué es el Área ?",
            "El área de una figura geométrica es la medida de la superficie encerrada por dicha figura. Depende de la forma de la figura y se calcula de manera diferente para cada tipo de figura. Por ejemplo:",
            "El área de un rectángulo se calcula multiplicando su longitud por su anchura.",
            "El área de un círculo se calcula como π (pi) multiplicado por el radio al cuadrado.",
            "El área de un triángulo se calcula como la mitad del producto de la base por la altura.",
            "En resumen, el cálculo del área varía según la figura geométrica de la que estemos hablando.",
            ],
    },
    {
        value1 : [
            "Qué es el Perímetro ?",
            "El perímetro de una figura geométrica es la suma de las longitudes de todos sus lados. En otras palabras, es la medida de la longitud total del contorno de la figura.",
            "El perímetro de un rectángulo se calcula sumando dos veces su longitud y dos veces su anchura.",
            "El perímetro de un círculo se calcula como el producto de π (pi) por el diámetro.",
            "El perímetro de un triángulo se calcula sumando las longitudes de sus tres lados.",
            "Al igual que con el área, el cálculo del perímetro depende de la forma específica de la figura geométrica.",
        ],
    },
    {
        value2 : [
            "Conclución :",
            "El área y el perímetro son dos conceptos fundamentales en geometría que describen las propiedades de las figuras planas.",
            "Estos conceptos son esenciales para entender y calcular las propiedades de las formas geométricas en diversos campos, desde la matemática básica hasta la arquitectura y la ingeniería.",
            "Para determinar las áreas y perímetros de figuras, las fórmulas dependerán del tipo de figura y de las medidas correspondientes a cada una.",
        ],
    },
] ;
// --- Array de figuras geometricas y valores ---
const formulasArray = [];
// --- Objetos con los Valores de figuras Geometricas ---
const trianguloObj = {
    idDb: "triángulo",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Triángulo",
            imgFiguraDb: "../assets2/triangulo_equilatero_area.png",

            titleDb: "Área Triángulo",

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
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Triángulo",
            imgFiguraDb: "../assets2/triangulo_equilatero_perim.png",
            
            titleDb: "Perímetro Triángulo",

            grupoDb: "grupoPerim",
            inputRadCmDb: "radPerimCmId",
            inputRadMtDb: "radPerimMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lado 1",
                    inputIdDb: "winPerTriEquL1Id"
                },
                {
                    inputLabelDb: "Medida lado 2",
                    inputIdDb: "winPerTriEquL2Id"
                },
                {
                    inputLabelDb: "Medida lado 3",
                    inputIdDb: "winPerTriEquL3Id"
                },
            ],
            winResMensDb: "winResMensPerimCl",
            btnClearDb: "btnClearPerimCl",
            btnResultDb: "btnResultPerimCl",
            logicaDb: "pTriangleFn",
        }
    ]
};
const cuadradoObj = {
    idDb: "cuadrado",
    datosDb : [
        {
            mensajeSigPlurDb: "s",
            titleFigDb: "Cuadrado",
            imgFiguraDb: "../assets2/cuadrado_area.png",

            titleDb: "Área Cuadrado",

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
        {
            mensajeSigPlurDb: "s",
            titleFigDb: "Cuadrado",
            imgFiguraDb: "../assets2/cuadrado_perim.png",
            
            titleDb: "Perímetro Cuadrado",

            grupoDb: "grupoPerim",
            inputRadCmDb: "radPerimCmId",
            inputRadMtDb: "radPerimMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lado",
                    inputIdDb: "winPerimSqr"
                },
            ],
            winResMensDb: "winResMensPerimCl",
            btnClearDb: "btnClearPerimCl",
            btnResultDb: "btnResultPerimCl",
            logicaDb: "pSquareFn",
        }
    ]
};
const rectanguloObj = {
    idDb: "rectángulo",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Rectángulo",
            imgFiguraDb: "../assets2/rectangulo_area.png",

            titleDb: "Área Rectángulo",

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
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Rectángulo",
            imgFiguraDb: "../assets2/rectangulo_perimetro.png",
            
            titleDb: "Perímetro Rectángulo",

            grupoDb: "grupoPerim",
            inputRadCmDb: "radPerimCmId",
            inputRadMtDb: "radPerimMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida base",
                    inputIdDb: "winPerRecBaseId"
                },
                {
                    inputLabelDb: "Medida lado",
                    inputIdDb: "winPerRecLadoId"
                },
            ],
            winResMensDb: "winResMensPerimCl",
            btnClearDb: "btnClearPerimCl",
            btnResultDb: "btnResultPerimCl",
            logicaDb: "pRectanguloFn",
        }
    ]
};
const paralelogramoObj = {
    idDb: "paralelogramo",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Paralelogramo",
            imgFiguraDb: "../assets2/paralelogramo_area.png",

            titleDb: "Área Paralelogramo",

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
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Paralelogramo",
            imgFiguraDb: "../assets2/paralelogramo_perimetro.png",
            
            titleDb: "Perímetro Paralelogramo",

            grupoDb: "grupoPerim",
            inputRadCmDb: "radPerimCmId",
            inputRadMtDb: "radPerimMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida de base",
                    inputIdDb: "winPerParalBaseId"
                },
                {
                    inputLabelDb: "Medida lado",
                    inputIdDb: "winPerParalLadoId"
                },
            ],
            winResMensDb: "winResMensPerimCl",
            btnClearDb: "btnClearPerimCl",
            btnResultDb: "btnResultPerimCl",
            logicaDb: "pParalelogramoFn",
        }
    ]
};
const trapecioObj = {
    idDb: "trapecio",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Trapecio",
            imgFiguraDb: "../assets2/trapecio_area.png",

            titleDb: "Área Trapecio",

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
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Trapecio",
            imgFiguraDb: "../assets2/trapecio_perim.png",
            
            titleDb: "Perímetro Trapecio",

            grupoDb: "grupoPerim",
            inputRadCmDb: "radPerimCmId",
            inputRadMtDb: "radPerimMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida B",
                    inputIdDb: "winPerTrapBaseMayId"
                },
                {
                    inputLabelDb: "Medida b",
                    inputIdDb: "winPerTrapBaseMenId"
                },
                {
                    inputLabelDb: "Medida L1",
                    inputIdDb: "winPerTrapLado1Id"
                },
                {
                    inputLabelDb: "Medida L2",
                    inputIdDb: "winPerTrapLado2Id"
                },
            ],
            winResMensDb: "winResMensPerimCl",
            btnClearDb: "btnClearPerimCl",
            btnResultDb: "btnResultPerimCl",
            logicaDb: "pTrapecioFn",
        }
    ]
};
const romboObj = {
    idDb: "rombo",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Rombo",
            imgFiguraDb: "../assets2/rombo_area.png",

            titleDb: "Área Rombo",

            grupoDb: "grupoArea",
            inputRadCmDb: "radAreaCmId",
            inputRadMtDb: "radAreaMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida D",
                    inputIdDb: "winAreaRombDiaMayId"
                },
                {
                    inputLabelDb: "Medida d",
                    inputIdDb: "winAreaRombDiaMenId"
                },
            ],
            winResMensDb: "winResMensAreaCl",
            btnClearDb: "btnClearAreaCl",
            btnResultDb: "btnResultAreaCl",
            logicaDb: "aRomboFn",
        },
        {
            mensajeSigPlurDb: "s",
            titleFigDb: "Rombo",
            imgFiguraDb: "../assets2/rombo_perim.png",
            
            titleDb: "Perímetro Rombo",

            grupoDb: "grupoPerim",
            inputRadCmDb: "radPerimCmId",
            inputRadMtDb: "radPerimMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida L",
                    inputIdDb: "winPerRombLadoId"
                },
            ],
            winResMensDb: "winResMensPerimCl",
            btnClearDb: "btnClearPerimCl",
            btnResultDb: "btnResultPerimCl",
            logicaDb: "pRomboFn",
        }
    ]
};
const pentagonoObj = {
    idDb: "pentágono",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Pentágono",
            imgFiguraDb: "../assets2/pentagono_area.png",

            titleDb: "Área Pentágono",

            grupoDb: "grupoArea",
            inputRadCmDb: "radAreaCmId",
            inputRadMtDb: "radAreaMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida perímetro",
                    inputIdDb: "winAreaPentPerimId"
                },
                {
                    inputLabelDb: "Medida apotema",
                    inputIdDb: "winAreaPentApotemaId"
                },
            ],
            winResMensDb: "winResMensAreaCl",
            btnClearDb: "btnClearAreaCl",
            btnResultDb: "btnResultAreaCl",
            logicaDb: "aPentagonoFn",
        },
        {
            mensajeSigPlurDb: "s",
            titleFigDb: "Pentágono",
            imgFiguraDb:  "../assets2/pentagono_perim.png",
            
            titleDb: "Perímetro Pentágono",

            grupoDb: "grupoPerim",
            inputRadCmDb: "radPerimCmId",
            inputRadMtDb: "radPerimMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lado",
                    inputIdDb: "winPerPentLadoId"
                },
            ],
            winResMensDb: "winResMensPerimCl",
            btnClearDb: "btnClearPerimCl",
            btnResultDb: "btnResultPerimCl",
            logicaDb: "pPentagonoFn",
        }
    ]
};
const hexagonoObj = {
    idDb: "hexágono",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Hexágono",
            imgFiguraDb: "../assets2/hexagono_area.png",

            titleDb: "Área Hexágono",

            grupoDb: "grupoArea",
            inputRadCmDb: "radAreaCmId",
            inputRadMtDb: "radAreaMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida perímetro",
                    inputIdDb: "winAreaHexaPerimId"
                },
                {
                    inputLabelDb: "Medida apotema",
                    inputIdDb: "winAreaHexaApotemaId"
                },
            ],
            winResMensDb: "winResMensAreaCl",
            btnClearDb: "btnClearAreaCl",
            btnResultDb: "btnResultAreaCl",
            logicaDb: "aHexagonoFn",
        },
        {
            mensajeSigPlurDb: "s",
            titleFigDb: "Hexágono",
            imgFiguraDb:  "../assets2/hexagono_perim.png",
            
            titleDb: "Perímetro Hexágono",

            grupoDb: "grupoPerim",
            inputRadCmDb: "radPerimCmId",
            inputRadMtDb: "radPerimMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lado",
                    inputIdDb: "winPerHexLadoId"
                },
            ],
            winResMensDb: "winResMensPerimCl",
            btnClearDb: "btnClearPerimCl",
            btnResultDb: "btnResultPerimCl",
            logicaDb: "pHexagonoFn",
        }
    ]
};
const circuloObj = {
    idDb: "círculo",
    datosDb : [
        {
            mensajeSigPlurDb: "s",
            titleFigDb: "Círculo",
            imgFiguraDb: "../assets2/circulo_area.png",

            titleDb: "Área Círculo",

            grupoDb: "grupoArea",
            inputRadCmDb: "radAreaCmId",
            inputRadMtDb: "radAreaMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida radio",
                    inputIdDb: "winAreacirculoId"
                },
            ],
            winResMensDb: "winResMensAreaCl",
            btnClearDb: "btnClearAreaCl",
            btnResultDb: "btnResultAreaCl",
            logicaDb: "aCirculoFn",
        },
        {
            mensajeSigPlurDb: "s",
            titleFigDb: "Circunferencia",
            imgFiguraDb: "../assets2/circunferencia.png",
            
            titleDb: "Circunferencia",

            grupoDb: "grupoPerim",
            inputRadCmDb: "radPerimCmId",
            inputRadMtDb: "radPerimMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida radio",
                    inputIdDb: "winCircunferenciaId"
                },
            ],
            winResMensDb: "winResMensPerimCl",
            btnClearDb: "btnClearPerimCl",
            btnResultDb: "btnResultPerimCl",
            logicaDb: "circunferenciaFn",
        }
    ]
};
// --- Guardado de objetos de valores al array ---
formulasArray.push(trianguloObj);
formulasArray.push(cuadradoObj);
formulasArray.push(rectanguloObj);
formulasArray.push(paralelogramoObj);
formulasArray.push(trapecioObj);
formulasArray.push(romboObj);
formulasArray.push(pentagonoObj);
formulasArray.push(hexagonoObj);
formulasArray.push(circuloObj);

