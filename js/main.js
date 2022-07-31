
// menu show & close event
const menuBtn = document.querySelector(".menuBtn");
const menuBox = document.querySelector(".menuBox");
const contentBox = document.querySelector(".contentBox");

menuBtn.addEventListener("click", () => {
    if(!menuBox.className.includes("showMenu")) {
        menuBox.classList.add("showMenu");
    } else {
        menuBox.classList.remove("showMenu");
    }
})

contentBox.addEventListener("click", () => {
    menuBox.classList.remove("showMenu");
})

// profile animation effect
const profileImgBox = document.querySelector(".profileImgBox");
const profileTextBox = document.querySelector(".profileTextBox");
const mainText = profileTextBox.querySelector(".mainText");
const mainWords = mainText.querySelectorAll(".word");
const subText = profileTextBox.querySelector(".subText");
const line = subText.querySelector(".line");

const profileEffect = () => {
    profileImgBox.classList.add("active");

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
                    }, 700)
                }, 2300)
            }, 500)
        }, 500);
    }, 550);
}

profileImgBox.querySelector("img").addEventListener("load", () => {
    profileEffect();
})