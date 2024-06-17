console.clear();

/** Bài 1:
Tính tổng các số từ 1 đến 100 */

let sum : number = 0;

for(i = 0; i<=100 ; i++)
{
  sum = sum+i;
}
console.log("Sum from 1 to 100 = " +sum);
console.log("------------------------------------------")



/** Bài 2:
Tính tổng các số LẺ từ 1 đến 100 */

let sumOdd : number = 0;

for(i = 1; i<=100 ; i+=2)
{
  sumOdd = sumOdd+i;
}
console.log("Sum of odd number from 1 to 100 = " +sumOdd);
console.log("------------------------------------------")
 
 
 
/** Bài 3:
* In bảng cửu chương của số 5 */

let multilOf5 : number = 0;

console.log("Multiplication of 5")
for(i = 1; i<=10 ; i++)
{
  multilOf5 = 5*i;
  console.log("5 x " +i+ " = " +multilOf5);
}
console.log("------------------------------------------")



/** Bài 4:
* Số hoàn hảo là một số nguyên dương mà tổng của tất cả các ước số dương của nó (ngoại trừ chính nó) bằng chính số đó. 
Nói cách khác, một số hoàn hảo là số mà các ước số (trừ bản thân nó) cộng lại bằng chính số đó.
Ví dụ:
Số 6 là một số hoàn hảo. Các ước số của 6 là 1, 2, 3, và 6. Khi cộng lại các ước số (trừ bản thân nó): 1 + 2 + 3 = 6.
Số 28 là một số hoàn hảo. Các ước số của 28 là 1, 2, 4, 7, 14, và 28. 
Khi cộng lại các ước số (trừ bản thân nó): 1 + 2 + 4 + 7 + 14 = 28.
Một số số hoàn hảo khác: 496, 8128
Viết một chương trình để kiểm tra xem một số n có phải là số hoàn hảo hay không.
*/ 

const a : number = 29;
let sumDivisor : number = 0;

for(i = 0; i <= a/2; i++)
{
  if(a%i === 0)
  {
    sumDivisor += i;
  }
}
  if(sumDivisor === a)
  {
    console.log(a+' is Perfect number.')
  }
  else
  { console.log(a+ ' is not Perfect number.')}



/** Bài 5:
* n giai thừa: n! là tích của tất cả các số nguyên từ 1 đến n.
* Ví dụ:
* 5!=5×4×3×2×1=120
* 4! = 4 × 3 × 2 × 1 = 24  
* 0!=1 (theo quy ước, giai thừa của số không là 1)
* Tính Giai Thừa Của Một Số
Viết một chương trình để tính giai thừa của một số nguyên dương n.
*/

const b : number = 4; 
let factorial = 1; 

for (i = 1; i <= b; i++) 
{
    factorial = factorial*i;
}
console.log(b+ "! = " +factorial);