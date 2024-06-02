function topContainer(objeto){
    containerResponsive.appendChild(simpleDirectaImg);
    simpleDirectaImg.classList.add("simpleDirectaImg");
    simpleDirectaImg.appendChild(titleFig);
    titleFig.classList.add("titleFig");
    titleFig.innerHTML = objeto.titleFig;
    simpleDirectaImg.appendChild(imgSD);
    imgSD.setAttribute("src", objeto.imgFig);
};
function bottomContainer(objeto){
    //----Top--------------------------------------------------------------------------------   
    /// --- seccionPCtop titulo ---
    containerResponsive.appendChild(containerPorcentaje);
    containerPorcentaje.classList.add("containerPorcentaje");
    containerPorcentaje.appendChild(divPorcentaje);
    pTitlePC.classList.add("titlesFormules");
    pTitlePC.innerHTML = objeto.titlePorcentaje;
    // --- seccionPCto subtitulo ---
    if(objeto.definicion == "on"){
        divPorcentaje.classList.remove("containerImage2");
        divPorcentaje.classList.add("containerFormules");
        pformulaPC.classList.add("textFormule");
        pformulaPC.innerHTML = objeto.formulaPorcentaje;
        sectionPCtop.classList.add("sectionPCtop");
        sectionPCtop.append(pTitlePC, pformulaPC);
        // ----Top middle------------------------------------------------------------------------   
        if(objeto.radios == "Simple"){
            // --- divs en sectionPcmiddleTop --
            sectionPCmiddleTop.classList.add("sectionPCmiddleTop");
            const divRadioPC = document.createElement("div");
            divRadioPC.classList.add("divRadioPC");
            // --- radio directa ---
            const inputRadioPCD = document.createElement("input");
            inputRadioPCD.setAttribute("type", "radio");
            inputRadioPCD.setAttribute("name", "radPCDI");
            inputRadioPCD.setAttribute("id", "radPCD");
            // --- label radio dierecta ---
            const inputLabelPCD = document.createElement("label");
            inputLabelPCD.setAttribute("for", "radPCD");
            inputLabelPCD.innerHTML = "Directa";
            // --- radio inversa ---
            const inputRadioPCI = document.createElement("input");
            inputRadioPCI.setAttribute("type", "radio");
            inputRadioPCI.setAttribute("name", "radPCDI");
            inputRadioPCI.setAttribute("id", "radPCI");
            // --- label radio inversa ---
            const inputLabelPCI = document.createElement("label");
            inputLabelPCI.setAttribute("for", "radPCI");
            inputLabelPCI.innerHTML = "Inversa";
            // --- Adicion de radios y labels ---
            divRadioPC.append(inputRadioPCD, inputLabelPCD,  inputRadioPCI, inputLabelPCI);
            sectionPCmiddleTop.appendChild(divRadioPC);
            // --- asignacion en variables de orientacion ---
            loadVar = "SDI";
            incognitaSC = "S";
            mensDefault();
        }
        if(objeto.radios == "Compuesta"){
            sectionPCmiddleTop.classList.add("sectionPCmiddleTop");
            objeto.lista.forEach(datos =>{
                // radio y label X incognita
                const divRadioX = document.createElement("div");
                divRadioX.classList.add(datos.radX, "rowSty");
                const inputRadioX = document.createElement("input");
                inputRadioX.setAttribute("type", "radio");
                inputRadioX.setAttribute("name", datos.family);
                inputRadioX.setAttribute("id", datos.idForX);
                const inputLabelX = document.createElement("label");
                inputLabelX.setAttribute("for", datos.idForX);
                inputLabelX.innerHTML = datos.textoX;
                divRadioX.append(inputLabelX, inputRadioX);
                // radio y label Directa
                const divRadioD = document.createElement("div");
                divRadioD.classList.add(datos.radD, "rowSty");
                const inputRadioD = document.createElement("input");
                inputRadioD.setAttribute("type", "radio");
                inputRadioD.setAttribute("name", datos.family);
                inputRadioD.setAttribute("id", datos.idForD);
                const inputLabelD = document.createElement("label");
                inputLabelD.setAttribute("for", datos.idForD);
                inputLabelD.innerHTML = datos.textoD;
                divRadioD.append(inputLabelD, inputRadioD);
                // radio y label Inversa
                const divRadioI = document.createElement("div");
                divRadioI.classList.add(datos.radI, "rowSty");
                const inputRadioI = document.createElement("input");
                inputRadioI.setAttribute("type", "radio");
                inputRadioI.setAttribute("name", datos.family);
                inputRadioI.setAttribute("id", datos.idForI);
                const inputLabelI = document.createElement("label");
                inputLabelI.setAttribute("for", datos.idForI);
                inputLabelI.innerHTML = datos.textoI;
                divRadioI.append(inputLabelI, inputRadioI);
                // Agregar a la seccion media
                const divCont = document.createElement("div");
                divCont.classList.add(datos.posDiv, "colSty");
                divCont.append(divRadioX, divRadioD, divRadioI);
                sectionPCmiddleTop.append(divCont);
            });
            // --- asignacion en variables de orientacion ---
            loadVar = "CDIM";
            incognitaSC = "C";
            mensDefault();
        }
        if(objeto.radios == "Descuento"){
            sectionPCmiddleTop.classList.add("sectionPCmiddleTop");
            pMesParrReg = objeto.mesParr;
            mesParr.classList.add(pMesParrReg);
            // Agregar a la seccion media
            sectionPCmiddleTop.append(mesParr);
            loadVar = "DESC";
            incognitaSC = "D";
            mensDefault();
        };
        //----BottomMiddle-----------------------------------------------------------------------
        if(loadVar == "SDI" || loadVar == "CDIM"){
            // --- impresion de ventanas simple o compuesta -----
            sectionPCmiddle.classList.remove(classSimpCompDesc);
            classSimpCompDesc = objeto.secMid;
            sectionPCmiddle.classList.add(classSimpCompDesc);   

            objeto.inputPorcentaje.forEach(winInput => {
                const divWin = document.createElement("div");
                divWin.classList.add(objeto.winPos);
                const labelArea = document.createElement("label");
                labelArea.setAttribute("for", winInput.inputId);
                labelArea.innerHTML = winInput.inputLabel;
                divWin.appendChild(labelArea);
                const inputHeightWindow = document.createElement("input");
                inputHeightWindow.setAttribute("type", "number");
                inputHeightWindow.setAttribute("id", winInput.inputId);
                inputHeightWindow.classList.add("inputStyle");
                divWin.appendChild(inputHeightWindow);
                sectionPCmiddle.appendChild(divWin);
            });
            // --- impresion de secciones ---
            divPorcentaje.append(sectionPCtop, sectionPCmiddleTop, sectionPCmiddle);
            //----Bottom------------------------------------------------------------------------------    
            //--- impresion de ventana resultado secctionPCbottom ---
            pResultPCReg = objeto.resultClPC
            pResultPC.classList.add("winStyle", pResultPCReg);
            sectionPCbottom.append(pResultPC);
        };
        if(loadVar == "DESC"){
            // Seccion PCsubMid
            const sectionPCsubMid = document.createElement("div");
            sectionPCsubMid.classList.add("sectionPCsubMid");
            // Contenedor en PCsubMid
            const containerWindows = document.createElement("div");
            containerWindows.classList.add("containerWindows");
            // div porcentaje de descuento
            const pdd = document.createElement("div");
            pdd.classList.add("pcRow");

            const porcDescLablel = document.createElement("label");
            porcDescLablel.setAttribute("for", "pcPDD");
            porcDescLablel.innerHTML = "Porcentaje descuento %"; 

            porcDescWindow = document.createElement("input");
            porcDescWindow.classList.add("porcDescWindow");
            porcDescWindow.setAttribute("type", "number");
            porcDescWindow.setAttribute("id", "pcPDD");
            pdd.append(porcDescLablel, porcDescWindow);
            // div precio de lista
            const pdl = document.createElement("div");
            pdl.classList.add("pcRow");

            const precListLablel = document.createElement("label");
            precListLablel.setAttribute("for", "pcPDL");
            precListLablel.innerHTML = "Precio de lista $"; 

            precListWindow = document.createElement("input");
            precListWindow.classList.add("desWindows");
            precListWindow.setAttribute("type", "number");
            precListWindow.setAttribute("id", "pcPDL");
            pdl.append(precListLablel, precListWindow);

            // div descuento en cantidad
            const dec = document.createElement("div");
            dec.classList.add("pcRow");

            const descCantLablel = document.createElement("label");
            descCantLablel.innerHTML = "Descuento $"; 

            descCantWindow = document.createElement("input");
            descCantWindow.classList.add("desWindows", "greenBG");
            descCantWindow.disabled = true;
            descCantWindow.setAttribute("id", "pcDEC");
            dec.append(descCantLablel, descCantWindow);
            // div total a pagar
            const tap = document.createElement("div");
            tap.classList.add("pcRow");

            const totalPagLablel = document.createElement("label");
            totalPagLablel.innerHTML = "Total a pagar $"; 

            totalPagWindow = document.createElement("input");
            totalPagWindow.classList.add("desWindows", "greenBG");
            totalPagWindow.disabled = true;
            totalPagWindow.setAttribute("id", "pcTAP");
            tap.append(totalPagLablel, totalPagWindow);

            containerWindows.append(pdd, pdl, dec, tap);

            sectionPCsubMid.append(containerWindows);
            divPorcentaje.append(sectionPCtop, sectionPCmiddleTop, sectionPCsubMid);
        }
        //--- impresion de botones  secctionPCbottom ---
        btnClearPCReg = objeto.btn2ClPC;
        btnClearPC.classList.add("btnClear", btnClearPCReg);
        btnClearPC.innerHTML = "Borrar";

        btnResultPCReg = objeto.btnClPC;
        btnResultPC.classList.add("btnResult", btnResultPCReg);
        btnResultPC.innerHTML = "Resultado";

        btnClearPC.removeEventListener("click", rutaFClear);
        rutaFClear = (eval(objeto.clearWindow));
        btnClearPC.addEventListener("click", rutaFClear);
        
        btnResultPC.removeEventListener("click", rutaFPC);
        rutaFPC = (eval(objeto.funcionPorcentaje));
        btnResultPC.addEventListener("click", rutaFPC);

        sectionPCbottom.classList.add("sectionPCbottom");
        sectionPCbottom.append(btnClearPC, btnResultPC);
        divPorcentaje.append(sectionPCbottom);
    }
    else if(objeto.definicion == "off"){
        pTitlePC.classList.add("titleImg");

        divPorcentaje.classList.remove("containerFormules");
        divPorcentaje.classList.add("containerImage2");
        const imgDefinicion = document.createElement("img");
        imgDefinicion.classList.add("imagenDefinicion");
        imgDefinicion.setAttribute("src", objeto.imgFig2);
        divPorcentaje.append(pTitlePC,  imgDefinicion);
    };
}
function asignacionesWindowsRadios(){
    if(loadVar == "SDI"){
        SD = document.querySelector("#radPCD");
        SI = document.querySelector("#radPCI");
        winA = document.querySelector("#winSDIvalorA");
        winB = document.querySelector("#winSDIvalorB");
        winW = document.querySelector("#winSDIvalorW");
        winY = document.querySelector("#winSDIvalorY");
        winA.classList.remove("resultColor");
        winB.classList.remove("resultColor");
        winW.classList.remove("resultColor");
        winY.classList.remove("resultColor");
    }else if(loadVar == "CDIM"){
        XL = document.querySelector("#radPCLX");
        DL = document.querySelector("#radPCLD");
        IL = document.querySelector("#radPCLI");
        XC = document.querySelector("#radPCCX");
        DC = document.querySelector("#radPCCD");
        IC = document.querySelector("#radPCCI");
        XR = document.querySelector("#radPCRX");
        DR = document.querySelector("#radPCRD");
        IR = document.querySelector("#radPCRI");
        winA = document.querySelector("#winCDIMvalorA");
        winB = document.querySelector("#winCDIMvalorB");
        winC = document.querySelector("#winCDIMvalorC");
        winW = document.querySelector("#winCDIMvalorW");
        winY = document.querySelector("#winCDIMvalorY");
        winZ = document.querySelector("#winCDIMvalorZ");
        XL.checked = false;
        XC.checked = false;
        XR.checked = false;
        winA.classList.remove("resultColor");
        winB.classList.remove("resultColor");
        winC.classList.remove("resultColor");
        winW.classList.remove("resultColor");
        winY.classList.remove("resultColor");
        winZ.classList.remove("resultColor");
    };
};


