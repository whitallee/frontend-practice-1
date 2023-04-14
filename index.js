let issue6 = document.getElementById('issue6');
let issue5 = document.getElementById('issue5');
let issue4 = document.getElementById('issue4');
let issue3 = document.getElementById('issue3');
let issue2 = document.getElementById('issue2');
let issue1 = document.getElementById('issue1');

window.onload = window.onresize = function(){
    issue6.setAttribute("style", "height:"+window.innerHeight+";");
    issue5.setAttribute("style", "height:"+window.innerHeight+";");
    issue4.setAttribute("style", "height:"+window.innerHeight+";");
    issue3.setAttribute("style", "height:"+window.innerHeight+";");
    issue2.setAttribute("style", "height:"+window.innerHeight+";");
    issue1.setAttribute("style", "height:"+window.innerHeight+";");
};

let issueWrapper = document.getElementById("issue-wrapper");
console.log(issueWrapper);

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  console.log("checking");
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

issueWrapper.onscroll = function(){
  if (isInViewport(issue6)) {
    document.body.style.background = "white";
    document.getElementById('issue6tag').style.fontWeight = "bold";
    document.getElementById('issue5tag').style.fontWeight = "normal";
    document.getElementById('issue4tag').style.fontWeight = "normal";
    document.getElementById('issue3tag').style.fontWeight = "normal";
    document.getElementById('issue2tag').style.fontWeight = "normal";
    document.getElementById('issue1tag').style.fontWeight = "normal";
  }
  else if (isInViewport(issue5)) {
    document.body.style.background = "var(--green)";
    document.getElementById('issue6tag').style.fontWeight = "normal";
    document.getElementById('issue5tag').style.fontWeight = "bold";
    document.getElementById('issue4tag').style.fontWeight = "normal";
    document.getElementById('issue3tag').style.fontWeight = "normal";
    document.getElementById('issue2tag').style.fontWeight = "normal";
    document.getElementById('issue1tag').style.fontWeight = "normal";
  }
  else if (isInViewport(issue4)) {
    document.body.style.background = "var(--orange)";
    document.getElementById('issue6tag').style.fontWeight = "normal";
    document.getElementById('issue5tag').style.fontWeight = "normal";
    document.getElementById('issue4tag').style.fontWeight = "bold";
    document.getElementById('issue3tag').style.fontWeight = "normal";
    document.getElementById('issue2tag').style.fontWeight = "normal";
    document.getElementById('issue1tag').style.fontWeight = "normal";
  }
  else if (isInViewport(issue3)) {
    document.body.style.background = "var(--yellow)";
    document.getElementById('issue6tag').style.fontWeight = "normal";
    document.getElementById('issue5tag').style.fontWeight = "normal";
    document.getElementById('issue4tag').style.fontWeight = "normal";
    document.getElementById('issue3tag').style.fontWeight = "bold";
    document.getElementById('issue2tag').style.fontWeight = "normal";
    document.getElementById('issue1tag').style.fontWeight = "normal";
  }
  else if (isInViewport(issue2)) {
    document.body.style.background = "var(--blue)";
    document.getElementById('issue6tag').style.fontWeight = "normal";
    document.getElementById('issue5tag').style.fontWeight = "normal";
    document.getElementById('issue4tag').style.fontWeight = "normal";
    document.getElementById('issue3tag').style.fontWeight = "normal";
    document.getElementById('issue2tag').style.fontWeight = "bold";
    document.getElementById('issue1tag').style.fontWeight = "normal";
  }
  else if (isInViewport(issue1)) {
    document.body.style.background = "var(--red)";
    document.getElementById('issue6tag').style.fontWeight = "normal";
    document.getElementById('issue5tag').style.fontWeight = "normal";
    document.getElementById('issue4tag').style.fontWeight = "normal";
    document.getElementById('issue3tag').style.fontWeight = "normal";
    document.getElementById('issue2tag').style.fontWeight = "normal";
    document.getElementById('issue1tag').style.fontWeight = "bold";
  }
}