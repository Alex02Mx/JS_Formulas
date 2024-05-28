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



// const sectionDtop = document.createElement("div");
// const defTitulo = document.createElement("h2");
// const defImg = document.createElement("img");
// const sectionDmiddle = document.createElement("div");
// const defAlturaTitulo = document.createElement("p");
// const defAltura = document.createElement("p");
// const defAltura2Titulo = document.createElement("p");
// const defAltura2 = document.createElement("p");
// const sectionDbottom = document.createElement("div");
// const defNotaTitulo = document.createElement("p");
// const defNota = document.createElement("p");
// const defGuiaTitulo = document.createElement("p");
// const defGuia = document.createElement("p");
// const formulaImg = document.createElement("div");
// const titleFig = document.createElement("h2");
// const imgFigura = document.createElement("img");
// const containerAltura = document.createElement("div");
// const divAltura = document.createElement("div");
// const sectionHtop = document.createElement("section");
// const pTitleH = document.createElement("p");
// const pformulaH = document.createElement("p");
// const sectionHmiddle = document.createElement("section");
// const divRadioH = document.createElement("div");
// const inputRadioHC = document.createElement("input");
// const inputRadioHM = document.createElement("input");
// const inputLabelHC = document.createElement("label");
// const inputLabelHM = document.createElement("label");
// const sectionHbottom = document.createElement("section");
// const pResultH = document.createElement("p");
// const btnResultH = document.createElement("button");
// const btnClearH = document.createElement("button");

// let btnClearHReg;
// let btnResultHReg;
// let pResultHReg;
// let mensAltura;
// let rutaFH;
// let rutaFHClear;
// let winH1 = null;
// let winH2 = null;
// let winH3 = null;
// let idFig = "";

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
    location.href="../../index.html";
    // location.href="/JS_Formulas/index.html";
}
// --- Selección ---
function selecFnc(event){
    listIndex.classList.remove("listIndexShow");
    const figura = event.target.innerText.toLowerCase();

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
    borrar();
    idFig = objeto.id;
    mensAltura = objeto.mh;

    containerFiguras.appendChild(containerResponsive);
    containerResponsive.classList.add("containerResponsive");

    containerResponsive.appendChild(formulaImg);
    formulaImg.classList.add("formulaImg");

    formulaImg.appendChild(titleFig);
    titleFig.classList.add("titleFig");
    titleFig.innerHTML = objeto.titleFig;

    formulaImg.appendChild(imgFigura);
    imgFigura.setAttribute("src", objeto.imgFig);

    containerResponsive.appendChild(containerAltura);
    containerAltura.classList.add("containerAltura");
    containerAltura.appendChild(divAltura);
    divAltura.classList.add("containerFormules");

    pTitleH.classList.add("titlesFormules");
    pTitleH.innerHTML = objeto.titleAltura;
    pformulaH.classList.add("textFormule");
    pformulaH.innerHTML = "Calculadora";
    sectionHtop.classList.add("sectionHtop");
    sectionHtop.append(pTitleH, pformulaH);

    divRadioH.classList.add("divRadioH");
    inputRadioHC.setAttribute("type", "radio");
    inputRadioHC.setAttribute("name", "radH");
    inputRadioHC.setAttribute("id", "radHC");
    inputLabelHC.setAttribute("for", "radHC");
    inputLabelHC.innerHTML = "centímetros";
    inputRadioHM.setAttribute("type", "radio");
    inputRadioHM.setAttribute("name", "radH");
    inputRadioHM.setAttribute("id", "radHM");
    inputLabelHM.setAttribute("for", "radHM");
    inputLabelHM.innerHTML = "metros";
    divRadioH.append(inputRadioHC, inputLabelHC, inputRadioHM, inputLabelHM);
    sectionHmiddle.classList.add("sectionHmiddle");
    sectionHmiddle.appendChild(divRadioH);

    objeto.inputAltura.forEach(winInput => {
        const divWin = document.createElement("div");
        divWin.classList.add("winPosition");

        const labelArea = document.createElement("label");
        labelArea.setAttribute("for", winInput.inputId);
        labelArea.innerHTML = winInput.inputLabel;
        divWin.appendChild(labelArea);
        const inputHeightWindow = document.createElement("input");
        inputHeightWindow.setAttribute("type", "number");
        inputHeightWindow.setAttribute("id", winInput.inputId);
        inputHeightWindow.classList.add("inputStyle");
        divWin.appendChild(inputHeightWindow);
        sectionHmiddle.appendChild(divWin);
    });

    btnClearHReg = objeto.btn2ClH;
    btnClearH.classList.add("btnClear", btnClearHReg);
    btnClearH.innerHTML = "Borrar";

    btnResultHReg = objeto.btnClH;
    btnResultH.classList.add("btnResult", btnResultHReg);
    btnResultH.innerHTML = "Resultado";

    btnClearH.removeEventListener("click", rutaFHClear);
    rutaFHClear = (eval(objeto.clearWindowH));
    btnClearH.addEventListener("click", rutaFHClear);

    btnResultH.removeEventListener("click", rutaFH);
    rutaFH = (eval(objeto.funcionAltura));
    btnResultH.addEventListener("click", rutaFH);

    pResultHReg = objeto.resultClH
    pResultH.classList.add("winStyle", pResultHReg);
    pResultH.innerHTML = itrValH();

    sectionHbottom.classList.add("sectionHbottom");
    sectionHbottom.append(pResultH, btnClearH, btnResultH);
    divAltura.append(sectionHtop, sectionHmiddle, sectionHbottom);

    asignacionesWindows();
    document.documentElement.scrollTop = 0;
};


