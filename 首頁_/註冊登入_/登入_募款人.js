//下列為fundraiser的function
 $("#buy").click(function () {
	var result2=infoContract.methods.fundraiserList().call({ from: $("#address").val()});
	result2.then(function(fundraiser){				
		for(var i=0;i<fundraiser.length;i++){
			if( $("#address").val() == fundraiser[i]){							
				alert("註冊失敗!你已註冊過:慈善機構");											
				break;
			}	
			else if($("#address").val() != fundraiser[i] && i==fundraiser.length-1){
				var result=infoContract.methods.buy($("#payee").val()).send({  from:$.query.get("address"), value: ($("#value").val()) *Math.pow(10,18), gas: 5000000 });
				result.then(function(){
					alert("匯款成功!");
				})
			}
		}	
  });

  $("#getDonorList").click(function () {
    var result = infoContract.methods.getDonorList().call({ from:$.query.get("address") });
	result.then(function(value){
				//document.write("donorList:",value);
                //alert("donorList:"+value);
				document.body.appendChild(document.createElement('p'));
				document.querySelector("body p:last-child").id="jstext";
				document.querySelector("#jstext").innerHTML ="donorList:" + "<br>" +value  ;
			})
  });
  $("#searchHowMuch_f").click(function () {
    var result = infoContract.methods.searchHowMuch_f($("#payee").val()).call({  from:$.query.get("address")});
	result.then(function(value){
				document.body.appendChild(document.createElement('p'));
				document.querySelector("body p:last-child").id="jstext";
				document.querySelector("#jstext").innerHTML ="我總共跟此受款人買了多少錢:" + "<br>" +value/Math.pow(10,18)+ "  ether" ;				
	})				
})  
$("#getTotalValue_f").click(function () {
    var result = infoContract.methods.getTotalValue_f().call({  from:$.query.get("address")});
	result.then(function(value){
				document.body.appendChild(document.createElement('p'));
				document.querySelector("body p:last-child").id="jstext";
				document.querySelector("#jstext").innerHTML ="我共募到:" + "<br>" +value/Math.pow(10,18)+ "  ether" ;			
	})				
})  
$("#getPayeeList_f").click(function () {
    var result = infoContract.methods.getPayeeList_f().call({  from:$.query.get("address")});
	result.then(function(value){
				document.body.appendChild(document.createElement('p'));
				document.querySelector("body p:last-child").id="jstext";
				document.querySelector("#jstext").innerHTML ="我曾向下列的payee買過東西:" + "<br>" +value;			
	})				
})  
$("#howMuch_f").click(function () {
    var result = infoContract.methods.howMuch_f().call({  from:$.query.get("address")});
	result.then(function(value){
				document.body.appendChild(document.createElement('p'));
				document.querySelector("body p:last-child").id="jstext";
				document.querySelector("#jstext").innerHTML ="我目前共花了:" + "<br>" +value/Math.pow(10,18)+ "  ether" ;			
	})				
})  

$("#showFunOrPayeeInfo").click(function(){
	var result=infoContract.methods.showFunOrPayeeInfo($("#payee").val()).call({  from:$.query.get("address")});
	   //document.write("此帳戶的資訊為:",JSON.stringify(value));
		   //alert("此帳戶的資訊為:"+JSON.stringify(value));
	   result.then(function(value){
	   document.body.appendChild(document.createElement('p'));
	   document.querySelector("body p:last-child").id="jstext";
	   document.querySelector("#jstext").innerHTML ="此人的基本資料(名字/電話/EMAIL信箱):" + "<br>" +JSON.stringify(value)  ;
	})
	   
	 })
  });

  $("#payeeList").click(function () {
	var result = infoContract.methods.payeeList().call({  from:$.query.get("address")});

	result.then(function(value){
		//alert("受款人的address:"+value);
		document.body.appendChild(document.createElement('p'));
		document.querySelector("body p:last-child").id="jstext";
		document.querySelector("#jstext").innerHTML ="Payee address:" + "<br>" +value  ;
	})
	
});//查看商家名單