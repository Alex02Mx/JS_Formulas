// --- definicion herramientas ---
const intro = [
    {
        value0 : [
            "La regla 50/30/20",
            "Es una guía financiera que sugiere dividir los ingresos mensuales netos en tres categorías para gestionar el presupuesto de manera efectiva. Aquí está el desglose:",
            "<span class='subTitleIntro'>50% Necesidades:</span><br>Esta categoría incluye los gastos esenciales que no se pueden evitar. Ejemplos son el alquiler o la hipoteca, los servicios públicos, el transporte, los comestibles, el seguro de salud y otros gastos necesarios para vivir.",
            "<span class='subTitleIntro'>30% Deseos:</span><br>Esta parte del presupuesto se destina a gastos no esenciales que mejoran la calidad de vida. Puede incluir salidas a comer, entretenimiento, viajes, compras y otros placeres personales.",
            "<span class='subTitleIntro'>20% Ahorros e Inversiones:</span><br>Esta categoría está destinada a fortalecer la salud financiera a largo plazo. Incluye ahorros para emergencias, aportaciones a la jubilación, pagos de deudas y cualquier otra inversión financiera.",
            "Aplicar esta regla puede ayudar a mantener un equilibrio financiero saludable y asegurar que se esté ahorrando e invirtiendo lo suficiente para el futuro mientras se disfrutan de algunos lujos en el presente."    
        ],
    },
    {
        value1 : [
            "Capacidad de endeudamiento :",
            "Se refiere a la capacidad máxima que una persona o una empresa tiene para adquirir deudas sin comprometer su estabilidad financiera. Esta regla se usa para evaluar cuánto endeudamiento es seguro y manejable según los ingresos y los gastos actuales.",
            "<span class='subTitleIntro'>Fórmula básica</span><br> CDE = Capacidad De Endeudamiento<br>IM = Ingreso Mensual<br>GF = Gastos Fijos<br>PMDE = Porc. Maximo de Endeudamiento",
            "<span class='formulaIntro'>CDE = ( IM - GF ) * PMDE</span>",
            "<span class='subTitleIntro'>Ingresos Brutos Mensuales:</span><br>Por lo general, se recomienda que el total de los pagos mensuales de deuda no exceda el 36% de los ingresos brutos mensuales. Este porcentaje incluye todas las deudas, como hipotecas, préstamos personales, pagos de automóviles, tarjetas de crédito, etc.",
            "<span class='subTitleIntro'>Ingresos Netos Mensuales:</span><br>En algunos casos, se usa el ingreso neto (después de impuestos) y se recomienda que los pagos mensuales de deuda no superen el 40% del ingreso neto mensual.",
            "En resumen, conocer tu capacidad de endeudamiento te ayuda a tomar decisiones financieras más informadas y a evitar la sobrecarga de deuda, manteniendo así una buena salud financiera."
        ],
    },
] ;
// --- Array herramientas ---
const herramientasArray = [];
// -- Calculadoras --
const regla503020Obj = {
    idDb: "regla_50-30-20",
    datosDb : [
        {
            mensajeSigPlurDb: "p", 
            titleFigDb: "Regla 50-30-20",
            imgFiguraDb: "../assets2/regla_503020_img.png",

            titleDb: "Regla 50-30-20",
            windowHI: [
                {
                    labelWin: "Sueldo Neto $",
                    idWin: "sueldoNI",
                    classWin: "winInp",
                }
            ],
            windowHM: [
                {
                    titleW: "Necesidades Basicas $",
                    resultHerr: "resultHerrNecBas",
                },
                {
                    titleW: "Gastos Personales $",
                    resultHerr: "resultHerrGasPer",
                },
                {
                    titleW: "Ahorro o Inversión $",
                    resultHerr: "resultHerrAhoInv",
                }
            ],
            winMainInputDb: "winMainInputDb",
            btnClearDb: "btnClearCalcCl",
            btnResultDb: "btnResultCalcCl",
            logicaDb: "regla503020Fc",
        }
    ],
};
const capEndeudamientoObj = {
        idDb: "capacidad_endeudamiento",
        datosDb : [
            {
                mensajeSigPlurDb: "p", 
                titleFigDb: "Capacidad Endeudamiento",
                imgFiguraDb: "../assets2/capacidad_endeudamiento_img.png",
    
                titleDb: "Capacidad Endeudamiento",
                windowHR: [
                    {
                        radioL: "Ingreso Bruto",
                        radioI: "radioBtoID",
                    },
                    {
                        radioL: "Ingreso Neto",
                        radioI: "radioNtoID",
                    },
                ],
                windowHI: [
                    {
                        labelWin: "Ingreso Total $",
                        idWin: "ingresoTI",
                        classWin: "winInp",
                    },
                    {
                        labelWin: "Gastos Fijos $",
                        idWin: "gastosFI",
                        classWin: "winInp",
                    }
                ],
                windowHM: [
                    {
                        titleW: "Endeudamiento $",
                        resultHerr: "resultHerrCapEnd",
                    }
                ],
                winMainInputDb: "winMainInputDb",
                btnClearDb: "btnClearCalcCl",
                btnResultDb: "btnResultCalcCl",
                logicaDb: "endeudamientoFc",
            }
        ],
};
// --- Calculadoras ---
herramientasArray.push(regla503020Obj);
herramientasArray.push(capEndeudamientoObj);






