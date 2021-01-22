// https://github.com/jishnu02180/problem-solving


// Declared kilometerToMeter function for converting km to meter

function kilometerToMeter(value) {
    if (value > 0) {
        var meter = value * 1000;
        return meter;
    }
    else {
        return 'Distance can not be negative';
    }
}



// Declared budgetCalculator for calculating cost

function budgetCalculator(watch, phone, laptop) {
    var numberOfwatch = Math.round(watch);
    var numberOfPhone = Math.round(phone);
    var numberOfLaptop = Math.round(laptop);
    if (numberOfwatch > 0 && numberOfPhone > 0 && numberOfLaptop > 0) {
        var total = numberOfwatch * 50 + numberOfPhone * 100 + numberOfLaptop * 500;
        return total;
    } else {
        return 'Number of watch, phone and laptop should be greater 0';
    }
}


// Declared hotelCost function for calculate total hotel living cost

function hotelCost(value) {
    var totalCost = 0;
    if (value > 0) {
        if (value <= 10) {
            return totalCost = value * 100;
        } else if (value <= 20) {
            var firstTenDays = 10 * 100;
            var remainngDays = value - 10;
            var lastTenDays = remainngDays * 80;
            totalCost = firstTenDays + lastTenDays;
            return totalCost;

        } else {
            var firstTenDaysCost = 10 * 100;
            var lastTenDaysCost = 10 * 80;
            var remaingsDays = value - 20;
            var lastRemaingDaysCost = remaingsDays * 50;
            totalCost = firstTenDaysCost + lastTenDaysCost + lastRemaingDaysCost;
            return totalCost;
        }
    } else {
        return 'Cost can not be negative value';
    }

}


// Declared megaFunction for return largest array element

function megaFriend(friends) {
    var longName = [0];
    if (friends.length > 0) {
        for (var i = 0; i < friends.length; i++) {
            var element = friends[i];
            if (element.length > longName.length) {
                longName = element;
            }
        }
        return longName;
    } else {
        return 'Please input a valid array';
    }
}

