// ==UserScript==
// @name        pr0megle
// @namespace   pr0megle
// @description pr0gram design for omegle.com
// @include     http://www.omegle.com/
// @version     1.0
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant       unsafeWindow
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

var favicon_link_html = document.createElement('link');
favicon_link_html.rel = 'icon';
favicon_link_html.href = 'https://github.com/pr0megle/pr0megle/blob/master/images/favicon.png';
favicon_link_html.type = 'image/x-icon';

try { 
  document.getElementsByTagName('head')[0].appendChild( favicon_link_html ); 
}
catch(e) { }

var openingMessage = GM_getValue("openingMessage", "Hey! How are you?"); //default opening message
var lag = 500; //time delay before sending the message after it's been typed

function checkForStatus() {
    if (document.getElementsByClassName("logitem").length == 1) { //only go past this if there exists only one message, usually the 'now chatting' message		
        if (openingMessageEnabled()) { //if opening message has been enabled
            if ($(".logitem").text() == "You're now chatting with a random stranger. Say hi!") {
                //new conversation has started so now we need to send opening message
                document.getElementsByClassName("chatmsg")[0].value = openingMessage; // adding the message to chat box
                var t = setTimeout(function () { //making enter be clicked with a timer, with the default 'lag'
                    document.getElementsByClassName("sendbtn")[0].click();
                }, lag);
            }
        }
    }
}

function monitorLogBox() {
    document.body.addEventListener("DOMNodeInserted", checkForStatus, false);
}
monitorLogBox();

function openingMessageEnabled() {
    return document.getElementById('oac-openingmessage').checked;
}

var divOpeningMessage = document.createElement("div");
divOpeningMessage.style.position = "fixed";
divOpeningMessage.style.opacity = "0.8";
divOpeningMessage.style.top = "571px";
divOpeningMessage.style.right = "309px";
divOpeningMessage.style.color = "white";
divOpeningMessage.style.cursor = "pointer";
divOpeningMessage.style.padding = "0px 5px 0px 5px";
divOpeningMessage.style.borderRadius = "0px 0px 0px 0px";
divOpeningMessage.style.width = "147px";
divOpeningMessage.style.zIndex = "6";
divOpeningMessage.style.fontFamily = "Calibri";
divOpeningMessage.innerHTML = '<input style="float:left;" id=oac-openingmessage type=checkbox><label for=oac-openingmessage style="float:left;" >Startmessage </label>  &nbsp; <div style="float: right; " class="edit"> [Edit] </div>'; //there are floats in here to make sure the divs don't use two lines. and also mandatory line spaces (&nbsp;)
flashwrapper.appendChild(divOpeningMessage, flashwrapper.lastChild);

var nextRoomBtn = document.createElement( 'input' );
with( nextRoomBtn ) {
    setAttribute( 'onclick', 'if (document.getElementsByClassName("disconnectbtn")[0]) { document.getElementsByClassName("disconnectbtn")[0].click(); document.getElementsByClassName("disconnectbtn")[0].click();}' );
    setAttribute( 'value', 'Next Room' );
    setAttribute( 'type', 'button' );
    setAttribute( 'id', 'nextRoomBtn' );
    setAttribute( 'name', 'nextRoomBtn' );
}
flashwrapper.appendChild(nextRoomBtn, flashwrapper.lastChild);

var camborder = document.createElement('img');
camborder.src = 'https://github.com/pr0megle/pr0megle/blob/master/images/camborder1.png';
camborder.id = "camborder1";
flashwrapper.appendChild(camborder, flashwrapper.lastChild);

var camborder = document.createElement('img');
camborder.src = 'https://github.com/pr0megle/pr0megle/blob/master/images/camborder2.png';
camborder.id = "camborder2";
camborder.style = "display: none";
flashwrapper.appendChild(camborder, flashwrapper.lastChild);

var camborder = document.createElement('img');
camborder.src = 'https://github.com/pr0megle/pr0megle/blob/master/images/camborder3.png';
camborder.id = "camborder3";
flashwrapper.appendChild(camborder, flashwrapper.lastChild);

