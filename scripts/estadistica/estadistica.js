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
const containerEstadistica = document.querySelector(".containerEstadistica");
const containerIntro = document.createElement("section");
const containerResponsive = document.createElement("section");
const titlesIndexText = document.querySelector(".titlesIndexText");
const email = document.querySelectorAll(".email");
const seleccion = document.querySelectorAll(".seleccion");
const socMedDesktop = document.querySelector(".socMedDesktop");
const socMedMainCont =  document.querySelector(".socMedMainCont");

let idFigVr;
let mensajeSigPlurVr;
let indEstadisticaVr;

var funcion1Fn;
var funcion2Fn;



// const instrMMImg = document.createElement("div");
// const titleMM = document.createElement("h2");
// const imgMM = document.createElement("img");
// const containerEstCal = document.createElement("div");
// const divCalculadora = document.createElement("div");
// const pTitlesEstadistica = document.createElement("p");
// const pEstadistica = document.createElement("p");
// const sectionEsttop = document.createElement("section");
// const sectionEstmiddle = document.createElement("section");
// const divEntryWin = document.createElement("div");
// const labelArea = document.createElement("p");
// const textarea = document.createElement("textarea");
// const contSectEstBottom = document.createElement("div");
// const btnClearEst = document.createElement("button");
// const btnResultEst = document.createElement("button");
// const sectionEstbottom = document.createElement("section");

// let rutaFEstClear;
// let rutaFEst;

// function mensajeInsertarValores(){
//     labelArea.innerHTML = "Introduce números separados<br>por una coma ( , ) y sin espacios";
// };
// function clearEstOpt(){
//     winEstVar.disabled = false;
//     winEstVar.value = "";
//     winEstVar.classList.remove("resultColor");
//     habilitarIntercambiar();
//     labelArea.innerHTML = "";

//     if(idFig == "media_y_mediana"){
//         mensajeInsertarValores();
//         pResultEstMedia.innerHTML = ""; 
//         pResultEstMediana.innerHTML = ""; 
//         pResultEstMedia.classList.add("resultColor");
//         pResultEstMediana.classList.add("resultColor");
//     }
//     else if(idFig == "moda_cal"){
//         mensajeInsertarValoresM();
//         taResultEstModa.value = ""; 
//         taResultEstModa.classList.add("resultColor");
//     }
//     else if(idFig == "rango_cal"){
//         mensajeInsertarValores();
//         pResultEstTam.innerHTML = "";
//         pResultEstMax.innerHTML = "";
//         pResultEstMin.innerHTML = "";
//         pResultEstRango.innerHTML = ""; 
//         pResultEstTam.classList.add("resultColor");
//         pResultEstMax.classList.add("resultColor");
//         pResultEstMin.classList.add("resultColor");
//         pResultEstRango.classList.add("resultColor");
//     }
//     else if(idFig == "desviación_media_cal"){
//         mensajeInsertarValores();
//         pResultEstTamDM.innerHTML = "";
//         pResultEstMedDM.innerHTML = "";
//         pResultEstDM.innerHTML = "";
//         pResultEstTamDM.classList.add("resultColor");
//         pResultEstMedDM.classList.add("resultColor");
//         pResultEstDM.classList.add("resultColor");
//     }
//     pTitlesEstadistica.classList.remove("titleImg");
// };
// function asignacionesWindows(){
//     winEstVar = document.querySelector("#textAreaId");
//     if(idFig == "media_y_mediana"){
//         pResultEstMedia = document.querySelector(".resultEstMedia");
//         pResultEstMediana = document.querySelector(".resultEstMediana");
//     }
//     else if(idFig == "moda_cal"){
//         taResultEstModa = document.querySelector(".resultEstModa");
//         taResultEstModa.disabled = true;
//     }
//     else if(idFig == "rango_cal"){
//         pResultEstTam = document.querySelector(".resultEstTam");
//         pResultEstMax = document.querySelector(".resultEstMax");
//         pResultEstMin = document.querySelector(".resultEstMin");
//         pResultEstRango = document.querySelector(".resultEstRango");
//     }
//     else if(idFig == "desviación_media_cal"){
//         pResultEstTamDM = document.querySelector(".resultEstTamDM");
//         pResultEstMedDM = document.querySelector(".resultEstMedDM");
//         pResultEstDM = document.querySelector(".resultEstDM");
//     };
// };


