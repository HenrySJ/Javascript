
function showStars(rows) {
    let container = '';
    for (i = 0; i < rows; i++){
        container += ` ${'*'}`;
        console.log(container);
    }
}

showStars(20);