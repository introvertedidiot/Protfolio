// defines functions used for site navigation

function ShowSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display == "none" || section.style.display == "") {
        section.style.display = "grid";
    }
}

function HideSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.style.display = "none";
}

function ToggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display == "none" || section.style.display == "") {
        section.style.display = "grid";
    }
    else {
        section.style.display = "none";
    }
}

