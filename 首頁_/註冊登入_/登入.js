
//下列為三者共用的function(verify)
$("#verify").click(function(){
  	var result =infoContract.methods.verify($("#password").val()).call({from: $("#address").val()});
	result.then(function(value){
		
		if(value =="donor"){
			url = "登入_捐款人.html?address="+ $("#address").val();//此處拼接內容
            window.location.href = url;
			//window.open("登入_捐款人.html","_blank");
		}
		else if(value == "fundraiser"){
			url = "登入_募款人.html?address="+ $("#address").val();//此處拼接內容
            window.location.href = url;
			//window.open("登入_募款人.html","_blank");
		}
		else if(value == "payee"){
			url = "登入_受款人.html?address="+ $("#address").val();//此處拼接內容
            window.location.href = url;
			//window.open("登入_受款人.html","_blank");
		}
		else if(value =="false"){
			alert("Incorrect address or password.");
		
		}
		
	})
});