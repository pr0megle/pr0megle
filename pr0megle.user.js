// ==UserScript==
// @name        pr0megle
// @namespace   pr0megle
// @description pr0gram design for omegle.com
// @include     http://www.omegle.com/
// @include     http://corry.byethost13.com/
// @include     http://corry.byethost13.com/index.php
// @version     1.3
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant       unsafeWindow
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

if (/omegle/.test(window.location.href))
{
	var favicon_link_html = document.createElement('link');
	favicon_link_html.rel = 'icon';
	favicon_link_html.href = 'http://i.imgur.com/KXn8Mco.png';
	favicon_link_html.type = 'image/x-icon';
	
	try { 
	document.getElementsByTagName('head')[0].appendChild( favicon_link_html ); 
	}
	catch(e) { }
	
    var lag = 500;
	var openingMessage = GM_getValue("openingMessage", "Hey! How are you?");
    var textbox2text = GM_getValue("textbox2text", "Test1");
    var textbox3text = GM_getValue("textbox3text", "Test2");
    var textbox4text = GM_getValue("textbox4text", "Test3");
    var textbox5text = GM_getValue("textbox5text", "Test4");
    var textbox6text = GM_getValue("textbox6text", "Test5");
    var textbox7text = GM_getValue("textbox7text", "Test6");
    var nextstartmessage = GM_getValue("textbox2text");
    var openingMessageEnabled = false;
	
	function checkForStatus() {
		if (document.getElementsByClassName("logitem").length == 1) {	
			if (openingMessageEnabled) {
				if ($(".logitem").text() == "You're now chatting with a random stranger. Say hi!") {
					document.getElementsByClassName("chatmsg")[0].value = GM_getValue("openingMessage");
					var t = setTimeout(function () {
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
	camborder.src = 'http://i.imgur.com/Vhz3zX5.png';
	camborder.id = "camborder1";
	flashwrapper.appendChild(camborder, flashwrapper.lastChild);
	
	var camborder = document.createElement('img');
	camborder.src = 'http://i.imgur.com/WsoRMXs.png';
	camborder.id = "camborder2";
	camborder.style = "display: none";
	flashwrapper.appendChild(camborder, flashwrapper.lastChild);
	
	var camborder = document.createElement('img');
	camborder.src = 'http://i.imgur.com/I1QV1Yb.png';
	camborder.id = "camborder3";
	flashwrapper.appendChild(camborder, flashwrapper.lastChild);
	
	var camborder = document.createElement('img');
	camborder.src = 'http://i.imgur.com/5Vcr6bc.png';
	camborder.id = "camborder4";
	flashwrapper.appendChild(camborder, flashwrapper.lastChild);
	
	var camborder = document.createElement('img');
	camborder.src = 'http://i.imgur.com/JAHsrX4.png';
	camborder.id = "camborder5";
	flashwrapper.appendChild(camborder, flashwrapper.lastChild);
	
	var camborder = document.createElement('img');
	camborder.src = 'http://i.imgur.com/0AY6BtW.png';
	camborder.id = "camborder6";
	flashwrapper.appendChild(camborder, flashwrapper.lastChild);
	
	var camborder = document.createElement('img');
	camborder.src = 'http://i.imgur.com/f9aP6OE.png';
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
		//divGame.style.color = "#161618";
		divGame.style.cursor = "pointer";
		divGame.style.borderRadius = "0px 0px 0px 0px";
		divGame.style.zIndex = "6";
		divGame.style.fontFamily = "Calibri";
		divGame.className = 'gamewindow';
        //divGame.id = "divGame";
	
		divGame.innerHTML = "<iframe frameborder='0' width='450px' height='402px' src='http://corry.byethost13.com/index.php'></iframe>";
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
    
    var textbox1btn1 = document.createElement( 'input' );
	with( textbox1btn1 ) {
		setAttribute( 'value', 'Enable Startmessage' );
		setAttribute( 'type', 'button' );
		setAttribute( 'id', 'textbox1btn1' );
		setAttribute( 'name', 'textbox1btn1' );
	}
	flashwrapper.appendChild(textbox1btn1, flashwrapper.lastChild);
    
    var textbox1btn2 = document.createElement( 'input' );
	with( textbox1btn2 ) {
		setAttribute( 'value', 'Disable Startmessage' );
		setAttribute( 'type', 'button' );
		setAttribute( 'id', 'textbox1btn2' );
		setAttribute( 'name', 'textbox1btn2' );
	}
	flashwrapper.appendChild(textbox1btn2, flashwrapper.lastChild);
    $("#textbox1btn2").hide()
    
    var textbox1 = document.createElement( 'input' );
	with( textbox1 ) {
		setAttribute( 'type', 'text' );
		setAttribute( 'id', 'textbox1' );
		setAttribute( 'name', 'textbox1' );
        setAttribute( 'value', openingMessage );
	}
	flashwrapper.appendChild(textbox1, flashwrapper.lastChild);
    
    var textbox2btn = document.createElement( 'input' );
	with( textbox2btn ) {
		setAttribute( 'value', 'Send Message #1' );
		setAttribute( 'type', 'button' );
		setAttribute( 'id', 'textbox2btn' );
		setAttribute( 'name', 'textbox2btn' );
	}
	flashwrapper.appendChild(textbox2btn, flashwrapper.lastChild);

    var textbox2 = document.createElement( 'input' );
	with( textbox2 ) {
		setAttribute( 'type', 'text' );
		setAttribute( 'id', 'textbox2' );
		setAttribute( 'name', 'textbox2' );
        setAttribute( 'value', textbox2text );
	}
	flashwrapper.appendChild(textbox2, flashwrapper.lastChild);
    
    var textbox3btn = document.createElement( 'input' );
	with( textbox3btn ) {
		setAttribute( 'value', 'Send Message #2' );
		setAttribute( 'type', 'button' );
		setAttribute( 'id', 'textbox3btn' );
		setAttribute( 'name', 'textbox3btn' );
	}
	flashwrapper.appendChild(textbox3btn, flashwrapper.lastChild);
    
    var textbox3 = document.createElement( 'input' );
	with( textbox3 ) {
		setAttribute( 'type', 'text' );
		setAttribute( 'id', 'textbox3' );
		setAttribute( 'name', 'textbox3' );
        setAttribute( 'value', textbox3text );
	}
	flashwrapper.appendChild(textbox3, flashwrapper.lastChild);
    
    var textbox4btn = document.createElement( 'input' );
	with( textbox4btn ) {
		setAttribute( 'value', 'Send Message #3' );
		setAttribute( 'type', 'button' );
		setAttribute( 'id', 'textbox4btn' );
		setAttribute( 'name', 'textbox4btn' );
	}
	flashwrapper.appendChild(textbox4btn, flashwrapper.lastChild);
    
    var textbox4 = document.createElement( 'input' );
	with( textbox4 ) {
		setAttribute( 'type', 'text' );
		setAttribute( 'id', 'textbox4' );
		setAttribute( 'name', 'textbox4' );
        setAttribute( 'value', textbox4text );
	}
	flashwrapper.appendChild(textbox4, flashwrapper.lastChild);
    
    var textbox5btn = document.createElement( 'input' );
	with( textbox5btn ) {
		setAttribute( 'value', 'Send Message #4' );
		setAttribute( 'type', 'button' );
		setAttribute( 'id', 'textbox5btn' );
		setAttribute( 'name', 'textbox5btn' );
	}
	flashwrapper.appendChild(textbox5btn, flashwrapper.lastChild);
    
    var textbox5 = document.createElement( 'input' );
	with( textbox5 ) {
		setAttribute( 'type', 'text' );
		setAttribute( 'id', 'textbox5' );
		setAttribute( 'name', 'textbox5' );
        setAttribute( 'value', textbox5text );
	}
	flashwrapper.appendChild(textbox5, flashwrapper.lastChild);
    
    var textbox6btn = document.createElement( 'input' );
	with( textbox6btn ) {
		setAttribute( 'value', 'Send Message #5' );
		setAttribute( 'type', 'button' );
		setAttribute( 'id', 'textbox6btn' );
		setAttribute( 'name', 'textbox6btn' );
	}
	flashwrapper.appendChild(textbox6btn, flashwrapper.lastChild);
    
    var textbox6 = document.createElement( 'input' );
	with( textbox6 ) {
		setAttribute( 'type', 'text' );
		setAttribute( 'id', 'textbox6' );
		setAttribute( 'name', 'textbox6' );
        setAttribute( 'value', textbox6text );
	}
	flashwrapper.appendChild(textbox6, flashwrapper.lastChild);
    
    var textbox7btn = document.createElement( 'input' );
	with( textbox7btn ) {
		setAttribute( 'value', 'Send Message #5' );
		setAttribute( 'type', 'button' );
		setAttribute( 'id', 'textbox7btn' );
		setAttribute( 'name', 'textbox7btn' );
	}
	flashwrapper.appendChild(textbox7btn, flashwrapper.lastChild);
    
    var textbox7 = document.createElement( 'input' );
	with( textbox7 ) {
		setAttribute( 'type', 'text' );
		setAttribute( 'id', 'textbox7' );
		setAttribute( 'name', 'textbox7' );
        setAttribute( 'value', textbox7text );
	}
	flashwrapper.appendChild(textbox7, flashwrapper.lastChild);
    
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
		"#watermarkBtn1 { position: fixed; right: 318px; top: 466px; width: 140px; background-color: #444; border: 0px; border-top-left-radius: .5em; padding: 2px; color: #a0aaaa; }",
		"#watermarkBtn2 { position: fixed; right: 318px; top: 466px; width: 140px; background-color: #444; border: 0px; border-top-left-radius: .5em; padding: 2px; color: #a0aaaa; }",
		"#gamewindowBtn1 { position: fixed; right: 318px; top: 488px; width: 140px; background-color: #444; border: 0px; padding: 2px; color: #a0aaaa; }",
		"#gamewindowBtn2 { position: fixed; right: 318px; top: 488px; width: 140px; background-color: #444; border: 0px; padding: 2px; color: #a0aaaa; }",
		"#middleBarBtn1 { position: fixed; right: 318px; top: 510px; width: 140px; background-color: #444; border: 0px; padding: 2px; color: #a0aaaa; }",
		"#middleBarBtn2 { position: fixed; right: 318px; top: 510px; width: 140px; background-color: #444; border: 0px; padding: 2px; color: #a0aaaa; }",
		"#snapshotBtn1 { position: fixed; right: 318px; top: 532px; width: 140px; background-color: #444; border: 0px; border-bottom-left-radius: .5em; padding: 2px; color: #a0aaaa; }",
		"#snapshotBtn2 { position: fixed; right: 318px; top: 532px; width: 140px; background-color: #444; border: 0px; border-bottom-left-radius: .5em; padding: 2px; color: #a0aaaa; }",
        "#textbox1btn1 { position: fixed; right: 318px; top: 558px; width: 140px; background-color: #444; border: 0px; border-top-left-radius: .5em; padding: 2px; color: #a0aaaa; }",
        "#textbox1btn2 { position: fixed; right: 318px; top: 558px; width: 140px; background-color: #444; border: 0px; border-top-left-radius: .5em; padding: 2px; color: #a0aaaa; }",
        "#textbox1 { position: fixed; right: 8px; top: 558px; padding: 1px 5px; border: 0; width: 297px; height: 17px; border-top-right-radius: 5px; }",
        "#textbox2btn { position: fixed; right: 318px; top: 580px; width: 140px; background-color: #444; border: 0px; padding: 2px; color: #a0aaaa; }",
        "#textbox2 { position: fixed; right: 8px; top: 580px; padding: 1px 5px; border: 0; width: 297px; height: 17px; }",
        "#textbox3btn { position: fixed; right: 318px; top: 602px; width: 140px; background-color: #444; border: 0px; padding: 2px; color: #a0aaaa; }",
        "#textbox3 { position: fixed; right: 8px; top: 602px; padding: 1px 5px; border: 0; width: 297px; height: 17px; }",
        "#textbox4btn { position: fixed; right: 318px; top: 624px; width: 140px; background-color: #444; border: 0px; padding: 2px; color: #a0aaaa; }",
        "#textbox4 { position: fixed; right: 8px; top: 624px; padding: 1px 5px; border: 0; width: 297px; height: 17px; }",
        "#textbox5btn { position: fixed; right: 318px; top: 646px; width: 140px; background-color: #444; border: 0px; padding: 2px; color: #a0aaaa; }",
        "#textbox5 { position: fixed; right: 8px; top: 646px; padding: 1px 5px; border: 0; width: 297px; height: 17px; }",
        "#textbox6btn { position: fixed; right: 318px; top: 668px; width: 140px; background-color: #444; border: 0px;  padding: 2px; color: #a0aaaa; }",
        "#textbox6 { position: fixed; right: 8px; top: 668px; padding: 1px 5px; border: 0; width: 297px; height: 17px; }",
        "#textbox7btn { position: fixed; right: 318px; top: 690px; width: 140px; background-color: #444; border: 0px; border-bottom-left-radius: .5em; padding: 2px; color: #a0aaaa; }",
        "#textbox7 { position: fixed; right: 8px; top: 690px; padding: 1px 5px; border: 0; width: 297px; height: 17px; border-bottom-right-radius: 5px; }",
		"#nextRoomBtn { position: fixed; right: 8px; top: 466px; width: 307px; height: 85px;background-color: #444; border: 0px; border-top-right-radius: .5em; border-bottom-right-radius: .5em; padding: 2px; color: #a0aaaa; }",
		"#slider { top: 35px; width: 440px; height: 330px; margin: 0px 0px 0px -225px; border: solid 1px #444444 !important; border-left: solid 5px #444444 !important; border-right: solid 5px #444444 !important; border-top: solid 1px #444444 !important; border-bottom: solid 1px #444444 !important; }",
		"#slider_control { border-top-left-radius: .5em; border-top-right-radius: .5em; }",
		"#player_data { border-bottom-left-radius: .5em; border-bottom-right-radius: .5em; bottom: 18px; }",
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
			images[x].src = "http://i.imgur.com/UJY3rws.png";
		}
		if(images[x].src == "http://www.omegle.com/static/newchatbtn.png")
		{
			images[x].src = "http://i.imgur.com/P8dcy0O.png";
		}
		x=x+1;
	}
	
	document.body.innerHTML= document.body.innerHTML.replace("Video is monitored. Keep it clean","Good Luck &amp; Have Fun!");
    
    document.getElementById("textbox2btn").addEventListener("click", function(){document.getElementsByClassName("chatmsg")[0].value = GM_getValue("textbox2text"); var t = setTimeout(function () { document.getElementsByClassName("sendbtn")[0].click(); }, lag);}, false);
    document.getElementById("textbox3btn").addEventListener("click", function(){document.getElementsByClassName("chatmsg")[0].value = GM_getValue("textbox3text"); var t = setTimeout(function () { document.getElementsByClassName("sendbtn")[0].click(); }, lag);}, false);
    document.getElementById("textbox4btn").addEventListener("click", function(){document.getElementsByClassName("chatmsg")[0].value = GM_getValue("textbox4text"); var t = setTimeout(function () { document.getElementsByClassName("sendbtn")[0].click(); }, lag);}, false);
    document.getElementById("textbox5btn").addEventListener("click", function(){document.getElementsByClassName("chatmsg")[0].value = GM_getValue("textbox5text"); var t = setTimeout(function () { document.getElementsByClassName("sendbtn")[0].click(); }, lag);}, false);
    document.getElementById("textbox6btn").addEventListener("click", function(){document.getElementsByClassName("chatmsg")[0].value = GM_getValue("textbox6text"); var t = setTimeout(function () { document.getElementsByClassName("sendbtn")[0].click(); }, lag);}, false);
    document.getElementById("textbox7btn").addEventListener("click", function(){document.getElementsByClassName("chatmsg")[0].value = GM_getValue("textbox7text"); var t = setTimeout(function () { document.getElementsByClassName("sendbtn")[0].click(); }, lag);}, false);

    document.getElementById("textbox1btn1").addEventListener("click", function(){openingMessageEnabled = true; var textbox1btn1 = document.getElementById("textbox1btn1"); textbox1btn1.style.display = "none"; var textbox1btn2 = document.getElementById("textbox1btn2"); textbox1btn2.style.display = ""; }, false);
    document.getElementById("textbox1btn2").addEventListener("click", function(){openingMessageEnabled = false; var textbox1btn2 = document.getElementById("textbox1btn2"); textbox1btn2.style.display = "none"; var textbox1btn1 = document.getElementById("textbox1btn1"); textbox1btn1.style.display = ""; }, false);
    document.getElementById("textbox1").addEventListener("change", function(){var newopeningMessage = document.getElementById("textbox1").value; GM_setValue("openingMessage", newopeningMessage)}, false);
    document.getElementById("textbox2").addEventListener("change", function(){var newtextbox2text = document.getElementById("textbox2").value; GM_setValue("textbox2text", newtextbox2text)}, false);
    document.getElementById("textbox3").addEventListener("change", function(){var newtextbox3text = document.getElementById("textbox3").value; GM_setValue("textbox3text", newtextbox3text)}, false);
    document.getElementById("textbox4").addEventListener("change", function(){var newtextbox4text = document.getElementById("textbox4").value; GM_setValue("textbox4text", newtextbox4text)}, false);
    document.getElementById("textbox5").addEventListener("change", function(){var newtextbox5text = document.getElementById("textbox5").value; GM_setValue("textbox5text", newtextbox5text)}, false);
    document.getElementById("textbox6").addEventListener("change", function(){var newtextbox6text = document.getElementById("textbox6").value; GM_setValue("textbox6text", newtextbox6text)}, false);
    document.getElementById("textbox7").addEventListener("change", function(){var newtextbox7text = document.getElementById("textbox7").value; GM_setValue("textbox7text", newtextbox7text)}, false);
}

if (/corry/.test(window.location.href))
{
    var reloadBtn = document.createElement( 'input' );
	with( reloadBtn ) {
		setAttribute( 'value', 'Reload' );
		setAttribute( 'type', 'button' );
		setAttribute( 'id', 'reloadBtn' );
		setAttribute( 'name', 'reloadBtn' );
	}
    player_data.appendChild(reloadBtn, player_data.lastChild);
    
	(function() {var css = [
        "#slider { top: 35px !important; width: 440px !important; height: 330px !important; margin: 0px 0px 0px -225px !important; border: solid 1px #444444 !important; border-left: solid 5px #444444 !important; border-right: solid 5px #444444 !important; border-top: solid 1px #444444 !important; border-bottom: solid 1px #444444 !important; }",
		"#slider_control { border-top-left-radius: .5em; border-top-right-radius: .5em; background: #444444 !important; }",
		"#player_data { border-bottom-left-radius: .5em; border-bottom-right-radius: .5em; bottom: 0px !important; background: #444444 !important; }",
        "#slider_control > ul > li { top: 8px !important; left: 15px !important; font-size: 16 !important; }",
        "#reloadBtn { background-color: #999; }",
        "body { background-color: 161618 !important; }"
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
    
    document.getElementById("reloadBtn").addEventListener("click", function(){ location.reload(); }, false);
}