var camborder = document.createElement('img');
camborder.src = 'https://github.com/pr0megle/pr0megle/blob/master/images/camborder4.png';
camborder.id = "camborder4";
flashwrapper.appendChild(camborder, flashwrapper.lastChild);

var camborder = document.createElement('img');
camborder.src = 'https://github.com/pr0megle/pr0megle/blob/master/images/camborder5.png';
camborder.id = "camborder5";
flashwrapper.appendChild(camborder, flashwrapper.lastChild);

var camborder = document.createElement('img');
camborder.src = 'https://github.com/pr0megle/pr0megle/blob/master/images/camborder6.png';
camborder.id = "camborder6";
flashwrapper.appendChild(camborder, flashwrapper.lastChild);

var camborder = document.createElement('img');
camborder.src = 'https://github.com/pr0megle/pr0megle/blob/master/images/camborder7.png';
camborder.id = "camborder7";
camborder.style = "display: none";
flashwrapper.appendChild(camborder, flashwrapper.lastChild);

function addMenu() {
    var divGame = document.createElement("div");
    divGame.id = "newStranger2";
    divGame.style.position = "fixed";
    divGame.style.opacity = "1";
    divGame.style.top = "57px";
    divGame.style.right = "8px";
    divGame.style.color = "#161618";
    divGame.style.cursor = "pointer";
    divGame.style.borderRadius = "0px 0px 0px 0px";
    divGame.style.zIndex = "6";
    divGame.style.fontFamily = "Calibri";
    divGame.className = 'gamewindow';

    divGame.innerHTML = "<iframe frameborder='0' width='450px' height='408px' src='http://corry.byethost13.com'></iframe>";
    flashwrapper.appendChild(divGame, flashwrapper.lastChild);
}
addMenu();

var watermarkBtn1 = document.createElement( 'input' );
with( watermarkBtn1 ) {
    setAttribute( 'onclick', 'flash.setWatermarkVisibility(0); var watermarkBtn1 = document.getElementById("watermarkBtn1"); watermarkBtn1.style.display = "none"; var watermarkBtn2 = document.getElementById("watermarkBtn2"); watermarkBtn2.style.display = "";' );
    setAttribute( 'value', 'Hide Watermark' );
    setAttribute( 'type', 'button' );
    setAttribute( 'id', 'watermarkBtn1' );
    setAttribute( 'name', 'watermarkBtn1' );
}
flashwrapper.appendChild(watermarkBtn1, flashwrapper.lastChild);

var watermarkBtn2 = document.createElement( 'input' );
with( watermarkBtn2 ) {
    setAttribute( 'onclick', 'flash.setWatermarkVisibility(1); var watermarkBtn1 = document.getElementById("watermarkBtn1"); watermarkBtn1.style.display = ""; var watermarkBtn2 = document.getElementById("watermarkBtn2"); watermarkBtn2.style.display = "none";' );
    setAttribute( 'value', 'Show Watermark' );
    setAttribute( 'type', 'button' );
    setAttribute( 'id', 'watermarkBtn2' );
    setAttribute( 'name', 'watermarkBtn2' );
}
flashwrapper.appendChild(watermarkBtn2, flashwrapper.lastChild);
$("#watermarkBtn2").hide()

var gamewindowBtn1 = document.createElement( 'input' );
with( gamewindowBtn1 ) {
    setAttribute( 'onclick', 'var gamewindow = document.getElementById("newStranger2"); gamewindow.style.display = "none"; var gamewindowBtn1 = document.getElementById("gamewindowBtn1"); gamewindowBtn1.style.display = "none"; var gamewindowBtn2 = document.getElementById("gamewindowBtn2"); gamewindowBtn2.style.display = "";' );
    setAttribute( 'value', 'Hide Gamewindow' );
    setAttribute( 'type', 'button' );
    setAttribute( 'id', 'gamewindowBtn1' );
    setAttribute( 'name', 'gamewindowBtn1' );
}
flashwrapper.appendChild(gamewindowBtn1, flashwrapper.lastChild);