function borrar(){
    loadVar = "";
    incognitaSC = "";
    sectionPCmiddleTop.innerHTML = "";
    sectionPCmiddle.innerHTML = "";
    sectionPCbottom.innerHTML = "";

    pResultPC.innerHTML = "";
    pResultPC.classList.remove(pResultPCReg);
    pResultPC.classList.remove("bgChange");

    mesParr.innerHTML = "";
    mesParr.classList.remove(pMesParrReg);
    btnResultPC.classList.remove(btnResultPCReg, "btnInactive");
    btnResultPC.disabled = false;

    btnClearPC.classList.remove(btnClearPCReg);
    containerFiguras.innerHTML = "";
    divPorcentaje.innerHTML = "";

    pTitlePC.classList.remove("titleImg");
};
function disableWindow(){
    if(incognitaSC == "S"){
        winA.disabled = true;
        winB.disabled = true;
        winW.disabled = true;
        winY.disabled = true;
    }else if(incognitaSC == "C"){
        winA.disabled = true;
        winB.disabled = true;
        winC.disabled = true;
        winW.disabled = true;
        winY.disabled = true;
        winZ.disabled = true;
    }else if(incognitaSC == "D"){
        porcDescWindow.disabled = true;
        precListWindow.disabled = true;
        descCantWindow.disabled = true;
        totalPagWindow.disabled = true;
        porcDescWindow.classList.add("greenBG");
        precListWindow.classList.add("greenBG");
        descCantWindow.classList.remove("greenBG");
        totalPagWindow.classList.remove("greenBG");
        descCantWindow.classList.add("whiteBG");
        totalPagWindow.classList.add("whiteBG");
    };
};
function enableWindow(){
    if(incognitaSC == "S"){
        winA.disabled = false;
        winB.disabled = false;
        winW.disabled = false;
        winY.disabled = false;
    }else if(incognitaSC == "C"){
        winA.disabled = false;
        winB.disabled = false;
        winC.disabled = false;
        winW.disabled = false;
        winY.disabled = false;
        winZ.disabled = false;
    }else if(incognitaSC == "D"){
        porcDescWindow.disabled = false;
        precListWindow.disabled = false;
        descCantWindow.disabled = true;
        totalPagWindow.disabled = true;
    }
};
function clearInputsWindows(){
    if(incognitaSC == "S"){
        winA.value = "";
        winB.value = "";
        winW.value = "";
        winY.value = "";
    }else if(incognitaSC == "C"){
        winA.value = "";
        winB.value = "";
        winC.value = "";
        winW.value = "";
        winY.value = "";
        winZ.value = "";
    }else if(incognitaSC == "D"){
        porcDescWindow.value = "";
        precListWindow.setAttribute("type", "number");
        precListWindow.value = "";
        descCantWindow.value = "";
        totalPagWindow.value = "";
    };
};
function clearColor(){
    pResultPC.classList.remove("bgChange");
    if(incognitaSC == "S"){
        winA.classList.remove("resultColor");
        winB.classList.remove("resultColor");
        winW.classList.remove("resultColor");
        winY.classList.remove("resultColor");
    }else if(incognitaSC == "C"){
        winA.classList.remove("resultColor");
        winB.classList.remove("resultColor");
        winC.classList.remove("resultColor");
        winW.classList.remove("resultColor");
        winY.classList.remove("resultColor");
        winZ.classList.remove("resultColor");
    }else if(incognitaSC == "D"){
        porcDescWindow.classList.remove("greenBG");
        precListWindow.classList.remove("greenBG");
        descCantWindow.classList.remove("whiteBG");
        totalPagWindow.classList.remove("whiteBG");
        descCantWindow.classList.add("greenBG");
        totalPagWindow.classList.add("greenBG");
    };
};
function clearRadios(){
    if(incognitaSC == "S"){
        SD.checked = false;
        SI.checked = false;
    }else if(incognitaSC == "C"){
        XL.checked = false;
        DL.checked = false;
        IL.checked = false;
        XC.checked = false;
        DC.checked = false;
        IC.checked = false;
        XR.checked = false;
        DR.checked = false;
        IR.checked = false;
    }
};
function enableRadios(){
    if(incognitaSC == "S"){
        SD.disabled = false;
        SI.disabled = false;
    }else if(incognitaSC == "C"){
        XL.disabled = false;
        DL.disabled = false;
        IL.disabled = false;
        XC.disabled = false;
        DC.disabled = false;
        IC.disabled = false;
        XR.disabled = false;
        DR.disabled = false;
        IR.disabled = false;
    };
};
function disableButtonResultado(){
    btnResultPC.disabled = true;
    btnResultPC.classList.remove("btnResult");
    btnResultPC.classList.add("btnInactive");
};
function enableButtonResultado(){
    btnResultPC.disabled = false;
    btnResultPC.classList.remove("btnInactive");
    btnResultPC.classList.add("btnResult");
};
function mensDefault(){
    pResultPC.innerHTML = "";
    mesParr.innerHTML = "";
    if(incognitaSC == "S"){
        simpleValores();
    }else if(incognitaSC == "C"){
        compuestaValores();
    }else if(incognitaSC == "D"){
        descuentoValores();
    }
};
function clearSCD(){
    clearRadios();
    enableRadios();
    clearColor();
    clearInputsWindows();
    enableWindow();
    mensDefault();
    enableButtonResultado();
    pTitlePC.classList.remove("titleImg");
};
function topContainer(objeto){
    containerResponsive.appendChild(simpleDirectaImg);
    simpleDirectaImg.classList.add("simpleDirectaImg");
    simpleDirectaImg.appendChild(titleFig);
    titleFig.classList.add("titleFig");
    titleFig.innerHTML = objeto.titleFig;
    simpleDirectaImg.appendChild(imgSD);
    imgSD.setAttribute("src", objeto.imgFig);
};
function bottomContainer(objeto){
    //----Top--------------------------------------------------------------------------------   
    /// --- seccionPCtop titulo ---
    containerResponsive.appendChild(containerPorcentaje);
    containerPorcentaje.classList.add("containerPorcentaje");
    containerPorcentaje.appendChild(divPorcentaje);
    pTitlePC.classList.add("titlesFormules");
    pTitlePC.innerHTML = objeto.titlePorcentaje;
    // --- seccionPCto subtitulo ---
    if(objeto.definicion == "on"){
        divPorcentaje.classList.remove("containerImage2");
        divPorcentaje.classList.add("containerFormules");
        pformulaPC.classList.add("textFormule");
        pformulaPC.innerHTML = objeto.formulaPorcentaje;
        sectionPCtop.classList.add("sectionPCtop");
        sectionPCtop.append(pTitlePC, pformulaPC);
        // ----Top middle------------------------------------------------------------------------   
        if(objeto.radios == "Simple"){
            // --- divs en sectionPcmiddleTop --
            sectionPCmiddleTop.classList.add("sectionPCmiddleTop");
            const divRadioPC = document.createElement("div");
            divRadioPC.classList.add("divRadioPC");
            // --- radio directa ---
            const inputRadioPCD = document.createElement("input");
            inputRadioPCD.setAttribute("type", "radio");
            inputRadioPCD.setAttribute("name", "radPCDI");
            inputRadioPCD.setAttribute("id", "radPCD");
            // --- label radio dierecta ---
            const inputLabelPCD = document.createElement("label");
            inputLabelPCD.setAttribute("for", "radPCD");
            inputLabelPCD.innerHTML = "Directa";
            // --- radio inversa ---
            const inputRadioPCI = document.createElement("input");
            inputRadioPCI.setAttribute("type", "radio");
            inputRadioPCI.setAttribute("name", "radPCDI");
            inputRadioPCI.setAttribute("id", "radPCI");
            // --- label radio inversa ---
            const inputLabelPCI = document.createElement("label");
            inputLabelPCI.setAttribute("for", "radPCI");
            inputLabelPCI.innerHTML = "Inversa";
            // --- Adicion de radios y labels ---
            divRadioPC.append(inputRadioPCD, inputLabelPCD,  inputRadioPCI, inputLabelPCI);
            sectionPCmiddleTop.appendChild(divRadioPC);
            // --- asignacion en variables de orientacion ---
            loadVar = "SDI";
            incognitaSC = "S";
            mensDefault();
        }
        if(objeto.radios == "Compuesta"){
            sectionPCmiddleTop.classList.add("sectionPCmiddleTop");
            objeto.lista.forEach(datos =>{
                // radio y label X incognita
                const divRadioX = document.createElement("div");
                divRadioX.classList.add(datos.radX, "rowSty");
                const inputRadioX = document.createElement("input");
                inputRadioX.setAttribute("type", "radio");
                inputRadioX.setAttribute("name", datos.family);
                inputRadioX.setAttribute("id", datos.idForX);
                const inputLabelX = document.createElement("label");
                inputLabelX.setAttribute("for", datos.idForX);
                inputLabelX.innerHTML = datos.textoX;
                divRadioX.append(inputLabelX, inputRadioX);
                // radio y label Directa
                const divRadioD = document.createElement("div");
                divRadioD.classList.add(datos.radD, "rowSty");
                const inputRadioD = document.createElement("input");
                inputRadioD.setAttribute("type", "radio");
                inputRadioD.setAttribute("name", datos.family);
                inputRadioD.setAttribute("id", datos.idForD);
                const inputLabelD = document.createElement("label");
                inputLabelD.setAttribute("for", datos.idForD);
                inputLabelD.innerHTML = datos.textoD;
                divRadioD.append(inputLabelD, inputRadioD);
                // radio y label Inversa
                const divRadioI = document.createElement("div");
                divRadioI.classList.add(datos.radI, "rowSty");
                const inputRadioI = document.createElement("input");
                inputRadioI.setAttribute("type", "radio");
                inputRadioI.setAttribute("name", datos.family);
                inputRadioI.setAttribute("id", datos.idForI);
                const inputLabelI = document.createElement("label");
                inputLabelI.setAttribute("for", datos.idForI);
                inputLabelI.innerHTML = datos.textoI;
                divRadioI.append(inputLabelI, inputRadioI);
                // Agregar a la seccion media
                const divCont = document.createElement("div");
                divCont.classList.add(datos.posDiv, "colSty");
                divCont.append(divRadioX, divRadioD, divRadioI);
                sectionPCmiddleTop.append(divCont);
            });
            // --- asignacion en variables de orientacion ---
            loadVar = "CDIM";
            incognitaSC = "C";
            mensDefault();
        }
        if(objeto.radios == "Descuento"){
            sectionPCmiddleTop.classList.add("sectionPCmiddleTop");
            pMesParrReg = objeto.mesParr;
            mesParr.classList.add(pMesParrReg);
            // Agregar a la seccion media
            sectionPCmiddleTop.append(mesParr);
            loadVar = "DESC";
            incognitaSC = "D";
            mensDefault();
        };
        //----BottomMiddle-----------------------------------------------------------------------
        if(loadVar == "SDI" || loadVar == "CDIM"){
            // --- impresion de ventanas simple o compuesta -----
            sectionPCmiddle.classList.remove(classSimpCompDesc);
            classSimpCompDesc = objeto.secMid;
            sectionPCmiddle.classList.add(classSimpCompDesc);   

            objeto.inputPorcentaje.forEach(winInput => {
                const divWin = document.createElement("div");
                divWin.classList.add(objeto.winPos);
                const labelArea = document.createElement("label");
                labelArea.setAttribute("for", winInput.inputId);
                labelArea.innerHTML = winInput.inputLabel;
                divWin.appendChild(labelArea);
                const inputHeightWindow = document.createElement("input");
                inputHeightWindow.setAttribute("type", "number");
                inputHeightWindow.setAttribute("id", winInput.inputId);
                inputHeightWindow.classList.add("inputStyle");
                divWin.appendChild(inputHeightWindow);
                sectionPCmiddle.appendChild(divWin);
            });
            // --- impresion de secciones ---
            divPorcentaje.append(sectionPCtop, sectionPCmiddleTop, sectionPCmiddle);
            //----Bottom------------------------------------------------------------------------------    
            //--- impresion de ventana resultado secctionPCbottom ---
            pResultPCReg = objeto.resultClPC
            pResultPC.classList.add("winStyle", pResultPCReg);
            sectionPCbottom.append(pResultPC);
        };
        if(loadVar == "DESC"){
            // Seccion PCsubMid
            const sectionPCsubMid = document.createElement("div");
            sectionPCsubMid.classList.add("sectionPCsubMid");
            // Contenedor en PCsubMid
            const containerWindows = document.createElement("div");
            containerWindows.classList.add("containerWindows");
            // div porcentaje de descuento
            const pdd = document.createElement("div");
            pdd.classList.add("pcRow");

            const porcDescLablel = document.createElement("label");
            porcDescLablel.setAttribute("for", "pcPDD");
            porcDescLablel.innerHTML = "Porcentaje descuento %"; 

            porcDescWindow = document.createElement("input");
            porcDescWindow.classList.add("porcDescWindow");
            porcDescWindow.setAttribute("type", "number");
            porcDescWindow.setAttribute("id", "pcPDD");
            pdd.append(porcDescLablel, porcDescWindow);
            // div precio de lista
            const pdl = document.createElement("div");
            pdl.classList.add("pcRow");

            const precListLablel = document.createElement("label");
            precListLablel.setAttribute("for", "pcPDL");
            precListLablel.innerHTML = "Precio de lista $"; 

            precListWindow = document.createElement("input");
            precListWindow.classList.add("desWindows");
            precListWindow.setAttribute("type", "number");
            precListWindow.setAttribute("id", "pcPDL");
            pdl.append(precListLablel, precListWindow);

            // div descuento en cantidad
            const dec = document.createElement("div");
            dec.classList.add("pcRow");

            const descCantLablel = document.createElement("label");
            descCantLablel.innerHTML = "Descuento $"; 

            descCantWindow = document.createElement("input");
            descCantWindow.classList.add("desWindows", "greenBG");
            descCantWindow.disabled = true;
            descCantWindow.setAttribute("id", "pcDEC");
            dec.append(descCantLablel, descCantWindow);
            // div total a pagar
            const tap = document.createElement("div");
            tap.classList.add("pcRow");

            const totalPagLablel = document.createElement("label");
            totalPagLablel.innerHTML = "Total a pagar $"; 

            totalPagWindow = document.createElement("input");
            totalPagWindow.classList.add("desWindows", "greenBG");
            totalPagWindow.disabled = true;
            totalPagWindow.setAttribute("id", "pcTAP");
            tap.append(totalPagLablel, totalPagWindow);

            containerWindows.append(pdd, pdl, dec, tap);

            sectionPCsubMid.append(containerWindows);
            divPorcentaje.append(sectionPCtop, sectionPCmiddleTop, sectionPCsubMid);
        }
        //--- impresion de botones  secctionPCbottom ---
        btnClearPCReg = objeto.btn2ClPC;
        btnClearPC.classList.add("btnClear", btnClearPCReg);
        btnClearPC.innerHTML = "Borrar";

        btnResultPCReg = objeto.btnClPC;
        btnResultPC.classList.add("btnResult", btnResultPCReg);
        btnResultPC.innerHTML = "Resultado";

        btnClearPC.removeEventListener("click", rutaFClear);
        rutaFClear = (eval(objeto.clearWindow));
        btnClearPC.addEventListener("click", rutaFClear);
        
        btnResultPC.removeEventListener("click", rutaFPC);
        rutaFPC = (eval(objeto.funcionPorcentaje));
        btnResultPC.addEventListener("click", rutaFPC);

        sectionPCbottom.classList.add("sectionPCbottom");
        sectionPCbottom.append(btnClearPC, btnResultPC);
        divPorcentaje.append(sectionPCbottom);
    }
    else if(objeto.definicion == "off"){
        pTitlePC.classList.add("titleImg");

        divPorcentaje.classList.remove("containerFormules");
        divPorcentaje.classList.add("containerImage2");
        const imgDefinicion = document.createElement("img");
        imgDefinicion.classList.add("imagenDefinicion");
        imgDefinicion.setAttribute("src", objeto.imgFig2);
        divPorcentaje.append(pTitlePC,  imgDefinicion);
    };
}
function inc_Simple(){
    if(SD.checked || SI.checked){
        if(winA.value == ""){
            if(SD.checked){
                result = Number((winW.value * winB.value) / winY.value);
            }else if(SI.checked){
                result = Number((winW.value * winY.value) / winB.value);
            };
            winA.classList.add("resultColor");
            winA.value = result.toFixed(2);
        }else if(winB.value == ""){
            if(SD.checked){
                result = Number((winY.value * winA.value) / winW.value);
            }else if(SI.checked){
                result = Number((winY.value * winW.value) / winA.value);
            };
            winB.classList.add("resultColor");
            winB.value = result.toFixed(2);
        }else if(winW.value == ""){
            if(SD.checked){
                result = Number((winA.value * winY.value) / winB.value);
            }else if(SI.checked){
                result = Number((winA.value * winB.value) / winY.value);
            };
            winW.classList.add("resultColor");
            winW.value = result.toFixed(2);
        }else if(winY.value == ""){
            if(SD.checked){
                result = Number((winB.value * winW.value) / winA.value);
            }else if(SI.checked){
                result = Number((winB.value * winA.value) / winW.value);
            };
            winY.classList.add("resultColor");
            winY.value = result.toFixed(2);
        };
        if(SD.checked){
            SI.disabled = true;
        }else if(SI.checked){
            SD.disabled = true;
        };
        
        pResultPC.classList.add("bgChange");
        pResultPC.innerHTML = `Resultado = ${formato(result.toFixed(2))}`;
        disableWindow();
        disableButtonResultado(); 
    }else{
        pResultPC.innerHTML = "Elegir directa o inversa";
    };
};
function incognitaAW (){
    if(DC.checked && DR.checked){
        magnitud1 = winB.value * winC.value;
        magnitud2 = winY.value * winZ.value;
        IC.disabled = true;
        IR.disabled = true;
    }else if(IC.checked && IR.checked){
        magnitud1 = winY.value * winZ.value;
        magnitud2 = winB.value * winC.value;
        DC.disabled = true;
        DR.disabled = true;
    }else if(DC.checked && IR.checked){
        magnitud1 = winB.value * winZ.value;
        magnitud2 = winY.value * winC.value;
        IC.disabled = true;
        DR.disabled = true;
    }else if(IC.checked && DR.checked){
        magnitud1 = winY.value * winC.value;
        magnitud2 = winB.value * winZ.value;
        DC.disabled = true;
        IR.disabled = true;
    };
    if(winA.value == ""){
        resultR3C = winW.value * magnitud1 / magnitud2;
        pResultPC.classList.add("bgChange");
        pResultPC.innerHTML = `Resultado ${formato(resultR3C.toFixed(2))}`;
        winA.value = resultR3C.toFixed(2);
        winA.classList.add("resultColor");
        disableWindow();
        disableButtonResultado();
    }else if(winW.value == ""){
        resultR3C = winA.value * magnitud2 / magnitud1;
        pResultPC.classList.add("bgChange");
        pResultPC.innerHTML = `Resultado ${formato(resultR3C.toFixed(2))}`;
        winW.value = resultR3C.toFixed(2);
        winW.classList.add("resultColor");
        disableWindow();
        disableButtonResultado(); 
    };
};
function incognitaBY(){
    if(DL.checked && DR.checked){
        magnitud1 = winA.value * winC.value;
        magnitud2 = winW.value * winZ.value;
        IL.disabled = true;
        IR.disabled = true;
    }else if(IL.checked && IR.checked){
        magnitud1 = winW.value * winZ.value;
        magnitud2 = winA.value * winC.value;
        DL.disabled = true;
        DR.disabled = true;
    }else if(DL.checked && IR.checked){
        magnitud1 = winA.value * winZ.value;
        magnitud2 = winW.value * winC.value;
        IL.disabled = true;
        DR.disabled = true;
    }else if(IL.checked && DR.checked){
        magnitud1 = winW.value * winC.value;
        magnitud2 = winA.value * winZ.value;
        DL.disabled = true;
        IR.disabled = true;
    };
    if(winB.value == ""){
        resultR3C = winY.value * magnitud1 / magnitud2;
        pResultPC.classList.add("bgChange");
        pResultPC.innerHTML = `Resultado ${formato(resultR3C.toFixed(2))}`;
        winB.value = resultR3C.toFixed(2);
        winB.classList.add("resultColor");
        disableWindow();
        disableButtonResultado();
    }else if(winY.value == ""){
        resultR3C = winB.value * magnitud2 / magnitud1;
        pResultPC.classList.add("bgChange");
        pResultPC.innerHTML = `Resultado ${formato(resultR3C.toFixed(2))}`;
        winY.value = resultR3C.toFixed(2);
        winY.classList.add("resultColor");
        disableWindow();
        disableButtonResultado(); 
    };
};
function incognitaCZ(){
    if(DL.checked && DC.checked){
        magnitud1 = winA.value * winB.value;
        magnitud2 = winW.value * winY.value;
        IL.disabled = true;
        IC.disabled = true;
    }else if(IL.checked && IC.checked){
        magnitud1 = winW.value * winY.value;
        magnitud2 = winA.value * winB.value;
        DL.disabled = true;
        DC.disabled = true;
    }else if(DL.checked && IC.checked){
        magnitud1 = winA.value * winY.value;
        magnitud2 = winW.value * winB.value;
        IL.disabled = true;
        DC.disabled = true;
    }else if(IL.checked && DC.checked){
        magnitud1 = winW.value * winB.value;
        magnitud2 = winA.value * winY.value;
        DL.disabled = true;
        IC.disabled = true;
    };
    if(winC.value == ""){
        resultR3C = winZ.value * magnitud1 / magnitud2;
        pResultPC.classList.add("bgChange");
        pResultPC.innerHTML = `Resultado ${formato(resultR3C.toFixed(2))}`;
        winC.value = resultR3C.toFixed(2);
        winC.classList.add("resultColor");
        disableWindow();
        disableButtonResultado();
    }else if(winZ.value == ""){
        resultR3C = winC.value * magnitud2 / magnitud1;
        pResultPC.classList.add("bgChange");
        pResultPC.innerHTML = `Resultado ${formato(resultR3C.toFixed(2))}`;
        winZ.value = resultR3C.toFixed(2);
        winZ.classList.add("resultColor");
        disableWindow();
        disableButtonResultado();
    };
};
function leftDisabledR(){
    XL.checked = true;
    DL.disabled = true;
    IL.disabled = true;
    XC.disabled = true;
    XR.disabled = true;
};
function centerDisabledR(){
    XL.disabled = true;
    XC.checked = true;
    DC.disabled = true;
    IC.disabled = true;
    XR.disabled = true;
};
function rightDisabledR(){
    XL.disabled = true;
    XC.disabled = true;
    XR.checked = true;
    DR.disabled = true;
    IR.disabled = true;
};

