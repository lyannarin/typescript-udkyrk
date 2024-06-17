/**
 * bài 1
 * sử dụng arrow function, anonymous function
 * in ra diện tích của một hình tròn
 */
/**
 * @param {number} r la ban kinh hinh tron;
 * 
 */
//arrow function
 const areaCircle = (r: number): number =>{
  return r**2*3.14;
}
console.log(areaCircle(2));


//anonymus function
( (r: number): void =>{
  let areaCircle: number = r**2*3.14;
  console.log(areaCircle);
  }
)
(2);



/**
 * bài 2
 * sử dụng arrow function, anonymous function
 * tính tổng các số nguyên tố từ a=>b;
 */
//arrow function
 const handleSumOfPrimeAndPrint = (a: number, b: number): void =>{

  const isPrime = (num: number): boolean => {
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

  const sumOfPrimesBetween = (a: number, b: number): number =>{
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

//anonymous funtion
( (a: number, b: number): void =>{

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
)
(1,5);



/**
 * bài 3
 * sử dụng arrow function, anonymous function
 * thực hiện kiểm tra 1 năm có phải là năm nhuận hay không?
 */

//aroww function
const leapYear = (year: number): boolean =>{

  if(year % 4 === 0)
  {
      if(year % 100 === 0)
      {
        if(year % 400 === 0)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      else
      {
        return true;
      }
  }
  else
  {
    return false;
  }
}

console.log(leapYear(2012))


//anonymous function
( (year: number): void =>{

  if(year % 4 === 0)
  {
      if(year % 100 === 0)
      {
          if(year % 400 === 0)
          {
              console.log("Leap Year");
          }
          else
          {
              console.log("Not Leap Year");
          }
      }
      else
      {
          console.log("Leap Year");
      }
  }
  else
  {
      console.log("Not Leap Year");
  }
}
)

(2019);
