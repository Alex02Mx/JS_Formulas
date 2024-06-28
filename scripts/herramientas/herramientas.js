//==============================  variables y constantes ==================================
const body = document.querySelector(".body");
const blurC = document.querySelector(".blurC");
const menuMobile = document.querySelector("#moblilCont");
const topL = document.querySelector("#top");
const middleL = document.querySelector("#middle");
const bottomL = document.querySelector("#bottom");
const listIndex = document.querySelector(".listIndex");
const aMenu = document.querySelector(".aMenu");
const textMenu = document.querySelector(".textMenu");
const calcText = document.querySelector(".calcText");
const calcDesktop = document.querySelector(".calcDesktop");
const contactText = document.querySelector(".contactText");
const contDesktop = document.querySelector(".contDesktop");
const containerElement = document.querySelector(".containerElement");
const containerIntro = document.createElement("section");
const containerResponsive = document.createElement("section");
const titlesIndexText = document.querySelector(".titlesIndexText");
const email = document.querySelectorAll(".email");
const seleccion = document.querySelectorAll(".seleccion");
const socMedDesktop = document.querySelector(".socMedDesktop");
const socMedMainCont =  document.querySelector(".socMedMainCont");

let idFigVr;
let winMessHerr;
let pResultHerrWin1;
let pResultHerrWin2;
let pResultHerrWin3;
let pInputWin1;
let pInputWin2;
let btnClearCalc;
let btnResultCalc;


