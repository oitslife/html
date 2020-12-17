function Account(owner, code, balance){
    this.owner = owner;
    this.code = code;
    this.balance = balance;

    this.inquiry = function(){return this.balance;}
    this.deposit = function(money){this.balance += money;}
    this.withdraw = function(money){this.balance -= money; return money;}
    this.eat = function(){
        console.log('히히먹다');
    }
}

let account = new Account('hong',111,400);
console.log(account);
console.log(account.inquiry);

console.log("==========================");

console.log(account.eat);