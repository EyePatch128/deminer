let flagIcon = `<svg class="icon" height="20" viewBox="0 -36 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m415.746094 98.6875c-21.246094-51.542969-81.15625-88.6875-151.746094-88.6875-76.378906 0-140.246094 43.488281-156.171875 101.648438-35.070313 35.195312-56.828125 84.175781-56.828125 138.351562h285l102 79s64-51 64-114c0-91.507812-66.882812-108.636719-86.253906-116.3125zm0 0" fill="#ee3c32" /><path d="m370 430h-320c-22.089844 0-40-17.910156-40-40v-100c0-22.089844 17.910156-40 40-40h320c22.089844 0 40 17.910156 40 40v100c0 22.089844-17.910156 40-40 40zm0 0" fill="#e6e6e6" /><path d="m478 332c0 22.089844-17.910156 40-40 40s-40-17.910156-40-40 17.910156-40 40-40 40 17.910156 40 40zm0 0" fill="#e6e6e6" /><path d="m512 215c0-91.699219-63.761719-115.027344-87.761719-123.808594-.34375-.125-.675781-.25-1.003906-.367187-24.746094-54.503907-88.082031-90.824219-159.234375-90.824219-38.542969 0-76.28125 10.890625-106.261719 30.664062-29.152343 19.230469-49.957031 46.0625-58.824219 75.785157-35.242187 36.265625-55.515624 83.582031-57.707031 134.339843-23.390625 4.171876-41.207031 24.640626-41.207031 49.210938v100c0 27.570312 22.429688 50 50 50h320c27.570312 0 50-22.429688 50-50v-11.363281c5.589844 2.164062 11.65625 3.363281 18 3.363281 27.570312 0 50-22.429688 50-50 0-11.304688-3.773438-21.738281-10.125-30.125 17.03125-21.925781 34.125-52.492188 34.125-86.875zm-397.089844-96.292969c.066406-.0625.117188-.136719.175782-.199219 23.832031-23.851562 55.929687-41.035156 90.421874-48.40625 5.390626-1.160156 8.839844-6.480468 7.691407-11.871093-.980469-4.589844-5.089844-7.910157-9.78125-7.910157-.699219 0-1.398438.070313-2.101563.21875-19.167968 4.113282-37.589844 10.871094-54.75 20.09375-3.152344 1.695313-6.242187 3.476563-9.277344 5.320313 27-33.886719 74.539063-55.953125 126.710938-55.953125 64.894531 0 122.160156 33.152344 142.5 82.5.015625.03125.03125.0625.042969.09375 4.945312 12.035156 7.457031 24.621094 7.457031 37.40625 0 5.523438 4.476562 10 10 10s10-4.476562 10-10c0-8.277344-.886719-16.472656-2.613281-24.53125 25.679687 11.210938 60.613281 34.828125 60.613281 99.53125 0 28.261719-14.488281 54.339844-29.253906 73.578125-7.304688-4.175781-15.746094-6.578125-24.746094-6.578125-6.425781 0-12.566406 1.230469-18.214844 3.449219-1.839844-20.289063-15.847656-37.117188-34.652344-43.101563 6.425782-9.828125 15.082032-23.519531 21.648438-35.558594 2.644531-4.847656.855469-10.921874-3.992188-13.566406-4.847656-2.648437-10.921874-.859375-13.566406 3.988282-3.351562 6.144531-7.34375 12.84375-11.289062 19.214843-2.730469-25.285156-12.207032-59.839843-40.859375-88.496093-3.90625-3.90625-10.238281-3.90625-14.144531 0s-3.90625 10.234374 0 14.140624c34.066406 34.066407 36.453124 79.332032 35.808593 97.929688h-297.480469c.351563-6.742188 1.066407-13.414062 2.113282-20h61.628906c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-57.308594c8.375-30.527344 24.441406-58.433594 47.21875-81.292969zm255.089844 281.292969h28.28125c-4.128906 11.640625-15.246094 20-28.28125 20h-320c-16.542969 0-30-13.457031-30-30v-100c0-16.542969 13.457031-30 30-30h320c16.542969 0 30 13.457031 30 30v9.558594c-7.472656 8.738281-12 20.070312-12 32.441406s4.527344 23.703125 12 32.441406v15.558594h-30c-5.519531 0-10 4.488281-10 10s4.480469 10 10 10zm68-38c-16.542969 0-30-13.457031-30-30s13.457031-30 30-30 30 13.457031 30 30-13.457031 30-30 30zm0 0" /><path d="m243.109375 66h.050781c2.667969-.011719 5.179688-1.058594 7.058594-2.960938 1.882812-1.898437 2.902344-4.410156 2.890625-7.089843-.027344-5.480469-4.507813-9.949219-10-9.949219h-.050781c-2.667969.011719-5.167969 1.070312-7.046875 2.960938-1.882813 1.898437-2.910157 4.417968-2.902344 7.089843.03125 5.488281 4.511719 9.949219 10 9.949219zm0 0" /><path d="m330 380c-5.511719 0-10 4.488281-10 10s4.488281 10 10 10 10-4.488281 10-10-4.488281-10-10-10zm0 0" /></svg>`;

