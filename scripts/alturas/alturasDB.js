// --- array de valores definicion alturas ---
const intro = [
    {
        value0 : [
            "Qué es la Altura ?",
            "La altura de una figura geométrica se refiere a la medida de la distancia vertical desde la base de la figura hasta su punto más alto. La forma en que se define la altura puede variar dependiendo del tipo de figura:",
            "Triángulo: La altura de un triángulo es la distancia perpendicular desde una base hasta el vértice opuesto. Cada lado del triángulo puede servir como base, y la altura correspondiente es siempre perpendicular a esa base.",
            "Rectángulo: La altura de un rectángulo es la distancia entre dos lados opuestos que no son la base. Si consideramos uno de los lados más largos como la base, entonces la altura será la longitud de uno de los lados más cortos.",
            "Paralelogramo: Similar al rectángulo, la altura de un paralelogramo es la distancia perpendicular entre las bases opuestas.",
            "Trapezoide: En un trapezoide (trapecio), la altura es la distancia perpendicular entre las dos bases paralelas.",
            "Círculo: En el caso de figuras tridimensionales, como un cilindro, la altura es la distancia entre las dos bases circulares.",
        ],
    },
    {
        value1 : [
            "Qué es la base ?",
            "La base de una figura geométrica es uno de sus lados o superficies fundamentales sobre el cual se mide o se apoya la altura. La definición de la base puede variar dependiendo del tipo de figura geométrica",
        ],
    },
    {
        value2 : [
            "Conclución :",
            "En general, la altura es una medida crucial en muchos cálculos geométricos, como el área y el volumen. Es importante señalar que la altura siempre se mide de manera perpendicular a la base o a la línea sobre la que se proyecta la figura.",
        ],
    },
] ;
// --- Array de figuras geometricas y valores ---
const AlturasArray = [];
// --- Objetos con los Valores de figuras Geometricas ---
const trianguloEquilateroObj = {
    idDb: "triángulo_equilátero",
    datosDb : [
        {
            mensajeSigPlurDb: "s",
            titleFigDb: "Tríangulo Equilátero",
            imgFiguraDb: "../../assets2/triangulo_equilatero_altura.png",

            titleDb: "Altura Triángulo Equilátero",

            grupoDb: "grupoAltura",
            inputRadCmDb: "radAlturaCmId",
            inputRadMtDb: "radAlturaMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lado",
                    inputIdDb: "winHTriEquiSide"
                },
            ],
            winResMensDb: "winResMensAlturaCl",
            btnClearDb: "btnClearAlturaCl",
            btnResultDb: "btnResultAlturaCl",
            logicaDb: "hTriangleEqui",
        },
    ]
};
const trianguloIsoscelesObj = {
    idDb: "triángulo_isósceles",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Tríangulo Isósceles",
            imgFiguraDb: "../../assets2/triangulo_isosceles_altura.png",

            titleDb: "Altura Triángulo Isósceles",

            grupoDb: "grupoAltura",
            inputRadCmDb: "radAlturaCmId",
            inputRadMtDb: "radAlturaMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lados iguales",
                    inputIdDb: "winHTriIsoSideEq"
                },
                {
                    inputLabelDb: "Medida de base",
                    inputIdDb: "winHTriIsoBase"
                },
            ],
            winResMensDb: "winResMensAlturaCl",
            btnClearDb: "btnClearAlturaCl",
            btnResultDb: "btnResultAlturaCl",
            logicaDb: "hTriangleIso",
        },
    ]
};
const trianguloEscalenoObj = {
    idDb: "triángulo_escaleno",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Tríangulo Escaleno",
            imgFiguraDb: "../../assets2/triangulo_escaleno_altura.png",

            titleDb: "Atura Triángulo Escaleno",

            grupoDb: "grupoAltura",
            inputRadCmDb: "radAlturaCmId",
            inputRadMtDb: "radAlturaMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida lado 1",
                    inputIdDb: "winHTriEscSide1"
                },
                {
                    inputLabelDb: "Medida lado 2",
                    inputIdDb: "winHTriEscSide2"
                },
                {
                    inputLabelDb: "Medida Base",
                    inputIdDb: "winHTriEscBase"
                },
            ],
            winResMensDb: "winResMensAlturaCl",
            btnClearDb: "btnClearAlturaCl",
            btnResultDb: "btnResultAlturaCl",
            logicaDb: "hTriEsc",
        },
    ]
};
const trapecioObj = {
    idDb: "trapecio",
    datosDb : [
        {
            mensajeSigPlurDb: "p",
            titleFigDb: "Trapecio",
            imgFiguraDb: "../../assets2/trapecio_altura.png",

            titleDb: "Atura Trapecio",

            grupoDb: "grupoAltura",
            inputRadCmDb: "radAlturaCmId",
            inputRadMtDb: "radAlturaMtId",

            inputDb: [
                {
                    inputLabelDb: "Medida L",
                    inputIdDb: "winHTrapecioSide1"
                },
                {
                    inputLabelDb: "Medida b",
                    inputIdDb: "winHTrapeciobase"
                },
                {
                    inputLabelDb: "Medida Base",
                    inputIdDb: "winHTrapecioBase"
                },
            ],
            winResMensDb: "winResMensAlturaCl",
            btnClearDb: "btnClearAlturaCl",
            btnResultDb: "btnResultAlturaCl",
            logicaDb: "hTrapecio",
        },
    ]
};
// --- Guardado de objetos de valores al array ---
AlturasArray.push(trianguloEquilateroObj);
AlturasArray.push(trianguloIsoscelesObj);
AlturasArray.push(trianguloEscalenoObj);
AlturasArray.push(trapecioObj);


