angular.module('app.controllers', ['ionic','ngCordova'])
  
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('bucketListCtrl', ['$scope', '$stateParams', '$compile','$cordovaLocalNotification', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $cordovaSQLite, $compile, $cordovaLocalNotification) {


$("#bucketList-button2").click( function(){
var bb, cc, dd, ee="";
var strSqlFetch="SELECT * FROM myData";


		myDB.transaction(function(transaction){
		transaction.executeSql(strSqlFetch,[], function(tx,result){
			var aa, i, j, len = result.rows.length;
			$('#ulCon').empty();

			 for (i = 0; i < len; i++)
			 {
				 bb=null;
				for(j=0; j<1; j++)
				{
                aa = result.rows.item(i);
				bb = aa.exp_name;
				cc = aa.exp_time;
				dd = aa.exp_date;
				ee = aa.exp_id;
				var yy="'check"+i+"'";
				var zz="'li"+i+"'";
				var bb1 = ee;
				var bb2 = "'"+bb+"'";
				var bb3 = "'"+cc+"'";
				var bb4 = "'"+dd+"'";
				var html1 = '<li id='+zz+' class="item item-checkbox"><p id="aa">'+bb+'</p><label class="checkbox"><input id="check'+i+'" type="checkbox"  ng-click="check('+yy+", "+ zz+", "+ bb1+", "+ bb2+", "+ bb3+", "+ bb4+')"></label><p>'+cc+'&nbsp &nbsp &nbsp'+dd+'</p></li>';
				$('#ulCon').append($compile(html1)($scope));  
				 
				}
			 }
			
			 
	},
		function(error){
		alert("Fail! Cannot fetch... " + error);
	});
	
	});


	
	 $scope.check = function(clickedid, liId, boxv, boxN, boxTime, boxDate) {
      if (document.getElementById(clickedid).checked === true) {
        var box= confirm("Finish Task ? Press Cancel To Edit..");
        if (box===true){
		
            document.getElementById(liId).remove();              
			var strSqlDel="DELETE FROM myData WHERE exp_id ="+boxv;	
			myDB.transaction(function(transaction){
			transaction.executeSql(strSqlDel);
			});
			
			var strSqlSave = "INSERT INTO myData1(exp_name, exp_date, exp_time) VALUES (?,?,?)";
			myDB.transaction(function(transaction){
				transaction.executeSql(strSqlSave,[boxN,boxDate,boxTime], function(tx,result){
				
				 
			},
			
			function(error){
				alert("Fail! Cannot save... " + error);
			});
			});			
			
        }
		
		else {
			var box1= confirm("Do You Want To Edit Task?");
			if (box1===true){
			
			var person = prompt("Task Name: ", boxN);
			if (person!=null){
			var strSqlSave = "UPDATE myData SET exp_name = ? WHERE exp_id ="+boxv+"";
		
				myDB.transaction(function(transaction){
		transaction.executeSql(strSqlSave,[person], function(tx,result){
			alert("Task Updated");
		 
	});
	});
			
			document.getElementById(clickedid).checked = false;
			}
			else{
				document.getElementById(clickedid).checked = false;
			}
		}
		else{
			document.getElementById(clickedid).checked = false;
		}
		 
      }
	
	  }
    };
	
	
	
	


});


    

    

 
	

}])
   
