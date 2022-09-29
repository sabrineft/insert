
Array.prototype.insert = function ( index, ...items ) {
    this.splice( index, 0, ...items );
};

let t = [10, 10000, 1000, 100, 1]
console.log(t.sort( function(a,b){
    return a-b;
}));
var x =20
for( let i=0;i<t.length; i++){
    if(x<t[i]){
        t.insert(i,x);break;
    }
}

console.log(t)