console.log(this);
function test(){
    console.log(this);
}
test();
const obj = {
    name: 'Prince',
    get: function(){
        console.log(this);
    }
}
obj.get();