//const sectionDmiddle = document.createElement("div");


// const medida = document.querySelector(".medida");
// const sectionDtop = document.createElement("div");
// const defTitulo = document.createElement("h2");
// const defImg = document.createElement("img");
// const defEstadisticaTitulo = document.createElement("p");
// const defEstadistica = document.createElement("p");
// const sectionDbottom = document.createElement("div");
// const defCategoriaTitulo = document.createElement("p");
// const defCategoria = document.createElement("p");
// const defGuiaTitulo = document.createElement("p");
// const defGuia = document.createElement("p");
// const EstBottomA = document.createElement("div");
// const contPResultEstMedia = document.createElement("div");
// const contPResultEstMediana = document.createElement("div");
// const contPResultEstModa = document.createElement("div");
// const contPResultEstTam = document.createElement("div");
// const contPResultEstMax = document.createElement("div");
// const contPResultEstMin = document.createElement("div");
// const contPResultEstRango = document.createElement("div");
// const titleResultEstMedia = document.createElement("p");
// const titleResultEstMediana = document.createElement("p");
// const titleResultEstModa = document.createElement("p");
// const titleResultEstTam = document.createElement("p");
// const titleResultEstMax = document.createElement("p");
// const titleResultEstMin = document.createElement("p");
// const titleResultEstRango = document.createElement("p");
// const titleResultEstDesviacionMedia = document.createElement("p");
// const pResultEstDesviacionMedia = document.createElement("p");