//===============================  asignacion de valores ==================================
socMedDesktop.innerHTML = socialMedImg;
socMedMainCont.append(socialMedCont);
//====================================  Escuchadores ======================================
blurC.addEventListener("click", blurFnc);
menuMobile.addEventListener("click", showHideCalc);
aMenu.addEventListener("click", menuPrinc);
textMenu.addEventListener("click", menuPrinc);
calcText.addEventListener("click", showHideCalc);
contactText.addEventListener("click", showHideCalc);
//=======================================  Ciclos =========================================
email.forEach((itemClass) => {
    itemClass.addEventListener("click", dispContactanos);
});
seleccion.forEach(element => {
    element.addEventListener("click", selecFnc);
});
//================================  funciones anonimas ====================================
const formato = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    let arr = number.toString().split('.');
    arr[0] = arr[0].replace(exp,rep);
    return arr[1] ? arr.join('.'): arr[0];
};
//=====================================  funciones ========================================
// --- opacar pantalla ---
function blurFnc(){
    listIndex.classList.remove("listIndexShow");
    blurC.classList.add("off");
    body.classList.remove("noMove");
};
function showHideCalc(event){
    if(event.srcElement.innerHTML == "Calculadoras"){
        calcDesktop.classList.toggle("calcDesktopShow");
        if(calcDesktop.classList.contains("calcDesktopShow")){
            contDesktop.classList.remove("contDesktopShow");
            abrirOpc();
        }
        else{
            cerrarOpc();
        }
    }
    else if(event.srcElement.innerHTML == "Contáctanos"){
        contDesktop.classList.toggle("contDesktopShow");
        if(contDesktop.classList.contains("contDesktopShow")){
            calcDesktop.classList.remove("calcDesktopShow");
            abrirOpc();
        }
        else{
            cerrarOpc();
        }
    }
    else{
        listIndex.classList.toggle("listIndexShow");
        if(listIndex.classList.contains("listIndexShow")){
            contDesktop.classList.remove("contDesktopShow");
            calcDesktop.classList.add("calcDesktopShow");
            abrirOpc();
        }
        else{
            contDesktop.classList.remove("contDesktopShow");
            calcDesktop.classList.remove("calcDesktopShow");
            cerrarOpc();
        }
    }
};
function abrirOpc(){
    listIndex.classList.add("listIndexShow");
    body.classList.add("noMove");
    blurC.classList.remove("off");
    topL.classList.add("cross2");
    middleL.classList.add("cross");
    bottomL.classList.add("cross3");
    listIndex.scrollTop = 0;
}
function cerrarOpc(){
    listIndex.classList.remove("listIndexShow");
    body.classList.remove("noMove");
    blurC.classList.add("off");
    topL.classList.remove("cross2");
    middleL.classList.remove("cross");
    bottomL.classList.remove("cross3");
};
// --- Retornar a menu principal ---
function menuPrinc(){
    blurFnc();
    setTimeout(menuPrincFnc, 600);
};
function menuPrincFnc(){
    // location.href="../../index.html";
    location.href="/JS_Formulas/index.html";
};
// --- Selección ---
function selecFnc(event){
    listIndex.classList.remove("listIndexShow");
    const target = event.target.innerText.toLowerCase();
    const figura = target.replaceAll(" ","_");
    const figSelect = herramientasArray.find(obj => obj.idDb === figura);
    if(figSelect){
        renderFigura(figSelect);
    }else{
        renderIntroduccion();
    };
    blurFnc();
}
function dispContactanos(){
    listIndex.classList.remove("listIndexShow");
    blurFnc();
    cleanCont();
    containerElement.append(emailForm());

    winEmail = document.querySelector("#inputEmail");
    winNombre = document.querySelector("#inputName");
    winDescripcion = document.querySelector("#labelTexArea");

    const btnBorrar = document.querySelector(".btnBorrar");
    btnBorrar.addEventListener("click", dataClear);
    btnSubmit = document.querySelector(".btnSubmit");
    btnSubmit.addEventListener("click", dataSend);
}
// --- Funciones renderizado ---
function renderIntroduccion(){
    cleanCont();
    titlesIndexText.innerText = "Herramientas";
    containerElement.appendChild(containerIntro);
    containerIntro.classList.add("containerIntro");

    intro.forEach((value, index) => {
        const valueLength = value["value" + index].length;
        const defTitulo = document.createElement("p");
        const selectionCont = document.createElement("div");

        defTitulo.classList.add("tituloIntro");
        defTitulo.innerText = value["value" + index][0];
        selectionCont.classList.add("defParrafo");
        selectionCont.append(defTitulo);

        for(let i=1; i<valueLength; i++){
            const defSelection = document.createElement("P");
            defSelection.classList.add("defIntro");
            defSelection.innerHTML = value["value"+ index][i];
            selectionCont.append(defSelection);
        };
        containerIntro.append(selectionCont);
    });
    document.documentElement.scrollTop = 0;
};
function renderFigura(objeto){
    cleanCont();
    titlesIndexText.innerText = "Herramientas";
    // --- id del objeto en proceso ---
    idFigVr = objeto["idDb"];

    // --- ciclo de repeticion del objeto ---
    objeto["datosDb"].forEach((obj, index) => {
        // --- variable del singular o plural y variable de area o perimetro --- 
        mensajeSigPlurVr = obj["mensajeSigPlurDb"];
        indEstadisticaVr = obj["titleFigDb"];
        // --- asigna valor de funcion para la logica del objeto en proceso ---
        let funcionFgra = "funcion" + (index + 1) + "Fn";
        window[funcionFgra] = obj["logicaDb"];
        // --- bloque 1 ---
        // --- titulo procedimiento ---
        const titleFigCn = document.createElement("h2");
        titleFigCn.classList.add("titleFigCl");
        titleFigCn.innerHTML = obj["titleFigDb"];
        // --- imagen procedimiento ---
        const imgFiguraCn = document.createElement("img");
        imgFiguraCn.setAttribute("src", obj["imgFiguraDb"]);
        // --- contenedor del titulo y la imagen ---
        const tituloImgCn = document.createElement("div");
        tituloImgCn.classList.add("tituloImgCl");
        tituloImgCn.append(titleFigCn, imgFiguraCn);
        // --- contenedor BG del cont/titulo/imagen ---
        const tituloImgContCn = document.createElement("div");
        tituloImgContCn.classList.add("tituloImgContCl");
        tituloImgContCn.append(tituloImgCn);

        // --- bloque 2 ---
        // --- titulo Calculadora ---
        const calcTitleCn = document.createElement("h2");
        calcTitleCn.classList.add("calcTitleCl");
        calcTitleCn.innerHTML = obj["titleDb"];
        // --- subtitulo Calculadora ---
        const calSubTitleCn = document.createElement("p");
        calSubTitleCn.classList.add("calSubTitleCl");
        calSubTitleCn.innerHTML = "Calculadora";
        // --- contenedor de titulo y subtitulo calculadora ---
        const secTopCalcCn = document.createElement("section");
        secTopCalcCn.classList.add("secTopCalcCl");
        secTopCalcCn.append(calcTitleCn, calSubTitleCn);

        // --- window mensaje ---
        const labelArea = document.createElement("p");
        labelArea.classList.add("outputMessage");

        // --- window mens. y textArea container ---
        const divEntryWin = document.createElement("div");
        divEntryWin.classList.add("EntryWin");
        divEntryWin.append(labelArea);

        // --- div middle top ---
        const divTopMiddleCalc = document.createElement("div");
        divTopMiddleCalc.classList.add("divTopMiddleCalc");
        divTopMiddleCalc.append(divEntryWin);

        const divBottomMiddleCalc = document.createElement("div");
        divBottomMiddleCalc.classList.add("divBottomMiddleCalc");

        obj["windowHI"].forEach(winInput => {
            const labelW = document.createElement("label");
            labelW.setAttribute("for", winInput["idWin"])
            labelW.innerHTML = winInput["labelWin"];

            const inputWin = document.createElement("input");
            inputWin.setAttribute("type", "number");
            inputWin.setAttribute("id", winInput["idWin"]);
            inputWin.classList.add(winInput["classWin"]);

            const divContLW = document.createElement("div");
            divContLW.classList.add("divContLW");
            divContLW.append(labelW, inputWin);
            divTopMiddleCalc.append(divContLW);
        });

        const secMiddleCalcCn = document.createElement("section");
        secMiddleCalcCn.classList.add("secMiddleCalcCl");
        secMiddleCalcCn.append(divTopMiddleCalc, divBottomMiddleCalc);
        const divContInfo = document.createElement("div");

        // --- windows Areas ---
        obj["windowHM"].forEach(winInput => {
            const labelResultCn = document.createElement("p");
            labelResultCn.innerHTML = winInput["titleW"];
            const winResultCn = document.createElement("p");
            winResultCn.classList.add(winInput["resultHerr"]);
            const divContLabWin = document.createElement("div");
            divContLabWin.classList.add("contLabRes");
            divContLabWin.append(labelResultCn, winResultCn);
            divBottomMiddleCalc.append(divContLabWin);
        });
   
        // --- Boton Borrar ---
        const btnClearCn = document.createElement("button");
        btnClearCn.classList.add("btnClearCl", obj["btnClearDb"]);
        btnClearCn.innerHTML = "Borrar";
        // --- Boton Resultado ---
        const btnResultCn = document.createElement("button");
        btnResultCn.classList.add("btnResultCl", obj["btnResultDb"]);
        btnResultCn.innerHTML = "Resultado";

        const secBottomCalcCn = document.createElement("section");
        secBottomCalcCn.classList.add("secBottomCalcCl");
        secBottomCalcCn.append(btnClearCn, btnResultCn);

        // --- Agregando a containerFiguras ---
        const calCn = document.createElement("div");
        calCn.classList.add("calCl");
        calCn.append(secTopCalcCn, secMiddleCalcCn, secBottomCalcCn);

        const CalcContCn = document.createElement("div");
        CalcContCn.classList.add("CalcContCl");
        CalcContCn.appendChild(calCn);

        containerResponsive.classList.add("containerResponsive");
        containerResponsive.append(tituloImgContCn, CalcContCn);
        containerElement.append(containerResponsive);
    });
    asignacionesWindows();
    asignacionMensajes();
    asignacionBtns();
    funcion1Fn = objeto["logicaDb"];
    document.documentElement.scrollTop = 0;
};
// --- Limpieza de div ---
function cleanCont(){
    containerElement.innerHTML = "";
    containerIntro.innerHTML = "";
    containerResponsive.innerHTML = "";
};
function disableOptions(){
    if(idFigVr == "regla_50-30-20"){
        pInputWin1.disabled = true;
        pInputWin1.classList.remove("resultColor");
        pResultHerrWin1.classList.add("resultColor");
        pResultHerrWin2.classList.add("resultColor");
        pResultHerrWin3.classList.add("resultColor");
    }else if(idFigVr == "capacidad_endeudamiento"){
        pInputWin1.disabled = true;
        pInputWin2.disabled = true;
        pInputWin1.classList.remove("resultColor");
        pInputWin2.classList.remove("resultColor");
        pResultHerrWin1.classList.add("resultColor");
    }
    // enableBtnResult();
}
function asignacionesWindows(){
    winMessHerr = document.querySelector(".outputMessage")
    if(idFigVr == "regla_50-30-20"){
        pInputWin1 = document.getElementById("sueldoNI");
        pResultHerrWin1 = document.querySelector(".resultHerrNecBas");
        pResultHerrWin2 = document.querySelector(".resultHerrGasPer");
        pResultHerrWin3 = document.querySelector(".resultHerrAhoInv");
    }
    else if(idFigVr == "capacidad_endeudamiento"){
        pInputWin1 = document.getElementById("ingresoTI");
        pInputWin2 = document.getElementById("gastosFI");
        pResultHerrWin1 = document.querySelector(".resultHerrCapEnd");
    };
};
function asignacionMensajes(){
    if(idFigVr == "regla_50-30-20"){
        mensajeInsertarValores();
    }
    else if(idFigVr == "capacidad_endeudamiento"){
        mensajeInsertarValoresCE();
    }
};
function asignacionBtns(){
    btnClearCalc = document.querySelector(".btnClearCalcCl");
    btnClearCalc.addEventListener("click", clearValCalc );
    btnResultCalc = document.querySelector(".btnResultCalcCl");
    btnResultCalc.addEventListener("click", window[funcion1Fn]);
};
// --- funciones de mensajes ---
function mensajeInsertarValores(){
    winMessHerr.innerHTML = "Introduce Sueldo Neto<br>para aplicar la regla";
};
function mensajeResultadoExitosoRegla(){
    winMessHerr.innerHTML = "Calculación de Regla 50-30-20<br>con éxito";
};
function mensajeSoloNum(){
    winMessHerr.innerHTML = "Solo números mayores<br>a 0 son permitidos";
};
// --- ---
function mensajeInsertarValoresCE(){
    winMessHerr.innerHTML = "Introduce Ingresos Totales<br>y Gastos Fijos";
};
function mensajeResultadoExitosoCE(){
    labelArea.innerHTML = "Calculación de Capacidad de<br>Endeudamiento con éxito";
};
// --- habilitar y deshabilitar boton de resultado ---
function disableBtnResult(){
    btnResultCalc.disabled = false;
    btnResultCalc.classList.remove("btnInactive");
    btnResultCalc.classList.add("btnResultCl");
};
function enableBtnResult(){ 
    btnResultCalc.disabled = true;
    btnResultCalc.classList.remove("btnResultCl");
    btnResultCalc.classList.add("btnInactive");
};
// --- borrado de valores de calculadora ---
function clearValCalc(){
    pInputWin1.setAttribute("type", "number");
    pInputWin1.value = "";
    pInputWin1.classList.add("resultColor");
    pInputWin1.disabled = false;

    // disableBtnResult();

    if(idFigVr == "regla_50-30-20"){
        pResultHerrWin1.innerHTML = "";
        pResultHerrWin1.classList.remove("resultColor");
        pResultHerrWin2.innerHTML = "";
        pResultHerrWin2.classList.remove("resultColor");
        pResultHerrWin3.innerHTML = "";
        pResultHerrWin3.classList.remove("resultColor");
        mensajeInsertarValores();
    }
    else if(idFigVr == "capacidad_endeudamiento"){
        pInputWin2.value = "";
        pInputWin2.classList.add("resultColor");
        pInputWin2.disabled = false;
        
        pResultHerrWin1.innerHTML = "";
        pResultHerrWin1.classList.remove("resultColor");
        mensajeInsertarValoresCE();
    };
};


