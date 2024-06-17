/**
 *
 * thực hiện một function lấy thông tin chu Vi, diện tích từ 3 cạnh của một tam giác, tham số cuối cùng là callback function cung cấp thông tin chuVi, và diện tích của tam giác đó hãy nêu một vài ví sử dụng đối với function này.
 */
import { xuLyTamGiac } from '../BASICCOD/CongThucLibary';

const inChuViDienTich = (chuVi: number, dienTich: number) =>{
  console.log('Chu vi: ', chuVi);
  console.log('Dien tich: ', dienTich);
};

const soSanhChuViDienTich = (chuVi: number, dienTich: number) =>{
  if(chuVi > dienTich){
    console.log('Chu vi > Dien tich');
  }
  else{
    console.log('Chu vi < Dien tich');
  }
};

xuLyTamGiac(3,4,5,soSanhChuViDienTich);
xuLyTamGiac(3,4,5,inChuViDienTich);
