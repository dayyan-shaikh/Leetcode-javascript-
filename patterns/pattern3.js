// 1
// 12
// 123
// 1234
// 12345

let n=5

let fun = (n) => {
    for(let i=1;i<=n;i++){
        let line = ""
        for (let j=1;j<=i;j++){
            line += j
        }console.log(line);
    }
    
}

fun(n)