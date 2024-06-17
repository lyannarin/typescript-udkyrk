console.clear();
/**
 *chạy thử chương trình sau và phân tích thuật toán
 */

function drawRightTriangle(height: number): void {

  for (let i = 1; i <= height; i++)
   {
    let row = '';
    for (let j = 0; j < i; j++) 
    {
      row += '*';
    }
    console.log(row);
  }
}

//drawRightTriangle(5);

/**
 * bài 1:
 * Vẽ một hình vuông với chiều dài và chiều rộng bằng nhau.
 *
 * example output:  *****
 * with size = 5    *****
 *                  *****
 *                  *****
 *                  *****
 */

function drawSquare(size: number): void {
    
    let row = '\n';

    for (let i = 1; i <= size; i++)
    {
      let line = '\n';
      for (let j = 1; j<= size; j++)
      {
        row += '*';
      }
      row+=line;  
    }   
    console.log(row);   
}

drawSquare(5);

/**
 * bài 2:
 * Vẽ một hình chữ nhật với chiều dài và chiều rộng khác nhau
 *
 * example width=2 height=3:  **
 *                            **
 *                            **
 */

function drawRectangle(width: number, height: number): void {

  for (let i = 1; i <= height; i++)
   {
    let row = '';
    for (let j = 0; j < width; j++) 
    {
      row += '*';
    }
    console.log(row);
  }
}

//drawRectangle(2,3);


/**
 * bài 3:
 * Vẽ một tam giác vuông ngược bằng dấu *.
 * example height= 3:   ***
 *                      **
 *                      *
 */

function drawInvertedTriangle(height: number): void {

  for (let i = height; i >= 1; i--)
   {
    let row = '';
    for (let j = i; j > 0; j--) 
    {
      row += '*';
    }
    console.log(row);
  }
}

//drawInvertedTriangle(5);

/**
 * Bài 5:
 * vẽ tam giác cân bằng dấu *
 * example n=5:  *
 *              ***
 *             *****
 *            *******
 *           *********
 */


 function drawIsoscelesTriangle(n: number): void {

  let result = '';

  for(let i=1; i<= n; i++)
  {
    let line = '\n';
    
    for(let j=1; j<=n-i; j++)   // print space
    {
      line += ' ';
    }
    for (let k =1; k<=(2*i-1); k++)   // print *
    {
      line += '*';
    }
      result+=line;
  }
  console.log(result);
}

drawIsoscelesTriangle(5);

//drawIsoscelesTriangle(5);

/**
 * bài 4
 * Vẽ một hình thoi bằng dấu *.
 * example n=3:    *
 *                ***
 *               *****
 *                ***
 *                 *
 *
 */

function drawDiamond(n: number): void {

  let result = '';

  for(let i=1; i<= n; i++)  
  {
    let line = '\n';
    for(let j=1; j<=n-i; j++)  // print space
    {
      line += ' ';
    }
    for (let k =1; k<=(2*i-1); k++) // print *
    {
      line += '*';
    }
      result+=line;
  }

  for(let i= n-1; i>=0; i--)      
  {
    let line = '\n';    
    for(let j=1; j<=n-i; j++)       // print space
    {
      line += ' ';
    }
    for (let k =1; k<=(2*i-1); k++) // print *
    {
      line += '*';
    }
      result+=line;
  }
  console.log(result);
}

drawDiamond(5);
