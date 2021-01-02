// function solve(steps, length, speed){
//     let distance = steps * length;
//     let time = Math.ceil(distance / (speed * 1000 / 3600) + Math.floor(distance / 500) * 60);
//     let hours = Math.floor(time / 3600);
//     let minutes = Math.floor((time - hours * 3600) / 60);
//     let seconds = time - hours*3600 - minutes*60;
//     console.log(`0${hours}:${minutes}:${seconds}`);   
// }
// solve(4000, 0.60, 5);
// solve(2564, 0.70, 5.5);

solve = (steps, length, speed) => {
    let distance = steps * length;
    let time = Math.ceil(distance / (speed * 1000 / 3600) + Math.floor(distance / 500) * 60);
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = time - hours*3600 - minutes*60;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    function pad(num){
        if(num < 10){
            return '0' + num;
        } else {
            return '' + num;
        }
    }
}
console.log(solve(4000, 0.60, 5));
console.log(solve(2564, 0.70, 5.5));
