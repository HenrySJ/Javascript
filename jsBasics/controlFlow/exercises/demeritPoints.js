
// Speed limit = 70
// every 5 over limit -> 1 point
// 12 points -> licsense suspended
//Math.floor(1.3);

checkSpeed(75);

// function checkSpeed(speed) {
//     let points = (Math.floor(((speed - 70) / 5)))
//     if (speed < 75)
//         console.log('Acceptable Speed');
//     else if ((speed >= 75) && (speed < 130))
//         console.log(`you have ${points} point(s)`);
//     else
//         console.log('Licsense Suspended');
// }

// cleaner way to implement

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const points = Math.floor(((speed - speedLimit) / kmPerPoint));

    if (speed < speedLimit + kmPerPoint) {
        console.log('Okay');
        return;
    } 
    if (points >= 12)
        console.log('License Suspended');
    else
        console.log(`You have ${points} point(s)`);
}
