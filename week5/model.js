//import the database from the db.js file
let banksDb = require('./db');

//create functions/ classes for bank model from the post method.
class bankModel {
    constructor({name,location,branch,phone,address,accountnumber}) {
      this.name = name;
      this.location = location;
      this.branch = branch;
      this.phone = phone;
      this.address = address;
      this.accountnumber = accountnumber;
    }
    save(){
        banksDb.push(this);
        return this;
    }
    static all(){
        return banksDb;
    }

    static update(updateInfo = {}) {
    banksDb = banksDb.map(bank =>{
        if (bank.name === updateInfo.name) {
            return { ...bank, ...updateInfo };
        }
        return bank;
    });
    }
    static delete({name}) {
    let deletedBank = null;
    banksDb = banksDb.filter(bank => {
        if(bank.name !== name){
            return true;
        }
        deletedBank = bank;
            return false;
        });
    return deletedBank;
    }

}

module.exports = bankModel;