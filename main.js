'use strict'

const questionDesc = 'Are you sure you want to unblock Fran?';
const unBtnDesc = 'Unlock';
const canBtnDesc = 'Cancel';
const unblockCheck = 'Welcome, ava65!';


class BaseWidget {

    constructor (nameId, desc, btn1, btn2, unblockMsg) {

    let stylesheet = document.createElement('style');
    document.head.append(stylesheet);
    stylesheet.innerHTML = `
    body {
        position: relative;
        display: flex;
        margin: auto;
        height: 100vh;
        width: 100vw;
    }

    #container {
        margin: auto;
        width: 40%;
        display: flex;
        flex-direction: column;
        min-height: 32%;
        border: medium solid blue;
        padding: 1%;
        background: black;
        position: relative;
    }

    #main_widget_wrap {
        margin: 0 auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    p {
        display: block;
        text-align: center;
        color: #cacaca;
        position: relative;
        font-weight: bold;
        font-size: large;
    }
    
    img {
        position: relative;
        width: 15%;
        height: 15%;
        display: block;
        margin: auto;
    }

    .widget_btn_wrap {
        position: relative;
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 8% auto 0;
        justify-content: space-around;
    }
    
    button {
        outline: none;
        display: block;
        position: relative;
        width: 50%;
        height: 20%;
        background: blue;
        border: none;
        font-weight: bold;
        border-radius: 10%;
        margin: 1%;
        padding: 2%;
        font-size: large;
    }

    #unblock_confirm {
        display: none;
        margin: auto;
        width: 0%;
        flex-direction: column;
        min-height: 0%;
        padding: 1%;
        background: black;
        position: relative;
    }

    #unblock_confirm p {
        margin: 20% auto 0;
    }

    #ok_button {
        background: green;
        margin: 17% auto 0;
        font-size: large;
        text-transform: uppercase;
    }
    `

    // create base widget structure
    this.container = document.querySelector(nameId);
    this.mainWidget = document.createElement('div');
    this.mainWidget.id = 'main_widget_wrap';
    this.question = document.createElement('p')
    this.question.innerHTML = `${desc}`;
    this.charackterImg = document.createElement('img');
    this.charackterImg.src = 'img/eggplant.png';
    this.widgetBtn = document.createElement('div');
    this.widgetBtn.className = 'widget_btn_wrap';
    this.unblockBtn = document.createElement('button');
    this.unblockBtn.id = 'unblock_btn';
    this.unblockBtn.innerHTML = `${btn1}`;
    this.cancelBtn = document.createElement('button');
    this.cancelBtn.id = 'cancel_btn';
    this.cancelBtn.innerHTML = `${btn2}`;

    this.container.appendChild(this.mainWidget);
    this.mainWidget.appendChild(this.question);
    this.mainWidget.appendChild(this.charackterImg);
    this.mainWidget.appendChild(this.widgetBtn);
    this.widgetBtn.appendChild(this.unblockBtn);
    this.widgetBtn.appendChild(this.cancelBtn);

    //create unblock message widget structure
    this.messageDiv = document.createElement('div');
    this.messageDiv.id = 'unblock_confirm';
    this.descMessage = document.createElement('p');
    this.descMessage.innerHTML = `${unblockMsg}`;
    this.okButton = document.createElement('button');
    this.okButton.id = 'ok_button';
    this.okButton.innerHTML = 'Ok';

    this.messageDiv.appendChild(this.descMessage);
    this.messageDiv.appendChild(this.okButton);
    this.container.appendChild(this.messageDiv);
    
    }

    //create hide base widget function
    hideMessage () {
        document.getElementById("container").style.display = "none";
    }

    //create check function (for click on base widget check)
    onDivClick (e) {
        e = e || window.event;
        e.stopPropagation();
    }

    //create show function for message widget
    confirmWidget () {
        document.getElementById("main_widget_wrap").style.display = "none";
        document.getElementById("unblock_confirm").style.display = "contents";
    }

};

let widget = new BaseWidget ('#container', questionDesc, unBtnDesc, canBtnDesc, unblockCheck);

document.onclick = widget.hideMessage;

document.getElementById("container").onclick = widget.onDivClick;

document.getElementById('cancel_btn').onclick = widget.hideMessage;
document.getElementById('ok_button').onclick = widget.hideMessage;
document.getElementById('unblock_btn').onclick = widget.confirmWidget;