export function xuLyTamGiac(
  a: number,
  b: number,
  c: number,
  callback: Function
): void 
{
  const chuVi = a + b + c;
  const h = chuVi / 2; //haflChuVi
  const dienTich = Math.sqrt(h * (h - a) * (h - b) * (h - c));
  callback (chuVi, dienTich);
}


export function xuLyHCN(
  a: number,
  b: number,
  callback: Function
): void 
{
  const chuViHCN = (a+b)*2;
  const dienTichHCN = a*b;
  callback (chuViHCN, dienTichHCN);
}