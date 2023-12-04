let carouselBtn = document.getElementById("carouselBtn");
let injectHere = document.getElementById("injectHere");
let removeBtn = document.getElementById("removeBtn")

carouselBtn.addEventListener('click', function(e){
    MakeCarousel();
})

removeBtn.addEventListener('click', function(e){
    injectHere.innerHTML = "";;
})

function MakeCarousel(){
    let img1 = document.createElement("img");
    img1.src = "../assets/dragon-ball-with-4-stars-logo-F11C43957B-seeklogo.com.png";
    img1.className = "d-block w-100";
    img1.alt = "dragon ball";

    let img1Div = document.createElement("div");
    img1Div.className = "carousel-item active";

    img1Div.appendChild(img1);

    let img2 = document.createElement("img");
    img2.src = "../assets/icons8-rain-96.png";
    img2.className = "d-block w-100";
    img2.alt = "rain";

    let img2Div = document.createElement("div");
    img2Div.className = "carousel-item";

    img2Div.appendChild(img2);

    let img3 = document.createElement("img");
    img3.src = "../assets/icons8-sun-200 (1).png";
    img3.className = "d-block w-100";
    img3.alt = "sun";

    let img3Div = document.createElement("div");
    img3Div.className = "carousel-item";

    img3Div.appendChild(img3);

    let carouselInner = document.createElement("div");
    carouselInner.className = "carousel-inner";

    carouselInner.appendChild(img1Div);
    carouselInner.appendChild(img2Div);
    carouselInner.appendChild(img3Div);

    let prevIcon = document.createElement("span");
    prevIcon.className = "carousel-control-prev-icon";
    prevIcon.ariaHidden = "true";

    let prevIcon2 = document.createElement("span");
    prevIcon2.className = "visually-hidden";
    prevIcon2.innerText = "Previous";

    let prevIconDiv = document.createElement("button");
    prevIconDiv.className = "carousel-control-prev";
    prevIconDiv.dataset.bsTarget = "#carouselExample";
    prevIconDiv.dataset.bsSlide = "prev";

    prevIconDiv.appendChild(prevIcon);
    prevIconDiv.appendChild(prevIcon2);

    let nextIcon = document.createElement("span");
    nextIcon.className = "carousel-control-next-icon";
    nextIcon.ariaHidden = "true";

    let nextIcon2 = document.createElement("span");
    nextIcon2.className = "visually-hidden";
    nextIcon2.innerText = "Next";

    let nextIconDiv = document.createElement("button");
    nextIconDiv.className = "carousel-control-next";
    nextIconDiv.dataset.bsTarget = "#carouselExample";
    nextIconDiv.dataset.bsSlide = "next";

    nextIconDiv.appendChild(nextIcon);
    nextIconDiv.appendChild(nextIcon2);

    let outerDiv = document.createElement("div");
    outerDiv.id = "carouselExample";
    outerDiv.className = "carousel slide";

    outerDiv.appendChild(carouselInner);
    outerDiv.appendChild(prevIconDiv);
    outerDiv.appendChild(nextIconDiv);
    injectHere.appendChild(outerDiv);
}