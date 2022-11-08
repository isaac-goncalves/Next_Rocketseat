const { randomBytes } = require("crypto");


function generateMatrix()
{

    let matrix = [];

    for (let i = 0; i < 10; i++)
    {
        let row = [];
        for (let j = 0; j < 10; j++)
        {
            row.push(randomBytes(1).toString("hex"));
        }
        matrix.push(row);
    }

    return matrix;

}
 
const matrix = generateMatrix();

console.log(matrix);
