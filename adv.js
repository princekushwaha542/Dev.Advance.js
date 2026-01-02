console.log(this);
function abcd(){
    console.log(this);
}
abcd();

const student = {
    name: "Prince",
    to : console.log(this),
    sayname : function(){
      console.log(this);
    },
};
student.sayname();
