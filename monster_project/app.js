new Vue({
    el: "#app",
    data: {
        running: false,
        playerHealth:100,
        mosterHealth:100,
        log: []
    },
    watch:{
        playerHealth: function(newVal){
            this.endGame(newVal, 'You lose! New game?');
        },
        mosterHealth: function(newVal){
            this.endGame(newVal, 'You win! New game?');
        }
    },
    computed: {
        pHealthBar: function(){
            return {
                width: this.playerHealth+'%'
            }
        },
        mHealthBar: function(){
            return {
                width: this.mosterHealth+'%'
            }
        }
    },
    methods:{
        endGame: function(newVal, text){
            if(newVal <=0){
                if(confirm(text)){
                    this.startNewGame();
                }else{
                    this.giveUp();
                }
            }
        },
        startNewGame: function(){
            this.running = true;
            this.playerHealth = 100;
            this.mosterHealth = 100;
            this.log = [];
        },
        giveUp: function(){
            this.running = false;
        },
        getRandomAmount:function(num){
            return Math.round(Math.random()*10*num);
        },
        doSpecialAttack:function(){
            let attackPower = this.getRandomAmount(2);
            this.doPlayerAttack(attackPower);
            this.logEvent('special', attackPower);
        },
        doPlayerAttack: function(attackPower){
            if(attackPower == 0){
                attackPower = this.getRandomAmount(1);
                this.logEvent('player', attackPower);
            }
            this.mosterHealth-=attackPower;
            this.doMonsterAttack();
        },
        doMonsterAttack: function(){
            let attackPower = this.getRandomAmount(1);
            this.playerHealth-=attackPower;
            this.logEvent('monster', attackPower);
        },
        logEvent: function(type, amount){
            this.log.push({
                typeAttack: type,
                power: amount
            });
        },
        doHeal: function(){
            let healAmount = this.getRandomAmount(2);
            this.playerHealth+=healAmount;
            if(this.playerHealth > 100) this.playerHealth = 100;
            this.doMonsterAttack();
            this.logEvent('heal', healAmount);
        }
    }
});