var gamewindowBtn2 = document.createElement( 'input' );
with( gamewindowBtn2 ) {
    setAttribute( 'onclick', 'var gamewindow = document.getElementById("newStranger2"); gamewindow.style.display = ""; var gamewindowBtn1 = document.getElementById("gamewindowBtn1"); gamewindowBtn1.style.display = ""; var gamewindowBtn2 = document.getElementById("gamewindowBtn2"); gamewindowBtn2.style.display = "none";' );
    setAttribute( 'value', 'Show Gamewindow' );
    setAttribute( 'type', 'button' );
    setAttribute( 'id', 'gamewindowBtn2' );
    setAttribute( 'name', 'gamewindowBtn2' );
}
flashwrapper.appendChild(gamewindowBtn2, flashwrapper.lastChild);
$("#gamewindowBtn2").hide()

var middleBarBtn1 = document.createElement( 'input' );
with( middleBarBtn1 ) {
    setAttribute( 'onclick', 'var camborder2 = document.getElementById("camborder2"); camborder2.style.display = ""; var middleBarBtn1 = document.getElementById("middleBarBtn1"); middleBarBtn1.style.display = "none"; var middleBarBtn2 = document.getElementById("middleBarBtn2"); middleBarBtn2.style.display = "";' );
    setAttribute( 'value', 'Hide Middlebar' );
    setAttribute( 'type', 'button' );
    setAttribute( 'id', 'middleBarBtn1' );
    setAttribute( 'name', 'middleBarBtn1' );
}
flashwrapper.appendChild(middleBarBtn1, flashwrapper.lastChild);

var middleBarBtn2 = document.createElement( 'input' );
with( middleBarBtn2 ) {
    setAttribute( 'onclick', 'var camborder2 = document.getElementById("camborder2"); camborder2.style.display = "none"; var middleBarBtn1 = document.getElementById("middleBarBtn1"); middleBarBtn1.style.display = ""; var middleBarBtn2 = document.getElementById("middleBarBtn2"); middleBarBtn2.style.display = "none";' );
    setAttribute( 'value', 'Show Middlebar' );
    setAttribute( 'type', 'button' );
    setAttribute( 'id', 'middleBarBtn2' );
    setAttribute( 'name', 'middleBarBtn2' );
}
flashwrapper.appendChild(middleBarBtn2, flashwrapper.lastChild);
$("#middleBarBtn2").hide()

var snapshotBtn1 = document.createElement( 'input' );
with( snapshotBtn1 ) {
    setAttribute( 'onclick', 'var camborder7 = document.getElementById("camborder7"); camborder7.style.display = ""; var snapshotBtn1 = document.getElementById("snapshotBtn1"); snapshotBtn1.style.display = "none"; var snapshotBtn2 = document.getElementById("snapshotBtn2"); snapshotBtn2.style.display = "";' );
    setAttribute( 'value', 'Hide Snaposhot' );
    setAttribute( 'type', 'button' );
    setAttribute( 'id', 'snapshotBtn1' );
    setAttribute( 'name', 'snapshotBtn1' );
}
flashwrapper.appendChild(snapshotBtn1, flashwrapper.lastChild);

var snapshotBtn2 = document.createElement( 'input' );
with( snapshotBtn2 ) {
    setAttribute( 'onclick', 'var camborder7 = document.getElementById("camborder7"); camborder7.style.display = "none"; var snapshotBtn1 = document.getElementById("snapshotBtn1"); snapshotBtn1.style.display = ""; var snapshotBtn2 = document.getElementById("snapshotBtn2"); snapshotBtn2.style.display = "none";' );
    setAttribute( 'value', 'Show Snapshot' );
    setAttribute( 'type', 'button' );
    setAttribute( 'id', 'snapshotBtn2' );
    setAttribute( 'name', 'snapshotBtn2' );
}
flashwrapper.appendChild(snapshotBtn2, flashwrapper.lastChild);
$("#snapshotBtn2").hide()

document.addEventListener("DOMNodeInserted", nodeInserted, false);

