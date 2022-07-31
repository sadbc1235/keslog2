
// menu show & close event
const menuBtn = document.querySelector(".menuBtn");
const menuBox = document.querySelector(".menuBox");
const menuItems = menuBox.querySelectorAll("li");
const contentBox = document.querySelector(".contentBox");

menuBtn.addEventListener("click", () => {
    if(!menuBox.className.includes("showMenu")) {
        menuBox.classList.add("showMenu");
    } else {
        menuBox.classList.remove("showMenu");
    }
})

// profile animation effect
const profileImgBox = document.querySelector(".profileImgBox");
const profileTextBox = document.querySelector(".profileTextBox");
const mainText = profileTextBox.querySelector(".mainText");
const mainWords = mainText.querySelectorAll(".word");
const introduce = profileTextBox.querySelector(".introduce");
const subText = profileTextBox.querySelector(".subText");
const line = subText.querySelector(".line");

const profileOpen = () => {
    profileImgBox.classList.add("active");
    profileTextBox.style.display = "block";

    setTimeout(() => {
        mainWords[0].classList.add("showStroke");
        setTimeout(() => {
            mainWords[1].classList.add("showStroke");

            setTimeout(() => {
                mainWords[2].classList.add("showStroke");

                mainWords.forEach( word => {
                    word.classList.add("showColor");
                })

                setTimeout(() => {
                    subText.classList.add("showSubText");
                    
                    setTimeout(() => {
                        line.classList.add("showLine");

                        setTimeout(() => {
                            introduce.classList.add("showIntroduce");
                        }, 1500)
                    }, 700)
                }, 2300)
            }, 500)
        }, 500);
    }, 550);
}

profileImgBox.querySelector("img").addEventListener("click", () => {
    profileOpen();
})


// if(menuItems[0].className.includes("active")) {
//     profileEffect();
// }