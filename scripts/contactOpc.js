// --- Contáctanos ---
function emailForm(){
    titlesIndexText.innerText = "Contáctanos";
    const contactanosCont = document.createElement("div");
    contactanosCont.classList.add("contactanosCont");

    // const formCont = document.createElement("div");
    // formCont.classList.add("formCont");

    // const labelEmail = document.createElement("label");
    // labelEmail.setAttribute("for", "inputEmail");
    // labelEmail.innerText = "Email :";
    // const inputEmail = document.createElement("input");
    // inputEmail.setAttribute("type", "input");
    // inputEmail.setAttribute("id", "inputEmail");

    // const labelName = document.createElement("label");
    // labelName.setAttribute("for", "inputName");
    // labelName.innerText = "Name :";
    // const inputName = document.createElement("input");
    // inputName.setAttribute("type", "input");
    // inputName.setAttribute("id", "inputName");

    // const labelTexArea = document.createElement("label");
    // labelTexArea.setAttribute("for", "labelTexArea");
    // labelTexArea.innerText = "Descripción :";
    // const inputTexArea = document.createElement("textarea");
    // inputTexArea.setAttribute("id", "labelTexArea");

    // const btnSubmit = document.createElement("button");
    // btnSubmit.setAttribute("type", "submit");
    // btnSubmit.classList.add("btnSubmit");
    // btnSubmit.innerText = "Enviar";

    // formCont.append(labelEmail, inputEmail, labelName, inputName, labelTexArea, inputTexArea, btnSubmit);
    // contactanosCont.append(formCont);
    const formInfo = `
        <div class="formCont">
            <form class="formCl" id="formId" action="">
                <label for="inputEmail">Email :</label>
                <Input type="input" id="inputEmail" name="email" required></Input>
                <label for="inputName">Nombre :</label>
                <Input type="input" id="inputName" name="nombre" required></Input>
                <label for="labelTexArea">Descripción :</label>
                <textarea id="labelTexArea" name="descripcion" required></textarea>
                <div class="btnSubmitCont">
                    <button type="button" class="btnView btnBorrar">Borrar</button>
                    <button type="submit" class="btnView btnSubmit">Enviar</button>
                </div>
            </form>
        </div>
    `
    contactanosCont.innerHTML= formInfo;
    return contactanosCont;
};
function dataSend(){
    if(!(winEmail.value == "") && !(winNombre.value == "") && !(winDescripcion.value == "")){
        console.log("enviado");
        winMesgSend();
    } ;
};
function dataClear(){
    winEmail.value = "";
    winNombre.value = "";
    winDescripcion.value = "";
}

function winMesgSend(){
    const winMesSendInfoCont = document.createElement("div");
    winMesSendInfoCont.classList.add("winMesSendInfoCont")
    const winMesSendInfo = `
        <div class="winMesSendInfo">
            <img src="../assets2/envelope.svg">
        </div>
    `
    winMesSendInfoCont.innerHTML = winMesSendInfo;
    cleanCont();
    containerFiguras.append(winMesSendInfoCont);
};

// --- Redes Sociales Imagenes ---
const socialMedCont = document.createElement("div");
socialMedCont.classList.add("socialMedCont");

const socialMedImg = `
<div class="socMediconsCont">
    <a href="#"><img class="smImg" alt="twiterX" src="../assets2/icons8-twitterx.svg"></img></a>
    <a href="#"><img class="smImg" alt="facebook" src="../assets2/icons8-facebook.svg"></img></a>
    <a href="#"><img class="smImg" alt="instagram" src="../assets2/icons8-instagram.svg"></img></a>
    <a href="#"><img class="smImg" alt="tiktok" src="../assets2/icons8-tik-tok.svg"></img></a>
    <a href="#"><img class="smImg" alt="youtube" src="../assets2/icons8-youtube.svg"></img></a>
</div>
`;
socialMedCont.innerHTML = socialMedImg;