function clickAbout(){
    document.getElementById("about").scrollIntoView({behavior: "smooth"})
}

function clickProject(){
    document.getElementById("project").scrollIntoView({behavior: "smooth"})
}

function clickContact(){
    document.getElementById("contact").scrollIntoView({behavior: "smooth"})
}

var i = 0;
var pictureSRC = ["pictures/DJI_0031.jpg","pictures/DJI_0029.jpg","pictures/DJI_0030.jpg","pictures/DJI_0005.jpg","pictures/DJI_0050.jpg","pictures/DJI_0055.jpg","pictures/275733462_284343423778166_3525976417585391731_n.jpg", "pictures/DJI_0042.jpg","pictures/DJI_0027.jpg","pictures/DJI_0040.jpg"]

const val = document.createElement("img");
val.src = pictureSRC[i];
val.id = "gallery"
document.getElementById("works").appendChild(val)

function moveRight(){
    i++;
    let tar = document.getElementById("gallery");
    tar.style.opacity = "0";
    setTimeout(()=>{
        tar.src = pictureSRC[i%pictureSRC.length]
        setTimeout(() =>{
            tar.style.opacity = "1";
        },100)
    },800)
}

function moveLeft(){
    if(i === 0)
        i = pictureSRC.length - 1;
    else
        i--;
    let tar = document.getElementById("gallery");
    tar.style.opacity = "0";
    setTimeout(()=>{
        tar.src = pictureSRC[i%pictureSRC.length]
        setTimeout(() =>{
            tar.style.opacity = "1";
        },100)
    },800)
}

const autoGallery = setInterval(moveRight, 5000);