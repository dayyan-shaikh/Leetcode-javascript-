// 1 
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let n=5
let counter = 1
let fun = (n) => {
    for (let i=1;i<=n;i++){
        let line = ""
        for (let j=1;j<=i;j++){
            line += counter + " ";
            counter++;
        }console.log(line);
        
    }
}
fun(n)