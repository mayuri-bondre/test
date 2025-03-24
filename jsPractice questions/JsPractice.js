// function frequency(arr) {
//     const freq = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (freq[arr[i]]) {
//             freq[arr[i]] += 1;
//         } else {
//             freq[arr[i]] = 1;
//             console.log(freq)
//         }
//     }
//     return freq;
// }

// console.log(frequency([1, 1, 2, 3, 3, 4])); 

//count the occurence of characher in the string

// function CountChar(char, str){
//     let count=0
//     for(let i=0;i<str.length;i++){
//         if(str[i]==char){
//             count++
//         }
//     }
//     return count
// }
// console.log(CountChar('m', 'mayuriismaa'))


//sort arry in acending order
// function SortArr(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1; j<arr.length;j++){
//           if(arr[i]<arr[j]){

//             let temp=arr[i] // 
//             arr[i]=arr[j]
//             arr[j]=temp
//           }
//         }
//     }
//     return arr
// }
// console.log(SortArr([5,2,8]))

// merget two array

function Mergarr(a1, a2){
    return a1.concat(a2)
}
console.log(Mergarr([5,6],[7,8]));
