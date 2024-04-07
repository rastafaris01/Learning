let person = {
    firstName: `Karolis`,
    lastName: `Puzaitis`,
    age: 20,
    wantstoEat: false,
    favoriteFood: `Burger`,
    wat() {        
        console.log(this.firstName + ' senis ' + this.age + ' ' + this.favoriteFood);        
    }
}

if (person.wantstoEat){
    person.wantstoEat = false;
    console.log('nenori');
} else {
    person.wantstoEat = true;
    console.log(`uzsimane`);
}