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
let indEstadisticaVr;
let pResultEstMedia;
let pResultEstMediana;
let taResultEstModa;
let pResultEstTam;
let pResultEstMax;
let pResultEstMin;
let pResultEstRango;
let pResultEstTamDM;
let pResultEstMedDM;
let pResultEstDM;
let btnClearCalc;
let btnResultCalc;
let winMessEst;
let winInputEst;
let winEmail;
let winNombre;
let winDescripcion;

var funcion1Fn;
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
    location.href="../index.html";
    // location.href="/JS_Formulas/index.html";
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
    titlesIndexText.innerText = "Estadística";
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
        // --- window mensaje ---
        const labelArea = document.createElement("p");
        labelArea.classList.add("outputMessage");
        // --- textarea window ---
        const textarea = document.createElement("textarea");
        textarea.setAttribute("id", "textAreaId");
        textarea.classList.add("textAreaCl", "resultColor");
        // --- window mens. y textArea container ---
        const divEntryWin = document.createElement("div");
        divEntryWin.classList.add("EntryWin");
        divEntryWin.append(labelArea, textarea);
        // --- div middle top ---
        const divTopMiddleCalc = document.createElement("div");
        divTopMiddleCalc.classList.add("divTopMiddleCalc");
        divTopMiddleCalc.append(divEntryWin);

        const divBottomMiddleCalc = document.createElement("div");
        divBottomMiddleCalc.classList.add("divBottomMiddleCalc");

        const secMiddleCalcCn = document.createElement("section");
        secMiddleCalcCn.classList.add("secMiddleCalcCl");
        secMiddleCalcCn.append(divTopMiddleCalc, divBottomMiddleCalc);
        const divContInfo = document.createElement("div");

        // --- windows Areas ---
        if(objeto.idDb == "media_y_mediana" || objeto.idDb == "moda"){
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
        }
        else if(objeto.idDb == "rango" || objeto.idDb == "desviación_media"){
            obj.windowI.forEach(winExit =>{
                const titlePR = document.createElement("p");
                titlePR.innerHTML = winExit.titleW;
                titlePR.classList.add("titleResults");
                const pResultReg = winExit.resultEst;
                const pResultR = document.createElement("p");
                pResultR.classList.add("winStyleS", pResultReg);
                const containerR = document.createElement("div");
                containerR.classList.add("contPResultA");
                containerR.append(titlePR, pResultR);
                divContInfo.classList.add("divContInfo");
                divContInfo.append(containerR);
            });
            obj.windowR.forEach(winExit =>{
                const titlePR = document.createElement("p");
                titlePR.innerHTML = winExit.titleW;
                titlePR.classList.add("titleResults");
                const pResultReg = winExit.resultEst;
                const pResultR = document.createElement("p");
                pResultR.classList.add("winStyleL", pResultReg);
                const containerR = document.createElement("div");
                containerR.classList.add("contPResult");
                containerR.append(titlePR, pResultR);
                divBottomMiddleCalc.append(divContInfo, containerR);
            });
        }
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
    winInputEst.disabled = true;
    winInputEst.classList.remove("resultColor");
    if(idFigVr == "media_y_mediana"){
        pResultEstMedia.classList.add("resultColor");
        pResultEstMediana.classList.add("resultColor");
    }else if(idFigVr == "moda"){
        taResultEstModa.classList.add("resultColor");
    }else if(idFigVr == "rango"){
        pResultEstTam.classList.add("resultColor");
        pResultEstMax.classList.add("resultColor");
        pResultEstMin.classList.add("resultColor");
        pResultEstRango.classList.add("resultColor");
    }else if(idFigVr == "desviación_media"){
        pResultEstTamDM.classList.add("resultColor");
        pResultEstMedDM.classList.add("resultColor");
        pResultEstDM.classList.add("resultColor");
    };
    enableBtnResult();
}
function asignacionesWindows(){
    winMessEst = document.querySelector(".outputMessage")
    winInputEst = document.querySelector("#textAreaId");
    if(idFigVr == "media_y_mediana"){
        pResultEstMedia = document.querySelector(".resultEstMedia");
        pResultEstMediana = document.querySelector(".resultEstMediana");
    }
    else if(idFigVr == "moda"){
        taResultEstModa = document.querySelector(".resultEstModa");
    }
    else if(idFigVr == "rango"){
        pResultEstTam = document.querySelector(".resultEstTam");
        pResultEstMax = document.querySelector(".resultEstMax");
        pResultEstMin = document.querySelector(".resultEstMin");
        pResultEstRango = document.querySelector(".resultEstRango");
    }
    else if(idFigVr == "desviación_media"){
        pResultEstTamDM = document.querySelector(".resultEstTamDM");
        pResultEstMedDM = document.querySelector(".resultEstMedDM");
        pResultEstDM = document.querySelector(".resultEstDM");
    };
};
function asignacionMensajes(){
    if(idFigVr == "media_y_mediana" || idFigVr == "rango" || idFigVr == "desviación_media"){
        mensajeInsertarValores();
    }
    else if(idFigVr == "moda"){
        mensajeInsertarValoresM();
    }
};
function asignacionBtns(){
    btnClearCalc = document.querySelector(".btnClearCalcCl");
    btnClearCalc.addEventListener("click", clearValCalc );
    btnResultCalc = document.querySelector(".btnResultCalcCl");
    btnResultCalc.addEventListener("click", window[funcion1Fn]);
};
// --- funciones de mensajes ---
function mensajeInsertarValoresM(){
    winMessEst.innerHTML = "Introduce caracteres separados<br>por una coma ( , ) y sin espacios";
};
function mensajeInsertarValores(){
    winMessEst.innerHTML = "Introduce números separados<br>por una coma ( , ) y sin espacios";
};
function mensajeSoloNum(){
    winMessEst.innerHTML = "Solo números separados por<br>comas sin espacios son permitidos";
};
function mensajeResultadoExitosoMM(){
    winMessEst.innerHTML = "Calculación de Media y Mediana<br>con éxito";
};
function mensajeSoloCarac(){
    winMessEst.innerHTML = "Orden debe ser caracter separado<br>por una coma y sin espacios";
};
function mensajeSinDuplicados(){
    winMessEst.innerHTML = "No existe Moda ya que no se<br>encontraron Duplicados";
};
function mensajeResultadoExitosoModa(){
    winMessEst.innerHTML = "Calculación de Moda<br>con éxito";
};
function mensajeResultadoExitosoRango(){
    winMessEst.innerHTML = "Calculación de Rango<br>con éxito";
};
function mensajeResultadoExitosoDm(){
    winMessEst.innerHTML = "Calculación de Desviación Media<br>con éxito";
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
    winInputEst.value = "";
    winInputEst.classList.add("resultColor");
    winInputEst.disabled = false;
    disableBtnResult();

    if(idFigVr == "media_y_mediana"){
        pResultEstMedia.innerHTML = "";
        pResultEstMedia.classList.remove("resultColor");
        pResultEstMediana.innerHTML = "";
        pResultEstMediana.classList.remove("resultColor");
        mensajeInsertarValores();
    }
    else if(idFigVr == "moda"){
        taResultEstModa.innerHTML = "";
        taResultEstModa.classList.remove("resultColor");
        mensajeInsertarValoresM();
    }
    else if(idFigVr == "rango"){
        pResultEstTam.innerHTML = "";
        pResultEstTam.classList.remove("resultColor");
        pResultEstMax.innerHTML = "";
        pResultEstMax.classList.remove("resultColor");
        pResultEstMin.innerHTML = "";
        pResultEstMin.classList.remove("resultColor");
        pResultEstRango.innerHTML = "";
        pResultEstRango.classList.remove("resultColor");
        mensajeInsertarValores();
    }
    else if(idFigVr == "desviación_media"){
        pResultEstTamDM.innerHTML = "";
        pResultEstTamDM.classList.remove("resultColor");
        pResultEstMedDM.innerHTML = "";
        pResultEstMedDM.classList.remove("resultColor");
        pResultEstDM.innerHTML = "";
        pResultEstDM.classList.remove("resultColor");
        mensajeInsertarValores();
    };
};
// --- sublogia funciones ---
function promedio(arrayStr){
    // --- Creando un nuevo array cambiando los strings a numbers ---
    const arrayNum = [];
    arrayStr.forEach(element => {
        arrayNum.push(Number(element));
    });
    const suma = arrayNum.reduce((add,num) => add+=num);
    const cantidad = arrayNum.length;
    const resPromedio = suma / cantidad;
    return resPromedio;
};
function mediana(arrayStr){
    const arrayNum = [];
    arrayStr.forEach(element => {
        arrayNum.push(Number(element));
    });
    const orden = arrayNum.sort((a,b) => a-b);
    const cantidad = arrayNum.length;

    let resMediana;
    if(cantidad % 2 == 0){
        const mitadP = cantidad / 2;
        resMediana = (orden[mitadP - 1] + orden[mitadP]) / 2;
    }else{
        const mitadI = (cantidad - 1) / 2;
        resMediana = orden[mitadI];
    }
    return resMediana;
};
function moda(arrayString){
    // --- Creando un objeto con los elementos y cuantas veces se repiten cada uno ---
    const objDuplicados = arrayString.reduce((a,i) => (a[i] ? a[i] += 1 : a[i] = 1, a),{});
    // --- Comvirtiendo el objeto a un array de arrays ---
    const objArray = Object.entries(objDuplicados);
    // --- Ordenando de mayor a menor el array de arrays respecto a el numero de repeticiones ---
    objArray.sort((a,b) => b[1]-a[1]);
    // --- creando un nuevo array de arrays con solo el o los que tienen el valor mas alto ---
    const arrayFiltrado = [];
    let vt = 1;
    objArray.forEach(rep => {
        if(rep[1] > vt){
           arrayFiltrado.push([rep[0],rep[1]]);
           vt = (rep[1]-1);
        } 
    });
    return arrayFiltrado;
};
function rango(arrayString){
    const arrayNum = [];
    arrayString.forEach(element => {
        arrayNum.push(Number(element));
    });
    arrayNum.sort((a,b) => b - a);
    const tam = arrayNum.length;
    const max = arrayNum[0];
    const min = arrayNum[(tam - 1)];
    const resRango = max - min;
    return {
        "tamano": tam,
        "maxima": max,
        "minima": min,
        "resultRango": resRango
    };
}
function desviacionMedia(arrayString){
    const arrayNum = [];
    arrayString.forEach(element => {
        arrayNum.push(Number(element));
    });
    const tam = arrayNum.length;
    const media = promedio(arrayString);
    // --- ---
    const arrayAbs = [];
    arrayNum.forEach(element => {
        const numAbs = Math.abs(element - media);
        arrayAbs.push(Number(numAbs));
    })
    // --- ---
    const addAbs = arrayAbs.reduce((a,b) => a += b);
    const resDM = addAbs/tam;
    return {
        "tamano": tam,
        "media": media,
        "resDM": resDM
    }
};
// --- logica funciones ---
function mediaMedianaFc(){
    // --- Expresion regular solo numeros puntos y comas son aceptados ---
    if(!(winInputEst.value == "")){
        var regex = /^[0-9]+(?:\.[0-9]+)?(?:,[0-9]+(?:\.[0-9]+)?)*$/;
        if(regex.test(winInputEst.value)){
            // --- Obteniendo datos de ventana de entrada como un solo strig ---
            const infoWindow = winInputEst.value;
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
function modaFc(){
    if(!(winInputEst.value == "")){
        // --- Expresion regular solo numeros puntos y comas son aceptados ---
        var regex = /^[^,\s]+(?:,[^,\s]+)*$/;
        if(regex.test(winInputEst.value)){
            // --- Obteniendo datos de ventana de entrada como un solo strig ---
            const infoWinModa = winInputEst.value;
            // --- Separando cada valor del string y poniendolo en un array ---
            const arrayString = infoWinModa.split(",");
            // --- Variable con array filtrado despues de la funcion moda ----
            const arrayFiltro = moda(arrayString);
            // --- impresion ---
            if(arrayFiltro.length == 0){
                mensajeSinDuplicados();
                taResultEstModa.innerHTML = "Ningun elemento se repitío";
            }else{
                arrayFiltro.forEach((res, iter) => {
                    if(iter < arrayFiltro.length -1){
                        taResultEstModa.innerHTML += res[0] + ", ";
                    }else{
                        taResultEstModa.innerHTML += res[0];
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
function rangoFc(){
    if(!(winInputEst.value == "")){
        // --- Expresion regular solo numeros puntos y comas son aceptados ---
        var regex = /^[0-9]+(?:\.[0-9]+)?(?:,[0-9]+(?:\.[0-9]+)?)*$/;
        if(regex.test(winInputEst.value)){
            // --- Obteniendo datos de ventana de entrada como un solo strig ---
            const infoWinModa = winInputEst.value;
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
function desviacionMediaFc(){
    if(!(winInputEst.value == "")){
        // --- Expresion regular solo numeros puntos y comas son aceptados ---
        var regex = /^[0-9]+(?:\.[0-9]+)?(?:,[0-9]+(?:\.[0-9]+)?)*$/;
        if(regex.test(winInputEst.value)){
            // --- Obteniendo datos de ventana de entrada como un solo strig ---
            const infoWinModa = winInputEst.value;
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


