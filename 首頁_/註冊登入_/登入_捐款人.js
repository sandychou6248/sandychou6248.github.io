//下列為donor的function
//$.query.get("address");  跨檔案抓值 從url抓下來

$("#donate").click(function () {
   
    var result=infoContract.methods.donate($("#fundraiser").val()).send({ from:$.query.get("address"), value: ($("#value").val())*Math.pow(10,18), gas: 5000000 });
    result.catch(err=>{
               alert("捐款失敗!" + JSON.parse(err));
               
   })
   result.then(function(){
       alert("捐款成功!");
   })
  

});
$("#getBuyList").click(function () {
   var result = infoContract.methods.getBuyList($("#fundraiser").val()).call({ from:$.query.get("address") });
   result.then(function(value){
       //alert("此募款人的金流:"+JSON.stringify(value) );
               document.body.appendChild(document.createElement('p'));
               document.querySelector(
                  "body p:last-child").id="jstext";
               document.querySelector("#jstext").innerHTML ="此募款人的金流:" + "<br>" +"payee:"+JSON.stringify(value)  ;
                
               
           })
});
$("#getTotalValue").click(function () {
   var result = infoContract.methods.getTotalValue($("#fundraiser").val()).call({ from:$.query.get("address")});
   result.then(function(value){
               //document.write("此募款人募到的總額為:",value);
               //alert("此募款人募到的總額為:"+ value/Math.pow(10,18)+ "  ether");
               document.body.appendChild(document.createElement('p'));
               document.querySelector("body p:last-child").id="jstext";
               document.querySelector("#jstext").innerHTML ="此募款人募到的總額為:" + "<br>" +value/Math.pow(10,18)+ "  ether" ;
               
   })
               
})  

$("#search").click(function () {
   var result = infoContract.methods.search($("#fundraiser").val()).call({ from:$.query.get("address")});
   result.then(function(value){
               //document.write("我共捐了:",value);
               //alert("我共捐了:"+value/Math.pow(10,18)+ "  ether");
               document.body.appendChild(document.createElement('p'));
               document.querySelector("body p:last-child").id="jstext";
               document.querySelector("#jstext").innerHTML ="我共捐了:"+"<br>"+value/Math.pow(10,18)+ "  ether";
           })
});
$("#searchMyValue").click(function () {
   var result = infoContract.methods.searchMyValue($("#fundraiser").val()).call({ from:$.query.get("address")});
   result.then(function(value){
               //document.write("我捐給此募款人的金錢流向為:",JSON.stringify(value));
               //alert("我捐給此募款人的金錢流向為:"+JSON.stringify(value) + "  ether");
               document.body.appendChild(document.createElement('p'));
               document.querySelector("body p:last-child").id="jstext";
               document.querySelector("#jstext").innerHTML ="我捐給此募款人的金錢流向為:"+"<br>"+JSON.stringify(value) ;
           })
 });
 $("#searchHowMuch_d").click(function () {
   var result = infoContract.methods.searchHowMuch_d($("#fundraiser").val()).call({ from:$.query.get("address")});
   result.then(function(value){
               document.body.appendChild(document.createElement('p'));
               document.querySelector("body p:last-child").id="jstext";
               document.querySelector("#jstext").innerHTML ="此募款人目前共花了:" + "<br>" +value/Math.pow(10,18)+ "  ether" ;			
   })				
})  
$("#getFunList_d").click(function () {
   var result = infoContract.methods.getFunList_d().call({ from:$.query.get("address")});
   result.then(function(value){
               document.body.appendChild(document.createElement('p'));
               document.querySelector("body p:last-child").id="jstext";
               document.querySelector("#jstext").innerHTML ="我曾捐款過的fundraiser名單:" + "<br>" +value;			
   })				
})  
$("#showFunOrPayeeInfo").click(function(){
   var result=infoContract.methods.showFunOrPayeeInfo($("#fundraiser").val()).call({ from:$.query.get("address")});
   result.then(function(value){
      //document.write("此帳戶的資訊為:",JSON.stringify(value));
          //alert("此帳戶的資訊為:"+JSON.stringify(value));
      result.then(function(value){
      document.body.appendChild(document.createElement('p'));
      document.querySelector("body p:last-child").id="jstext";
      document.querySelector("#jstext").innerHTML ="此人的基本資料(名字/電話/EMAIL信箱):" + "<br>" +JSON.stringify(value)  ;
   })
      
    })
 });

 $("#fundraiserList").click(function () {
   var result = infoContract.methods.fundraiserList().call({ from:$.query.get("address")});
   result.then(function(value){
      //alert("募款人的address:"+value);
      document.body.appendChild(document.createElement('p'));
      document.querySelector("body p:last-child").id="jstext";
      document.querySelector("#jstext").innerHTML ="Fundraiser address:" + "<br>" +value  ;
   })
});//查詢fundraiser的名單