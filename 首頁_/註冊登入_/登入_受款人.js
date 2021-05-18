$("#getFunList_p").click(function () {
    var result = infoContract.methods.getFunList_p().call({  from:$.query.get("address")});
	result.then(function(value){
				document.body.appendChild(document.createElement('p'));
				document.querySelector("body p:last-child").id="jstext";
				document.querySelector("#jstext").innerHTML ="以下的fundraiser曾向我買過東西:" + "<br>" +value;			
	})				
})  
$("#searchHowMuch_p").click(function () {
    var result = infoContract.methods.searchHowMuch_p($("#fundraiser").val()).call({ from:$.query.get("address")});
	result.then(function(value){
				document.body.appendChild(document.createElement('p'));
				document.querySelector("body p:last-child").id="jstext";
				document.querySelector("#jstext").innerHTML ="此fundraiser總共向我買了:" + "<br>" +value/Math.pow(10,18)+ "  ether" ;			
	})				
})  