function startGame() {
    const body = document.getElementsByTagName("body")[0];
    const button = document.getElementsByClassName("divBtn")[0];
    const newGame = document.getElementsByClassName("regame")[0];


    // Get index of element in nested array
    Array.prototype.multiIndexOf = function (value) {
        var result;
        this.some(function iter(path) {
            return function (a, i) {
                if (a === value) {
                    result = path.concat(i);
                    return true;
                };
                return Array.isArray(a) && a.some(iter(path.concat(i)));
            }
        }([]));
        return result;
    };

    const animateTitle = () => {
        const titleDiv = document.getElementById('title');
        const title = titleDiv.firstChild;
        title.style.fontSize = "2em";
        titleDiv.style.width = "20%";
    };

    button.addEventListener("click", function () {
        newGame.style.display = "none";
        document.getElementsByClassName("end")[0].style.visibility = "hidden";
        document.getElementById("loss").style.display = "none";
        document.getElementById("vict").style.display = "none";
        this.style.display = "none";
        animateTitle();
        const endDiv = document.getElementsByClassName("end")[0];

        //gen de grille
        const genGrille = () => {
            for (let i = 1; i <= 100; i++) {
                let div = document.getElementById("div0");
                div.innerHTML += "<button class='btn'></button>"
                if ((i % 10) == 0) {
                    div.innerHTML += "<br>";
                };
            };
        };

        genGrille();


        // Get buttons 
        let btns = [...document.getElementsByClassName("btn")];

        // array of revealed buttons
        const revealed = [];

        // reorganization of buttons
        let reorgBtns = [];
        for (let i = 0; i < 10; i++) {
            let indexBeg = i * 10;
            let indexEnd = indexBeg + 10;
            reorgBtns.push(btns.slice(indexBeg, indexEnd));
        };


        //Gen bombes
        const genBombe = (n) => {
            for (let i = 0; i < n; i++) {
                let randomNum = Math.floor(Math.random() * 100);
                let pos = btns[randomNum];
                pos.innerHTML = "<span class='bomb'>X</span>";
            };
        };

        genBombe(10);


        //Get liste de bombs
        const getBombs = () => {
            let bombBtn = [];

            for (let i = 0; i < btns.length; i++) {
                if (btns[i].firstChild) {
                    cname = btns[i].firstChild.className;
                    if (cname == "bomb") {
                        bombBtn.push(btns[i]);
                    };
                };
            };

            return bombBtn;
        };

        const bombBtn = getBombs();

        // Get button neighbors

        const getNeighbors = function (btn) {
            const fstArrInd = reorgBtns.multiIndexOf(btn)[0];
            const lstArrInd = reorgBtns.multiIndexOf(btn)[1];

            let mFstArrInd = fstArrInd - 1;
            let pFstArrInd = fstArrInd + 1;
            let mLstArrInd = lstArrInd - 1;
            let pLstArrInd = lstArrInd + 1;


            let t = mFstArrInd >= 0 ? btns[btns.indexOf(reorgBtns[fstArrInd - 1][lstArrInd])] : undefined;
            let b = pFstArrInd <= 9 ? btns[btns.indexOf(reorgBtns[fstArrInd + 1][lstArrInd])] : undefined;
            let l = mLstArrInd >= 0 ? btns[btns.indexOf(reorgBtns[fstArrInd][lstArrInd - 1])] : undefined;
            let r = pLstArrInd <= 9 ? btns[btns.indexOf(reorgBtns[fstArrInd][lstArrInd + 1])] : undefined;
            let ltc = mFstArrInd >= 0 && mLstArrInd >= 0 ? btns[btns.indexOf(reorgBtns[fstArrInd - 1][lstArrInd - 1])] : undefined;
            let rtc = mFstArrInd >= 0 && pLstArrInd <= 9 ? btns[btns.indexOf(reorgBtns[fstArrInd - 1][lstArrInd + 1])] : undefined;
            let lbc = pFstArrInd <= 9 && mLstArrInd >= 0 ? btns[btns.indexOf(reorgBtns[fstArrInd + 1][lstArrInd - 1])] : undefined;
            let rbc = pFstArrInd <= 9 && pLstArrInd <= 9 ? btns[btns.indexOf(reorgBtns[fstArrInd + 1][lstArrInd + 1])] : undefined;

            return [t, b, l, r, ltc, rtc, lbc, rbc];
        };

        //gen de nombres
        const genNbr = () => {
            for (let i = 0; i < bombBtn.length; i++) {
                const pos = bombBtn[i];

                const cases = getNeighbors(pos);

                for (let relBtn of cases) {

                    if (relBtn != undefined) {

                        if (relBtn.firstChild) {

                            if (relBtn.firstChild.className !== "bomb") {
                                if (relBtn.firstChild.className == "num") {
                                    let num = relBtn.firstChild.innerHTML;
                                    num++;
                                    relBtn.firstChild.innerHTML = num;
                                };
                            };

                        } else {
                            let num = 0;
                            num++;
                            if (num > 0) relBtn.innerHTML = "<span class='num'>" + num + "</span>"
                        };

                    };

                };
            };
        };

        genNbr();



        //liste de nombres
        const getNums = () => {
            let nombreBtn = [];
            for (let i = 0; i < btns.length; i++) {
                if (btns[i].firstChild) {
                    cname = btns[i].firstChild.className;
                    if (cname.indexOf("num") !== -1) {
                        nombreBtn.push(btns[i]);
                    };
                };
            };
            return nombreBtn
        };

        const nombreBtn = getNums();


        // Spread when empty button is clicked
        const emptyBtn = btns.filter(elem => {
            if (!elem.firstChild) return elem;
        });
        const onEmptyBtn = (btn) => {

            const cases = getNeighbors(btn);

            for (let i = 0; i < cases.length; i++) {
                let currBtn = cases[i];

                if (bombBtn.indexOf(currBtn) < 0 && currBtn !== undefined) {
                    currBtn.click();
                };
            };

        };

        const revealButton = function (btn) {
            revealed.push(btn);

            if (bombBtn.indexOf(btn) >= 0) {
                // If Clicked on bomb
                btn.style.backgroundColor = "red";
                btn.firstChild.style.color = "#000";
                btn.removeEventListener('contextmenu', rightClickEv, false);
                loss();
            } else {

                if (nombreBtn.indexOf(btn) >= 0) {
                    // If Clicked on Number
                    let colorIndex = btn.firstChild.innerHTML;
                    btn.style.backgroundColor = "white";
                    let classN = " num" + colorIndex;
                    btn.firstChild.className += classN;
                    btn.removeEventListener('contextmenu', rightClickEv, false);

                } else {
                    // If clicked on empty button (white or not)
                    let bgColor = btn.style.backgroundColor;
                    if (bgColor !== "white") {
                        onEmptyBtn(btn);
                        btn.style.backgroundColor = "white";
                        btn.removeEventListener('contextmenu', rightClickEv, false);
                    };
                };

                //check win
                let whiteBtn = 0;
                btns.forEach(elem => {
                    if (elem.style.backgroundColor == "white") whiteBtn++;
                });

                let goalNum = btns.length - bombBtn.length;
                if (whiteBtn == goalNum) {
                    win();
                };
            };
        };

        //check
        const checkOnClick = (function () {

            if (!revealed.includes(this)) {
                revealButton(this);
            };

        });


        const rightClickEv = function (ev) {
            ev.preventDefault();

            if (this.firstChild) {
                if (this.firstChild !== this.lastChild || this.firstChild.tagName == "svg") {
                    this.removeChild(this.lastChild);
                    this.addEventListener("click", checkOnClick);
                } else {
                    this.removeEventListener("click", checkOnClick);
                    this.innerHTML += flagIcon;

                };
            } else {
                this.removeEventListener("click", checkOnClick);
                this.innerHTML += flagIcon;
            };

            return false;
        }

        // add event listeners to every grid 
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", checkOnClick);
            btns[i].addEventListener('contextmenu', rightClickEv, false);
        };

        //end game
        const endGame = () => {
            btns.forEach(elem => {
                elem.removeEventListener("click", checkOnClick);
                elem.removeEventListener('contextmenu', rightClickEv, false);
            });
            revealAllBombs();
            newGame.style.display = "block";
            document.getElementsByClassName("end")[0].style.visibility = "visible";
        };
        //when game is lost
        const loss = () => {
            document.getElementById("loss").style.display = "block";
            endGame();
        };

        // when game is won
        const win = () => {
            document.getElementById("vict").style.display = "block";
            endGame();
        };

        const revealAllBombs = () => {
            for (let i = 0; i < bombBtn.length; i++) {
                const btn = bombBtn[i];
                if (this.firstChild !== this.lastChild || this.firstChild.tagName == "I") {
                    this.removeChild(this.lastChild);
                };
                btn.style.backgroundColor = "red";
                btn.firstChild.style.color = "#000";
            };
        };
    });

    const regame = function () {
        const div = document.getElementById("div0");
        const endDiv = document.getElementsByClassName("end")[0];
        if (endDiv.lastChild.className && endDiv.lastChild.className.includes("result")) {
            endDiv.removeChild(endDiv.lastChild);
        };
        div.innerHTML = "";
        button.style.display = "block";
        newGame.style.display = "none";
        document.getElementsByClassName("end")[0].style.visibility = "hidden";

        document.getElementById("loss").style.display = "none";
        document.getElementById("vict").style.display = "none";
    };

    newGame.addEventListener("click", regame);

};

startGame();