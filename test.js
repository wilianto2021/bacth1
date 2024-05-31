
function test(req, res,next){

    console.log("nama ",req)
    console.log('alamat',res)
    console.log('kelamin',next)

}
console.log(req)

test('request','response','next')