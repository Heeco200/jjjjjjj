window.addEventListener("DOMContentLoaded", ()=> {
    const promo_bg = document.querySelector(".promo__bg");
    const promo__adv = document.querySelectorAll(".promo__adv img");
    const promo__interactiveList = document.querySelector(
        ".promo__interactive-list"
    );
    const add = document.querySelector(".add");
    const adding__input = document.querySelector(".adding__input");
    const checkbox = document.querySelector('[type="checkbox"]');
    const serials = [
        "OMAR",
        "The Final Legacy",
        "ERTUGRUL",
        "MAGNIFICENT CENTURY",
        "GREAT SELJUKS: GUARDIANS...",
    ]
    const promo__genre = document.querySelector(".promo__genre");
    promo__genre.innerHTML = "Roman"

    add.addEventListener("submit", (e)=> {
        e.preventDefault();
        let newSerial = adding__input.value;
        const check = checkbox.checked;
        if (newSerial) {
            if (newSerial.length > 18) {
                newSerial = `${newSerial.substring(0, 18)}...`
            }
            serials.push(newSerial);
            serials.sort();
            createNewSerial(serials);
        }
        // 
        e.target.reset();
    })

    function changeAdvBg(params) {
        promo_bg.style.background =
            'url("../img/1.jpg") center center/cover no-repeat';
        promo_bg.style.backgroundPosition = "bottom";
    }
    promo__adv.forEach((item) => {
        item.remove();
    });

    function createNewSerial(kino) {
        kino.sort();
        promo__interactiveList.innerHTML = "";
        kino.forEach((item, index) => {
            promo__interactiveList.innerHTML += `
        <li class="promo__interactive-item">
            ${index + 1 + "." + item}
            <div class="delete"></div>
        </li>
        `;
        })
        document.querySelectorAll(".promo__interactive-item").forEach((item, index)=> {
            item.addEventListener('click', (e)=> {
                if (e.target.classList.contains('delete')) {
                    e.target.parentElement.remove();
                    serials.splice(index, 1);
                    createNewSerial(serials);
                }
            })
        })
    }


    createNewSerial(serials);
    changeAdvBg();
})