// let btnClearEstReg;
// let btnResultEstReg;
// let winEstVar = null;
// let pResultEstMedia = null;
// let pResultEstMediana = null;
// let taResultEstModa = null;
// let pResultEstTam = null;
// let pResultEstMax = null;
// let pResultEstMin = null;
// let pResultEstRango = null;
// let pResultEstTamDM = null;
// let pResultEstMedDM = null;
// let pResultEstDM = null;

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
// medida.addEventListener("click", figurasFnc);
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
    const figSelect = estadisticaArray.find(obj => obj.idDb === figura);
    if(figSelect){
        renderFigura(figSelect);
    }else{
        renderIntroduccion();
    };
    blurFnc();
};
function dispContactanos(){
    listIndex.classList.remove("listIndexShow");
    blurFnc();
    cleanCont();
    containerEstadistica.append(emailForm());

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
    titlesIndexText.innerText = "Estadística";
    containerEstadistica.appendChild(containerIntro);
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
    titlesIndexText.innerText = "Estadística";
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



        const secMiddleCalcCn = document.createElement("section");
        secMiddleCalcCn.classList.add("secMiddleCalcCl");


        const divTopMiddleCalc = document.createElement("div");
        divTopMiddleCalc.classList.add("divTopMiddleCalc");

        const divEntryWin = document.createElement("div");
        divEntryWin.classList.add("EntryWin");

        const labelArea = document.createElement("p");
        labelArea.classList.add("outputMessage");

        const textarea = document.createElement("textarea");
        textarea.setAttribute("id", "textAreaId");
        textarea.classList.add("textAreaCl");

        divEntryWin.append(labelArea, textarea);
        divTopMiddleCalc.append(divEntryWin);


        const divBottomMiddleCalc = document.createElement("div");
        divBottomMiddleCalc.classList.add("divBottomMiddleCalc");

        secMiddleCalcCn.append(divTopMiddleCalc, divBottomMiddleCalc);

        // --- windows Areas ---
        obj["windowMM"].forEach(winInput => {
            const labelResultCn = document.createElement("p");
            labelResultCn.innerHTML = winInput["titleW"];
            const winResultCn = document.createElement("p");
            winResultCn.classList.add(winInput["resultEst"]);
            const divContLabWin = document.createElement("div");
            divContLabWin.classList.add("contLabRes");
            divContLabWin.append(labelResultCn, winResultCn);
            divBottomMiddleCalc.append(divContLabWin);
        });
        // --- window resultados y mensajes ---
        // const winResMensCn = document.createElement("p");
        // winResMensCn.classList.add("winStyleCl", obj["winResMensDb"]);
        // winResMensCn.innerText = introducirValMsgFn();
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
        containerEstadistica.append(containerResponsive);
    });

    // containerEstadistica.appendChild(containerResponsive);
    // containerResponsive.classList.add("containerResponsive");
    // -- Top Container ---
    // containerResponsive.appendChild(instrMMImg);
    // instrMMImg.classList.add("instrMMImg");
    // instrMMImg.appendChild(titleMM);
    // titleMM.classList.add("titleMM");
    // titleMM.innerHTML = objeto.titleMM;
    // instrMMImg.appendChild(imgMM);
    // imgMM.setAttribute("src", objeto.imgMM);
    // // -- Bottom Container --
    // containerResponsive.appendChild(containerEstCal);
    // containerEstCal.classList.add("containerEstCal");
    // containerEstCal.appendChild(divCalculadora);
    // //-- Top --
    // pTitlesEstadistica.classList.add("titlesEstadistica");
    // pTitlesEstadistica.innerHTML = objeto.titleMM2;
    // if(objeto.definicion == "on"){
    //     divCalculadora.classList.remove("containerImage2");
    //     divCalculadora.classList.add("containerCalculadora");
    //     pEstadistica.classList.add("textEstadistica");
    //     pEstadistica.innerHTML = objeto.titleMMSub;
    //     sectionEsttop.classList.add("sectionEsttop");
    //     sectionEsttop.append(pTitlesEstadistica, pEstadistica);
    //     // ----Top middle------------------------------------------------------------------------   
    //     sectionEstmiddle.classList.add("sectionEstmiddle");
    //     divEntryWin.classList.add("EntryWin");
    //     labelArea.classList.add("outputMessage");
    //     textarea.setAttribute("id", "textAreaId");
    //     textarea.classList.add("textAreaCl");
    //     divEntryWin.append(labelArea, textarea);
    //     sectionEstmiddle.append(divEntryWin);

    //     contSectEstBottom.classList.add("contSectEstBottom");
         
    //     if(objeto.id == "media_y_mediana"){
    //         objeto.windowMM.forEach(winExit =>{
    //             const titlePMM = document.createElement("p");
    //             titlePMM.innerHTML = winExit.titleW;
    //             titlePMM.classList.add("titleResults");
    //             const pResultReg = winExit.resultEst;
    //             const pResultMM = document.createElement("p");
    //             pResultMM.classList.add("winStyle", "resultColor", pResultReg);
    //             const containerMM = document.createElement("div");
    //             containerMM.classList.add("contPResult");
    //             containerMM.append(titlePMM, pResultMM);
    //             contSectEstBottom.append(containerMM);
    //         });
    //         mensajeInsertarValores();
    //     };
        // ----Top middle------------------------------------------------------------------------   
        // if(objeto.id == "moda_cal"){
        //     objeto.windowMod.forEach(winExit =>{
        //         const titlePMod = document.createElement("p");
        //         titlePMod.innerHTML = winExit.titleW;
        //         titlePMod.classList.add("titleResults");
        //         const pResultReg = winExit.resultEst;
        //         const taResultMod = document.createElement("textarea");
        //         taResultMod.classList.add("winStyle", "resultColor", pResultReg);
        //         const containerMod = document.createElement("div");
        //         containerMod.classList.add("contPResult");
        //         containerMod.append(titlePMod, taResultMod);
        //         contSectEstBottom.append(containerMod);
        //     });
        //     mensajeInsertarValoresM();
        // };
        // ----Top middle------------------------------------------------------------------------   
        // if(objeto.id == "rango_cal"){
        //     EstBottomA.classList.add("EstBottomA");
        //     objeto.windowI.forEach(winExit =>{
        //         const titlePR = document.createElement("p");
        //         titlePR.innerHTML = winExit.titleW;
        //         titlePR.classList.add("titleResults");
        //         const pResultReg = winExit.resultEst;
        //         const pResultR = document.createElement("p");
        //         pResultR.classList.add("winStyle", "resultColor", pResultReg);
        //         const containerR = document.createElement("div");
        //         containerR.classList.add("contPResultA");
        //         containerR.append(titlePR, pResultR);
        //         EstBottomA.append(containerR);
        //     });
        //     objeto.windowR.forEach(winExit =>{
        //         const titlePR = document.createElement("p");
        //         titlePR.innerHTML = winExit.titleW;
        //         titlePR.classList.add("titleResults");
        //         const pResultReg = winExit.resultEst;
        //         const pResultR = document.createElement("p");
        //         pResultR.classList.add("winStyle", "resultColor", pResultReg);
        //         const containerR = document.createElement("div");
        //         containerR.classList.add("contPResult");
        //         containerR.append(titlePR, pResultR);
        //         contSectEstBottom.append(EstBottomA, containerR);
        //     });
        //          mensajeInsertarValores();
        // };
        // ----Top middle------------------------------------------------------------------------   
        // if(objeto.id == "desviación_media_cal"){
        //     EstBottomA.classList.add("EstBottomA");
        //     objeto.windowI.forEach(winExit =>{
        //         const titlePDM = document.createElement("p");
        //         titlePDM.innerHTML = winExit.titleW;
        //         titlePDM.classList.add("titleResults");
        //         const pResultReg = winExit.resultEst;
        //         const pResultDM = document.createElement("p");
        //         pResultDM.classList.add("winStyle", "resultColor", pResultReg);
        //         const containerDM = document.createElement("div");
        //         containerDM.classList.add("contPResultA");
        //         containerDM.append(titlePDM, pResultDM);
        //         EstBottomA.append(containerDM);
        //     });
        //     objeto.windowR.forEach(winExit =>{
        //         const titlePDM = document.createElement("p");
        //         titlePDM.innerHTML = winExit.titleW;
        //         titlePDM.classList.add("titleResults");
        //         const pResultReg = winExit.resultEst;
        //         const pResultDM = document.createElement("p");
        //         pResultDM.classList.add("winStyle", "resultColor", pResultReg);
        //         const containerDM = document.createElement("div");
        //         containerDM.classList.add("contPResult");
        //         containerDM.append(titlePDM, pResultDM);
        //         contSectEstBottom.append(EstBottomA, containerDM);
        //     });
        //     mensajeInsertarValores();
        // };
    //     btnClearEstReg = objeto.btn2ClEst;
    //     btnClearEst.classList.add("btnClear", btnClearEstReg);
    //     btnClearEst.innerHTML = "Borrar";
    
    //     btnResultEstReg = objeto.btnClEst;
    //     btnResultEst.classList.add("btnResult", btnResultEstReg);
    //     btnResultEst.innerHTML = "Resultado";
    
    //     btnClearEst.removeEventListener("click", rutaFEstClear);
    //     rutaFEstClear = (eval(objeto.clearWindowEst));
    //     btnClearEst.addEventListener("click", rutaFEstClear);
    
    //     btnResultEst.removeEventListener("click", rutaFEst);
    //     rutaFEst = (eval(objeto.funcionEst));
    //     btnResultEst.addEventListener("click", rutaFEst);
    
    //     sectionEstbottom.classList.add("sectionEstbottom");
    //     sectionEstbottom.append(contSectEstBottom, btnClearEst, btnResultEst);
    //     divCalculadora.append(sectionEsttop, sectionEstmiddle, sectionEstbottom);
    // }
    // else if(objeto.definicion == "off"){
    //     pTitlesEstadistica.classList.add("titleImg");

    //     divCalculadora.classList.remove("containerCalculadora");
    //     divCalculadora.classList.add("containerImage2");
    //     const imgDefinicion = document.createElement("img");
    //     imgDefinicion.classList.add("imagenDefinicion");
    //     imgDefinicion.setAttribute("src", objeto.imgMM2);
    //     divCalculadora.append(pTitlesEstadistica, imgDefinicion);
    // };
    // asignacionesWindows();
    // document.documentElement.scrollTop = 0;
};
// --- Limpieza de div ---
function cleanCont(){
    containerEstadistica.innerHTML = "";
    containerIntro.innerHTML = "";
    containerResponsive.innerHTML = "";
};



