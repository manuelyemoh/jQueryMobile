$(document).ready(function() {
	
	var currentId;
	var paragraph;
	
	var myArray = [];
	var items = [];
	var imgLine = "imgLine";
	var lineUpClass = "array";
	var vimeoClass = "Varray";

	if (navigator.onLine) {
		
		
    
	}
	
	else{
		
		alert("not online");
		
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

		        $.each(data, function(key, val) {
				
				myArray.push(val);

 				});
 				setTimeout(handleDataOne, 500);
		       
		    },
    	error: function(XMLHttpRequest, textStatus, errorThrown) {
    		 alert("errorThrown-->"+errorThrown);
  			}
	});
	}
	
	function myCall2() {
		
		var url =  "http://vimeo.com/api/v2/glug/videos.json";
		
    	$.getJSON(url + "?callback=?", null, function(data) {
			
			//alert(data);
			
			$.each(data, function(key, val) {
				
				items.push(val);
				//alert(items);
				//alert( key + ": " + val );
 			});
 			setTimeout(handleDataTwo, 500);
				
          });
     }
     
     function handleDataOne(){
     	
     	for(var a = 0; a < myArray.length; a++){
			
			$('#lineUpcontent').append('<div class="'+imgLine+[a]+'"></div>');
			$('#lineUpcontent .'+imgLine+[a]).css('background-image', 'url(http://www.naturalappbility.com/admin/images/'+myArray[a].fileName+')');
			$('#lineUpcontent .'+imgLine+[a]).css('height', '180px');
			$('#lineUpcontent .'+imgLine+[a]).css('width', '300px');
			$('#lineUpcontent .'+imgLine+[a]).css('margin', '14px 0px 0px 0px');
			$('#lineUpcontent .'+imgLine+[a]).css('position', 'relative');
			$('#lineUpcontent .'+imgLine+[a]).css('z-index', '10');
			$('#lineUpcontent ').append('<h1 class="'+lineUpClass+[1]+'">'+myArray[a].postTitle+'</h1>');
			$('#lineUpcontent ').append('<p class="'+lineUpClass+[2]+'">'+myArray[a].postDetail+'</p>');
			$('#lineUpcontent ').append('<div id="socialMedia"><div id="twitter"><a class="array3">'+myArray[a].twitter+'</a></div><div id="linkedIn"><a class="array4">'+myArray[a].linkedIn+'</a></div><div id="website"><a class="array4">'+myArray[a].webLink+'</a></div></div>');
			$('#lineUpcontent ').append('<div id="blankSpaceLineUp"></div>');
     		
     	}
     }
     
     function handleDataTwo(){
     	
     	for(var i = 0; i<=9; i++){
     		
     		$('#vimeoContent div.scrollable').append('<iframe src="'+'http://player.vimeo.com/video/+'+items[i].id+'"></iframe>');
     		$('#vimeoContent div.scrollable').append('<div class="'+vimeoClass+[0]+'">'+items[i].title+'</div>');
     		$('#vime0oContent div.scrollable').append('<div class="'+vimeoClass+[1]+'">'+items[i].description+'</div>');
     		$('#vimeoContent div.scrollable').append('<div class="'+vimeoClass+[4]+'">'+items[i].upload_date+'</div>');
     		$('#vimeoContent div.scrollable').append('<div id="blankSpaceVimeo"></div>');

     	}	
     	
     }
     
     function handleBlog(){
     	
     		$('#blogContent div.scrollable').append('<div id="blogCell0"></div>');
     		$('#blogContent #blogCell0').css('background-image', 'url(http://www.naturalappbility.com/admin/images/blogImage0.jpg)');
     		$('#blogContent div.scrollable').append('<div id="blogCell1"></div>');
     		$('#blogContent #blogCell1').css('background-image', 'url(http://www.naturalappbility.com/admin/images/blogImage1.jpg)');
     		$('#blogContent div.scrollable').append('<div id="blogCell2">Hello Gluggers,</br></br>We are super excited to announce our 9th Glug on the 9th November. We have a great line up and are focusing on theladies for this event with all female artists and speakers!</div>');
     		$('#blogContent div.scrollable').append('<div id="blogCell3">5 days</div>');
     		$('#blogContent div.scrollable').append('<div id="blankSpaceBlog"></div>');				
     		
     }
     
	//setTimeout(myCall, 100);
	//setTimeout(myCall2, 100);
	//setTimeout(handleBlog, 200);
	
	$(".backButton").click(function(){
		
		$('.topNavi').css('display', 'none');
		
	});
	
	$("#bottomSectionB").click(function(){
		
		setTimeout(myCall, 100);
		$('.topNavi').css('display', 'inline');
		
	});
	
	$("#tab0").click(function(){
		
		setTimeout(handleBlog, 100);
		$('.topNavi').css('display', 'inline');
	});
	
	$("#tab1").click(function(){
		
		$('.topNavi').css('display', 'inline');
	});
	
	$("#tab2").click(function(){
		
		setTimeout(myCall2, 100);
		$('.topNavi').css('display', 'inline');
	});
	
	$("#tab3").click(function(){

		$('.topNavi').css('display', 'inline');
	});
	
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
