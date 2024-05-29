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
let indAlturaVr;
let radAlturaCmVr;
let radAlturaMtVr;
let windowResultAltura;
let btnClearAltura;
let btnResultAltura;

let winEmail;
let winNombre;
let winDescripcion;

var funcion1Fn;
var funcion2Fn;

var alturaWin1Vr;
var alturaWin2Vr;

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
}
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

    const figSelect = AlturasArray.find(obj => obj.idDb === figura);
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
    titlesIndexText.innerText = "Alturas";
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
    titlesIndexText.innerText = "Alturas";
    // --- id del objeto en proceso ---
    idFigVr = objeto["idDb"];
    // --- ciclo de repeticion del objeto ---
    objeto["datosDb"].forEach((obj, index) => {
        // --- variable del singular o plural y variable de area o perimetro --- 
        mensajeSigPlurVr = obj["mensajeSigPlurDb"];
        indAlturaVr = obj["titleFigDb"];
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
};
// --- Limpieza de div ---
function cleanCont(){
    containerFiguras.innerHTML = "";
    containerIntro.innerHTML = "";
    containerResponsive.innerHTML = "";
};
// -- funciones de asignacion ---
function asignacionesRadios(){
    radAlturaCmVr = document.getElementById("radAlturaCmId");
    radAlturaMtVr = document.getElementById("radAlturaMtId");
};
function asignacionesWindows(objeto){
    objeto["datosDb"].forEach((obj1, index1) => {
        obj1["inputDb"].forEach((obj2,index2) =>{
            let alturaName = "alturaWin" + (index2 + 1) + "Vr";
            let claseWin = obj2["inputIdDb"];
            if(index1 == 0){
                window[alturaName] = document.getElementById(claseWin);
            }
            // else if(index1 == 1){
            //     window[perimName] = document.getElementById(claseWin);
            // }
        })
    })
};
function asignacionWinResult(){
    windowResultAltura = document.querySelector(".winResMensAlturaCl");
};
function asignacionBtns(){
    btnClearAltura = document.querySelector(".btnClearAlturaCl");
    btnClearAltura.addEventListener("click", clearValCalc );

    btnResultAltura = document.querySelector(".btnResultAlturaCl");
    btnResultAltura.addEventListener("click", window[funcion1Fn]);
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
    if(string == "altura"){
        btnResultAltura.disabled = true;
        btnResultAltura.classList.remove("btnResultCl");
        btnResultAltura.classList.add("btnInactive");
    }
    // else if(string == "perim"){
    //     btnResultPerim.disabled = true;
    //     btnResultPerim.classList.remove("btnResultCl");
    //     btnResultPerim.classList.add("btnInactive");
    // };
};
function enableBtnResult(eventForward){ 
    if(eventForward.target.classList[1] == "btnClearAlturaCl"){
        btnResultAltura.disabled = false;
        btnResultAltura.classList.remove("btnInactive");
        btnResultAltura.classList.add("btnResultCl");
    }
    // else if (eventForward.target.classList[1] == "btnClearPerimCl"){
    //     btnResultPerim.disabled = false;
    //     btnResultPerim.classList.remove("btnInactive");
    //     btnResultPerim.classList.add("btnResultCl");
    // };
};
// --- seleccion de medida de centinmetros o metros ---
function medSel(string) {
    if(string == "altura"){
        if(radAlturaCmVr.checked) {
            return "cm";
        }else if(radAlturaMtVr.checked) {
            return "m";
        };
    }
    // else if(string == "perim"){
    //     if(radPerimCmVr.checked) {
    //         return "cm";
    //     }else if(radPerimMtVr.checked) {
    //         return "m";
    //     };
    // }
};
// --- borrado de valores de calculadora ---
function clearValCalc(eventOrigin){
    radEnableUncheck(eventOrigin);

    let figValues = AlturasArray.find((obj) => obj["idDb"] == idFigVr);
    let arrayWin;
    let name;
    var winInput;
    if(eventOrigin.target.classList[1] == "btnClearAlturaCl"){
        arrayWin = figValues["datosDb"][0]["inputDb"];
        name = "alturaWin";
    }
    // else if (eventOrigin.target.classList[1] == "btnClearPerimCl"){
    //     arrayWin = figValues["datosDb"][1]["inputDb"];
    //     name = "perimWin";
    // };
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
    if(eventForward.target.classList[1] == "btnClearAlturaCl"){
        radAlturaCmVr.disabled = false;
        radAlturaMtVr.disabled = false;
        radAlturaCmVr.checked = false;
        radAlturaMtVr.checked = false;
    }
    // else if (eventForward.target.classList[1] == "btnClearPerimCl"){
    //     radPerimCmVr.disabled = false;
    //     radPerimMtVr.disabled = false;
    //     radPerimCmVr.checked = false;
    //     radPerimMtVr.checked = false;
    // };

};
// --- selecciona que radio se desactiva ---
function radSelectDisable(string){
    if(string == "altura"){
        if(radAlturaCmVr.checked){
            radAlturaMtVr.disabled = true;
        }else if(radAlturaMtVr.checked){
            radAlturaCmVr.disabled = true;
        };
    }
    // else if(string == "perim"){
    //     if(radPerimCmVr.checked){
    //         radPerimMtVr.disabled = true;
    //     }else if(radPerimMtVr.checked){
    //         radPerimCmVr.disabled = true;
    //     };
    // }
};
// --- desactiva la ventana de resultados y mensajes ---
function disablWindowResult(eventForward){
    if(eventForward.target.classList[1] == "btnClearAlturaCl"){
        windowResultAltura.classList.remove("bgChange");
        windowResultAltura.innerHTML = introducirValMsgFn();
    }
    // else if (eventForward.target.classList[1] == "btnClearPerimCl"){
    //     windowResultPerim.classList.remove("bgChange");
    //     windowResultPerim.innerHTML = introducirValMsgFn();
    // };
};
// --- desactiva las ventanas inputs ---
function disableWinInp(string){
    let currentObj = AlturasArray.find((obj) => obj["idDb"] == idFigVr);
    let arrayWin;
    let name;
    var winInput;
    if(string == "altura"){
        arrayWin = currentObj["datosDb"][0]["inputDb"];
        name = "alturaWin";
    }
    // else if (string == "perim"){
    //     arrayWin = currentObj["datosDb"][1]["inputDb"];
    //     name = "perimWin";
    // };
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
    if(string == "altura"){
        windowResultAltura.classList.add("bgChange");
        windowResultAltura.innerHTML = `Altura = ${formato(result.toFixed(2))} ${medSel(string)}`;
    }
    // else if(string == "perim"){
    //     windowResultPerim.classList.add("bgChange");
    //     windowResultPerim.innerHTML = `Perímetro = ${formato(result.toFixed(2))} ${medSel(string)}`;
    // }
};


// --- Triangulo Equilatero ---
function hTriangleEqui(){
    if(alturaWin1Vr.value > 0){
        if(radAlturaCmVr.checked || radAlturaMtVr.checked){
            const lado = Number(alturaWin1Vr.value);
            const semiPerimeter = (lado + lado + lado) / 2;
            const process =  (2 / lado) * Math.sqrt((semiPerimeter * (semiPerimeter - lado) * (semiPerimeter - lado) * (semiPerimeter - lado)));
            const result =  process;
            grupFuncLog("altura");
            alturaWin1Vr.classList.add("resultColor");
            printResult("altura", result);
        }else{
            windowResultAltura.innerHTML = elegirCmMtMsgFn();
        }
    }else{
        windowResultAltura.innerHTML = valorMayorMsgFc();
    };
}
// --- Triangulo Isosceles ---
function hTriangleIso(){
    const w1Is = Number(winH1.value);
    const w2Is = Number(winH2.value);
    const numVerIso = (w1Is * 2);
    if(w1Is > 0 && w2Is > 0){
        if(w2Is < numVerIso){
            if(inputRadioHC.checked || inputRadioHM.checked){
                const lado1 = w1Is;
                const base = w2Is;
                const result = Math.sqrt(Math.pow(lado1,2) - Math.pow( (base/2), 2) );
                medEnableDisable()
                disableOptions();
                winH1.classList.add("resultColor");
                winH2.classList.add("resultColor");
                pResultH.classList.add("bgChange");
                pResultH.innerHTML = `Altura = ${formato(result.toFixed(2))} ${medSeleccion()}`;
            }else{
                pResultH.innerHTML = mesCmM();
            }
        }else{
            pResultH.innerHTML = "La medida de la Base debe ser<br>menor a la suma de sus lados";
        }
    }else{
        pResultH.innerHTML = mesValH();
    }
}
// --- Triangulo Escaleno ---
function hTriEsc(){
    const w1Es = Number(winH1.value);
    const w2Es = Number(winH2.value);
    const w3Es = Number(winH3.value);
    const numVerEsc = w1Es + w2Es;
    if(w1Es > 0 && w2Es > 0 && w3Es > 0){
        if(w3Es < numVerEsc){
            if(inputRadioHC.checked || inputRadioHM.checked){
                const lado1 = w1Es;
                const lado2 = w2Es;
                const base = w3Es;
                const semiPerimeter = (lado1 + lado2 + base) / 2;
                // const desestruc = [lado1, lado2, base];
                // const [a,b,c] = desestruc.sort((a,b) => b - a);
                const process =  (2 / base) * Math.sqrt((semiPerimeter * (semiPerimeter - lado1) * (semiPerimeter - lado2) * (semiPerimeter - base)));
                const result =  process;
                medEnableDisable()
                disableOptions();
                winH1.classList.add("resultColor");
                winH2.classList.add("resultColor");
                winH3.classList.add("resultColor");
                pResultH.classList.add("bgChange");
                pResultH.innerHTML = `Altura = ${formato(result.toFixed(2))} ${medSeleccion()}`;
            }else{
                pResultH.innerHTML = mesCmM();
            }
        }else{
            pResultH.innerHTML = "La medida de la Base debe ser<br>menor a la suma de sus lados";
        }
    }else{
        pResultH.innerHTML = mesValH();
    }
}
// --- Trapecio ---
function hTrapecio(){
    const w1Trap = Number(winH1.value);
    const w2Trap = Number(winH2.value);
    const w3Trap = Number(winH3.value);
    if(w1Trap > 0 && w2Trap > 0 && w3Trap > 0){
        if(w2Trap < w3Trap){
            if(inputRadioHC.checked || inputRadioHM.checked){
                const lado = w1Trap;
                const base = w2Trap;
                const Base = w3Trap;
                const baseParcial = (Base - base) / 2;
                const result = Math.sqrt( Math.pow(lado,2) - Math.pow(baseParcial,2) )
                medEnableDisable()
                disableOptions();
                winH1.classList.add("resultColor");
                winH2.classList.add("resultColor");
                winH3.classList.add("resultColor");
                pResultH.classList.add("bgChange");
                pResultH.innerHTML = `Altura = ${formato(result.toFixed(2))} ${medSeleccion()}`;
            }else{
                pResultH.innerHTML = mesCmM();
            }
        }else{
            pResultH.innerHTML = "Lado b tiene que ser menor<br>que la base B en el trapecio";
        }
    }else{
        pResultH.innerHTML = mesValH();
    }
}
// ---Inicio ---
renderIntroduccion();




// function asignacionesWindows(){
//     if(idFig == "triángulo_equilátero"){
//         winH1 = document.querySelector("#winHTriEquiSide");
//     }else if(idFig == "triángulo_isósceles"){
//         winH1 = document.querySelector("#winHTriIsoSideEq");
//         winH2 = document.querySelector("#winHTriIsoBase");
//     }else if(idFig == "triángulo_escaleno"){
//         winH1 = document.querySelector("#winHTriEscSide1");
//         winH2 = document.querySelector("#winHTriEscSide2");
//         winH3 = document.querySelector("#winHTriEscBase");
//     }else if(idFig == "trapecio"){
//         winH1 = document.querySelector("#winHTrapecioSide1");
//         winH2 = document.querySelector("#winHTrapeciobase");
//         winH3 = document.querySelector("#winHTrapecioBase");
//     }
// };

function cborrar(){
    // ---- Limpieza de valor de medida ----
    mensAltura = "";
    // ----  ----
    sectionHmiddle.innerHTML = "";
    // ---- Limpieza de Ventanas de mensajes y borrado de clase ----
    pResultH.innerHTML = "";
    pResultH.classList.remove(pResultHReg);
    pResultH.classList.remove("bgChange");
    // ---- Borrado de clases y abilitar botones ----
    btnResultH.classList.remove(btnResultHReg);
    btnClearH.classList.remove(btnClearHReg);
    btnResultH.disabled = false;
    btnResultH.classList.remove("btnInactive");
    // ----  ----
    containerFiguras.innerHTML = "";
    divAltura.innerHTML = "";
    // ---- Deseleccionar radios ----
    inputRadioHC.checked = false;
    inputRadioHM.checked = false;
    // ---- Abilitar radios ----
    inputRadioHC.disabled = false;
    inputRadioHM.disabled = false;
}
function cdisableOptions(){
    if(idFig == "triángulo_equilátero"){
        winH1.disabled = true;
    }else if(idFig == "triángulo_isósceles"){
        winH1.disabled = true;
        winH2.disabled = true;
    }else if(idFig == "triángulo_escaleno" || idFig == "trapecio"){
        winH1.disabled = true;
        winH2.disabled = true;
        winH3.disabled = true;
    }
    btnResultH.disabled = true;
    btnResultH.classList.remove("btnResult");
    btnResultH.classList.add("btnInactive");
}
function cclearHFig(){
    pResultH.classList.remove("bgChange");
    if(idFig == "triángulo_equilátero"){
        winH1.disabled = false;
        winH1.value = "";
        winH1.classList.remove("resultColor");
    }else if(idFig == "triángulo_isósceles"){
        winH1.disabled = false;
        winH2.disabled = false;
        winH1.value = "";
        winH2.value = "";
        winH1.classList.remove("resultColor");
        winH2.classList.remove("resultColor");
    }else if(idFig == "triángulo_escaleno" || idFig == "trapecio"){
        winH1.disabled = false;
        winH2.disabled = false;
        winH3.disabled = false;
        winH1.value = "";
        winH2.value = "";
        winH3.value = "";  
        winH1.classList.remove("resultColor");
        winH2.classList.remove("resultColor");
        winH3.classList.remove("resultColor");     
    };
    medDisableUnchecked();
    abilitarIntercambiar();
    pResultH.innerHTML = itrValH(); 
};
function cmedDisableUnchecked(){
    // ---- Abilitar radios ----
    inputRadioHC.disabled = false;
    inputRadioHM.disabled = false;
    // ---- Limpiar radios ----
    inputRadioHC.checked = false;
    inputRadioHM.checked = false;
};
function cabilitarIntercambiar(){
    btnResultH.disabled = false;
    btnResultH.classList.remove("btnInactive");
    btnResultH.classList.add("btnResult");
};

function cmedSeleccion() {
    if(inputRadioHC.checked) {
        return "cm";
    }else if(inputRadioHM.checked) {
        return "m";
    };
};
function cmedEnableDisable(){
    if(inputRadioHC.checked){
        inputRadioHM.disabled = true;
    }else if(inputRadioHM.checked){
        inputRadioHC.disabled = true;
    };
};
function cmesCmM(){
    return "Elegir centímetros o metros";
};
function cmesValH(){
    if(mensAltura == "s"){
        return "Valor debe de ser mayor a 0";
    }else if(mensAltura == "p"){
        return "Valores deben de ser<br>mayores a 0";
    }
};
function citrValH(){
    if(mensAltura == "s"){
        return "Intruducir valor requerido";
    }else if(mensAltura == "p"){
        return "Intruducir valores requeridos";
    }
};






