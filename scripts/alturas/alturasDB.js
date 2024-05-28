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
    id: "triángulo_equilátero",
    mh: "s",
    titleFig: "Triángulo Equilátero",
    imgFig: "../assets/triangulo_equilatero_altura.png",

    titleAltura: "Altura Triángulo Equilátero",
    inputAltura: [
        {
            inputLabel: "Medida lado",
            inputId: "winHTriEquiSide"
        },
    ],
    resultClH: "resultHTriEqui",
    btnClH: "btnResultHTriEqui",
    btn2ClH: "btnClearHTriEqui",
    funcionAltura: "hTriangleEqui",
    clearWindowH: "clearHFig",
};
const trianguloIsoscelesObj = {
    id: "triángulo_isósceles",
    mh: "p",
    titleFig: "Triángulo Isósceles",
    imgFig: "../assets/triangulo_isosceles_altura.png",

    titleAltura: "Altura Triángulo Isósceles",
    inputAltura: [
        {
            inputLabel: "Medida lados iguales",
            inputId: "winHTriIsoSideEq"
        },
        {
            inputLabel: "Medida de base",
            inputId: "winHTriIsoBase"
        }
    ],
    resultClH: "resultHTriIso",
    btnClH: "btnResultHTriIso",
    btn2ClH: "btnClearHTriIso",
    funcionAltura: "hTriangleIso",
    clearWindowH: "clearHFig",
};
const trianguloEscalenoObj = {
    id: "triángulo_escaleno",
    mh: "p",
    titleFig: "Triángulo Escaleno",
    imgFig: "../assets/triangulo_escaleno_altura.png",

    titleAltura: "Atura Triángulo Escaleno",
    inputAltura: [
        {
            inputLabel: "Medida lado 1",
            inputId: "winHTriEscSide1"
        },
        {
            inputLabel: "Medida lado 2",
            inputId: "winHTriEscSide2"
        },
        {
            inputLabel: "Medida Base",
            inputId: "winHTriEscBase"
        }
    ],
    resultClH: "resultHTriEsc",
    btnClH: "btnResultHTriEsc",
    btn2ClH: "btnClearHTriEsc",
    funcionAltura: "hTriEsc",
    clearWindowH: "clearHFig",
};
const trapecioObj = {
    id: "trapecio",
    mh: "p",
    titleFig: "Trapecio",
    imgFig: "../assets/trapecio_altura.png",

    titleAltura: "Atura Trapecio",
    inputAltura: [
        {
            inputLabel: "Medida L",
            inputId: "winHTrapecioSide1"
        },
        {
            inputLabel: "Medida b",
            inputId: "winHTrapeciobase"
        },
        {
            inputLabel: "Medida Base",
            inputId: "winHTrapecioBase"
        }
    ],
    resultClH: "resultHTrapecio",
    btnClH: "btnResultHTrapecio",
    btn2ClH: "btnClearHTrapecio",
    funcionAltura: "hTrapecio",
    clearWindowH: "clearHFig",
};
// --- Guardado de objetos de valores al array ---
AlturasArray.push(trianguloEquilateroObj);
AlturasArray.push(trianguloIsoscelesObj);
AlturasArray.push(trianguloEscalenoObj);
AlturasArray.push(trapecioObj);


