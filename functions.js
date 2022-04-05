// This includes all functions called by pages independent of language
// New version that uses localStorage with v11
// All the initialization for every page
const version = 'v11';
var s=""; // this string compiles the output for a given main content div
function setup() {
  const maxpage = 33; // the highest numbered page supported by en and fr so far

  // these functions run for a pwa
  window.onload = () => {
    'use strict'; // register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js');
    }
  }

  // next, output the navbar with the appropriate arrow links in this template
  // note - now in this system, 0=rubric, 1=basics, 2=a1 etc through maxpage
  now = window.location.search.substring(1);
  if((now=='') || isNaN(now))now=0
  now=parseInt(now);
  if (now > maxpage) now = maxpage;
  prior = Math.max(now - 1, 0);
  next = Math.min(now + 1, maxpage);
  lang = localStorage.getItem("lang");
  if (lang != 'en' && lang != 'fr') { setLang(); lang = 'en'; }
  LANG = lang.toUpperCase();

  // The navbar contains inline SVG for efficient icons
  const contents = `<a id='lang' class=tall onclick='setLang()'>${LANG}</a>
<a href=/ ><svg height='24' width='24'><title>Info</title>
<circle cx='12' cy='12' r='10' stroke='white' stroke-width='3'></circle>
<circle cx='12' cy='7' r='2' fill='white'></circle>
<line x1='12' y1='20' x2='12' y2='11' stroke='white' stroke-width='3'></line>
</svg></a>
<a href=${lang}.html?${prior}><svg height='24' width='24'><title>Prior</title>
<polygon points='0,12 12,24 12,18 24,18 24,6 12,6 12,0' fill='white'></polygon></svg></a>
<a href=${lang}.html?0><svg height='24' width='24'><title>Home</title>
<polygon points='12,0 24,12 18,12 18,24 6,24 6,12 0,12' fill='white'></polygon></svg></a>
<a href=${lang}.html?${next}><svg height='24' width='24'><title>Next</title>
<polygon points='24,12 12,24 12,18 0,18 0,6 12,6 12,0' fill='white'></polygon></svg></a>
<a href=${lang}.html?29><svg height='24' width='24'><title>Diagrams</title>
<line x1='2' y1='0' x2='2' y2='22' stroke='white' stroke-width='3'></line>
<line x1='2' y1='22' x2='24' y2='22' stroke='white' stroke-width='3'></line>
<line x1='08' y1='18' x2='8' y2='8' stroke='white' stroke-width='4'></line>
<line x1='15' y1='18' x2='15' y2='0' stroke='white' stroke-width='4'></line>
<line x1='22' y1='18' x2='22' y2='10' stroke='white' stroke-width='4'></line>
</svg></a>
<a href=admin_${lang}.html><span class=tall >&vellip;</span> ${version}</a>
`;
  document.getElementById("navbar").innerHTML = contents;
}

function setLang() { // for now, this will be a toggle
  olang = localStorage.getItem("lang");
  if (olang == 'en') { lang = 'fr'; }
//  else if (olang == 'fr') { lang = 'es'; } // for now no spanish
  else (lang = 'en');
  localStorage.setItem('lang', lang);
  location.href = window.location.href.replace(olang, lang);
}

function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    result = xmlhttp.responseText;
  }
  return result;
}

function saveform(formid) {
//  expiry = "Fri, 01 Jan 2038 00:00:01 GMT";
  const form = document.getElementById(formid);
  Array.from(form.elements).forEach((input) => {
    val=input.value;
    if(val=='undefined') val='';
    val=val.replace(/[^a-zA-Z0-9 .,]/g, '');
    localStorage.setItem(input.name,val)} );
  location=lang+".html?"+(now+1);
}

function saveComment(cname) {
  const com = document.getElementById(cname).value;
  localStorage.setItem(cname, com);
  now = parseInt(window.location.search.substring(1));
  location ="?"+(now+1); 
}
function setColor(cname, x) {
  for (i = 0; i < 5; i++) {
    let s = '';
    if (i == x) s = 'background-color:blue;color:white';
    e = document.getElementById(cname + i);
    if (e) e.style = s;
  }
}
function setit(clicked_id) {
  const cname = clicked_id.substr(0, 2);
  const x = clicked_id.substr(2, 1);
  setColor(cname, x)
  localStorage.setItem(cname, x);
}

function putSelect(fname,arr) { // currently, only allowed per form
  s+= "<label class=wide>" + basics[fname] + ": <select id='" + fname + "' name='" + fname + "'>\n";
  for (i = 0; i < arr.length; i++) {
    s += "<option value='" + i + "'";
    if (localStorage.getItem(fname) == i) s += " SELECTED";
    s += ">" + arr[i] + "</option>\n";
  }
  s+= "</select></label>\n";
}

