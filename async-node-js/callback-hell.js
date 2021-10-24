
console.log( "Start of main thread");
const fetch_students = (callback)=>{
    setTimeout(()=>{
        const students = ["Adam","Eve","Madam","AAAA"]
        console.log("Students call fetch called");
        console.log(JSON.stringify(students));
        callback(students)
    },2000)
}

// Chaining 

fetch_students((res)=>{
    const students = res
    cool_name(students,(name)=>{
            console.log(`${name} is cool name !!! `);
    })
})


const cool_name = (students,callback)=>{
    for (let student of students) {
        isPallindrome(student,(result)=>{
            if(result==1){
                callback(student)
            }
        })
    }
}

const isPallindrome = (student,callback)=>{
    let lo = 0
    let hi = student.length - 1
    while(true){
        if(lo>=hi){
            break;
        }
        if(student[lo].toLowerCase()==student[hi].toLowerCase()){
            lo+=1
            hi-=1
        }
        else{
            break
        }
    }
    if(lo>=hi){
        callback(1)
    }else{
        callback(0)
    }
}

console.log("End of main");