.controller('addItemCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $cordovaSQLite) {

$.ajax({
	
		type:'POST',
		url:'http://biology.site11.com/webServiceJSON/globalWebService.php',
		dataType:'json',
		data:
		{
			selectFn:'fnGetDateTime'
		},
		success:function(response)
		{
			$('.connected').stop().fadeIn(400).delay(2000).fadeOut(400);
			
			var now = new Date(response.currDate);
			var day = ("0" + now.getDate()).slice(-2);
			var month = ("0" + (now.getMonth()+1)).slice(-2);
			
			var today = now.getFullYear()+"-"+(month)+"-"+(day);
			
			$('#expDate').val(today);
			

			var second = ("0"+(now.getSeconds())).slice(-2);
			var minute = ("0"+(now.getMinutes())).slice(-2);
			var hour = ("0"+(now.getHours())).slice(-2);
			
			var today1 = hour+":"+minute+":"+second;
			var today2 = hour+":"+minute;
			$('#expTime').val(today1);
			
			if($('#expTime').val(today1) == ""){
				$('#expTime').val(today2);
			}
			
		},
		error:function(response)
		{
			$('.disconnected').stop().fadeIn(400).delay(2000).fadeOut(400);
			
			var now = new Date();
			var day = ("0" + now.getDate()).slice(-2);
			var month = ("0" + (now.getMonth()+1)).slice(-2);
			
			var today = now.getFullYear()+"-"+(month)+"-"+(day);
			$("#expDate").val(today);
			
			var second = ("0"+(now.getSeconds())).slice(-2);
			var minute = ("0"+(now.getMinutes())).slice(-2);
			var hour = ("0"+now.getHours()).slice(-2);
			
			var today1 = hour+":"+minute+":"+second;
			var today2 = hour+":"+minute;
			$('#expTime').val(today1);
	
			if($('#expTime').val(today1) == ""){
				$('#expTime').val(today2);
			}
			
		}
	});



$("#addItem-button1").click(function(){
	
	$.ajax({
	
		type:'POST',
		url:'http://biology.site11.com/webServiceJSON/globalWebService.php',
		dataType:'json',
		data:
		{
			selectFn:'fnGetDateTime'
		},
		success:function(response)
		{
			var now = new Date(response.currDate);
			var day = ("0" + now.getDate()).slice(-2);
			var month = ("0" + (now.getMonth()+1)).slice(-2);
			
			var today = now.getFullYear()+"-"+(month)+"-"+(day);
			
			$('#expDate').val(today);
			

			var second = ("0"+(now.getSeconds())).slice(-2);
			var minute = ("0"+(now.getMinutes())).slice(-2);
			var hour = ("0"+(now.getHours())).slice(-2);
			
			var today1 = hour+":"+minute+":"+second;
			var today2 = hour+":"+minute;
			$('#expTime').val(today1);
	
			if($('#expTime').val(today1) == ""){
				$('#expTime').val(today2);
			}
			
		},
		error:function(response)
		{
			
			
			var now = new Date();
			var day = ("0" + now.getDate()).slice(-2);
			var month = ("0" + (now.getMonth()+1)).slice(-2);
			
			var today = now.getFullYear()+"-"+(month)+"-"+(day);
			$("#expDate").val(today);
			
			var second = ("0"+(now.getSeconds())).slice(-2);
			var minute = ("0"+(now.getMinutes())).slice(-2);
			var hour = ("0"+now.getHours()).slice(-2);
			
			var today1 = hour+":"+minute+":"+second;
			var today2 = hour+":"+minute;
			$('#expTime').val(today1);
	
			if($('#expTime').val(today1) == ""){
				$('#expTime').val(today2);
			}
		}
	});
	
	var strExpName = $("#expName").val();
	var strDate = $("#expDate").val();
	var strTime = $("#expTime").val();
	var strSqlSave = "INSERT INTO myData(exp_name, exp_date, exp_time) VALUES (?,?,?)";
	
	
	if(strExpName=="")
	{
		alert("Please Enter Task...");
		return false;
	}
	
	myDB.transaction(function(transaction){
		transaction.executeSql(strSqlSave,[strExpName,strDate,strTime], function(tx,result){
			alert("Your task been added!!");
		 
	},
	
	function(error){
		alert("Fail! Cannot save... " + error);
	});
	});
	
	$("#expName").val("");
	
});

}])
      
.controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
.controller('historyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $cordovaSQLite) {

var bb="";
var strSqlFetch="SELECT * FROM myData1";
	
		myDB.transaction(function(transaction){
		transaction.executeSql(strSqlFetch,[], function(tx,result){
	
			var aa, i, len = result.rows.length;
			bb=null;
			 for (i = 0; i < len; i++)
			 {
				 
                aa = result.rows.item(i);
				 
				bb += "\n"+"Task: "+aa.exp_name+"\n Date: "+ aa.exp_date+" Time: "+ aa.exp_time+'\n'; 
             	
		     }var cc = $("#history-markdown4").text(bb);
	cc.html(cc.html().replace(/\n/g,'<br/>'));
	cc.html(cc.html().replace("null",''));
	},
		function(error){
		alert("Fail! Cannot fetch... " + error);
	});
	
	});
	

$("#history-button1").click(function(){
var bb="";
var strSqlFetch="SELECT * FROM myData1";
	
		myDB.transaction(function(transaction){
		transaction.executeSql(strSqlFetch,[], function(tx,result){
	
			var aa, i, len = result.rows.length;
			bb=null;
			 for (i = 0; i < len; i++)
			 {
				 
                aa = result.rows.item(i);
				 
				bb += "\n"+"Task: "+aa.exp_name+"\n Date: "+ aa.exp_date+" Time: "+ aa.exp_time+'\n'; 
             	
		     }var cc = $("#history-markdown4").text(bb);
	cc.html(cc.html().replace(/\n/g,'<br/>'));
	cc.html(cc.html().replace("null",''));
	},
		function(error){
		alert("Fail! Cannot fetch... " + error);
	});
	
	});
	
});


$("#history-button3").click(function(){
	
		var box1= confirm("Are You Sure?");
		if (box1===true){
            $( "div#history-markdown4" ).empty();              
			var strSqlDel1="DELETE FROM myData1";	
			myDB.transaction(function(transaction){
			transaction.executeSql(strSqlDel1);
			});
	}
});

}])