// --- Limpieza de div ---
function cleanCont(){
    containerFiguras.innerHTML = "";
    containerIntro.innerHTML = "";
    containerResponsive.innerHTML = "";
};



function asignacionesWindows(){
    if(idFig == "triángulo_equilátero"){
        winH1 = document.querySelector("#winHTriEquiSide");
    }else if(idFig == "triángulo_isósceles"){
        winH1 = document.querySelector("#winHTriIsoSideEq");
        winH2 = document.querySelector("#winHTriIsoBase");
    }else if(idFig == "triángulo_escaleno"){
        winH1 = document.querySelector("#winHTriEscSide1");
        winH2 = document.querySelector("#winHTriEscSide2");
        winH3 = document.querySelector("#winHTriEscBase");
    }else if(idFig == "trapecio"){
        winH1 = document.querySelector("#winHTrapecioSide1");
        winH2 = document.querySelector("#winHTrapeciobase");
        winH3 = document.querySelector("#winHTrapecioBase");
    }
};




function borrar(){
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
function disableOptions(){
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
function clearHFig(){
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
function medDisableUnchecked(){
    // ---- Abilitar radios ----
    inputRadioHC.disabled = false;
    inputRadioHM.disabled = false;
    // ---- Limpiar radios ----
    inputRadioHC.checked = false;
    inputRadioHM.checked = false;
};
function abilitarIntercambiar(){
    btnResultH.disabled = false;
    btnResultH.classList.remove("btnInactive");
    btnResultH.classList.add("btnResult");
};

function medSeleccion() {
    if(inputRadioHC.checked) {
        return "cm";
    }else if(inputRadioHM.checked) {
        return "m";
    };
};
function medEnableDisable(){
    if(inputRadioHC.checked){
        inputRadioHM.disabled = true;
    }else if(inputRadioHM.checked){
        inputRadioHC.disabled = true;
    };
};
function mesCmM(){
    return "Elegir centímetros o metros";
};
function mesValH(){
    if(mensAltura == "s"){
        return "Valor debe de ser mayor a 0";
    }else if(mensAltura == "p"){
        return "Valores deben de ser<br>mayores a 0";
    }
};
function itrValH(){
    if(mensAltura == "s"){
        return "Intruducir valor requerido";
    }else if(mensAltura == "p"){
        return "Intruducir valores requeridos";
    }
};


// --- Triangulo Equilatero ---
function hTriangleEqui(){
    const w1Es = Number(winH1.value);
    if(w1Es > 0){
        if(inputRadioHC.checked || inputRadioHM.checked){
            const lado = w1Es;
            const semiPerimeter = (lado + lado + lado) / 2;
            const process =  (2 / lado) * Math.sqrt((semiPerimeter * (semiPerimeter - lado) * (semiPerimeter - lado) * (semiPerimeter - lado)));
            const result =  process;
            medEnableDisable()
            disableOptions();
            winH1.classList.add("resultColor");
            pResultH.classList.add("bgChange");
            pResultH.innerHTML = `Altura = ${formato(result.toFixed(2))} ${medSeleccion()}`;
        }else{
            pResultH.innerHTML = mesCmM();
        }
    }else{
        pResultH.innerHTML = mesValH();
    }
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

