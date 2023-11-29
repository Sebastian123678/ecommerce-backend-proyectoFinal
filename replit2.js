function selReverse(array, length) {
    //const a = []
    const b = []
    let l = 0;
    let w;
    const separar = array.length / length;
    for(let i = 0; i < separar; i+length) {
        const a = array.slice(0, length);
        b.push(a.reverse());
        while (l === length) {
            w = array.shift()
            console.log(w);
            l++;
        }
        l = 0;
    }
    console.log(b.toString().toString());
    let c = [...b]
    console.log(c);
}

selReverse([1,2,3,4,5,6], 2)