// function figurasFnc(){
//     listIndex.scrollTop = 0;
//     listIndex.classList.toggle("listIndexShow");
//     blurC.classList.toggle("off");
//     body.classList.toggle("noMove");
// }
// function borrar(){
//     // ---- Limpieza de valor de sectionEstmiddle ----
//     sectionEstmiddle.innerHTML = "";
//     labelArea.innerHTML = "";
//     textarea.value = "";
//     textarea.disabled = false;
//     textarea.classList.remove("resultColor");

//     contSectEstBottom.innerHTML = "";
//     EstBottomA.innerHTML = "";
//     // ---- Borrado de clases y abilitar botones ----
//     btnResultEst.classList.remove(btnResultEstReg);
//     btnClearEst.classList.remove(btnClearEstReg);
//     btnResultEst.disabled = false;
//     btnResultEst.classList.remove("btnInactive");
//     // ----  ----
//     containerEstadistica.innerHTML = "";
//     divCalculadora.innerHTML = "";
//     //---- ----
//     pTitlesEstadistica.classList.remove("titleImg");
// }
// function disableOptions(){
//     winEstVar.disabled = true;
//     winEstVar.classList.add("resultColor");
//     if(idFig == "media_y_mediana"){
//         pResultEstMedia.classList.remove("resultColor");
//         pResultEstMediana.classList.remove("resultColor");
//     }else if(idFig == "moda_cal"){
//         taResultEstModa.classList.remove("resultColor");
//     }else if(idFig == "rango_cal"){
//         pResultEstTam.classList.remove("resultColor");
//         pResultEstMax.classList.remove("resultColor");
//         pResultEstMin.classList.remove("resultColor");
//         pResultEstRango.classList.remove("resultColor");
//     }else if(idFig == "desviación_media_cal"){
//         pResultEstTamDM.classList.remove("resultColor");
//         pResultEstMedDM.classList.remove("resultColor");
//         pResultEstDM.classList.remove("resultColor");
//     };
//     btnResultEst.disabled = true;
//     btnResultEst.classList.remove("btnResult");
//     btnResultEst.classList.add("btnInactive");
// }

