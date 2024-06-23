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
let mensajeSigPlurVr;
let indAreaPerimVr;
let radAreaCmVr;
let radAreaMtVr;
let radPerimCmVr;
let radPerimMtVr;
let windowResultArea;
let windowResultPerim;
let btnClearArea;
let btnResultArea;
let btnClearPerim;
let btnResultPerim;
let winEmail;
let winNombre;
let winDescripcion;

var funcion1Fn;
var funcion2Fn;
var areaWin1Vr;
var areaWin2Vr;
var areaWin3Vr;
var perimWin1Vr;
var perimWin2Vr;
var perimWin3Vr;
var perimWin4Vr;
var btnSubmit;
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
    calcDesktop.classList.remove("calcDesktopShow");
    contDesktop.classList.remove("contDesktopShow");
    topL.classList.remove("cross2");
    middleL.classList.remove("cross");
    bottomL.classList.remove("cross3");
    body.classList.remove("noMove");
    blurC.classList.add("off");
};
// --- Mostrar, esconder, opacar, aclarar ---
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
};
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
    const figura = event.target.innerText.toLowerCase();

    const figSelect = formulasArray.find(obj => obj.idDb === figura);
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
    titlesIndexText.innerText = "Áreas y Perímetros";
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
    titlesIndexText.innerText = "Áreas y Perímetros";
    // --- id del objeto en proceso ---
    idFigVr = objeto["idDb"];
    // --- ciclo de repeticion del objeto ---

    objeto["datosDb"].forEach((obj, index) => {
        // --- variable del singular o plural y variable de area o perimetro --- 
        mensajeSigPlurVr = obj["mensajeSigPlurDb"];
        indAreaPerimVr = obj["titleFigDb"];
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
        const calcTitleCn = document.createElement("p");
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
        // --- Radios Areas y sus labels CM---
        const inputRadCmCn = document.createElement("input");
        inputRadCmCn.setAttribute("type", "radio");
        inputRadCmCn.setAttribute("name", obj["grupoDb"]);
        inputRadCmCn.setAttribute("id", obj["inputRadCmDb"]);
        const inputLabelCmCn = document.createElement("label");
        inputLabelCmCn.setAttribute("for", obj["inputRadCmDb"]);
        inputLabelCmCn.innerHTML = "centímetros";
        // --- Radios Areas y sus labels MT---
        const inputRadioMtCn = document.createElement("input");
        inputRadioMtCn.setAttribute("type", "radio");
        inputRadioMtCn.setAttribute("name", obj["grupoDb"]);
        inputRadioMtCn.setAttribute("id", obj["inputRadMtDb"]);
        const inputLabelMtCn = document.createElement("label");
        inputLabelMtCn.setAttribute("for", obj["inputRadMtDb"]);
        inputLabelMtCn.innerHTML = "metros";
        // --- Contenedor de radios y labels ---
        const radioLabelsContCn = document.createElement("div");
        radioLabelsContCn.classList.add("radioLabelsContCl");
        radioLabelsContCn.append(inputRadCmCn, inputLabelCmCn, inputRadioMtCn, inputLabelMtCn);

        const secMiddleCalcCn = document.createElement("section");
        secMiddleCalcCn.classList.add("secMiddleCalcCl");
        secMiddleCalcCn.appendChild(radioLabelsContCn);
        // --- windows Areas ---
        obj["inputDb"].forEach(winInput => {
            const labelWinInpCn = document.createElement("label");
            labelWinInpCn.setAttribute("for", winInput["inputIdDb"]);
            labelWinInpCn.innerHTML = winInput["inputLabelDb"];

            const inputWinCn = document.createElement("input");
            inputWinCn.setAttribute("type", "number");
            inputWinCn.setAttribute("id", winInput["inputIdDb"]);
            inputWinCn.classList.add("inputStyleCl");
            const windLabelContCn = document.createElement("div");

            windLabelContCn.classList.add("windLabelContCl");
            windLabelContCn.append(labelWinInpCn, inputWinCn);

            secMiddleCalcCn.appendChild(windLabelContCn);
        });
        // --- window resultados y mensajes ---
        const winResMensCn = document.createElement("p");
        winResMensCn.classList.add("winStyleCl", obj["winResMensDb"]);
        winResMensCn.innerText = introducirValMsgFn();
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
        secBottomCalcCn.append(winResMensCn, btnClearCn, btnResultCn);

        // --- Agregando a containerElement ---
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
    asignacionesRadios();
    asignacionesWindows(objeto);
    asignacionWinResult();
    asignacionBtns();
    document.documentElement.scrollTop = 0;
};
// --- Limpieza de div ---
function cleanCont(){
    containerElement.innerHTML = "";
    containerIntro.innerHTML = "";
    containerResponsive.innerHTML = "";
};
// -- funciones de asignacion ---
function asignacionesRadios(){
    radAreaCmVr = document.getElementById("radAreaCmId");
    radAreaMtVr = document.getElementById("radAreaMtId");
    radPerimCmVr = document.getElementById("radPerimCmId");
    radPerimMtVr = document.getElementById("radPerimMtId");
};
function asignacionesWindows(objeto){
    objeto["datosDb"].forEach((obj1, index1) => {
        obj1["inputDb"].forEach((obj2,index2) =>{
            let areaName = "areaWin" + (index2 + 1) + "Vr";
            let perimName = "perimWin" + (index2 + 1) + "Vr";
            let claseWin = obj2["inputIdDb"];
            if(index1 == 0){
                window[areaName] = document.getElementById(claseWin);
            }
            else if(index1 == 1){
                window[perimName] = document.getElementById(claseWin);
            }
        })
    })
};
function asignacionWinResult(){
    windowResultArea = document.querySelector(".winResMensAreaCl");
    windowResultPerim = document.querySelector(".winResMensPerimCl");
};
function asignacionBtns(){
    btnClearArea = document.querySelector(".btnClearAreaCl");
    btnClearArea.addEventListener("click", clearValCalc );
    btnClearPerim = document.querySelector(".btnClearPerimCl");
    btnClearPerim.addEventListener("click", clearValCalc  );

    btnResultArea = document.querySelector(".btnResultAreaCl");
    btnResultArea.addEventListener("click", window[funcion1Fn]);
    btnResultPerim = document.querySelector(".btnResultPerimCl");
    btnResultPerim.addEventListener("click", window[funcion2Fn]);
};
// --- funciones de mensajes ---
function introducirValMsgFn(){
    if(mensajeSigPlurVr == "s"){
        return "Intruducir valor requerido";
    }else if(mensajeSigPlurVr == "p"){
        return "Intruducir valores requeridos";
    }
};
function elegirCmMtMsgFn(){
    return "Elegir centímetros o metros";
};
function valorMayorMsgFc(){
    if(mensajeSigPlurVr == "s"){
        return "Valor debe de ser mayor a 0";
    }else if(mensajeSigPlurVr == "p"){
        return "Valores deben de ser<br>mayores a 0";
    }
};
// --- habilitar y deshabilitar boton de resultado ---
function disableBtnResult(string){
    if(string == "area"){
        btnResultArea.disabled = true;
        btnResultArea.classList.remove("btnResultCl");
        btnResultArea.classList.add("btnInactive");
    }else if(string == "perim"){
        btnResultPerim.disabled = true;
        btnResultPerim.classList.remove("btnResultCl");
        btnResultPerim.classList.add("btnInactive");
    };
};
function enableBtnResult(eventForward){ 
    if(eventForward.target.classList[1] == "btnClearAreaCl"){
        btnResultArea.disabled = false;
        btnResultArea.classList.remove("btnInactive");
        btnResultArea.classList.add("btnResultCl");
    }else if (eventForward.target.classList[1] == "btnClearPerimCl"){
        btnResultPerim.disabled = false;
        btnResultPerim.classList.remove("btnInactive");
        btnResultPerim.classList.add("btnResultCl");
    };
};
// --- seleccion de medida de centinmetros o metros ---
function medSel(string) {
    if(string == "area"){
        if(radAreaCmVr.checked) {
            return "cm2";
        }else if(radAreaMtVr.checked) {
            return "m2";
        };
    }else if(string == "perim"){
        if(radPerimCmVr.checked) {
            return "cm";
        }else if(radPerimMtVr.checked) {
            return "m";
        };
    }
};
// --- borrado de valores de calculadora ---
function clearValCalc(eventOrigin){
    radEnableUncheck(eventOrigin);

    let figValues = formulasArray.find((obj) => obj["idDb"] == idFigVr);
    let arrayWin;
    let name;
    var winInput;
    if(eventOrigin.target.classList[1] == "btnClearAreaCl"){
        arrayWin = figValues["datosDb"][0]["inputDb"];
        name = "areaWin";
    }else if (eventOrigin.target.classList[1] == "btnClearPerimCl"){
        arrayWin = figValues["datosDb"][1]["inputDb"];
        name = "perimWin";
    };
    for(let i=0; i<arrayWin.length; i++){
        winInput = name + (i + 1) +"Vr";
        window[winInput].disabled = false;
        window[winInput].value = "";
        window[winInput].classList.remove("resultColor");
    }

    disablWindowResult(eventOrigin);
    enableBtnResult(eventOrigin);
};
// --- radios activos y desmarcados ---
function radEnableUncheck(eventForward){
    if(eventForward.target.classList[1] == "btnClearAreaCl"){
        radAreaCmVr.disabled = false;
        radAreaMtVr.disabled = false;
        radAreaCmVr.checked = false;
        radAreaMtVr.checked = false;
    }else if (eventForward.target.classList[1] == "btnClearPerimCl"){
        radPerimCmVr.disabled = false;
        radPerimMtVr.disabled = false;
        radPerimCmVr.checked = false;
        radPerimMtVr.checked = false;
    };

};
// --- selecciona que radio se desactiva ---
function radSelectDisable(string){
    if(string == "area"){
        if(radAreaCmVr.checked){
            radAreaMtVr.disabled = true;
        }else if(radAreaMtVr.checked){
            radAreaCmVr.disabled = true;
        };
    }
    else if(string == "perim"){
        if(radPerimCmVr.checked){
            radPerimMtVr.disabled = true;
        }else if(radPerimMtVr.checked){
            radPerimCmVr.disabled = true;
        };
    }
};
// --- desactiva la ventana de resultados y mensajes ---
function disablWindowResult(eventForward){
    if(eventForward.target.classList[1] == "btnClearAreaCl"){
        windowResultArea.classList.remove("bgChange");
        windowResultArea.innerHTML = introducirValMsgFn();
    }else if (eventForward.target.classList[1] == "btnClearPerimCl"){
        windowResultPerim.classList.remove("bgChange");
        windowResultPerim.innerHTML = introducirValMsgFn();
    };
};
// --- desactiva las ventanas inputs ---
function disableWinInp(string){
    let currentObj = formulasArray.find((obj) => obj["idDb"] == idFigVr);
    let arrayWin;
    let name;
    var winInput;
    if(string == "area"){
        arrayWin = currentObj["datosDb"][0]["inputDb"];
        name = "areaWin";
    }else if (string == "perim"){
        arrayWin = currentObj["datosDb"][1]["inputDb"];
        name = "perimWin";
    };
    for(let i=0; i<arrayWin.length; i++){
        winInput = name + (i + 1) +"Vr";
        window[winInput].disabled = true;
    }
};
function grupFuncLog(string){
    radSelectDisable(string);
    disableWinInp(string);
    disableBtnResult(string);
}
function printResult(string, result){
    if(string == "area"){
        windowResultArea.classList.add("bgChange");
        windowResultArea.innerHTML = `Área = ${formato(result.toFixed(2))} ${medSel(string)}`;
    }
    else if(string == "perim"){
        windowResultPerim.classList.add("bgChange");
        windowResultPerim.innerHTML = `Perímetro = ${formato(result.toFixed(2))} ${medSel(string)}`;
    }
};
// --- Triangulo ---
function aTriangleFn(){
    if(areaWin1Vr.value > 0 && areaWin2Vr.value > 0){
        if(radAreaCmVr.checked || radAreaMtVr.checked){
            const base = Number(areaWin1Vr.value);
            const height = Number(areaWin2Vr.value);
            const result = (base * height) / 2;
            grupFuncLog("area");
            areaWin1Vr.classList.add("resultColor");
            areaWin2Vr.classList.add("resultColor");
            printResult("area", result);
        }else{
            windowResultArea.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultArea.innerHTML = valorMayorMsgFc();
    };
};
function pTriangleFn(){
    if(perimWin1Vr.value > 0 && perimWin2Vr.value > 0 && perimWin3Vr.value > 0 ){
        if(radPerimCmVr.checked || radPerimMtVr.checked){
            const lado1 = Number(perimWin1Vr.value);
            const lado2 = Number(perimWin2Vr.value);
            const base = Number(perimWin3Vr.value);
            const result = lado1 + lado2 + base;
            grupFuncLog("perim");
            perimWin1Vr.classList.add("resultColor");
            perimWin2Vr.classList.add("resultColor");
            perimWin3Vr.classList.add("resultColor");
            printResult("perim", result);
        }else{
            windowResultPerim.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultPerim.innerHTML = valorMayorMsgFc();
    }
}
// --- Square ---
function aSquareFn(){
    if(areaWin1Vr.value > 0){
        if(radAreaCmVr.checked || radAreaMtVr.checked){
            const lado = Number(areaWin1Vr.value);
            const result = lado * lado;
            grupFuncLog("area");
            areaWin1Vr.classList.add("resultColor");
            printResult("area", result);
        }else{
            windowResultArea.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultArea.innerHTML = valorMayorMsgFc();
    }
}
function pSquareFn(){
    if(perimWin1Vr.value > 0){
        if(radPerimCmVr.checked || radPerimMtVr.checked){
            const lado = Number(perimWin1Vr.value);
            const result = lado * 4;
            grupFuncLog("perim");
            perimWin1Vr.classList.add("resultColor");
            printResult("perim", result);
        }else{
            windowResultPerim.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultPerim.innerHTML = valorMayorMsgFc();
    }
}
// --- Rectangulo ---
function aRectanguloFn(){
    if(areaWin1Vr.value > 0 && areaWin2Vr.value > 0){
        if(radAreaCmVr.checked || radAreaMtVr.checked){
            const base = Number(areaWin1Vr.value);
            const altura = Number(areaWin2Vr.value);
            const result = base * altura;
            grupFuncLog("area");
            areaWin1Vr.classList.add("resultColor");
            areaWin2Vr.classList.add("resultColor");
            printResult("area", result);
        }else{
            windowResultArea.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultArea.innerHTML = valorMayorMsgFc();
    }
}
function pRectanguloFn(){
    if(perimWin1Vr.value > 0 && perimWin2Vr.value > 0) {
        if(radPerimCmVr.checked || radPerimMtVr.checked){
            const base = Number(perimWin1Vr.value);
            const lado = Number(perimWin2Vr.value);
            const result = (base * 2) + (lado * 2);
            grupFuncLog("perim");
            perimWin1Vr.classList.add("resultColor");
            perimWin2Vr.classList.add("resultColor");
            printResult("perim", result);
        }else{
            windowResultPerim.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultPerim.innerHTML = valorMayorMsgFc();
    }
}
// --- Paralelogramo ---
function aParalelogramoFn(){
    if(areaWin1Vr.value > 0 && areaWin2Vr.value > 0){
        if(radAreaCmVr.checked || radAreaMtVr.checked){
            const base = Number(areaWin1Vr.value);
            const altura = Number(areaWin2Vr.value);
            const result = base * altura;
            grupFuncLog("area");
            areaWin1Vr.classList.add("resultColor");
            areaWin2Vr.classList.add("resultColor");
            printResult("area", result);
        }else{
            windowResultArea.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultArea.innerHTML = valorMayorMsgFc();
    }
}
function pParalelogramoFn(){
    if(perimWin1Vr.value > 0 && perimWin2Vr.value > 0) {
        if(radPerimCmVr.checked || radPerimMtVr.checked){
            const base = Number(perimWin1Vr.value);
            const lado = Number(perimWin2Vr.value);
            const result = 2 * (base + lado);
            grupFuncLog("perim");
            perimWin1Vr.classList.add("resultColor");
            perimWin2Vr.classList.add("resultColor");
            printResult("perim", result);
        }else{
            windowResultPerim.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultPerim.innerHTML = valorMayorMsgFc();
    }
}
// --- Trapecio ---
function aTrapecioFn(){
    if(areaWin1Vr.value > 0 && areaWin2Vr.value > 0 && areaWin3Vr.value > 0){
        if(radAreaCmVr.checked || radAreaMtVr.checked){
            const baseM = Number(areaWin1Vr.value);
            const basem = Number(areaWin2Vr.value);
            const altura = Number(areaWin3Vr.value);
            const result = ((baseM + basem) /2) * altura;
            grupFuncLog("area");
            areaWin1Vr.classList.add("resultColor");
            areaWin2Vr.classList.add("resultColor");
            areaWin3Vr.classList.add("resultColor");
            printResult("area", result);
        }else{
            windowResultArea.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultArea.innerHTML = valorMayorMsgFc();
    }
}
function pTrapecioFn(){
    if(perimWin1Vr.value > 0 && perimWin2Vr.value > 0 && perimWin3Vr.value > 0 && perimWin4Vr.value > 0) {
        if(radPerimCmVr.checked || radPerimMtVr.checked){
            const l1 = Number(perimWin1Vr.value);
            const l2 = Number(perimWin2Vr.value);
            const l3 = Number(perimWin3Vr.value);
            const l4 = Number(perimWin4Vr.value);
            const result = l1 + l2 + l3 + l4;
            grupFuncLog("perim");
            perimWin1Vr.classList.add("resultColor");
            perimWin2Vr.classList.add("resultColor");
            perimWin3Vr.classList.add("resultColor");
            perimWin4Vr.classList.add("resultColor");
            printResult("perim", result);
        }else{
            windowResultPerim.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultPerim.innerHTML = valorMayorMsgFc();
    }
}
// --- Rombo ---
function aRomboFn(){
    if(areaWin1Vr.value > 0 && areaWin2Vr.value > 0){
        if(radAreaCmVr.checked || radAreaMtVr.checked){
            const d1 = Number(areaWin1Vr.value);
            const d2 = Number(areaWin2Vr.value);
            const result = (d1 * d2) / 2;
            grupFuncLog("area");
            areaWin1Vr.classList.add("resultColor");
            areaWin2Vr.classList.add("resultColor");
            printResult("area", result);
        }else{
            windowResultArea.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultArea.innerHTML = valorMayorMsgFc();
    }
}
function pRomboFn(){
    if(perimWin1Vr.value > 0) {
        if(radPerimCmVr.checked || radPerimMtVr.checked){
            const l1 = Number(perimWin1Vr.value);
            const result = 4 * l1;
            grupFuncLog("perim");
            perimWin1Vr.classList.add("resultColor");
            printResult("perim", result);
        }else{
            windowResultPerim.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultPerim.innerHTML = valorMayorMsgFc();
    }
}
// --- Pentagono ---
function aPentagonoFn(){
    if(areaWin1Vr.value > 0 && areaWin2Vr.value > 0){
        if(radAreaCmVr.checked || radAreaMtVr.checked){
            const perim = Number(areaWin1Vr.value);
            const apotem = Number(areaWin2Vr.value);
            const result = (perim * apotem) / 2;
            grupFuncLog("area");
            areaWin1Vr.classList.add("resultColor");
            areaWin2Vr.classList.add("resultColor");
            printResult("area", result);
        }else{
            windowResultArea.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultArea.innerHTML = valorMayorMsgFc();
    }
}
function pPentagonoFn(){
    if(perimWin1Vr.value > 0) {
        if(radPerimCmVr.checked || radPerimMtVr.checked){
            const lado = Number(perimWin1Vr.value);
            const result = 5 * lado;
            grupFuncLog("perim");
            perimWin1Vr.classList.add("resultColor");
            printResult("perim", result);
        }else{
            windowResultPerim.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultPerim.innerHTML = valorMayorMsgFc();
    }
}
// --- Hexagono ---
function aHexagonoFn(){
    if(areaWin1Vr.value > 0 && areaWin2Vr.value > 0){
        if(radAreaCmVr.checked || radAreaMtVr.checked){
            const perim = Number(areaWin1Vr.value);
            const apotem = Number(areaWin2Vr.value);
            const result = (perim * apotem) / 2;
            grupFuncLog("area");
            areaWin1Vr.classList.add("resultColor");
            areaWin2Vr.classList.add("resultColor");
            printResult("area", result);
        }else{
            windowResultArea.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultArea.innerHTML = valorMayorMsgFc();
    }
}
function pHexagonoFn(){
    if(perimWin1Vr.value > 0) {
        if(radPerimCmVr.checked || radPerimMtVr.checked){
            const lado = Number(perimWin1Vr.value);
            const result = 6 * lado;
            grupFuncLog("perim");
            perimWin1Vr.classList.add("resultColor");
            printResult("perim", result);
        }else{
            windowResultPerim.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultPerim.innerHTML = valorMayorMsgFc();
    }
}
// --- Circulo ---
function aCirculoFn(){
    if(areaWin1Vr.value > 0){
        if(radAreaCmVr.checked || radAreaMtVr.checked){
            const radio = Number(areaWin1Vr.value);
            const PI = Math.PI.toFixed(2)
            const result = Math.pow(radio, 2) * PI;
            grupFuncLog("area");
            areaWin1Vr.classList.add("resultColor");
            printResult("area", result);
        }else{
            windowResultArea.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultArea.innerHTML = mesvalorMayorMsgFcValA();
    }
}
function circunferenciaFn(){
    if(perimWin1Vr.value > 0){
        if(radPerimCmVr.checked || radPerimMtVr.checked){
            const radio = Number(perimWin1Vr.value);
            const PI = Math.PI.toFixed(2);
            const result = PI * (radio * 2);
            grupFuncLog("perim");
            perimWin1Vr.classList.add("resultColor");
            printResult("perim", result);
        }else{
            windowResultPerim.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultPerim.innerHTML = valorMayorMsgFc();
    }
}
// ---Inicio ---
renderIntroduccion();
