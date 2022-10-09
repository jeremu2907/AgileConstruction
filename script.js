$(document).ready(function() {
    $('#slide').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 100);
        e.preventDefault();
    });
});

function clickAbout(){
    document.getElementById("about").scrollIntoView({behavior: "smooth"})
}

function clickProject(){
    document.getElementById("project").scrollIntoView({behavior: "smooth"})
}

function clickAbout(){
    document.getElementById("about").scrollIntoView({behavior: "smooth"})
}