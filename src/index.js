
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arg = [...arguments];
    if(arg.length === 0) return [];

    const matrixAll = matrix.map(function(item, index){
        if (index % 2 !== 0){
            item.reverse()
        }
        return item;
    });

    const result = [].concat(...matrixAll);

    return result;
}