// function habilitarIntercambiar(){
//     btnResultEst.disabled = false;
//     btnResultEst.classList.remove("btnInactive");
//     btnResultEst.classList.add("btnResult");
// };


// function mensajeSoloNum(){
//     labelArea.innerHTML = "Solo números separados por<br>comas sin espacios son permitidos";
// };
// function mensajeInsertarValoresM(){
//     labelArea.innerHTML = "Introduce caracteres separados<br>por una coma ( , ) y sin espacios";
// };
// function mensajeSoloCarac(){
//     labelArea.innerHTML = "Orden debe ser caracter separado<br>por una coma y sin espacios";
// };
// function mensajeSinDuplicados(){
//     labelArea.innerHTML = "No existe Moda ya que no se<br>encontraron Duplicados";
// };
// function mensajeResultadoExitosoMM(){
//     labelArea.innerHTML = "Calculación de Media y Mediana<br>con éxito";
// };
// function mensajeResultadoExitosoRango(){
//     labelArea.innerHTML = "Calculación de Rango<br>con éxito";
// };
// function mensajeResultadoExitosoDm(){
//     labelArea.innerHTML = "Calculación de Desviación Media<br>con éxito";
// };
// function mensajeResultadoExitosoModa(){
//     labelArea.innerHTML = "Calculación de Moda<br>con éxito";
// };
// function promedio(arrayString){
//     // --- Creando un nuevo array cambiando los strings a numbers ---
//     const arrayNum = [];
//     arrayString.forEach(element => {
//         arrayNum.push(Number(element));
//     });
//     const suma = arrayNum.reduce((add,num) => add+=num);
//     const cantidad = arrayNum.length;
//     const resPromedio = suma / cantidad;
//     return resPromedio;
// }
// function mediana(arrayString){
//     const arrayNum = [];
//     arrayString.forEach(element => {
//         arrayNum.push(Number(element));
//     });
//     const orden = arrayNum.sort((a,b) => a-b);
//     const cantidad = arrayNum.length;