function figurasFnc(){
    listIndex.scrollTop = 0;
    listIndex.classList.toggle("listIndexShow");
    blurC.classList.toggle("off");
    body.classList.toggle("noMove");
}


// function borrar(){
//     sectionHerramiddle.innerHTML = "";
//     labelArea.innerHTML = "";
//     pResultSuelNet.value = "";
//     pResultSuelNet.disabled = false;
//     pResultSuelNet.classList.remove("resultColor");
//     pResultIngTot.value = "";
//     pResultIngTot.disabled = false;
//     pResultIngTot.classList.remove("resultColor");
//     pResultGasFij.value = "";
//     pResultGasFij.disabled = false;
//     pResultGasFij.classList.remove("resultColor");
//     contSectHerrBottom.innerHTML = "";
//     btnResultHerr.classList.remove(btnResultHerrReg);
//     btnClearHerr.classList.remove(btnClearHerrReg);
//     btnResultHerr.disabled = false;
//     btnResultHerr.classList.remove("btnInactive");
//     containerHerramienta.innerHTML = "";
//     divCalculadora.innerHTML = "";
//     pTitlesHerramienta.classList.remove("titleImg");
// }
//--- funciones para deshabilitar ventanas y botones de Area y Perimetro-----------------
// function disableOptions(){
//     if(varId == "regla_50-30-20_cal"){
//         pResultSuelNet.disabled = true;
//         pResultSuelNet.classList.add("resultColor");
//         winNesBas.classList.remove("resultColor");
//         winGasPer.classList.remove("resultColor");
//         winAhoInv.classList.remove("resultColor");
//     }else if(varId == "endeudamiento_cal"){
//         pResultIngTot.disabled = true;
//         pResultIngTot.classList.add("resultColor");
//         pResultGasFij.disabled = true;
//         pResultGasFij.classList.add("resultColor");
//         winCapEnd.classList.remove("resultColor");
//     };
//     btnResultHerr.disabled = true;
//     btnResultHerr.classList.remove("btnResult");
//     btnResultHerr.classList.add("btnInactive");
// }
//--- funciones para limpiar y habilitar radios ventanas y botones ----------------------
// function clearHerrOpt(){
//     habilitarIntercambiar();
//     labelArea.innerHTML = "";
//     if(varId == "regla_50-30-20_cal"){
//         mensajeInsertarValores();
//         pResultSuelNet.setAttribute("type", "number");
//         pResultSuelNet.disabled = false;
//         pResultSuelNet.value = "";
//         pResultSuelNet.classList.remove("resultColor");
//         winNesBas.innerHTML = ""; 
//         winGasPer.innerHTML = ""; 
//         winAhoInv.innerHTML = ""; 
//         winNesBas.classList.add("resultColor");
//         winGasPer.classList.add("resultColor");
//         winAhoInv.classList.add("resultColor");
//     }
//     else if(varId == "endeudamiento_cal"){
//         mensajeInsertarValoresCE();
//         pResultIngTot.setAttribute("type", "number");
//         pResultIngTot.disabled = false;
//         pResultIngTot.value = "";
//         pResultIngTot.classList.remove("resultColor");
//         pResultGasFij.setAttribute("type", "number");
//         pResultGasFij.disabled = false;
//         pResultGasFij.value = "";
//         pResultGasFij.classList.remove("resultColor");
//         winCapEnd.innerHTML = ""; 
//         winCapEnd.classList.add("resultColor");
//     };
//     pTitlesHerramienta.classList.remove("titleImg");
// };
function habilitarIntercambiar(){
    btnResultHerr.disabled = false;
    btnResultHerr.classList.remove("btnInactive");
    btnResultHerr.classList.add("btnResult");
};
//----Funcion asignaciones --------------------------------------------------------------
// function asignacionesWindows(){
//     if(varId == "regla_50-30-20_cal"){
//         winNesBas = document.querySelector(".resultHerrNecBas");
//         winGasPer = document.querySelector(".resultHerrGasPer");
//         winAhoInv = document.querySelector(".resultHerrAhoInv");
//     }
//     else if(varId == "endeudamiento_cal"){
//         winCapEnd = document.querySelector(".resultHerrCapEnd");
//     };
// };