function putDate(fname) {
  let d = localStorage.getItem(fname);
  if (!d) {
    let d = new Date().toISOString().slice(0, 10);
    localStorage.setItem(fname, d);
  }
  s+='<div class=wide>'+basics[fname]+': <input type=date name=' + fname + ' value="' + d + '"></div>';
}

function putText(fname) {
  let d = localStorage.getItem(fname);
  s += "<p>" + basics[fname] + "</p><textarea name="+fname+" class=wide rows=4 width=100%>" + d + "</textarea>\n";
}

function putInput(fname) {
  const val=localStorage.getItem(fname);
  s+='<label class=wide>'+basics[fname]+': <input name="'+fname+'" value="'+val+'"></label>';
}
function putNumber(fname){
  let val = localStorage.getItem(fname);
  if(val == undefined) val = 0;
  s+='<label class=wide>'+basics[fname]+': <input name='+fname+' type=number min=0 max=1000 value='+val+"></label>\n";
}

function putYears(fname,y1) {
  const y2=new Date().getFullYear();  
  s+= "<div class=wide><label>" + basics[fname] + ": <select id='" + fname + "' name='" + fname + "'>\n";
  for (i = y1; i < y2; i++) {
    s += "<option value='" + i + "'";
    if (localStorage.getItem(fname) == i) s += " SELECTED";
    s += ">" + i + "</option>\n";
  }
  s+= "</select></div>\n";  
}


function putYN(fname){
  putSelect(fname,yn);
}

function putTamarack() {
  s=`<h1>${basics.h1}</h1>
  <form id=basics>`;
  putInput("organization");
  putSelect("region",regions);
  putSelect("level",levels);
  putSelect("stage",stages);
  putSelect("orgtype",orgtypes);
  putText("program");
  putYears("cldyear",1971);
  putYN("multiyear");
  s+="<h3 class=green>"+basics.subhead+"</h3>\n";
  putInput("name");
  putDate("date");
  putInput("facilitate");
  putNumber("howmany");
  putText("stakeholders");
  putSelect("inperson",howmet);
  putNumber("howlong");
  s+='<h3 class=green>'+basics.additional+"</h3>\n";
  putSelect("residents",resplan);
  putSelect("organizations",orgplan);
  putSelect("base",bases);
  s+='<h3 class=green>'+basics.which+"</h3>\n";
  putYN("belong");
  putYN("inclusion");
  putYN("engagement");
  putYN("resilience");
  putYN("safety");
  putYN("health");
  putYN("food");
  s+="<hr>\n";
  putSelect("interest",interests);
  putSelect("popsize",popsizes);
  putYN("dcmcp");
  putYN("coach");
  putYN("dcmc");
  putYN("attended");
  putYN("subscribed");
  putText("usetool");
  s+=`<a class=wide href="javascript:saveform('basics');">${basics.save}</a></form>`;
  document.getElementById("main").innerHTML=s;  
}

function putRubric(contents) { // Create layout based on an array of options
  cname = contents[0].substr(0, 2).toLowerCase();
  s="<h2>" + contents[0] + "</h2>";
  for (i = 0; i < 5; i++) {
    s+="<p><button id=" + cname + i + " onclick='setit(this.id)'>" + i + "</button>\n" + contents[1 + i] + "</p>";
  }
  // And fill in the comment if it exists
  cid = 'n' + cname;
  let com = localStorage.getItem(cid);
  if (com == undefined) com = '';
  const str1 = "<h3>"+comment+"</h3>\n<textarea class=wide id='" + cid + "' rows=3 width=100% >\n";
  const str2 = "</textarea>\n<button onclick='saveComment(" + '"' + cid + '"' + ")'>"+clickto+"</button>\n";
  s+=str1 + com + str2;
  document.getElementById("main").innerHTML=s;
  // Next, paint the color of the button if preset
  x = localStorage.getItem(cname);
  if (x > '') document.getElementById(cname + x).style = 'background-color:navy;color:white;';

}

function putXY(r, i, n) { // convert radius and index in spider to x,y pair
  a = (2 * Math.PI * i) / n;
  x = Math.floor(120 + r * Math.sin(a));
  y = Math.floor(120 - r * Math.cos(a));
  s+=' ' + Math.floor(x) + ',' + Math.floor(y);
}


// for the 4 different diagrams, create them as pages p29, p30, p31

function computeByDimensions(labels, lengths) {
  let scores = [];
  for (i = 0; i < labels.length; i++) { // which major dimension
    scores[i] = 0;
    for (j = 1; j <= lengths[i]; j++) { // which sub dimension
      const cname = labels[i].toLowerCase() + j;
      let x = +localStorage.getItem(cname);
      if (isNaN(x)) x = 0;
      x--;
      if (x < 1) x = 0;
      scores[i] += x;
    }
    if (isNaN(scores[i])) scores[i] = 0;
    scores[i] = Math.floor(scores[i] * 100 / (lengths[i] * 3));
  }
  return scores;
}

