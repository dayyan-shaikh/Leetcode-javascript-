// 1
// 22
// 333
// 4444
// 55555

let n=5

let fun = (n) => {
    for (let i=1;i<=n;i++){
        let line = ""
        for (let j=1;j<=i;j++){
            line += i
        }console.log(line);
        
    }
}
fun(n)