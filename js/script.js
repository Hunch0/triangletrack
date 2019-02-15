function triangleTrack(){

var edges = []
edges.push(document.getElementById('first').value);
edges.push(document.getElementById('second').value);
edges.push(document.getElementById('third').value);

/* Assigning variables positions in the array*/
var first=parseInt(edges[0]);
var second=parseInt(edges[1]);
var third=parseInt(edges[2]);

/* console.log(sides); */
if(first>=second+third||second>=first+third||third>=first+third|| (first===0||second===0||third===0)){
output.innerHTML=("Cannot form a triangle")
}

else if (first===second  &&  second===third){
output.innerHTML=("Equilateral triangle")
}

else if (first===second  &&  first!==third || first===third  &&  first!==second || second===third  &&  second!==first){
output.innerHTML=("Isosceles triangle")
}

// else if(first!==second && second!==third && first!==third){
// output.innerHTML=("Scalene triangle")
// }

}
