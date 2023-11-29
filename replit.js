const stairs = (length, minimum, maximum) => {
    const arr = [];
    let i = minimum;
    let l = length;
    let ciclos;
    length < 0?
        ciclos = (length / ((maximum - 1) - minimum)) * -1:
        ciclos = (length / ((maximum + 1) - minimum))
    //while (l <= 0) {
        console.log(ciclos);
    for (let j = 0; j < ciclos; j++) {
        console.log('h');
        while (i < maximum) {
            arr.push(i);
            if (l <= 0) {
                return arr
            }
            l--;
            i++;
        }
        while (i >= minimum) {
            arr.push(i);
            if (l === 0) {
                return arr
            }
            l--;
            i--;
        }
    }
    console.log(arr);   
}
stairs(15,1,3)  
  /*console.log("largo: 8, min: 1,  max: 3  ->", stairs(8, 1, 3))
  console.log("largo: 5, min: 8,  max: 8  ->", stairs(5, 8, 8))
  console.log("largo: 7, min: -9, max: -3 ->", stairs(7, -9, -3))*/


/*
let ciclos;
    length < 0?
        ciclos = (length / ((maximum - 1) - minimum)) * -1:
        ciclos = (length / ((maximum + 1) - minimum))

        console.log(ciclos);
*/
