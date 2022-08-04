// Best Practice | First Attempt
var number = function(busStops) {
    // for each bus stop, deconstruct the passenger array & determine the total passenger count
    // Store the reaining passenger & travel to next bus stop. Repeat until last bus stop & return the total
    return busStops.reduce((total, [passIn, passOut]) => total += passIn - passOut, 0);
}