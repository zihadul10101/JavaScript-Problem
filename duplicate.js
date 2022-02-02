var name =[3,6,2,7,3,2,8,1,9,11,56];
var uniqueName =[];
for(var i=0; i<name.length; i++){
    var element =name[i];
    }
    var index =uniqueName.indexOf(element);
    if(index== -1){
        uniqueName.push(element);
    }

// console.log(uniqueName);
var names =[3,6,2,7,3,2,8,1,9,11,56];
function getodd(names) {
    var uniqueName =[ ];
    for(var i=0;i<names.length; i++){
        var element =names[i];
        if(names [i]%2==0){
            names.splice(i);
        }
        var index=uniqueName.indexOf(element);
        if (index== -1) {
            uniqueName.push(element);
        }
    }
}

 