function simpleValores(){
    pResultPC.innerHTML = "Introduce 3 valores mayores<br> a 0 y deja vacia la incógnita.";
};
function compuestaValores(){
    pResultPC.innerHTML = "Introduce 5 valores mayores<br> a 0 y deja vacia la incógnita.";
};
function mensajeDI(){
    pResultPC.innerHTML = "Elegir su relación directa (D)<br>o inversa (I) respecto a (X)";
};
function mensajeIncognita(){
    pResultPC.innerHTML = "Se permite solo una incógnita<br>(X) con su relación (D) (I)";
};
function descuentoValores(){
    mesParr.innerHTML = "Introduce porcentaje y <br>precio de lista ";
};


function pcSDI(){
    if(winA.value == "" && winB.value > 0 && winW.value > 0 && (winY.value > 0 )){
        inc_Simple();
    }else if(winA.value > 0 && winB.value == "" && winW.value > 0 && winY.value > 0){
        inc_Simple();
    }else if(winA.value > 0 && winB.value > 0 && winW.value == "" && winY.value > 0){
        inc_Simple();
    }else if(winA.value > 0 && winB.value > 0 && winW.value > 0 && winY.value == ""){
        inc_Simple();
    }else{
        pResultPC.innerHTML = "Solo 3 valores mayores a 0 con <br>una incógnita son permitidos.";
    };
};
function pcCDIM(){
    //-------------------------Window A y W----------------------------
    if((winA.value == "" && winB.value > 0 && winC.value > 0 && winW.value > 0 && winY.value > 0 && winZ.value > 0) || (winA.value > 0 && winB.value > 0 && winC.value > 0 && winW.value == "" && winY.value > 0 && winZ.value > 0)){
        if((XL.checked || DL.checked || IL.checked) && (XC.checked || DC.checked || IC.checked) && (XR.checked || DR.checked || IR.checked)){
            if((XL.checked && DC.checked && DR.checked) || (XL.checked && IC.checked && IR.checked) || (XL.checked && DC.checked && IR.checked) || (XL.checked && IC.checked && DR.checked)){
                incognitaAW ();
                leftDisabledR();
            }else{
                leftDisabledR();
                mensajeIncognita();
            };
        }else{
            mensajeDI();
        };
    //-------------------------Window B y Y----------------------------
    }else if((winA.value > 0 && winB.value == "" && winC.value > 0 && winW.value > 0 && winY.value > 0 && winZ.value > 0) || (winA.value > 0 && winB.value > 0 && winC.value > 0 && winW.value > 0 && winY.value == "" && winZ.value > 0)){
        if((XL.checked || DL.checked || IL.checked) && (XC.checked || DC.checked || IC.checked) && (XR.checked || DR.checked || IR.checked)){
            if((DL.checked && XC.checked && DR.checked) || (IL.checked && XC.checked && IR.checked) || (DL.checked && XC.checked && IR.checked) || (IL.checked && XC.checked && DR.checked)){
                incognitaBY ();
                centerDisabledR();
            }else{
                centerDisabledR();
                mensajeIncognita();
            };
        }else{
            mensajeDI();
        };
    //-------------------------Window C y Z----------------------------
    }else if((winA.value > 0 && winB.value > 0 && winC.value == ""  && winW.value > 0 && winY.value > 0 && winZ.value > 0) || (winA.value > 0 && winB.value > 0 && winC.value > 0 && winW.value > 0 && winY.value > 0 && winZ.value == "")){
        if((XL.checked || DL.checked || IL.checked) && (XC.checked || DC.checked || IC.checked) && (XR.checked || DR.checked || IR.checked)){
            if((DL.checked && DC.checked && XR.checked) || (IL.checked && IC.checked && XR.checked) || (DL.checked && IC.checked && XR.checked) || (IL.checked && DC.checked && XR.checked)){
                incognitaCZ ();
                rightDisabledR();
            }else{
                rightDisabledR();
                mensajeIncognita();
            };
        }else{
            mensajeDI();
        };
    }else{
        pResultPC.innerHTML = "Solo 5 valores mayores a 0 con <br>una incógnita son permitidos.";
    };
};