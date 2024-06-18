// --- definicion estadistica ---
const intro = [
    {
        value0 : [
            "Qué es la Estadística ?",
            "La estadística es una rama de las matemáticas que se encarga de recolectar, analizar, interpretar, presentar y organizar datos. Es una disciplina fundamental para una amplia gama de áreas, desde la ciencia y la ingeniería hasta las ciencias sociales y la medicina.",
            ],
    },
    {
        value1 : [
            "Qué es la Media ?",
            "La media (también conocida como promedio) es el valor que se obtiene al sumar todos los números en un conjunto de datos y luego dividir esta suma por la cantidad de números en el conjunto. Es una medida muy sensible a los valores extremos (outliers).",
        ],
    },
    {
        value2 : [
            "Qué es la Mediana ?",
            "La mediana es el valor que se encuentra en el centro de un conjunto de datos cuando los datos están ordenados en orden ascendente o descendente. Si el número de valores es impar, la mediana es el valor central. Si el número de valores es par, la mediana es el promedio de los dos valores centrales.",
        ],
    },
    {
        value3 : [
            "Qué es la Moda ?",
            "La moda es una medida de tendencia central en estadística que representa el valor o valores que aparecen con mayor frecuencia en un conjunto de datos. A diferencia de la media y la mediana, la moda puede ser utilizada tanto para datos cuantitativos (números) como para datos cualitativos (categorías).",
            "Características de la Moda :",
            "1- Frecuencia :<br>La moda es el valor que tiene la mayor frecuencia en el conjunto de datos.",
            "2- Multimodalidad :<br>Un conjunto de datos puede tener más de una moda. Si tiene una sola moda, se llama unimodal. Si tiene dos modas, se llama bimodal. Si tiene más de dos modas, se llama multimodal.",
            "3- Afectación por Outliers :<br>La moda no se ve afectada por valores extremos (outliers).",
        ],
    },
    {
        value4 : [
            "Comparación :",
            "Media :<br>Es el promedio aritmético de los datos y puede estar influenciada por valores extremos.",
            "Mediana :<br>Es el valor central que divide los datos en dos mitades iguales y es menos afectada ",
            "Moda :<br>Es el valor más frecuente en los datos y no se ve afectada por valores extremos. Puede haber más de una moda en un conjunto de datos.",
        ],
    },
    {
        value5 : [
            "Que es el Rango ?",
            "Es una medida de dispersión que indica la diferencia entre el valor máximo y el valor mínimo en un conjunto de datos. Es una de las formas más simples de medir la variabilidad en los datos.",
            "En resumen, el rango es una medida útil para obtener una visión rápida de la extensión de los datos, pero para un análisis más detallado y robusto de la dispersión, es recomendable considerar otras medidas adicionales.",
        ],
    },
    {
        value6 : [
            "Desviación Media :",
            "También conocida como desviación absoluta media, es una medida de dispersión que indica el promedio de las desviaciones absolutas de los valores de un conjunto de datos respecto a su media aritmética. A diferencia de la varianza y la desviación estándar, que elevan al cuadrado las desviaciones antes de promediarlas, la desviación media utiliza el valor absoluto de las desviaciones, lo que la hace menos sensible a valores extremos.",
            "En resumen, la desviación media es una medida útil de la dispersión que proporciona una perspectiva clara de la variabilidad de los datos sin amplificar la influencia de los valores extremos.",
        ],
    },
] ;
// --- Array de estadistica ---
const estadisticaArray = [];

// -- Calculadoras --
const mediaMedianaObj = {
    // definicion: "on",
    idDb: "media_y_mediana",
    datosDb : [
        {
            mensajeSigPlurDb: "p", 
            titleFigDb: "Media y Mediana",
            imgFiguraDb: "../assets/calculadora_media_mediana.png",

            titleDb: "Media y Mediana",

            windowMM: [
                {
                    titleW: "Media",
                    resultEst: "resultEstMedia",
                },
                {
                    titleW: "Mediana",
                    resultEst: "resultEstMediana",
                },
            ],
            winMainInputDb: "winMainInputDb",
            btnClearDb: "btnClearCalcBottomCl",
            btnResultDb: "btnResultCalcBottomCl",
            logicaDb: "mediaMedianaFc",
        }
    ],


};
const modaCalObj = {
    definicion: "on",
    id: "moda_cal",
    titleMM: "Instrucciones",
    imgMM: "../assets/calculadora_moda.png",

    titleMM2: "Moda",
    titleMMSub: "Calculadora",
    windowMod: [
        {
            titleW: "Moda",
            resultEst: "resultEstModa",
        }
    ],
    btnClEst: "btnResultEst",
    btn2ClEst: "btnClearEst",
    funcionEst: "estModa",
    clearWindowEst: "clearEstOpt",
};
const rangoCalObj = {
    definicion: "on",
    id: "rango_cal",
    titleMM: "Instrucciones",
    imgMM: "../assets/calculadora_rango.png",

    titleMM2: "Rango",
    titleMMSub: "Calculadora",
    windowI: [
        {
            titleW: "Tamaño",
            resultEst: "resultEstTam",
        },
        {
            titleW: "Máximo",
            resultEst: "resultEstMax",
        },
        {
            titleW: "Mínimo",
            resultEst: "resultEstMin",
        }
    ],
    windowR: [
        {
            titleW: "Rango",
            resultEst: "resultEstRango",
        }
    ],
    btnClEst: "btnResultEst",
    btn2ClEst: "btnClearEst",
    funcionEst: "estRango",
    clearWindowEst: "clearEstOpt",
};
const desviacionMediaCalObj = {
    definicion: "on",
    id: "desviación_media_cal",
    titleMM: "Instrucciones",
    imgMM: "../assets/calculadora_desviacion_media.png",

    titleMM2: "Desviación Media",
    titleMMSub: "Calculadora",
    windowI: [
        {
            titleW: "Tamaño",
            resultEst: "resultEstTamDM",
        },
        {
            titleW: "Media",
            resultEst: "resultEstMedDM",
        }
    ],
    windowR: [
        {
            titleW: "Desv. Media",
            resultEst: "resultEstDM",
        }
    ],
    btnClEst: "btnResultEst",
    btn2ClEst: "btnClearEst",
    funcionEst: "estDesviacionMedia",
    clearWindowEst: "clearEstOpt",
};
// --- Calculadoras ---
estadisticaArray.push(mediaMedianaObj);
// estadisticaArray.push(modaCalObj);
// estadisticaArray.push(rangoCalObj);
// estadisticaArray.push(desviacionMediaCalObj);
