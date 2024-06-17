console.clear();

/**
 * Bài 1: cho một số tự nhiên n và cho biết đó có phải là số nguyên tố hay không?
  */

function bai1() {

  const n: number = 12267;
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
  console.log(n + ' is Prime Number? : ' + isPrimeNumber);
}

bai1();


/**
 * Bài 2: tìm n lớn nhất thỏa mãn tổng các số chẵn từ 1 đến n nhỏ hơn hoặc bằng 500
 */

function bai2() {

  const totalMax: number = 500;
  let sumEvenNumber: number = 0;
  let i: number = 2;

  while (sumEvenNumber < totalMax) 
  {
    if (i % 2 === 0) 
    {
      sumEvenNumber += i;
    }
    i++;
  }
  console.log(i-1);
  console.log(sumEvenNumber);
}

bai2();


/**
 * Bài 3: Viết chương trình sử dụng vòng lặp for để tính tổng các số từ 1 đến 100 và in kết quả ra màn hình.
 */

function bai3() {
  
  let sumTo100: number = 0;

  for (let i = 0; i <= 100; i++) 
  {
    sumTo100 += i;
  }
  console.log(sumTo100);
}

bai3();


/**
 * bài 4:  cho 1 số n , tính tổng các chữ số của n
 * ví dụ :  n= 1234 => tổng các chữ số = 1+2+3+4 = 10
 */

function bai4(n: number) {

  let sumOfn : number = 0;

    while(n>0)
    {
      let i = n%10;
      sumOfn += i;
      n = (n-i)/10;
    }
    console.log(sumOfn);
}

bai4(1234);


/**
 * bài 5:  cho 1 số n, viết chương trình đảo ngược số tự nhiên n đó
 * n= 12345 => output 54321
 */

 function bai5(n: number) {

  let reversedNum : number = 0;

  while(n !== 0)
  {
    let i = n%10;
    reversedNum = reversedNum*10 + i;
    n = (n-i)/10;
  }
  console.log(reversedNum);
}

bai5(789);