function nodeInserted(e) {
    if (e.target.id == "flash") { 

        var found = false;

        var params = e.target.getElementsByTagName("param");
        for (var i = 0; i < params.length; i++) {
            if (params[i].getAttribute("name") == "wmode") {
                var clone = params[i].cloneNode(true);
                clone.setAttribute("value", "opaque");
                params[i].parentNode.replaceChild(clone, params[i]);
                found = true;
                break;
            }
        }
		
        if (!found) {
            var clone = e.target.cloneNode(true); 
            var param = document.createElement("param");
            param.setAttribute("name", "wmode");
            param.setAttribute("value", "opaque");
            clone.appendChild(param);        
            e.target.parentNode.replaceChild(clone, e.target);
        }
    }
}

(function() {var css = [
	"#camborder1 { position: absolute; z-index: 100 !important; left: 0px; top: 0px; }",
	"#camborder2 { position: absolute; z-index: 100 !important; left: 0px; top: 320px; }",
	"#camborder3 { position: absolute; z-index: 100 !important; left: 0px; top: 643px; }",
	"#camborder4 { position: absolute; z-index: 100 !important; left: 0px; top: 660px; }",
	"#camborder5 { position: absolute; z-index: 100 !important; left: 245px; top: 683px; }",
	"#camborder6 { position: absolute; z-index: 100 !important; left: 373px; top: 660px; }",
    "#camborder7 { position: absolute; z-index: 100 !important; left: 245px; top: 660px; }",
    "#watermarkBtn1 { position: fixed; right: 328px; top: 474px; width: 130px; background-color: #444; border: 0px; -moz-border-radius: 15px; -webkit-border-radius: 5px; padding: 2px; color: #a0aaaa; }",
    "#watermarkBtn2 { position: fixed; right: 328px; top: 474px; width: 130px; background-color: #444; border: 0px; -moz-border-radius: 15px; -webkit-border-radius: 5px; padding: 2px; color: #a0aaaa; }",
    "#gamewindowBtn1 { position: fixed; right: 328px; top: 499px; width: 130px; background-color: #444; border: 0px; -moz-border-radius: 15px; -webkit-border-radius: 5px; padding: 2px; color: #a0aaaa; }",
    "#gamewindowBtn2 { position: fixed; right: 328px; top: 499px; width: 130px; background-color: #444; border: 0px; -moz-border-radius: 15px; -webkit-border-radius: 5px; padding: 2px; color: #a0aaaa; }",
    "#middleBarBtn1 { position: fixed; right: 328px; top: 524px; width: 130px; background-color: #444; border: 0px; -moz-border-radius: 15px; -webkit-border-radius: 5px; padding: 2px; color: #a0aaaa; }",
    "#middleBarBtn2 { position: fixed; right: 328px; top: 524px; width: 130px; background-color: #444; border: 0px; -moz-border-radius: 15px; -webkit-border-radius: 5px; padding: 2px; color: #a0aaaa; }",
    "#snapshotBtn1 { position: fixed; right: 328px; top: 549px; width: 130px; background-color: #444; border: 0px; -moz-border-radius: 15px; -webkit-border-radius: 5px; padding: 2px; color: #a0aaaa; }",
    "#snapshotBtn2 { position: fixed; right: 328px; top: 549px; width: 130px; background-color: #444; border: 0px; -moz-border-radius: 15px; -webkit-border-radius: 5px; padding: 2px; color: #a0aaaa; }",
    "#nextRoomBtn { position: fixed; right: 8px; top: 474px; width: 312px; height: 94px;background-color: #444; border: 0px; -moz-border-radius: 15px; -webkit-border-radius: 5px; padding: 2px; color: #a0aaaa; }",
    
    // -moz-border-radius: 15px; -webkit-border-radius: 15px; border: 5px solid #009900; padding: 5px;
    
    
    "#flash { min-width: 428px; max-width: 428px; min-height: 695px; max-height: 695px; }",
	"body { background-color: #161618 !important; color: #aaa; }",
	"a:link { color: #888 !important; }",
	"#header { background: #101012 !important; border: 0px !important; height: 25px !important; box-shadow: none !important}",
	"#onlinecount { color: #cccccc !important; top: 5px !important; }",
	".logwrapper { background: #444 !important; border: none !important; margin-left: 404px !important; margin-right: 458px !important; min-height:566px !important; max-height: 566px !important; min-width: 420px !important}",
	"#myNewImage { z-index: 100 !important; }",
	"#logo img { display: none !important; }",
	"#logo canvas { margin-top: -30px !important; margin-left: -35px !important; height: auto !important;}",
	"#tagline img { display: none !important; }",
	".youmsg .msgsource, .strangermsg .msgsource { display: none; }",
	".youmsg:before { content: \"You:\"; font-weight: bold; color: #ee4d2e;}",
	".strangermsg:before { content: \"Stranger:\"; font-weight: bold; color: #1db992;}",
	".sendbtnwrapper { margin-left: 6px !important; }",
	".newbtn { margin-right: 6px !important; }",
	".disconnectbtnwrapper { margin-right: 6px !important; }",
	".disconnectbtn, .sendbtn { background: #444 !important; color: #75c0c7 !important; min-width: 112px; max-width: 112px;}",
	".disconnectbtnwrapper, .newbtn { background-image: none !important; background: #161618 !important; }",
	".chatmsgwrapper, textarea { background: #444 !important; color: #bbbbbb !important; min-width: 176px; }",
	".disconnectbtnwrapper, .sendbtnwrapper { border: none !important; min-width: 112px; max-width: 112px; background-image: none !important; }",
	".chatmsgwrapper { border: none !important; }",
    "#flash { z-index: 1 !important; }",
	".logwrapper { left: 2.5em !important; }",
	".controlwrapper { margin-left: 436px !important; margin-right: 458px !important; position: absolute !important; top: 629px !important; bottom: 0px !important;}",
	"#mobilesitenote { display: none !important; }",
	"#introtext { display: none !important; }",
	"#intro { left: 0px !important; }",
	".content { display: none !important; }",
	"#abovevideosexybtn { display: none !important; }",
	".logitem > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) { display: none !important; }",
	".logitem > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) { display: none !important; }",
	"#chattypeheaderrow { vertical-align: bottom !important; }",
	".lowersexybtncell { display: none !important; }",
	".lowergaybtncell { display: none !important; }",
	"#startachat { display: none !important; }",
	"div.logitem:nth-child(4) > div:nth-child(1) > img:nth-child(1) { display: none !important; }",
	"div.logitem:nth-child(4) > div:nth-child(1) > img:nth-child(2) { display: none !important; }",
	"#topterms { display: none !important; }",
	"#topicsettingscontainer > div:nth-child(1) > div:nth-child(4) { display: none !important; }",
	"#adultalternative { display: none !important; }",
	"#topicsettingscontainer > div:nth-child(1) > div:nth-child(2) { display: none !important; }",
	"#onlinecount { color: #ee4d2e !important; }",
	"#onlinecount strong { font-size: 1em !important; color: #ee4d2e !important; }",
	"#sharebuttons { display: none !important; }",
	".topictagtext, .topictagdelete { color: #fff !important; }",
	"[target=\"_blank\"] span { color: #777 !important; background: #333 !important; }",
	".logsavelinks { display: none !important; }",
	"#footer { display: none; }",
	".newchatbtnwrapper img { display: block !important; -moz-box-sizing: border-box !important; box-sizing: border-box !important; background: url(http://i.imgur.com/P8dcy0O.png) no-repeat !important; width: 170px !important; height: 50px !important; padding-left: 180px !important; }"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		document.documentElement.appendChild(node);
	}
}
})();

var images = document.getElementsByTagName ("img");
var x=0;
while(x<images.length)
{
	if(images[x].src == "http://www.omegle.com/static/translogo.png")
	{
		images[x].src = "https://github.com/pr0megle/pr0megle/blob/master/images/logo.png";
	}
	if(images[x].src == "http://www.omegle.com/static/newchatbtn.png")
	{
		images[x].src = "https://github.com/pr0megle/pr0megle/blob/master/images/newchat.png";
	}
	x=x+1;
}

document.body.innerHTML= document.body.innerHTML.replace("Video is monitored. Keep it clean","Good Luck &amp; Have Fun!");
