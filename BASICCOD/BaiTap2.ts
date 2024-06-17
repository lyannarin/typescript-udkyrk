console.clear();

/** Bài Tập 1: Phân loại tuổi trả về một chuỗi phân loại theo các quy tắc sau: 
"Trẻ em" nếu tuổi nhỏ hơn 12. 
"Thiếu niên" nếu tuổi từ 12 đến 17. 
"Người lớn" nếu tuổi từ 18 đến 59. 
"Người cao tuổi" nếu tuổi từ 60 trở lên. 
*/
console.log("Bài Tập 1");

const age : number =59
console.log("Tuổi = "+age);

if(age < 12)
{
    console.log("Đây là trẻ em");
}
else if(12 <= age && age <= 17)
{
    console.log("Đây là thiếu niên");
}
else if(18 <= age && age <= 59)
{
    console.log("Đây là người lớn");
}
else if(age > 60)
{
    console.log("Đây là người cao tuổi");
}
console.log("---------------------------------------------------------------");


/**  Bài Tập 2: Tính điểm trung bình và phân loại học sinh nhận vào các điểm số là
 point1, point2, point3, point4, point5. in ra kết quả màn hình như sau: 
"Xuất sắc" nếu điểm trung bình lớn hơn hoặc bằng 90. 
"Giỏi" nếu điểm trung bình từ 75 đến 89. 
"Khá" nếu điểm trung bình từ 60 đến 74. 
"Trung bình" nếu điểm trung bình từ 50 đến 59. 
"Yếu" nếu điểm trung bình dưới 50.  
*/ 
console.log("Bài Tập 2");

const point1 : number =50;
const point2 : number =50;
const point3 : number =50;
const point4 : number =50;
const point5 : number =50;
const dTB : number = (point1+point2+point3+point4+point5)/5;
console.log(dTB);
if(dTB >=90)
{
    console.log("Xuất sắc");
}
else if(75 <= dTB && dTB <= 89)
{
    console.log("Giỏi");
}
else if(60 <= dTB && dTB <= 74)
{
    console.log("Khá");
}
else if (50 <= dTB && dTB <= 59)
{
    console.log("Trung bình");
}
else{
    console.log("Yếu");
}
console.log("---------------------------------------------------------------");
  


/** Bài 3: 
* cho 1 tam giác có độ dài các cạnh là canhA, canhB, canhC 
* phân loại tam giác:  
* Các loại tam giác bao gồm: 
Tam giác đều: Cả ba cạnh đều bằng nhau. 
Tam giác cân: Có hai cạnh bằng nhau. 
Tam giác vuông: Có một góc vuông (sử dụng định lý Pythagore để kiểm tra: a² + b² = c²). 
Tam giác thường: Không thuộc các loại trên. 
*/ 
console.log("Bài Tập 3");

const canhA : number =5;
const canhB : number =3;
const canhC : number =4;
const isPyThagore1 : boolean = canhC**2 === (canhA**2 + canhB**2);
const isPyThagore2 : boolean = canhA**2 === (canhB**2 + canhC**2);
const isPyThagore3 : boolean = canhB**2 === (canhA**2 + canhC**2);

if(canhA === canhB && canhA === canhC)
{
    console.log("Tam giác đều");
}
else if(canhA === canhB || canhA === canhC || canhB === canhC)
{
    console.log("Tam giác cân");
}
else if(isPyThagore1 === true || isPyThagore2=== true || isPyThagore3=== true) 
{
    console.log("Tam giác vuông");
}
else{
    console.log("Tam giác thường");
}
console.log("---------------------------------------------------------------");


/** Bài 4: 
* cho một chương trình nhận vào year 
* cho biết năm đó có phải là năm nhuận hay không. Quy tắc xác định năm nhuận như sau: 
Năm chia hết cho 4 là năm nhuận, ngoại trừ các năm chia hết cho 100 nhưng không chia hết cho 400. 
Ví dụ: 
console.log(isLeapYear(2000)); // Output: true (năm nhuận) 
console.log(isLeapYear(1900)); // Output: false (không phải năm nhuận) 
console.log(isLeapYear(2012)); // Output: true (năm nhuận) 
console.log(isLeapYear(2019)); // Output: false (không phải năm nhuận) 
*/ 

console.log("Bài Tập 4");

const year : number =2019;
//const isCondition1 : boolean = (year % 4)   === 0;
//const isCondition2 : boolean = (year % 100) === 0;
//const isCondition3 : boolean = (year % 400) === 0;

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

/**
function isLeapYear(year)
{
    let result;
    
    if(year % 4 === 0)
    {
        if(year % 100 === 0)
        {
            if(year % 400 === 0)
            {
                result = 'Leap Year';
            }
            else
            {
                result = 'Not Leap Year';
            }
        }
        else
        {
            result = 'Leap Year';
        }
    }
    else
    {
        result = 'Not Leap Year';
    }
    return result;
}
console.log(isLeapYear(1900));

console.log(year%4   + " " + isCondition1);
console.log(year%100 + " " + isCondition2);
console.log(year%400 + " " + isCondition3);
 */

console.log("---------------------------------------------------------------");
