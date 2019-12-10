var connRef=require('./connectionHelper')
var projectModelRef=require('./dbschema').ProjectModel;
var employeeModelRef=require('./dbschema').EmployeeModel;

module.exports.addEmployeeData=function(employeeObj){

    x = projectModelRef.findOne({"projectId":employeeObj.projectId},function(err,res){
        console.log(res)
        var obj=new employeeModelRef({
            employeeNo:employeeObj.employeeNo,
            firstName:employeeObj.firstName,
            lastName:employeeObj.lastName,
            dob:employeeObj.dob,
            email:employeeObj.email,
            mobileNo:employeeObj.mobileNo,
            projectRef:res
        })
        console.log(obj)
        var data=obj.save(function(err,result){
            console.log("inside")

            if(!err)
            {
                console.log("save")
                return ({"message":"success"});
            }
            else
                return ({"message":"Try Again"})

        })

        return data

    })

    return x

}

/*

module.exports.addEmployeeData=function(obj)
{

    var obj = new employeeModelRef(
        {
            employeeNo:obj.employeeNo,
            firstName:obj.firstName,
            lastName:obj.lastName,
            dob:obj.dob,
            email:obj.email,
            mobileNo:obj.mobileNo

        }
    )

    obj.save(function(err,success)
    {
        if(!err)
        {
            console.log("Employee Object Saved!!!");
        }
    })
}
*/
