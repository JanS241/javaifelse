// pub js
var  constant = 18;
var  age = 20;
var  isFemale = true;
var  driverstatus = 'bob';


console.log (typeof constant);

if (age >= constant){ 
     console.log( 'you are alowed to get in')
};

if (age >= constant)  
{
     console.log('Welcom, you are alowed to get in')
} else
{
     console.log( 'Sorry, you are to young, please stay out')
};

if (age >= constant)
{
    if (isFemale)
    {
        console.log( 'Lady, you are welcome!')
    }else {
        console.log('Sorry, Ladies only!')
    }
}else {
    console.log('Sorry, you are to young, pelase stay out')
};


if (driverstatus == 'bob'){
    console.log( 'You are allaowed to drive a car, drive safely')
} else{
    console.log('please be smart, call a Taxi')
};