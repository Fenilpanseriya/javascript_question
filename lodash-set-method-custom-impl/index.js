const object1 = {
    'name': 'Shubham Singh Kshatriya',
    'designation': 'Software Enginner',
    'education': {
        'school': {
            'name': 'St. Stephens School',
            'marks':[90,86,92]
        },
        'college': {
            'name': 'SVIT',
            'yop': 2021
        }
    }
}
function customSet(object,path,value){
    let obj=object;
    let keys=path.split(".");
    if(keys.length===1){
        if(typeof(obj)==="Array"){
            object[+keys]=value;
            return object1;
        }
        object[keys[0]]=value;
        return object1;
    }
    return customSet(object[keys[0]],keys.splice(1).join("."),value);
}
console.log(customSet(object1,"education.school.marks.1",90))
console.log(customSet(object1,"education.school.name","Professor Academy"))