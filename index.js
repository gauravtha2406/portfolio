// console.log("hello guys");


const filtercontainer = document.querySelector(".portfolio-filter");

const filterbtns = filtercontainer.children;

const totalfilterbtn = filterbtns.length;
console.log(totalfilterbtn)
let portfolioitems = document.querySelectorAll(".portfolio-item");
let totalportfolioitems = portfolioitems.length;
console.log(totalportfolioitems);

for (let i = 0; i < totalfilterbtn; i++) {
    filterbtns[i].addEventListener("click", function () {
        filtercontainer.querySelector(".active").classList.remove("active")
        this.classList.add("active");
        const filtervalue = this.getAttribute("data-filter");
        console.log(filtervalue);
        for (let k = 0; k < totalportfolioitems; k++) {
            if (filtervalue === portfolioitems[k].getAttribute("data-category")) {
                portfolioitems[k].classList.remove("hide")
                portfolioitems[k].classList.add("show")
            }
            else {
                portfolioitems[k].classList.remove("show")
                portfolioitems[k].classList.add("hide")
            }
            if (filtervalue == "all") {
                portfolioitems[k].classList.remove("hide")
                portfolioitems[k].classList.add("show")
            }
        }
    })
}


//portfolio LightBox
const lightBox = document.querySelector(".lightbox"),
    lightboxclose = document.querySelector(".lightbox-close")
lightboximg = document.querySelector(".lightbox-img"),
    lightboxcaption = document.querySelector(".lightbox-caption"),
    lightboxtext = document.querySelector(".caption-text"),
    lightboxcounter = document.querySelector(".caption-counter");
let itemIndex = 0;

function nextitem() {
    if (itemIndex == totalportfolioitems - 1) {
        itemIndex = 0;
    }
    else {
        itemIndex++;
    }
    console.log(itemIndex);
    changeitem();

}

function previtem() {
    if (itemIndex == 0) {
        itemIndex = totalportfolioitems - 1;
    }
    else {
        itemIndex--;
    }
    console.log(itemIndex);
    changeitem();

}


for (let i = 0; i < totalportfolioitems; i++) {
    portfolioitems[i].addEventListener("click", () => {
        console.log(i);
        itemIndex = i;
        changeitem();
        togglelightbox();
    })
}

function togglelightbox() {
    lightBox.classList.toggle("open");
}

function changeitem() {
    imgsrc = portfolioitems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    console.log(imgsrc);
    lightboximg.src = imgsrc;
    lightboxtext.innerHTML = portfolioitems[itemIndex].querySelector("h4").innerHTML;
    lightboxcounter.innerHTML = (itemIndex + 1) + "of" + totalportfolioitems;
}


//lightboc close

lightBox.addEventListener("click", (event) => {
    if (event.target === lightboxclose || event.target === lightBox) {
        togglelightbox();
    }
})






// for  aside navbar
const nav = document.querySelector('.nav'),
    all = nav.querySelectorAll('li');
total = all.length;
allsection = document.querySelectorAll('.section');
totalsection = allsection.length;
for (let i = 0; i < total; i++) {
  const a = all[i].querySelector('a');
    a.addEventListener('click', function () {
            
        //remove back section section
        for (let i = 0; i < totalsection; i++) {
             allsection[i].classList.remove('back-section');
         }
    


        for (let j = 0; j < total; j++) {
            if(all[j].querySelector('a').classList.contains("active")){
                // adding back-section class
                allsection[j].classList.add("back-section");
            }
            all[j].querySelector('a').classList.remove("active");
        }
        console.log(this)
        this.classList.add("active");
        showSection(this)
    })

}

function showSection(element) {
    for (let i = 0; i < totalsection; i++) {
        allsection[i].classList.remove('active');
    }


    const target = element.getAttribute('href').split('#')[1];
    document.querySelector("#" + target).classList.add('active');

}




// aside functionality

const navtogglebtn = document.querySelector('.nav-toggle'),
       aside =document.querySelector('.aside');
       navtogglebtn.addEventListener('click',()=>{
           asidesection();

       })

       function asidesection(){
           aside.classList.toggle("open");
           navtogglebtn.classList.toggle("open");
           for(let i=0;i<totalsection;i++)
           {
            allsection[i].classList.toggle('open') ;
            

           }
       }