function computeScores(labels) {
  let scores = [];
  for (i = 0; i < labels.length; i++) {
    x = localStorage.getItem(labels[i].toLowerCase());
    if (isNaN(x)) x = 0; x--; if (x < 1) x = 0;
    scores[i] = Math.floor(100 * x / 3);
  }
  return scores;
}

function putToc(x){ // x is the title of the first entry
  s=`<a class=wide href=?1>${x}</a>`;
  const whichp=[2,9,11,16,18,20,22,23,26];
	for(i=0;i<9;i++) { // put the 9 full-width buttons
      d=dimensions[i];
      s+=`<a class=wide href=?${whichp[i]}>${d}</a>`;
	}
  document.getElementById("main").innerHTML=s;
}

function putResults(p) {
  let scores = []; let labels = []; let tags = [];
  if (p == 29) {
    const lengths = [7, 2, 5, 2, 2, 2, 1, 3, 3]; // number of sub-elements in each
    labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // uppercase version of labels
    scores = computeByDimensions(labels, lengths);
    spider(scores, labels);
    putDimensionScores(scores, labels);
  } else if (p == 30) {
    labels = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7'];
    tags = ['p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'];
    scores = computeScores(labels);
    spider(scores, labels);
    putRubricScores(scores, tags);
  } else if (p == 31) {
    labels = ['C1', 'C2', 'C3', 'C4', 'C5'];
    tags = ['p11', 'p12', 'p13', 'p14', 'p15'];
    scores = computeScores(labels);
    spider(scores, labels);
    putRubricScores(scores, tags);
  } else if (p == 32) {
    labels = ['B1', 'B2', 'D1', 'D2', 'E1', 'E2', 'F1', 'F2', 'G1'];
    tags = ['p9', 'p10', 'p16', 'p17', 'p18', 'p19', 'p20', 'p21', 'p22'];
    scores = computeScores(labels);
    spider(scores, labels);
    putRubricScores(scores, tags);
  } else {
    labels = ['H1', 'H2', 'H3', 'I1', 'I2', 'I3'];
    tags = ['p23', 'p24', 'p25', 'p26', 'p27', 'p28'];
    scores = computeScores(labels);
    spider(scores, labels);
    putRubricScores(scores, tags);
  }
}

function putDimensionScores(scores) { // table of scores with dimension labels
  let t = "<center>\n<table>\n";
  for (i = 0; i < scores.length; i++) {
    t += "<tr><td>" + scores[i] + "</td><td>";
    t += dimensions[i] + "</td></tr>\n";
  }
  s += t + "</table>\n</center>";
}

function putRubricScores(scores, tags) {
  let t = "<center>\n<table>\n";
  for (i = 0; i < scores.length; i++) {
    t += "<tr><td>" + scores[i] + "</td><td>";
    t += rubric[tags[i]][0] + "</td></tr>\n";
  }
  s += t + "</table>\n</center>";
}

function spider(data, labels) {
  n = data.length;
  s+='<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">';
  s+='<style> .n {font: 10px sans-serif; fill: black;}</style>';
  for (r = 10; r < 110; r = r + 10) { // first layout the grid
    y = 120 - r;
    s+='<text class="n" x="121" y="' + y + '">' + r + '</text>';
    s+='<polygon points="';
    for (i = 0; i < n; i++) { putXY(r, i, n); }
    s+='" fill="none" stroke="blue" /></polygon>';
  }
  // Next draw the data points
  s+='<polygon points="';
  for (i = 0; i < n; i++) putXY(data[i], i, n);
  s+='" fill="rgba(0,255,0,0.3)" stroke="darkgreen"></polygon>';
  // Next put the labels in the appropriate points
  for (i = 0; i < n; i++) {
    a = (2 * Math.PI * i) / n;
    x = Math.floor(115 + 105 * Math.sin(a));
    y = Math.floor(125 - 105 * Math.cos(a));
    s+='<text class="n" x="' + x + '" y="' + y + '">' + labels[i] + '</text>';
  }
  s+="</svg>";
}
// ADMIN Functions
function putMailButton(){
  let msg="Email the data";
  if(lang=='fr') msg='Envoyer les données par e-mail';
  if(lang=='es') msg='Enviar datos por correo electrónico';
  const text=JSON.stringify(localStorage);
  const button=`<a class=wide target=_blank href='mailto:admin@mcld.org?subject=Data&body=${text}'>${msg}</a>`;
  document.getElementById("mailbutton").innerHTML=button;
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function downloadStorage() {
  const filename = localStorage.getItem("date") + localStorage.getItem("organization") + '.json';
  const text = JSON.stringify(localStorage); 
  download(filename,text);
}

function clearStorage() {
  localStorage.clear();
  alert("OK, data cleared");
}
