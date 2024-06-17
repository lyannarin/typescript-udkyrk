console.clear();

/** Bài 1
 * cho một số tự nhiên a = 10;  b = 5;
 * thực hiện phép cộng trừ nhân chia a cho b;
 * thực hiện phép a^b;
 * thực hiện phép chia lấy dư của a và 4;
 * log ra màn hình kết quả;
 */
console.log('Bai tap 1');

const a: number = 10;
const b: number = 5;
console.log('Cho so tu nhien a= ' + a + ' va b= ' + b);

//Phep cong 足し算 Addition
const phepcong: number = a + b;
console.log(a + ' + ' + b + ' = ' + phepcong);

//Phep tru 引き算 Subtraction
const pheptru: number = a - b;
console.log(a + ' - ' + b + ' = ' + pheptru);

//Phep nhan かけ算 Multiplication
const phepnhan: number = a * b;
console.log(a + ' * ' + b + ' = ' + phepnhan);

//Phep chia 割り算 Division
const phepchia: number = a / b;
console.log(a + ' / ' + b + ' = ' + phepchia);

//Phep luy thua 累乗 Exponentiation
const luythua: number = a ** b;
console.log(a + ' ^ ' + b + ' = ' + luythua);

//Phep chia lay du Remainder
const chialaydu: number = a % 4;
console.log(a + ' % 4' + ' = ' + chialaydu);


/** Bài 2
 * cho một số tự nhiên c = 10;
 * thực hiện phép tăng c lên 3 đơn vị và log ra kết quả;
 * thực hiên phép tăng c lên thêm 1 đơn vị và log ra kết quả;
 * thực hiện giảm c đi 3 đơn vị và log ra kết quả;
 * thực hiện giảm c đi 1 đơn vị và log ra kết quả;
 */
console.log('Bai tap 2');

let c: number = 10;
console.log('Cho so tu nhien c= ' + c);

//Tang c len 3 don vi
c += 3;
console.log('Tang c len 3 don vi, c=' + c);

//Tang c len them 1 don vi
c++;
console.log('Tang c len them 1 don vi, c=' + c);

//Giam c di 3 don vi
c -= 3;
console.log('Giam c di 3 don vi, c=' + c);

//Giam c len di 1 don vi
c--;
console.log('Giam c di 1 don vi, c=' + c);



/** Bài 3 
* cho một số tự nhiên d = 10; e = 12; 
* thực hiện log ra màn hình phép so sánh >, <, >=, <= của d và e; 
* thực hiện tăng d lên 2 đơn vị sau đó so sánh lại; 
*/

console.log('Bai tap 3');

let d: number = 10;
const e: number = 12;
console.log('Cho so tu nhien d= ' + d + ' va e= ' + e);

//Phep so sanh Greater than
const isdGreaterThan: boolean = d > e;
console.log(d + ' > ' + e + ' = ' + isdGreaterThan);

//Phep so sanh Less than
const isdLessThan: boolean = d < e;
console.log(d + ' < ' + e + ' = ' + isdGreaterThan);

//Phep so sanh Greater than or equal
const isdGreaterOrEqual: boolean = d >= e;
console.log(d + ' >= ' + e + ' = ' + isdGreaterOrEqual);

//Phep so sanh Less than or equal
const isdLessThanOrEqual: boolean = d <= e;
console.log(d + ' <= ' + e + ' = ' + isdLessThanOrEqual);

//Tang d len 2 don vi
d += 2;
console.log('Tang d len 2 don vi d = ' + d);

//Phep so sanh Greater than
const isdGreaterThan1: boolean = d > e;
console.log(d + ' > ' + e + ' = ' + isdGreaterThan1);

//Phep so sanh Less than
const isdLessThan1: boolean = d < e;
console.log(d + ' < ' + e + ' = ' + isdGreaterThan1);

//Phep so sanh Greater than or equal
const isdGreaterOrEqual1: boolean = d >= e;
console.log(d + ' >= ' + e + ' = ' + isdGreaterOrEqual1);

//Phep so sanh Less than or equal
const isdLessThanOrEqual1: boolean = d <= e;
console.log(d + ' <= ' + e + ' = ' + isdLessThanOrEqual1);



/** Bài 4:
 * Một hình chữ nhật có chiều dài, chiều rộng lần lượt là 10, 6
 * Một hình tròn có đường kính 12
 * Hãy tính và so sánh chu vi và diện tích của 2 hình trên;
 */

console.log('Bai tap 4');

const chieudai: number = 10;
const chieurong: number = 6;
const duongkinh: number = 12;
const bankinh: number = duongkinh / 2;

console.log(
  'Mot hinh chu nhat co chieu dai = ' + chieudai + ' chieu rong = ' + chieurong
);

//Chu vi cua hinh chu nhat
const chuviHCN: number = (chieudai + chieurong) * 2;
console.log('Chu vi cua hinh chu nhat la : ' + chuviHCN);

//Dien tich cua hinh chu nhat
const dientichHCN: number = chieudai * chieurong;
console.log('Dien tich cua hinh chu nhat la : ' + dientichHCN);

console.log('Mot hinh tron co duong kinh = ' + duongkinh);

//Chu vi hinh tron
const chuviHT: number = duongkinh * 3.14;
console.log('Chu vi hinh tron la: ' + chuviHT);

//Dien tich hinh tron
const dientichHT: number = bankinh ** 2 * 3.14;
console.log('Dien tich hinh tron la: ' + dientichHT);

//So sanh chu vi
const isCGreaterThan: boolean = chuviHCN > chuviHT;
console.log('Chu vi hinh chu nhat >  Chu vi hinh tron = ' + isCGreaterThan);

const isCGreaterOrEqual: boolean = chuviHCN >= chuviHT;
console.log('Chu vi hinh chu nhat >=  Chu vi hinh tron = ' + isCGreaterOrEqual);

const isCLessThan: boolean = chuviHCN < chuviHT;
console.log('Chu vi hinh chu nhat < Chu vi hinh tron = ' + isCLessThan);

const isCLessThanOrEqual: boolean = chuviHCN <= chuviHT;
console.log(
  'Chu vi hinh chu nhat <=  Chu vi hinh tron = ' + isCLessThanOrEqual
);

//So sanh dien tich
const isSGreaterThan: boolean = dientichHCN > dientichHT;
console.log(
  'Dien tich hinh chu nhat >  Dien tich hinh tron = ' + isSGreaterThan
);

const isSGreaterOrEqual: boolean = dientichHCN >= dientichHT;
console.log(
  'Dien tich hinh chu nhat >=  Dien tich hinh tron = ' + isSGreaterOrEqual
);

const isSLessThan: boolean = dientichHCN < dientichHT;
console.log('Dien tich hinh chu nhat <  Dien tich hinh tron = ' + isSLessThan);

const isSLessThanOrEqual: boolean = dientichHCN <= dientichHT;
console.log(
  'Dien tich hinh chu nhat <= Dien tich hinh tron = ' + isSLessThanOrEqual
);

/*--------------------------------------------------------*/
