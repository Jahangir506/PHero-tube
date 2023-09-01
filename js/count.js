// let timer = 0;
// let timerInterval;

// let ms = document.getElementById('ms-count');
// let second = document.getElementById('second-count');
// let minute = document.getElementById('minute-count')

// const handleCountStart = () => {
//     timerInterval = setInterval(() => {
//         timer += 1 / 60;

//         let msInterval = Math.floor((timer - Math.floor(timer)) * 100);
//         let secondInterval = Math.floor(timer) - Math.floor(timer / 60) * 60;
//         let minuteInterval = Math.floor(timer / 60);

//         if(msInterval < 10){
//             ms.textContent = '0' + msInterval.toString()
//         }else{
//             ms.textContent = msInterval
//         }
//         // ms.textContent = msInterval < 10 ? '0' + msInterval.toString() : msInterval; // or ternary operator use

//         if(secondInterval < 10){
//             second.innerText = '0' + secondInterval.toString();
//         }else{
//             second.innerText = secondInterval
//         }
//         // second.textContent = secondInterval < 10 ? '0' + secondInterval.toString() : secondInterval;  // or ternary operator use

//         if(minuteInterval < 10){
//             minuteInterval.innerText = '0' + minuteInterval.toString();
//         }else{
//             minuteInterval.innerText = minuteInterval
//         }
//         // minute.textContent = minuteInterval < 10 ? '0' + minuteInterval.toString() : minuteInterval; //or ternary operator use

//     }, 1000 / 60)
    
// }

// const handleCountStop = () => {
//     clearInterval(timerInterval);
// }

// const handleCountReset = () => {
//     handleCountStop();
//     timer = 0 ;
//     ms.textContent = '00';
//     second.textContent = '00';
//     minute.textContent = '00'
// }








    console.log(hours, remainingMinutes);