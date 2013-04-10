$(document).ready(function() {
	
	var currentId;
	var paragraph;
	
	var myArray = [];
	var items = [];
	var classArray = "Varray";

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
	
	function myCall2() {
		
		var url =  "http://vimeo.com/api/v2/glug/videos.json";
		
    	$.getJSON(url + "?callback=?", null, function(data) {
			
			
			
			$.each(data, function(key, val) {
				
				items.push(val);
				//alert(items);
				//alert( key + ": " + val );
 			});
 			setTimeout(handleData, 500);
				
           });
           
          
           
     }
     
     function handleData(){
     	
     	for(var i = 0; i<=9; i++){
     	
     		$('#vimeoContent div.scrollable').append('<div class="'+classArray+[i]+'">'+items[i].title+'</div>');
     		$('#vimeoContent div.scrollable').append('<div class="'+classArray+[i]+'">'+items[i].id+'</div>');
     		$('#vimeoContent div.scrollable').append('<div class="'+classArray+[i]+'">'+items[i].user_name+'</div>');
     		$('#vimeoContent div.scrollable').append('<iframe src="'+'http://player.vimeo.com/video/+'+items[i].id+'"></iframe>');
     		$('#vimeoContent div.scrollable').append('<div class="'+classArray+[i]+'">'+items[i].upload_date+'</div>');
     		$('#vimeoContent div.scrollable').append('<div class="'+classArray+[i]+'">'+items[i].upload_date+'</div>');
     		$('#vimeoContent div.scrollable').append('<div class="'+classArray+[i]+'">'+items[i].upload_date+'</div>');
     		$('#vimeoContent div.scrollable').append('<div class="'+classArray+[i]+'">'+items[i].upload_date+'</div>');
     		$('#vimeoContent div.scrollable').append('<div id="blankSpace"></div>');
     		
     	}
     	
     	//$(".Varray7").html(classArray); 
     	
     	/*for(var i = 0; i<=9; i++){
 				
 				alert(items[i].id);
 				alert(items[i].upload_date);
 			}*/
 			
     }
     
     //<iframe src="http://player.vimeo.com/video/62714874" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

	setTimeout(myCall, 100);
	setTimeout(myCall2, 100);

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

	
