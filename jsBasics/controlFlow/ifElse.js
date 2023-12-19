// If... else

// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good evening!

let hour = 13;

if (hour >= 6 && hour < 12)
    console.log('Good morning');
else if (hour >= 12 && hour < 18)
    console.log('Good afternoon');
else if (hour >= 18 && hour < 24)
    console.log('Good evening');
else
    console.log('you should be in bed!');