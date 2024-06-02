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
const containerFiguras = document.querySelector(".containerFiguras");
const containerIntro = document.createElement("section");
const containerResponsive = document.createElement("section");
const titlesIndexText = document.querySelector(".titlesIndexText");
const email = document.querySelectorAll(".email");
const seleccion = document.querySelectorAll(".seleccion");
const socMedDesktop = document.querySelector(".socMedDesktop");
const socMedMainCont =  document.querySelector(".socMedMainCont");

let idFigVr;
let mensajeSigPlurVr;
let indPorcentajeVr;
let radPorcentajeCmVr;
let radPorcentajeMtVr;
let windowResultPorcentaje;
let btnClearPorcentaje;
let btnResultPorcentaje;
let winEmail;
let winNombre;
let winDescripcion;

var funcion1Fn;
var funcion2Fn;
var porcentajeWin1Vr;
var porcentajeWin2Vr;
var porcentajeWin3Vr;
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
})
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
}
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
}
function cerrarOpc(){
    listIndex.classList.remove("listIndexShow");
    body.classList.remove("noMove");
    blurC.classList.add("off");
    topL.classList.remove("cross2");
    middleL.classList.remove("cross");
    bottomL.classList.remove("cross3");
}
// --- Retornar a menu principal ---
function menuPrinc(){
    blurFnc();
    setTimeout(menuPrincFnc, 600);
}
function menuPrincFnc(){
    // location.href="../../index.html";
    location.href="/JS_Formulas/index.html";
}
// --- Selección ---
function selecFnc(event){
    listIndex.classList.remove("listIndexShow");
    const target = event.target.innerText.toLowerCase();
    const figura = target.replaceAll(" ","_");

    const figSelect = PorcentajeArray.find(obj => obj.idDb === figura);
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
    containerFiguras.append(emailForm());

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
    titlesIndexText.innerText = "Porcentajes";
    containerFiguras.appendChild(containerIntro);
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
    titlesIndexText.innerText = "Porcentajes";
    // --- id del objeto en proceso ---
    idFigVr = objeto["idDb"];
    // --- ciclo de repeticion del objeto ---
    objeto["datosDb"].forEach((obj, index) => {
        // --- variable del singular o plural y variable de area o perimetro --- 
        mensajeSigPlurVr = obj["mensajeSigPlurDb"];
        indPorcentajeVr = obj["titleFigDb"];
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

        // --- Agregando a containerFiguras ---
        const calCn = document.createElement("div");
        calCn.classList.add("calCl");
        calCn.append(secTopCalcCn, secMiddleCalcCn, secBottomCalcCn);

        const CalcContCn = document.createElement("div");
        CalcContCn.classList.add("CalcContCl");
        CalcContCn.appendChild(calCn);

        containerResponsive.classList.add("containerResponsive");
        containerResponsive.append(tituloImgContCn, CalcContCn);
        containerFiguras.append(containerResponsive);
    });
    asignacionesRadios();
    asignacionesWindows(objeto);
    asignacionWinResult();
    asignacionBtns();
    document.documentElement.scrollTop = 0;




    // borrar();
    // containerFiguras.appendChild(containerResponsive);
    // containerResponsive.classList.add("containerResponsive");
    // topContainer(objeto);
    // bottomContainer(objeto);   
    // asignacionesWindowsRadios()    
    // document.documentElement.scrollTop = 0;
};
// --- Limpieza de div ---
function cleanCont(){
    containerFiguras.innerHTML = "";
    containerIntro.innerHTML = "";
    containerResponsive.innerHTML = "";
};
// -- funciones de asignacion ---
function asignacionesRadios(){
    radPorcentajeCmVr = document.getElementById("radPorcentajeCmId");
    radPorcentajeMtVr = document.getElementById("radPorcentajeMtId");
};
function asignacionesWindows(objeto){
    objeto["datosDb"].forEach((obj1, index1) => {
        obj1["inputDb"].forEach((obj2,index2) =>{
            let porcentajeName = "porcentajeWin" + (index2 + 1) + "Vr";
            let claseWin = obj2["inputIdDb"];
            if(index1 == 0){
                window[porcentajeName] = document.getElementById(claseWin);
            }
        })
    })
};
function asignacionWinResult(){
    windowResultPorcentaje = document.querySelector(".winResMensPorcentajeCl");
};
function asignacionBtns(){
    btnClearPorcentaje = document.querySelector(".btnClearPorcentajeCl");
    btnClearPorcentaje.addEventListener("click", clearValCalc );
    btnResultPorcentaje = document.querySelector(".btnResultPorcentajeCl");
    btnResultPorcentaje.addEventListener("click", window[funcion1Fn]);
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
    if(string == "porcentaje"){
        btnResultPorcentaje.disabled = true;
        btnResultPorcentaje.classList.remove("btnResultCl");
        btnResultPorcentaje.classList.add("btnInactive");
    }
};
function enableBtnResult(eventForward){ 
    if(eventForward.target.classList[1] == "btnClearPorcentajeCl"){
        btnResultPorcentaje.disabled = false;
        btnResultPorcentaje.classList.remove("btnInactive");
        btnResultPorcentaje.classList.add("btnResultCl");
    }
};
// --- seleccion de medida de centinmetros o metros ---
function medSel(string) {
    if(string == "porcentaje"){
        if(radPorcentajeCmVr.checked) {
            return "%";
        }
    }
};
// --- borrado de valores de calculadora ---
function clearValCalc(eventOrigin){
    radEnableUncheck(eventOrigin);

    let figValues = PorcentajeArray.find((obj) => obj["idDb"] == idFigVr);
    let arrayWin;
    let name;
    var winInput;
    if(eventOrigin.target.classList[1] == "btnClearPorcentajeCl"){
        arrayWin = figValues["datosDb"][0]["inputDb"];
        name = "porcentajeWin";
    }
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
    if(eventForward.target.classList[1] == "btnClearPorcentajeCl"){
        radPorcentajeCmVr.disabled = false;
        radPorcentajeMtVr.disabled = false;
        radPorcentajeCmVr.checked = false;
        radPorcentajeMtVr.checked = false;
    }
};
// --- selecciona que radio se desactiva ---
function radSelectDisable(string){
    if(string == "porcentaje"){
        if(radPorcentajeCmVr.checked){
            radPorcentajeMtVr.disabled = true;
        }else if(radPorcentajeMtVr.checked){
            radPorcentajeCmVr.disabled = true;
        };
    }
};
// --- desactiva la ventana de resultados y mensajes ---
function disablWindowResult(eventForward){
    if(eventForward.target.classList[1] == "btnClearPorcentajeCl"){
        windowResultPorcentaje.classList.remove("bgChange");
        windowResultPorcentaje.innerHTML = introducirValMsgFn();
    }
};
// --- desactiva las ventanas inputs ---
function disableWinInp(string){
    let currentObj = PorcentajeArray.find((obj) => obj["idDb"] == idFigVr);
    let arrayWin;
    let name;
    var winInput;
    if(string == "porcentaje"){
        arrayWin = currentObj["datosDb"][0]["inputDb"];
        name = "porcentajeWin";
    }
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
    if(string == "porcentaje"){
        windowResultPorcentaje.classList.add("bgChange");
        windowResultPorcentaje.innerHTML = `Porcentaje = ${formato(result.toFixed(2))} ${medSel(string)}`;
    }
};
function PorcentajeFn(){
    if(porcentajeWin1Vr.value > 0 && porcentajeWin2Vr.value > 0){
        if(radPorcentajeCmVr.checked || radPorcentajeMtVr.checked){
            const precList = Number(porcentajeWin1Vr.value);
            const descuento = Number(porcentajeWin2Vr.value);
            const result = (descuento/precList) * 100;
            grupFuncLog("porcentaje");
            porcentajeWin1Vr.classList.add("resultColor");
            porcentajeWin2Vr.classList.add("resultColor");
            printResult("porcentaje", result);
        }else{
            windowResultPorcentaje.innerHTML = elegirCmMtMsgFn();
        };
    }else{
        windowResultPorcentaje.innerHTML = valorMayorMsgFc();
    }
};
//----Inicio----------------------------------------------------------------------------
renderIntroduccion();