//     let resMediana;
//     if(cantidad % 2 == 0){
//         const mitadP = cantidad / 2;
//         resMediana = (orden[mitadP - 1] + orden[mitadP]) / 2;
//     }else{
//         const mitadI = (cantidad - 1) / 2;
//         resMediana = orden[mitadI];
//     }
//     return resMediana;
// }
// function moda(arrayString){
//     // --- Creando un objeto con los elementos y cuantas veces se repiten cada uno ---
//     const objDuplicados = arrayString.reduce((a,i) => (a[i] ? a[i] += 1 : a[i] = 1, a),{});
//     // --- Comvirtiendo el objeto a un array de arrays ---
//     const objArray = Object.entries(objDuplicados);
//     // --- Ordenando de mayor a menor el array de arrays respecto a el numero de repeticiones ---
//     objArray.sort((a,b) => b[1]-a[1]);
//     // --- creando un nuevo array de arrays con solo el o los que tienen el valor mas alto ---
//     const arrayFiltrado = [];
//     let vt = 1;
//     objArray.forEach(rep => {
//         if(rep[1] > vt){
//            arrayFiltrado.push([rep[0],rep[1]]);
//            vt = (rep[1]-1);
//         } 
//     });
//     return arrayFiltrado;
// };
// function rango(arrayString){
//     const arrayNum = [];
//     arrayString.forEach(element => {
//         arrayNum.push(Number(element));
//     });
//     arrayNum.sort((a,b) => b - a);
//     const tam = arrayNum.length;
//     const max = arrayNum[0];
//     const min = arrayNum[(tam - 1)];
//     const resRango = max - min;
//     return {
//         "tamano": tam,
//         "maxima": max,
//         "minima": min,
//         "resultRango": resRango
//     };
// }
// function desviacionMedia(arrayString){
//     const arrayNum = [];
//     arrayString.forEach(element => {
//         arrayNum.push(Number(element));
//     });
//     const tam = arrayNum.length;
//     const media = promedio(arrayString);
//     // --- ---
//     const arrayAbs = [];
//     arrayNum.forEach(element => {
//         const numAbs = Math.abs(element - media);
//         arrayAbs.push(Number(numAbs));
//     })
//     // --- ---
//     const addAbs = arrayAbs.reduce((a,b) => a += b);
//     const resDM = addAbs/tam;
//     return {
//         "tamano": tam,
//         "media": media,
//         "resDM": resDM
//     }
// }



