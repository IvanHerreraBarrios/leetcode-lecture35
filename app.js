
var diagonalSort = function(mat) {
    for(let row = 0; row < mat.length; row++){
        sortDiagonal(mat, row, 0)
    }

    if(mat[0].length > 1){
        for(let col = 0; col < mat[0].length; col++){
            sortDiagonal(mat, 0, col+1)
        }
    }
    return mat
};

function sortDiagonal(mat, r, c){
    const arr = []

    for(let i=r, j=c; mat[i] && mat[i][j]; i++ ,j++){
        arr.push(mat[i][j])
    }

    arr.sort((a,b) => a - b)

    let k=0
    for(i=r, j=c; mat[i] && mat[i][j]; i++, j++, k++){
        mat[i][j] = arr[k]
    }
}