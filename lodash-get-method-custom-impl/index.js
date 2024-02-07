//Q:- custom implmentation of lodash's _.get() method

const object = {
    'name': 'Shubham Singh Kshatriya',
    'designation': 'Software Enginner',
    'education': {
        'school': {
            'name': 'St. Stephens School',
            'yop': 2017
        },
        'college': {
            'name': 'SVIT',
            'yop': 2021
        }
    }
}
function customGet(collegeYopPath,defaultValue){
    let args=collegeYopPath?.split('.');
    console.log(args);
    //for not share references
    //let res={...object} let res=Object.assign({},object)  or let res =JSON.parse(JSON.stringyfy(object));
    // if we want to share references then 
    let res=object;
    for(let i=0;i<args.length;i++){
        res=res[args[i]]
        console.log(res)
    }
    alert(res===undefined?defaultValue:res);
}
let collegeYopPath = 'education.college.yop'
let defaultValue="value not exist";
customGet(collegeYopPath,defaultValue);
customGet(collegeYopPath+".ele",defaultValue);


