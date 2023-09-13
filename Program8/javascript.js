var number=0;
var result=0;
var num1=0;
var ch=' ';
var flag=0;
function input(num)
{
    if(flag>0)
    decimal(num);
    else{
        const solution=document.getElementById("ans");
        number=number*10+parseInt(num);
        if(num1==0)
        solution.innerHTML=number;
        else
        solution.innerHTML=`${num1}${ch}${number}`;
    }
}
function operator(op)
{
    if(ch==' ' && num1==0)
    ch=op.charAt(0);
    else
    {
        equal();
        ch=op.charAt(0);
    }
    const solution=document.getElementById("ans");
    if(num1==0)
    num1=number;
    number=0;
    flag=0;
    solution.innerHTML=`${num1}${ch}`;

}
function equal()
{
    const solution=document.getElementById("ans");
    switch(ch){
        case '+':
            result=(num1+number);
            break;
        case '-':
            result=(num1-number);
            break;
        case '*':
            result=(num1*number);
            break;     
        case '/':
            if(number==0){
                alert(" Error : Divide by zero");
            }
            else{
                result=(num1/number);
            }
            break;
        default:
            if(num1==0)
            alert("Sorry no input");
            else
                break;
    }
    solution.innerHTML=result;
    number=0;
    num1=result;
    result=0;
    flag=0;
    ch=' ';
}
function backspace(){
    const solution=document.getElementById("ans");
    if(number!=0){
        number=parseInt(number/10);
        if(num1==0)
        solution.innerHTML=`${number}`;
        else
        {
            if(number==0)
            solution.innerHTML=`${num1}${ch}`;
            else
            solution.innerHTML=`${num1}${ch}${number}`;
        }
    }
    else if(number==0 && ch!=' ')
    {
        ch=' '
        solution.innerHTML=`${num1}`;
        number=num1;
        num1=0;
    }
}
function empty()
{
    document.getElementById("ans").innerHTML=" ";
    number=0;
    num1=0;
    flag=0;
    result=0;
}
function decimal(num)
{
    if(num==NaN)
    flag=1;
    if(num!=NaN)
    {
        flag=flag*10;
        console.log(flag);
        const solution=document.getElementById("ans");
        number=number+parseFloat(num/flag);
        if(num1==0)
        solution.innerHTML=number;
        else
        solution.innerHTML=`${num1}${ch}${number}`;
    }
}
function set()
{
    flag=1;
    const solution=document.getElementById("ans");
    if(num1==0)
    solution.innerHTML=`${number}.`;
    else
    solution.innerHTML=`${num1}${ch}${number}.`;
}