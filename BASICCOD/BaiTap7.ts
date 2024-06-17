/**
 * Bài Tập 1: Tìm Tất Cả Các Số Hoàn Hảo Trong Một Khoảng
Yêu cầu: Số hoàn hảo là số mà tổng tất cả các ước số của nó (trừ chính nó) bằng chính nó. Viết chương trình tìm tất cả các số hoàn hảo trong một khoảng.
Ví dụ:
Input: 1 đến 10000
Output: 6, 28, 496, 8128
*/
function printPerfectNumberInRange(a: number, b: number): void{
  for(let i=a; i<=b; i++)
  {
    if(checkPerfectNumber(i) === true)
    {
      console.log(i);
    }
  }

  function checkPerfectNumber(n: number): boolean{
    let isPerfectNumber = true;
    let sumDivisor : number = 0;
    for(let i = 0; i <= n/2; i++)
    {
      if(n%i === 0){
        sumDivisor += i;
      } 
    }
    if(sumDivisor === n)
    {
      return isPerfectNumber;
    }
    return isPerfectNumber = false;
  }
}

console.log(printPerfectNumberInRange(1,10000));



/**
 * Bài Tập 2: Tính Số Fibonacci Thứ N
Yêu cầu: Viết chương trình tính số Fibonacci thứ n.
 Dãy Fibonacci bắt đầu bằng 0, 1 và mỗi số tiếp theo là tổng của hai số trước đó.
Ví dụ:
Input: 5
Output: 3 (Dãy Fibonacci: 0, 1, 1, 2, 3)
 */
function printtFibonacciRange(n: number): string{
  let strFibonacci: string = '';

  for (let i=0; i<=n; i++){
    strFibonacci += " "+getFibonacci(i);
  }  
  return strFibonacci;

  function getFibonacci(num: number): number{
  let f0: number = 0;
  let f1: number = 1;
  let fn: number = 0;

  if( num === 0 || num === 1){
    return num;
  }else{
      for(let i=2; i<=num; i++)
      {
        f0 = f1;
        f1 = fn;
        fn = f0 + f1;
      } 
    }
    return fn;
  }   
}

console.log(printtFibonacciRange(10));



/**
 * 
 * Bài 3:
 * 
 * vẽ tam giác bằng dấu sao chỉ có cạnh
 * 
 * input 5:     *
 *             * *
 *            *   *
 *           *     * 
 *          *********
 * 
 */

 function drawIsoscelesTriangle(n: number){
  let result = ' ';
  for (let i = 1; i <= n; i++)
  {
     let line = '\n';
     for (let j = 1; j <= 2*n - 1; j++)
     {
        if (i === n || j == n-i+1 || j == n+i-1){
           line +='*';
        }
        else{
           line +=' ';
        }
     }
     result +=line;
  }
  console.log(result);
}
console.log(drawIsoscelesTriangle(5));