//--- funciones calculadoras ---
function regla503020Fc(){
    if(pInputWin1.value > 0){
        // --- Obteniendo datos de ventana de entrada  ---
        const infoWinSN = Number(pInputWin1.value);
        // --- resultados ---
        const necBas = infoWinSN * 50 / 100;
        const gasPer = infoWinSN * 30 / 100;
        const ahoInv = infoWinSN * 20 / 100;
        // --- impresion --- 
        pInputWin1.removeAttribute("type", "number");
        pInputWin1.value = formato(infoWinSN.toFixed(2));
        pResultHerrWin1.innerHTML = formato(necBas.toFixed(2));
        pResultHerrWin2.innerHTML = formato(gasPer.toFixed(2));
        pResultHerrWin3.innerHTML = formato(ahoInv.toFixed(2));
        disableOptions();
        mensajeResultadoExitosoRegla();
    }else{
            mensajeSoloNum();
    };
};
function endeudamientoFc(){
    if(pResultIngTot.value > 0 && pResultGasFij.value > 0){
        // --- Obteniendo datos de ventana de entrada  ---
        const infoWinIT = Number(pResultIngTot.value);
        const infoWinGF = Number(pResultGasFij.value);
        // --- resultados ---
        const opRest = infoWinIT - infoWinGF;
        const opMult = opRest * 0.35;
        // --- impresion --- 
        pResultIngTot.removeAttribute("type", "number");
        pResultIngTot.value = formato(infoWinIT.toFixed(2));
        pResultGasFij.removeAttribute("type", "number");
        pResultGasFij.value = formato(infoWinGF.toFixed(2));
        winCapEnd.innerHTML = formato(opMult.toFixed(2));
        disableOptions();
        mensajeResultadoExitosoCE();
    }else{
            mensajeSoloNum();
    };
};

renderIntroduccion();

