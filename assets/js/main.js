$(document).ready(function() {
	
	var currentId;
	var paragraph;
	
	var myArray = [];
	 
	
	function refreshPage(){
		
		myArray = [];
		document.location = "index.html";

	}
	
	//var testUrl = $(location).attr('href');
	
	//if (/lineUp/i.test(testUrl)){
		
		
	//}
	/*if ($(location).attr('href') === 'http://localhost:8888/phoneGap/index.html#lineUp')
	{
     alert("here");
	}
	else{
		
		alert("not here");
	}*/
	
	function initLineUp(){
		
		var imageURL = "http://www.naturalappbility.com/admin/images/"+myArray[0];
		//alert(myArray[0]);
		//alert(myArray);
		$(".array1").css({'background-image': 'url(' + imageURL + ')', });
		$(".array2").html(myArray[1]);
		$(".array3").html(myArray[2]);
		$(".array4").html(myArray[3]);
		$(".array5").html(myArray[4]);
		$(".array6").html(myArray[5]);
		$("#elementID").html("another string");
		
	}

	function myCall() {

    $.ajax
	({
	    type: "GET",
	    url: "http://www.naturalappbility.com/admin/dbGrab.php",
	    crossDomain: true,
    	dataType: "json",
	    cache: false,
	    success: function(data)
		    {
		    	
		        myArray.push(data[0]);
		        myArray.push(data[1]);
		        myArray.push(data[2]);
		        myArray.push(data[3]);
		        myArray.push(data[4]);
		        myArray.push(data[5]);
		        setTimeout(initLineUp, 100);
		    },
    	error: function(XMLHttpRequest, textStatus, errorThrown) {
    		 alert("errorThrown-->"+errorThrown);
  			}
	});
	}
	
	setTimeout(myCall, 100);

	$(".tabOver").mouseover(function(){
		
		var currentId = $(this).attr('id');
		//alert(currentId);
		//alert(tab0);
		var tabObj = eval("(" + currentId + ")");
		$(tabObj).css('background-color', '#ff6600');
		$(tabObj).children().css('color', 'white');
	});
	
	$(".tabOver").mouseout(function(){
		
		var currentId = $(this).attr('id');
		//alert(currentId);
		//alert(tab0);
		var tabObj = eval("(" + currentId + ")");
		
		if(tabObj == tab0){
			
			$(tabObj).css('background-color', '#212121');

			
		}
		if(tabObj == tab1){
			
			$(tabObj).css('background-color', '#2c2c2c');
			
		}
		if(tabObj == tab2){
			
			$(tabObj).css('background-color', '#393939');
			
		}
		if(tabObj == tab3){
			
			$(tabObj).css('background-color', '#454444');
			
		}
			$(tabObj).children().css('color', '#999999');
	});

});

	
