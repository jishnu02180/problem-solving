function kilometerToMeter(value) {
    if (value > 0) {
        var meter = value * 1000;
        return meter;
    }
    else {
        return 'this is a negative value';
    }
}

var results = kilometerToMeter(2);
//console.log(results);

function budgetCalculator(watch, phone, laptop){
    
    if(watch > 0 && phone > 0 && laptop > 0){
        var total = watch * 50 + phone * 100 + laptop * 500;
        return total;
    } else{
        return 'please input the positive value';
    }

}

var totalCost = budgetCalculator(3,-5,2);
//console.log(totalCost);

function hotelCost(value){

    var totalCost = 0;

    if(value > 0){
        if(value <= 10){
            return totalCost = value * 100;
        } else if(value <= 20){
            var first10Days = 10 * 100;
            var remainngDays = value - 10;
            var last10Days = remainngDays * 80;
            totalCost = first10Days + last10Days;
            return totalCost;

        } else{
            var first_10_days = 10 * 100;
            var last_10_days =  10 * 80;
            var remainsDays = value - 20;
            var lastRemainDays = remainsDays * 50;
            totalCost = first_10_days + last_10_days + lastRemainDays;
            return totalCost;
        }
    } else {
        return 'Please input a positive value';
    }

}

var holetTotalCost = hotelCost(2);
//console.log(holetTotalCost);

function megaFriend(friends){
   
    var largeValue = [0];
    for(var i = 0; i < friends.length; i++){
        var element = friends[i];
        if(element.length > largeValue.length){
            largeValue = element;
        }
    }
    return largeValue;

}

var friends = ['kamal','jamalvai', 'jishnu','JishnuSardar'];
var results = megaFriend(friends);
console.log(results);

