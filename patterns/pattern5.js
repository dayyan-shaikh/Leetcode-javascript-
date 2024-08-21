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