//--- funciones calculadoras ---
function mediaMedianaFc(){
    // --- Expresion regular solo numeros puntos y comas son aceptados ---
    if(!(textarea.value == "")){
        var regex = /^[0-9]+(?:\.[0-9]+)?(?:,[0-9]+(?:\.[0-9]+)?)*$/;
        if(regex.test(textarea.value)){
            // --- Obteniendo datos de ventana de entrada como un solo strig ---
            const infoWindow = textarea.value;
            // --- Separando cada valor del string y poniendolo en un array ---
            const arrayString = infoWindow.split(",");
            // --- resultados ---
            const resPro = promedio(arrayString);
            const resMed = mediana(arrayString);
            // --- impresion ---
            pResultEstMedia.innerHTML = formato(resPro.toFixed(2));
            pResultEstMediana.innerHTML = formato(resMed.toFixed(2));
            disableOptions();
            mensajeResultadoExitosoMM();
        }else{
                mensajeSoloNum();
        };
    }else{
        mensajeInsertarValores();
    }
};
function estModa(){
    if(!(textarea.value == "")){
        // --- Expresion regular solo numeros puntos y comas son aceptados ---
        var regex = /^[^,\s]+(?:,[^,\s]+)*$/;
        if(regex.test(textarea.value)){
            // --- Obteniendo datos de ventana de entrada como un solo strig ---
            const infoWinModa = textarea.value;
            // --- Separando cada valor del string y poniendolo en un array ---
            const arrayString = infoWinModa.split(",");
            // --- Variable con array filtrado despues de la funcion moda ----
            const arrayFiltro = moda(arrayString);
            // --- impresion ---
            if(arrayFiltro.length == 0){
                mensajeSinDuplicados();
                taResultEstModa.value = "Ningun elemento se repitío";
            }else{
                arrayFiltro.forEach((res, iter) => {
                    if(iter < arrayFiltro.length -1){
                        taResultEstModa.value += res[0] + ", ";
                    }else{
                        taResultEstModa.value += res[0];
                    }
                })
                mensajeResultadoExitosoModa();
            }
            disableOptions();
        }else{
            mensajeSoloCarac();
        };
    }else{
        mensajeInsertarValoresM();
    }
};
function estRango(){
    if(!(textarea.value == "")){
        // --- Expresion regular solo numeros puntos y comas son aceptados ---
        var regex = /^[0-9]+(?:\.[0-9]+)?(?:,[0-9]+(?:\.[0-9]+)?)*$/;
        if(regex.test(textarea.value)){
            // --- Obteniendo datos de ventana de entrada como un solo strig ---
            const infoWinModa = textarea.value;
            // --- Separando cada valor del string y poniendolo en un array ---
            const arrayString = infoWinModa.split(",");
            // --- variable con info en objeto ---
            const objRango = rango(arrayString);
            // --- resultados ---
            const tam = objRango["tamano"];
            const max = objRango["maxima"];
            const min = objRango["minima"];
            const resRng = objRango["resultRango"];
            // --- impresion --- 
            pResultEstTam.innerHTML = formato(tam);
            pResultEstMax.innerHTML = formato(max.toFixed(2));
            pResultEstMin.innerHTML = formato(min.toFixed(2));
            pResultEstRango.innerHTML = formato(resRng.toFixed(2));

            disableOptions();
            mensajeResultadoExitosoRango();
        }else{
            mensajeSoloNum();
        };
    }else{
        mensajeInsertarValores();
    }
};
function estDesviacionMedia(){
    if(!(textarea.value == "")){
        // --- Expresion regular solo numeros puntos y comas son aceptados ---
        var regex = /^[0-9]+(?:\.[0-9]+)?(?:,[0-9]+(?:\.[0-9]+)?)*$/;
        if(regex.test(textarea.value)){
            // --- Obteniendo datos de ventana de entrada como un solo strig ---
            const infoWinModa = textarea.value;
            // --- Separando cada valor del string y poniendolo en un array ---
            const arrayString = infoWinModa.split(",");
            // --- variable con info en objeto ---
            const desMedObj = desviacionMedia(arrayString);
            // --- resultados ---
            const tam = desMedObj["tamano"];
            const med = desMedObj["media"];
            const resDM = desMedObj["resDM"];
            // --- impresion ---
            pResultEstTamDM.innerHTML = formato(tam);
            pResultEstMedDM.innerHTML = formato(med.toFixed(2));
            pResultEstDM.innerHTML = formato(resDM.toFixed(2));
            disableOptions();
            mensajeResultadoExitosoDm();
        }else{
            mensajeSoloNum();
        };
    }else{
        mensajeInsertarValores();
    }
};
// ---Inicio ---
renderIntroduccion();

