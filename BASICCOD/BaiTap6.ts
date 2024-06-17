console.clear();

/** Bài 1:
 * in ra các số nguyên tố nhỏ hơn 1 số limit nào đó
 */
 function printPrimes(limit: number): void {
   
  for(let i=0; i<limit; i++)
  {
    if(checkPrimeNumber(i))
    {
      console.log(i);
    }
  }
 }
 
 function checkPrimeNumber(n: number): boolean {

  let isPrimeNumber: boolean = true;

  if (n < 2) {
    isPrimeNumber = false;
  } else {
          for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrimeNumber = false;
            }
          }
          isPrimeNumber;
    }
    return isPrimeNumber;
}



 /**Bài 2:
  * tính tổng các số từ a đến b;
  * ví dụ a = 10; b=12
  * sum = 10+11+12
  */
  function sumBetween(a: number, b: number): number {
    let sum: number = 0;
    if(a <b)
    {
      for (let i = a; i <= b; i++) {
        sum += i;
      }
    }
    else
    {
      for (let i = b; i <= a; i++) {
        sum += i;
      }
    }  
    return sum;
   }
  
   console.log(sumBetween(1,4))
  



 /**Bài 3: 
  * tính tổng các số nguyên tố từ a đến b;
  */
  function handleSumOfPrimeAndPrint(a: number, b: number): void{

    function isPrime(num: number): boolean {
      let isPrimeNumber: boolean = true;
      if (num < 2) {
        isPrimeNumber = false;
      } else {
              for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrimeNumber = false;
                }
              }
              isPrimeNumber;
        }
      return isPrimeNumber;
    }
  
    function sumOfPrimesBetween(a: number, b: number): number{
      let sum: number = 0;
      for (let i=a; i<=b; i++)
      {
        if(isPrime(i))
        {
          sum+=i;
        }
      }
      return sum;
    }
    console.log(sumOfPrimesBetween(a,b));
  }
  console.log(handleSumOfPrimeAndPrint(1,5));
 


 /**Bài 4:
  * Trong lập trình, một số được gọi là số đối xứng (palindrome) nếu nó đọc từ trái sang phải và từ phải sang trái đều giống nhau. Ví dụ, 121, 12321 là các số đối xứng.
 Trong bài tập này, chúng ta sẽ viết một hàm để kiểm tra xem một số có phải là số đối xứng hay không mà không sử dụng chuỗi trong TypeScript.
  */

 function checkPalindromeNumber(num: number): boolean {
  let isPalindromeNumber: boolean = true;

  if(num !== checkReverse(num)) 
  {
    return isPalindromeNumber = false;
  }
  return isPalindromeNumber;

  function checkReverse(n: number): number {
    let reversedNum : number = 0;
    while(n !== 0)
    {
      let i = n%10;
      reversedNum = reversedNum*10 + i;
      n = (n-i)/10;
    }
    return reversedNum;
  }
 }
 
 console.log(checkPalindromeNumber(12321)); 


 /**Bài 5
 *Dãy số Fibonacci là một dãy số vô hạn các số tự nhiên bắt đầu bằng 0 và 1, sau đó mỗi số tiếp theo bằng tổng của hai số liền trước nó.
 Ví dụ: 0,1,1,2,3,5,8,13,21...
 Công thức để tính các số Fibonacci là:  Fn = Fn-1 + Fn-2
 Với:
 Fn là số Fibonacci thứ n
 Fn-1 là số Fibonacci thứ n-1
 Fn-2 là số Fibonacci thứ n-2
 Ví dụ:
 F0 = 0
 F1 = 1
 F2 = F1 + F0 = 1 + 0 = 1
 F3 = F2 + F1 = 1 + 1 = 2
 F4 = F3 + F2 = 2 + 1 = 3
 F5 = F4 + F3 = 3 + 2 = 5
 Và cứ thế...
 Ứng dụng của dãy số Fibonacci:
  Dãy số Fibonacci có nhiều ứng dụng trong toán học, khoa học máy tính và nghệ thuật. Một số ví dụ bao gồm:
  Tỷ lệ vàng: Tỷ lệ vàng, được ký hiệu là φ (phi), là một tỷ lệ toán học xuất hiện trong nhiều hiện tượng tự nhiên và được sử dụng trong nghệ thuật và kiến ​​trúc. Tỷ lệ vàng có thể được biểu thị bằng tỷ lệ của hai số Fibonacci liên tiếp.
 Phân tích kỹ thuật: Dãy số Fibonacci được sử dụng trong phân tích kỹ thuật để xác định các mức hỗ trợ và kháng cự tiềm năng trong biểu đồ giá của cổ phiếu và các tài sản tài chính khác.
 Thuật toán: Dãy số Fibonacci được sử dụng trong nhiều thuật toán máy tính, bao gồm tìm kiếm và sắp xếp.
 Nghệ thuật: Dãy số Fibonacci được sử dụng trong nghệ thuật để tạo ra các mẫu và hình dạng đẹp mắt.
 sử dụng typescirpt tìm số Fibonacci thứ n:
  */
 function fibonacci(n: number): number {
  
  if (n === 0 || n === 1) {
    return n;
  }else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log(fibonacci(9));
 