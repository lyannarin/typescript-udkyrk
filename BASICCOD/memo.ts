console.clear();
/**call back function----------CLOSURES-------------------------------*/
//ham co reutrn ve 1 ham khac
console.clear();
function func1(): Function{
    console.log('hello this is func1');
    return function func2(){
        console.log('hello this is func2');
        return function func3(){
            console.log('hello this is func3');
        }
    }
}

func1()()()(    );
/**
function createStuden(name: string){
    
    function hello(): void{
        console.log("My  is ${name}");
    }
    return hello;
}
const func = createStuden('Giang');
func();

/**
function pet(){
    const getName = (): string =>{
        return 'dog';
    }
    return getName;
}
const func = pet();
// func =(): string =>{ return 'dog'; }
console.log(func());

//----------------------------------------------------------------------*/

let i = 0;
let factorial = 1; 
/**
for (i = 1; i <= b; i++) 
{
    factorial = factorial*i;
}
console.log(b+ "! = " +factorial);
 */
/**
while(factorial<121){
    i++;
    factorial = factorial*i;
    if(factorial>121){
        i--;
    }
}
console.log(i);
console.log(factorial);
 */
let a,b,x;
const f1 = (a, b) => a*b;

const SHCN1 : number = f1(10,5);
const SHCN2 : number = f1(55,5);


const p = (x) => x**2;

console.log(p(3));

/** Create function cach I:
const f = (input1, input2, input3,...) => {

    //tinh toan;
    return;
}

const tinhChuViTamGiac = (canhA : number,canhB: number,canhC: number) =>{
    const chuVi = canhA + canhB + canhC;
    return chuVi;
}
*/

/** Create function cach II:
 * 
 * function functionName (input1, input2, input3,..){
 *  　　//tinh toan;
 *       return;
 * 
 * }

 function tinhChuViTamGiac2 (canhA : number,canhB: number,canhC: number) {
    const chuVi = canhA + canhB + canhC;
    return chuVi;
}
 */

const giaiBai1 = () => {
    const a = 10;
    const b = 5;

}

/** const n : number = 17;
const chiaHetCho2 : number = n%2;
console.log ("Cho n = "+n);
if(chiaHetCho2===0)
{
    console.log("Day la so chan");
}
console.log("Day la so le");
*/