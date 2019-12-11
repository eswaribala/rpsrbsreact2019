var connRef=require('./connectionHelper')
var employeeModelRef=require('./dbschema').EmployeeModel;

module.exports.getEmployeeById=function(obj)
{

    dataResponse= employeeModelRef.find({ $and:[{
            "userName": obj.userName,
            "password": obj.password}]
             } ).exec(function(err,result) {
            return result;
        }
    )
    return dataResponse;
}
