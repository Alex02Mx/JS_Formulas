// --- definicion herramientas ---
const intro = [
    {
        value0 : [
            "Herramientas de Administración Financiera",
            "La estadística es una rama de las matemáticas que se encarga de recolectar, analizar, interpretar, presentar y organizar datos. Es una disciplina fundamental para una amplia gama de áreas, desde la ciencia y la ingeniería hasta las ciencias sociales y la medicina.",
            ],
    },
    {
        value1 : [
            "En resumen",
            "Una herramienta de administración financiera es una solución integral que ayuda a las empresas y personas a manejar sus recursos financieros de manera más efectiva.",
        ],
    },
] ;
// --- Array herramientas ---
const herramientasArray = [];
// -- Calculadoras --
const regla503020Obj = {
    // definicion: "on",
    idDb: "Regla 50-30-20",
    datosDb : [
        {
            mensajeSigPlurDb: "p", 
            titleFigDb: "Regla 50-30-20",
            imgFiguraDb: "../assets/503020_cal.png",

            titleDb: "Regla 50-30-20",

            windowMM: [
                {
                    titleW: "Necesidades Bas. $",
                    resultHerr: "resultHerrNecBas",
                },
                {
                    titleW: "Gastos Personales $",
                    resultHerr: "resultHerrGasPer",
                },
                {
                    titleW: "Ahorro Inversión $",
                    resultHerr: "resultHerrAhoInv",
                }
            ],
            winMainInputDb: "winMainInputDb",
            btnClearDb: "btnClearCalcCl",
            btnResultDb: "btnResultCalcCl",
            logicaDb: "herr503020Fc",
        }
    ],
};
// const capDeEndeudObj = {
//     definicion: "on",
//     id: "endeudamiento_cal",
//     titleHerr: "Instrucciones",
//     imgHerr: "../assets/endeudamiento_cal.png",

//     titleHerr2: "Endeudamiento",
//     titleHerrSub: "Calculadora",
//     titleLabIT: "Ingresos Totales $",
//     resultIT: "resultHerrIngTot",
//     titleLabGF: "Gastos Fijos $",
//     resultGF: "resultHerrGasFij",
//     windowHerr: [
//         {
//             titleW: "Endeudamiento $",
//             resultHerr: "resultHerrCapEnd",
//         }
//     ],
//     btnClHerr: "btnResultHerr",
//     btn2ClHerr: "btnClearHerr",
//     funcionHerr: "herrCapEnd",
//     clearWindowHerr: "clearHerrOpt",
// };
// --- Calculadoras ---
herramientasArray.push(regla503020Obj);
// herramientasArray.push(capDeEndeudObj);






