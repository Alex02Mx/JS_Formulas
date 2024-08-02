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
let indAreaVolVr;
let radAreaVolCmVr;
let radAreaVolMtVr;
let winMensAreaVol;
let windowResultAreaTotal
let windowResultVolumen
let btnClearAreaVol;
let btnResultAreaVol;
let winEmail;
let winNombre;
let winDescripcion;

var funcion1Fn;
var funcion2Fn;
var areaVolWin1Vr;
var areaVolWin2Vr;
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
    location.href="../index.html";
    // location.href="/JS_Formulas/index.html";
};
// --- Selección ---
function selecFnc(event){
    listIndex.classList.remove("listIndexShow");
    const target = event.target.innerText.toLowerCase();
    const figura = target.replaceAll(" ","_");

    const figSelect = volumenesArray.find(obj => obj.idDb === figura);
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
    titlesIndexText.innerText = "Áreas Totales y Volumenes";
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
    titlesIndexText.innerText = "Áreas y Volumenes";
    // --- id del objeto en proceso ---
    idFigVr = objeto["idDb"];
    // --- ciclo de repeticion del objeto ---

    objeto["datosDb"].forEach((obj, index) => {
        // --- variable del singular o plural y variable de area o perimetro --- 
        mensajeSigPlurVr = obj["mensajeSigPlurDb"];
        indAreaVolVr = obj["titleFigDb"];
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

        // --- window resultados y mensajes ---
        const winResMensCn = document.createElement("p");
        winResMensCn.classList.add("winStyleCl", obj["winResMensDb"]);
        winResMensCn.innerText = introducirValMsgFn();

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

        secMiddleCalcCn.append(winResMensCn, radioLabelsContCn);


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

        // --- windows results --- //
        const secMiddleResultsCn = document.createElement("section");
        secMiddleResultsCn.classList.add("secMiddleResultsCl");

        // --- windows Areas ---
        obj["outputDb"].forEach(winOutput => {
            const labelWinOutCn = document.createElement("p");
            labelWinOutCn.classList.add("labelResult");
            labelWinOutCn.innerHTML = winOutput["outputLabelDb"];

            const outputWinCn = document.createElement("p");
            outputWinCn.classList.add("winOutput", winOutput["outputIdDb"]);

            const windLabelContCn = document.createElement("div");

            windLabelContCn.classList.add("windLabelContCl");
            windLabelContCn.append(labelWinOutCn, outputWinCn);

            secMiddleResultsCn.append(windLabelContCn);
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

        // --- Agregando a containerElement ---
        const calCn = document.createElement("div");
        calCn.classList.add("calCl");
        calCn.append(secTopCalcCn, secMiddleCalcCn, secMiddleResultsCn,  secBottomCalcCn);

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
    asignacionWinMesg();
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
    radAreaVolCmVr = document.getElementById("radAreaVolCmId");
    radAreaVolMtVr = document.getElementById("radAreaVolMtId");
};
function asignacionesWindows(objeto){
    objeto["datosDb"].forEach((obj1, index1) => {
        obj1["inputDb"].forEach((obj2,index2) =>{
            let areaVolName = "areaVolWin" + (index2 + 1) + "Vr";
            let claseWin = obj2["inputIdDb"];
            window[areaVolName] = document.getElementById(claseWin);
        })
    })
};
function asignacionWinResult(){
    let figValues = volumenesArray.find((obj) => obj["idDb"] == idFigVr);
    let arrayOutput = figValues["datosDb"][0]["outputDb"];
    let at = "." + arrayOutput[0]["outputIdDb"];
    let vol = "." + arrayOutput[1]["outputIdDb"];

    windowResultAreaTotal = document.querySelector(at);
    windowResultVolumen = document.querySelector(vol);
};
function asignacionWinMesg(){
    winMensAreaVol = document.querySelector(".winMensAreaVolCl");
};
function asignacionBtns(){
    btnClearAreaVol = document.querySelector(".btnClearAreaVolCl");
    btnClearAreaVol.addEventListener("click", clearValCalc );

    btnResultAreaVol = document.querySelector(".btnResultAreaVolCl");
    btnResultAreaVol.addEventListener("click", window[funcion1Fn]);
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
function valorExitoFc(){
    return "Área Total y Volumen con éxito";
};
// --- habilitar y deshabilitar boton de resultado ---
function disableBtnResult(){
    btnResultAreaVol.disabled = true;
    btnResultAreaVol.classList.remove("btnResultCl");
    btnResultAreaVol.classList.add("btnInactive");
};
function enableBtnResult(){ 
    btnResultAreaVol.disabled = false;
    btnResultAreaVol.classList.remove("btnInactive");
    btnResultAreaVol.classList.add("btnResultCl");

};
// --- seleccion de medida de centinmetros o metros ---
function medSel(string) {
    if(string == "areaTotal"){
        if(radAreaVolCmVr.checked) {
            return "cm2";
        }else if(radAreaVolMtVr.checked) {
            return "m2";
        };
    }else if(string == "volumen"){
        if(radAreaVolCmVr.checked) {
            return "cm3";
        }else if(radAreaVolMtVr.checked) {
            return "m3";
        };
    }
};
// --- borrado de valores de calculadora ---
function clearValCalc(){
    radEnableUncheck();

    let figValues = volumenesArray.find((obj) => obj["idDb"] == idFigVr);
    let arrayWin;
    var winInput;

    arrayWin = figValues["datosDb"][0]["inputDb"];

    for(let i=0; i<arrayWin.length; i++){
        winInput = "areaVolWin" + (i + 1) +"Vr";
        window[winInput].disabled = false;
        window[winInput].value = "";
        window[winInput].classList.remove("resultColor");
    };
    disablWindowResult();
    disablWindowMsg();
    enableBtnResult();
};
// --- radios activos y desmarcados ---
function radEnableUncheck(){
    radAreaVolCmVr.disabled = false;
    radAreaVolMtVr.disabled = false;
    radAreaVolCmVr.checked = false;
    radAreaVolMtVr.checked = false;
};
// --- selecciona que radio se desactiva ---
function radSelectDisable(){
    if(radAreaVolCmVr.checked){
        radAreaVolMtVr.disabled = true;
    }else if(radAreaVolMtVr.checked){
        radAreaVolCmVr.disabled = true;
    };
};
// --- desactiva la ventana de resultados y mensajes ---
function disablWindowResult(){
    windowResultAreaTotal.classList.remove("bgChange");
    windowResultAreaTotal.innerHTML = "";
    windowResultVolumen.classList.remove("bgChange");
    windowResultVolumen.innerHTML = "";
};
function disablWindowMsg(){
    winMensAreaVol.innerHTML = introducirValMsgFn();
};
// --- desactiva las ventanas inputs ---
function disableWinInp(){
    let currentObj = volumenesArray.find((obj) => obj["idDb"] == idFigVr);
    let arrayWin;
    var winInput;
    arrayWin = currentObj["datosDb"][0]["inputDb"];
    for(let i=0; i<arrayWin.length; i++){
        winInput = "areaVolWin" + (i + 1) +"Vr";
        window[winInput].disabled = true;
    }
};
function grupFuncLog(){
    radSelectDisable();
    disableWinInp();
    disableBtnResult();
}
function printResult(resAT, resVol){
        windowResultAreaTotal.classList.add("bgChange");
        windowResultAreaTotal.innerHTML = `${formato(resAT.toFixed(2))} ${medSel("areaTotal")}`;
        windowResultVolumen.classList.add("bgChange");
        windowResultVolumen.innerHTML = `${formato(resVol.toFixed(2))} ${medSel("volumen")}`;

};
// --- funciones logica ---
function cuboFn(){
    if(areaVolWin1Vr.value > 0 ){
        if(radAreaVolCmVr.checked || radAreaVolMtVr.checked){
            const lado = Number(areaVolWin1Vr.value);
            const resultAreaTotal = Number((6 * Math.pow(lado, 2)));
            const resultVol = Number((Math.pow(lado, 3)));
            grupFuncLog();
            areaVolWin1Vr.classList.add("resultColor");
            printResult(resultAreaTotal, resultVol);
            winMensAreaVol.innerHTML = valorExitoFc();
        }else{
            winMensAreaVol.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        winMensAreaVol.innerHTML = valorMayorMsgFc();
    };
};
function esferaFn(){
    if(areaVolWin1Vr.value > 0 ){
        if(radAreaVolCmVr.checked || radAreaVolMtVr.checked){
            const radio = Number(areaVolWin1Vr.value);
            const resultAreaTotal = Number((4 * Math.PI) * Math.pow(radio, 2));
            const resultVol = Number((4/3) * Math.PI * Math.pow(radio, 3));
            grupFuncLog();
            areaVolWin1Vr.classList.add("resultColor");
            printResult(resultAreaTotal, resultVol);
            winMensAreaVol.innerHTML = valorExitoFc();
        }else{
            winMensAreaVol.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        winMensAreaVol.innerHTML = valorMayorMsgFc();
    };
}
function cilindroFn(){
    if(areaVolWin1Vr.value > 0  && areaVolWin2Vr.value > 0){
        if(radAreaVolCmVr.checked || radAreaVolMtVr.checked){
            const radio = Number(areaVolWin1Vr.value);
            const altura = Number(areaVolWin2Vr.value);
            const resultAreaTotal = Number(((2 * Math.PI) * radio) * (radio + altura));
            const resultVol = Number(Math.PI * Math.pow(radio, 2) * altura);
            grupFuncLog();
            areaVolWin1Vr.classList.add("resultColor");
            printResult(resultAreaTotal, resultVol);
            winMensAreaVol.innerHTML = valorExitoFc();
        }else{
            winMensAreaVol.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        winMensAreaVol.innerHTML = valorMayorMsgFc();
    };
}
function conoFn(){
    if(areaVolWin1Vr.value > 0  && areaVolWin2Vr.value > 0){
        if(radAreaVolCmVr.checked || radAreaVolMtVr.checked){
            const radio = Number(areaVolWin1Vr.value);
            const altura = Number(areaVolWin2Vr.value);
            const resultAreaTotal = Number((Math.PI * radio) * (radio + Math.sqrt((Math.pow(radio, 2) + Math.pow(altura, 2)))));
            const resultVol = Number(Math.PI * Math.pow(radio, 2) * altura) / 3;
            grupFuncLog();
            areaVolWin1Vr.classList.add("resultColor");
            printResult(resultAreaTotal, resultVol);
            winMensAreaVol.innerHTML = valorExitoFc();
        }else{
            winMensAreaVol.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        winMensAreaVol.innerHTML = valorMayorMsgFc();
    };
}
// ---Inicio ---
renderIntroduccion();
