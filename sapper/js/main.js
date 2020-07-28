// Компонент: "Главное меню"
Vue.component('beginning-of-game', {
    data: function () {
        return {
            trueGame: false
        }
    },
    template: '<button v-on:click="showTheGame" class= "showTheGame btn btn-success"> Начать игру! </button>',
    methods: {
        showTheGame: function () {
            app.showBeginningComponentOne = true
        },
    }
})

// Компонент: "подвал"
Vue.component('game-footer', {
    data: function () {
        return {
            rules: false,
            show: false,
        }
    },
    methods: {
        gameRules: function () {
            if (!this.rules) {
                this.rules = true
            }
            else {
                this.rules = false
            }
        },
    },
    template:
        `<section>
    <h2 class= "hint">ПОДСКАЗКА!</h2>
    <h2 class= "hint"> Первая ячейка (левый верхний угол) не взорвётся!</h2>
    <button v-on:click = "gameRules, show = !show" class= "btn btn-warning"> Правила игры</button>
    <transition name="slide-fade">
    <p v-if= "rules, show" class = "hintwarning">
    В данном случае, есть 16 ячеек. В некоторых из них спрятаны бомбы. Нужно не подорваться на них! Открываем клеточку и видим цифру. Она означает, что в радиусе одной клетки данной клетки (вокруг неё) есть бобма,а количество их записано в клетке (та самая циферка).  И нужно открыть все клеточки, минуя бомбы. УДАЧИ!</p></transition>
    </section>`
})

// Компонент: "Проигрыш"
Vue.component('end-game-false', {
    data: function () {
        return {
        }
    },
    methods: {
        startOver: function () {
            app.showBeginningComponentOne = false
            app.runTheEnd = false
            app.NotABomb = 0
            app.numberofBombs = 0
            app.updatinFeatures()
        }
    },
    template:
        `<div class= "end_game_false card text-white bg-danger" role="alert">
    <span>Увы, но Вы проиграли.</span>
    <img src="./img/endgamefalse.png" class= "end_game_false_img">
    <button class= "btn btn-success btn_end_game" v-on:click= "startOver">Начать заново</button>
    </div>`,
})

// Компонент: "Выигрыш"
Vue.component('end-game-true', {
    data: function () {
        return {

        }
    },
    methods: {
        startOverTrue: function () {
            app.showBeginningComponentOne = false
            app.runTheEndTrue = false
            app.NotABomb = 0
            app.numberofBombs = 0
            app.updatinFeatures()
        }
    },
    template:
        `<div class= "end_game_false card text-white bg-success">
    <span>Ура! Вы выиграли!</span>
    <img src="./img/endgametrue.png" class= "end_game_false_img">
    <button class= "btn btn-warning btn_end_game" v-on:click= "startOverTrue">Начать заново</button>
    </div>`,
})

var app = new Vue({
    el: '#app',
    data: {
        isActive: '',
        distanceBimby: 0,
        showBeginningComponentOne: false,
        runTheEnd: false,
        NotABomb: 0,
        numberofBombs: 0,
        runTheEndTrue: false,
        buttonCoord: [
            [{ coordX: a = 0, coordY: a = 0, bomb: false, empty: '', number: a = 0 }, { coordX: a = 0, coordY: a = 1, bomb: false, empty: '', number: b = 0 }, { coordX: a = 0, coordY: a = 2, bomb: false, empty: '', number: c = 0 }, { coordX: a = 0, coordY: a = 3, bomb: false, empty: '', number: b = 0 }],
            [{ coordX: a = 1, coordY: a = 0, bomb: false, empty: '', number: d = 0 }, { coordX: a = 1, coordY: a = 1, bomb: false, empty: '', number: e = 0 }, { coordX: a = 1, coordY: a = 2, bomb: false, empty: '', number: f = 0 }, { coordX: a = 1, coordY: a = 3, bomb: false, empty: '', number: f = 0 }],
            [{ coordX: a = 2, coordY: a = 0, bomb: false, empty: '', number: g = 0 }, { coordX: a = 2, coordY: a = 1, bomb: false, empty: '', number: h = 0 }, { coordX: a = 2, coordY: a = 2, bomb: false, empty: '', number: i = 0 }, { coordX: a = 2, coordY: a = 3, bomb: false, empty: '', number: j = 0 }],
            [{ coordX: a = 3, coordY: a = 0, bomb: false, empty: '', number: g = 0 }, { coordX: a = 3, coordY: a = 1, bomb: false, empty: '', number: h = 0 }, { coordX: a = 3, coordY: a = 2, bomb: false, empty: '', number: i = 0 }, { coordX: a = 3, coordY: a = 3, bomb: false, empty: '', number: j = 0 }]
        ],
    },
    methods: {
        bombSearch: function (bomba) {
            if (bomba === true) {
                this.isActive = true
            }
            else {
                app.distanceToBimby()
            }
        },
        btnsolider: function (active) {
            if (active === true) {
                this.isActivebtn = true
            }
        },
        distanceToBimby: function () {
            for (let x = 0; x < 4; x++) {
                for (let y = 0; y < 4; y++) {
                    if (this.buttonCoord[x][y].bomb) {
                        this.buttonCoord[x][y].number = ''
                    }
                    this.buttonCoord[x][y].number = this.radiusBomb(x, y)
                }
            }
        },
        radiusBomb: function (xB, yB) {
            let bombTrue = 0;
            for (let x = xB - 1; x <= xB + 1; x++) {
                for (let y = yB - 1; y <= yB + 1; y++) {
                    if (x >= 0 && x <= 3 && y >= 0 && y <= 3) {
                        if (this.buttonCoord[x][y].bomb) {
                            bombTrue++
                        }
                    }
                }
            }
            return bombTrue++
        },
        clicknumber: function (a, b) {
            if (!this.buttonCoord[a][b].bomb) {
                this.buttonCoord[a][b].empty = this.buttonCoord[a][b].number
                this.NotABomb++
            }
            else {
                setTimeout(() => { this.runTheEnd = true, this.NotABomb = 0}, 500)
            }
        },
        rndMine: function () {
            let minimumQuantity = 0
            for (let x = 0; x < 4; x++) {
                for (let y = 0; y < 4; y++) {
                    let rndBomb = Math.random() * 10
                    if (rndBomb < 2) {
                        this.buttonCoord[x][y].bomb = true
                        minimumQuantity++
                        if (minimumQuantity < 4) {
                            break
                        }
                    }
                }
            }
            this.buttonCoord[0][0].bomb = false
        },
        updatinFeatures: function () {
            for (let x = 0; x < 4; x++) {
                for (let y = 0; y < 4; y++) {
                    this.buttonCoord[x][y].bomb = false
                    this.buttonCoord[x][y].empty = ''
                    this.buttonCoord[x][y].number = 0
                }
            }
            this.isActive = ''
            this.rndMine()
            this.distanceToBimby()
            this.checkingYourWinnings()
        },
        checkingYourWinnings: function () {
            for (let x = 0; x < 4; x++) {
                for (let y = 0; y < 4; y++) {
                    if (this.buttonCoord[x][y].bomb) {
                        this.numberofBombs++
                    }
                }
            }
        },
        Winnertrue: function () {
            if ((16 - this.NotABomb) === this.numberofBombs) {
                this.runTheEndTrue = true
            }
        }
    },
    mounted() {
        this.rndMine()
        this.distanceToBimby()
        this.checkingYourWinnings()
    },
})  