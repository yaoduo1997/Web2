//用数组来存放参与运算的数
var arr=[];
//显示书写数据
var btu = document.getElementsByTagName("input");
function show0(){	
	arr[arr.length]=btu[13].value;
	document.getElementById('result').innerHTML=arr.join('');
}
function show1(){	
	arr[arr.length]=btu[1].value;
	document.getElementById('result').innerHTML=arr.join('');
}
function show2(){	
	arr[arr.length]=btu[2].value;
	document.getElementById('result').innerHTML=arr.join('');
}
function show3(){	
	arr[arr.length]=btu[3].value;
	document.getElementById('result').innerHTML=arr.join('');
}
function show4(){	
	arr[arr.length]=btu[4].value;
	document.getElementById('result').innerHTML=arr.join('');
}
function show5(){	
	arr[arr.length]=btu[6].value;
	document.getElementById('result').innerHTML=arr.join('');
}
function show6(){	
	arr[arr.length]=btu[7].value;
	document.getElementById('result').innerHTML=arr.join('');
}
function show7(){	
	arr[arr.length]=btu[9].value;
	document.getElementById('result').innerHTML=arr.join('');
}
function show8(){	
	arr[arr.length]=btu[10].value;
	document.getElementById('result').innerHTML=arr.join('');
}
function show9(){	
	arr[arr.length]=btu[11].value;
	document.getElementById('result').innerHTML=arr.join('');
}
function show10(){	
	arr[arr.length]=btu[4].value;
	document.getElementById('result').innerHTML=arr.join('');
}
function show11(){	
	arr[arr.length]=btu[8].value;
	document.getElementById('result').innerHTML=arr.join('');
}
function show12(){	
	arr[arr.length]=btu[12].value;
	document.getElementById('result').innerHTML=arr.join('');
}
function show13(){	
	arr[arr.length]=btu[14].value;
	document.getElementById('result').innerHTML=arr.join('');
}
function show14(){	
	arr[arr.length]=btu[16].value;
	document.getElementById('result').innerHTML=arr.join('');
}
function show15(){	
	document.getElementById('result').innerHTML=' ';
}
//特殊的运算符号具有特殊的功能,区分并计算求出结果
function CalculateResult(){
	var arr1=[]; //存放数的
	var arr2=[]; //存放符号的
	var m; //用来记录小数点的
	var end;//用来存放结果的
	var str = arr.join('');
	var str0 ="+-*/.";
	//判断输入的格式是否正确
	if(str[0]=='+' || str[0]=='-' || str[0]=='*' || str[0]=='/' || str[0]=='.'){
		document.getElementById('result').innerHTML=String("输入格式错误，请重新输入！");
	}
	for(var k=0;k<arr.length;k++){
		if(str0.indexOf(String(arr[k]))==-1 && str0.indexOf(String(arr[k+1]))==-1){
			document.getElementById('result').innerHTML=String("输入格式错误，请重新输入！");
		}
	}
	//计算结果
	end = eval(str);
	document.getElementById('result').innerHTML=String(end);
	arr.length=0;
}