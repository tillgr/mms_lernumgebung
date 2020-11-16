document.getElementById("sidebarIntroduction").style.color = "#ff3311";
document.getElementById("sidebarResolution").style.display = "none";
document.getElementById("sidebarLinear").style.display = "none";
document.getElementById("sidebarNonlinear").style.display = "none";
document.getElementById("sidebarEvaluation").style.display = "none";

function btnResolution(){
    document.getElementById("sidebarResolution").style.display = "block";
    document.getElementById("placeholderResolution").style.display = "none";
    document.getElementById("sidebarResolution").style.color = "#ff3311";
    document.getElementById("sidebarIntroduction").style.color = "#212529";
    document.getElementById("intro").style.display="none";
}

function btnIntroduction(){
    document.getElementById("intro").style.display="block";
    document.getElementById("sidebarIntroduction").style.color = "#ff3311";
    document.getElementById("sidebarResolution").style.color = "#212529";
}