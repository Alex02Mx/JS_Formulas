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



// const medida = document.querySelector(".medida");
// const sectionDtop = document.createElement("div");
// const defTitulo = document.createElement("h2");
// const defImg = document.createElement("img");
// const sectionDmiddle = document.createElement("div");
// const defHerramientaTitulo = document.createElement("p");
// const defHerramienta = document.createElement("p");
// const sectionDbottom = document.createElement("div");
// const defCategoriaTitulo = document.createElement("p");
// const defCategoria = document.createElement("p");
// const defGuiaTitulo = document.createElement("p");
// const defGuia = document.createElement("p");
// const instrHerrImg = document.createElement("div");
// const titleHerr = document.createElement("h2");
// const imgHerr = document.createElement("img");
// const containerHerrCal = document.createElement("div");
// const divCalculadora = document.createElement("div");
// const sectionHerrtop = document.createElement("section");
// const pTitlesHerramienta = document.createElement("p");
// const pHerramienta = document.createElement("p");
// const sectionHerramiddle = document.createElement("section");
// const divEntryWin = document.createElement("div");
// const sectionHerrbottom = document.createElement("section");
// const contSectHerrBottom = document.createElement("div");
// const btnResultHerr = document.createElement("button");
// const btnClearHerr = document.createElement("button");
// const labelArea = document.createElement("p");
// const textarea = document.createElement("textarea");
// const titleSuelNet = document.createElement("label");
// const pResultSuelNet = document.createElement("input");
// const titleIngTot = document.createElement("label");
// const pResultIngTot = document.createElement("input");
// const titleGasFij = document.createElement("label");
// const pResultGasFij = document.createElement("input");
// let winNesBas;
// let winGasPer;
// let winAhoInv;
// let winCapEnd;
// let btnClearHerrReg;
// let btnResultHerrReg;
// let rutaFHerr;
// let rutaFHerrClear;
// let varId = "";

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
    const figSelect = herramientasArray.find(obj => obj.id === figura);
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
    borrar();
    varId = objeto.id;
    containerHerramienta.appendChild(containerResponsive);
    containerResponsive.classList.add("containerResponsive");
    // -- Top Container ---
    containerResponsive.appendChild(instrHerrImg);
    instrHerrImg.classList.add("instrHerrImg");
    instrHerrImg.appendChild(titleHerr);
    titleHerr.classList.add("titleHerr");
    titleHerr.innerHTML = objeto.titleHerr;
    instrHerrImg.appendChild(imgHerr);
    imgHerr.setAttribute("src", objeto.imgHerr);
    // -- Bottom Container --
    containerResponsive.appendChild(containerHerrCal);
    containerHerrCal.classList.add("containerHerrCal");
    containerHerrCal.appendChild(divCalculadora);
    //-- Top --
    pTitlesHerramienta.classList.add("ptitlesHerramienta");
    pTitlesHerramienta.innerHTML = objeto.titleHerr2;
    if(objeto.definicion == "on"){
        divCalculadora.classList.remove("containerImage2");
        divCalculadora.classList.add("containerCalculadora");
        pHerramienta.classList.add("textHerramienta");
        pHerramienta.innerHTML = objeto.titleHerrSub;
        sectionHerrtop.classList.add("sectionHerrtop");
        sectionHerrtop.append(pTitlesHerramienta, pHerramienta);
        // ----Top middle------------------------------------------------------------------------   
        sectionHerramiddle.classList.add("sectionHerramiddle");
        divEntryWin.classList.add("EntryWin");
        labelArea.classList.add("outputMessage");
        divEntryWin.append(labelArea);
        sectionHerramiddle.append(divEntryWin);
        contSectHerrBottom.classList.add("contSectHerrBottom");
         
        if(objeto.id == "regla_50-30-20_cal"){
            titleSuelNet.innerHTML = objeto.titleLabSN;
            titleSuelNet.setAttribute("for", "suelNet");
            titleSuelNet.classList.add("titleResults");
            pResultSuelNet.setAttribute("type", "number");
            pResultSuelNet.setAttribute("id", "suelNet");
            pResultSuelNet.classList.add(objeto.resultSN);
            const containerRes1 = document.createElement("div");
            containerRes1.classList.add("contPResult");
            containerRes1.append(titleSuelNet, pResultSuelNet);
            contSectHerrBottom.append(containerRes1);

            objeto.windowHerr.forEach(winExit =>{
                const titleNecBas = document.createElement("p");
                titleNecBas.innerHTML = winExit.titleW;
                titleNecBas.classList.add("titleResults");
                const pResultReg = winExit.resultHerr;
                const pResultHerr = document.createElement("p");
                pResultHerr.classList.add("winStyle", "resultColor", pResultReg);
                const containerRes = document.createElement("div");
                containerRes.classList.add("contPResult");
                containerRes.append(titleNecBas, pResultHerr);
                contSectHerrBottom.append(containerRes);
            });
            mensajeInsertarValores();
        };
        // ----Top middle------------------------------------------------------------------------   
        if(objeto.id == "endeudamiento_cal"){
            titleIngTot.innerHTML = objeto.titleLabIT;
            titleIngTot.setAttribute("for", "ingrTot");
            titleIngTot.classList.add("titleResults");
            pResultIngTot.setAttribute("type", "number");
            pResultIngTot.setAttribute("id", "ingrTot");
            pResultIngTot.classList.add(objeto.resultIT, "winStyle");

            titleGasFij.innerHTML = objeto.titleLabGF;
            titleGasFij.setAttribute("for", "gasFij");
            titleGasFij.classList.add("titleResults");
            pResultGasFij.setAttribute("type", "number");
            pResultGasFij.setAttribute("id", "gasFij");
            pResultGasFij.classList.add(objeto.resultGF, "winStyle");

            const containerRes1 = document.createElement("div");
            const containerRes2 = document.createElement("div");
            containerRes1.classList.add("contPResult");
            containerRes2.classList.add("contPResult");
            containerRes1.append(titleIngTot, pResultIngTot);
            containerRes2.append(titleGasFij, pResultGasFij);
            contSectHerrBottom.append(containerRes1, containerRes2);

            objeto.windowHerr.forEach(winExit =>{
                const titleCapEnd = document.createElement("p");
                titleCapEnd.innerHTML = winExit.titleW;
                titleCapEnd.classList.add("titleResults");
                const pResultReg = winExit.resultHerr;
                const pResultHerr = document.createElement("p");
                pResultHerr.classList.add("winStyle", "resultColor", pResultReg);
                const containerRes = document.createElement("div");
                containerRes.classList.add("contPResult");
                containerRes.append(titleCapEnd, pResultHerr);
                contSectHerrBottom.append(containerRes);
            });
            mensajeInsertarValoresCE();
        };
        btnClearHerrReg = objeto.btn2ClHerr;
        btnClearHerr.classList.add("btnClear", btnClearHerrReg);
        btnClearHerr.innerHTML = "Borrar";
    
        btnResultHerrReg = objeto.btnClHerr;
        btnResultHerr.classList.add("btnResult", btnResultHerrReg);
        btnResultHerr.innerHTML = "Resultado";
    
        btnClearHerr.removeEventListener("click", rutaFHerrClear);
        rutaFHerrClear = (eval(objeto.clearWindowHerr));
        btnClearHerr.addEventListener("click", rutaFHerrClear);
    
        btnResultHerr.removeEventListener("click", rutaFHerr);
        rutaFHerr = (eval(objeto.funcionHerr));
        btnResultHerr.addEventListener("click", rutaFHerr);
    
        sectionHerrbottom.classList.add("sectionHerrbottom");
        sectionHerrbottom.append(contSectHerrBottom, btnClearHerr, btnResultHerr);
        divCalculadora.append(sectionHerrtop, sectionHerramiddle, sectionHerrbottom);
    }
    else if(objeto.definicion == "off"){
        pTitlesHerramienta.classList.add("titleImg");
        divCalculadora.classList.remove("containerCalculadora");
        divCalculadora.classList.add("containerImage2");
        const imgDefinicion = document.createElement("img");
        imgDefinicion.classList.add("imagenDefinicion");
        imgDefinicion.setAttribute("src", objeto.imgMM2);
        divCalculadora.append(pTitlesHerramienta, imgDefinicion);
    };
    asignacionesWindows();
    document.documentElement.scrollTop = 0;
};
// --- Limpieza de div ---
function cleanCont(){
    containerElement.innerHTML = "";
    containerIntro.innerHTML = "";
    containerResponsive.innerHTML = "";
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
function disableOptions(){
    if(varId == "regla_50-30-20_cal"){
        pResultSuelNet.disabled = true;
        pResultSuelNet.classList.add("resultColor");
        winNesBas.classList.remove("resultColor");
        winGasPer.classList.remove("resultColor");
        winAhoInv.classList.remove("resultColor");
    }else if(varId == "endeudamiento_cal"){
        pResultIngTot.disabled = true;
        pResultIngTot.classList.add("resultColor");
        pResultGasFij.disabled = true;
        pResultGasFij.classList.add("resultColor");
        winCapEnd.classList.remove("resultColor");
    };
    btnResultHerr.disabled = true;
    btnResultHerr.classList.remove("btnResult");
    btnResultHerr.classList.add("btnInactive");
}
//--- funciones para limpiar y habilitar radios ventanas y botones ----------------------
function clearHerrOpt(){
    habilitarIntercambiar();
    labelArea.innerHTML = "";
    if(varId == "regla_50-30-20_cal"){
        mensajeInsertarValores();
        pResultSuelNet.setAttribute("type", "number");
        pResultSuelNet.disabled = false;
        pResultSuelNet.value = "";
        pResultSuelNet.classList.remove("resultColor");
        winNesBas.innerHTML = ""; 
        winGasPer.innerHTML = ""; 
        winAhoInv.innerHTML = ""; 
        winNesBas.classList.add("resultColor");
        winGasPer.classList.add("resultColor");
        winAhoInv.classList.add("resultColor");
    }
    else if(varId == "endeudamiento_cal"){
        mensajeInsertarValoresCE();
        pResultIngTot.setAttribute("type", "number");
        pResultIngTot.disabled = false;
        pResultIngTot.value = "";
        pResultIngTot.classList.remove("resultColor");
        pResultGasFij.setAttribute("type", "number");
        pResultGasFij.disabled = false;
        pResultGasFij.value = "";
        pResultGasFij.classList.remove("resultColor");
        winCapEnd.innerHTML = ""; 
        winCapEnd.classList.add("resultColor");
    };
    pTitlesHerramienta.classList.remove("titleImg");
};
function habilitarIntercambiar(){
    btnResultHerr.disabled = false;
    btnResultHerr.classList.remove("btnInactive");
    btnResultHerr.classList.add("btnResult");
};
//----Funcion asignaciones --------------------------------------------------------------
function asignacionesWindows(){
    if(varId == "regla_50-30-20_cal"){
        winNesBas = document.querySelector(".resultHerrNecBas");
        winGasPer = document.querySelector(".resultHerrGasPer");
        winAhoInv = document.querySelector(".resultHerrAhoInv");
    }
    else if(varId == "endeudamiento_cal"){
        winCapEnd = document.querySelector(".resultHerrCapEnd");
    };
};
//----Funciones mensajes-----------------------------------------------------------------
function mensajeInsertarValores(){
    labelArea.innerHTML = "Introduce Sueldo Neto<br>para aplicar la regla";
};
function mensajeResultadoExitosoRegla(){
    labelArea.innerHTML = "Calculación de Regla 50-30-20<br>con éxito";
};
function mensajeSoloNum(){
    labelArea.innerHTML = "Solo números mayores<br>a 0 son permitidos";
};
// --- ---
function mensajeInsertarValoresCE(){
    labelArea.innerHTML = "Introduce Ingresos Totales para<br>la Capacidad de Endeudamiento";
};
function mensajeResultadoExitosoCE(){
    labelArea.innerHTML = "Calculación de Capacidad de<br>Endeudamiento con éxito";
};

//--- funciones calculadoras ---
function herr503020(){
    if(pResultSuelNet.value > 0){
        // --- Obteniendo datos de ventana de entrada  ---
        const infoWinSN = Number(pResultSuelNet.value);
        // --- resultados ---
        const necBas = infoWinSN * 50 / 100;
        const gasPer = infoWinSN * 30 / 100;
        const ahoInv = infoWinSN * 20 / 100;
        // --- impresion --- 
        pResultSuelNet.removeAttribute("type", "number");
        pResultSuelNet.value = formato(infoWinSN.toFixed(2));
        winNesBas.innerHTML = formato(necBas.toFixed(2));
        winGasPer.innerHTML = formato(gasPer.toFixed(2));
        winAhoInv.innerHTML = formato(ahoInv.toFixed(2));
        disableOptions();
        mensajeResultadoExitosoRegla();
    }else{
            mensajeSoloNum();
    };
};
function herrCapEnd(){
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

