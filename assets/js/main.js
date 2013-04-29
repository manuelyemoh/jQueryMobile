$(document).ready(function() {
	
	var currentId;
	
	//arrays
	var speakersArray = [];
	var vimeoArray = [];
	var eventsArray = [];
	var speakersArray = [];
	var modesArray = [];
	
	var imgLine = "imgLine";

	var vimeoClass = "Varray";
	var twitterClass = "Tarray";
	
	function modesRequest(){
	
	var url =  "http://naturalappbility.com/glugCMS_cake_2_0/modes/latest.json";

		
		$.getJSON(url, null, function(data) {
			
			$.each(data, function(key, val) {
				
				modesArray.push(val);

 			});
 			
 			setTimeout(handleModesData, 500);
				
          });
		
	}
	
	function eventsRequest(){
	
	var url =  "http://naturalappbility.com/glugCMS_cake_2_0/events/latest.json";

		
		$.getJSON(url, null, function(data) {
			
			$.each(data, function(key, val) {
				
				eventsArray.push(val);

 			});
 			
 			setTimeout(handleEventsData, 500);
				
          });
		
	}
	
	function speakersRequest() {
	
	var url =  "http://naturalappbility.com/glugCMS_cake_2_0/speakers/latest.json";
		
    	$.getJSON(url, null, function(data) {
			
			$.each(data, function(key, val) {
				
				speakersArray.push(val);

 			});
 			
 			setTimeout(handleSpeakersData, 500);
				
          });
     }

	function vimeoRequest() {
		
		var url =  "http://vimeo.com/api/v2/glug/videos.json";
		
    	$.getJSON(url, null, function(data) {
			
			
			$.each(data, function(key, val) {
				
				vimeoArray.push(val);

 			});
 			
 			setTimeout(handleVimeoData, 500);
				
          });
     }
     
     //backButton
     
     function backButtonHit(e){
     
     	alert("Hit Back");
     
     
     }
     
     function menuButtonHit(e){
	     
	     alert("Hit Menu");
	     
     }

     //Modes
			
     function handleModesData(){
     
     	 switch(modesArray[0].Mode.status){
			
				case "Live":
				
					console.log("App is Live");
					document.addEventListener("backbutton", backButtonHit, false);
					document.addEventListener("menubutton", menuButtonHit, false);
				break;
				
				case "Down":
				  
				  	console.log("App is Down");
				  
				break;
				
				case "TBC":
				
					console.log("App is TBC");
				
				break;
				
				default:
				console.log("Error has occoured, going to default mode");
		 } 
      }
     
     function handleEventsData(){
	     
	     for(var a = 0; a < eventsArray.length; a++){
		     
		     /*alert(eventsArray[0].Event.name);
		     alert(eventsArray[0].Event.date);
		     alert(eventsArray[0].Event.location);
		     alert(eventsArray[0].Event.description);
		     alert(eventsArray[0].Event.tickets);*/
		     
		     $('#eventsContent').append('<div class="cell0">'+eventsArray[a].Event.name+'</div>');
		     $('#eventsContent').append('<div class="cell1">'+eventsArray[a].Event.date+'</div>');
		     $('#eventsContent').append('<div class="cell2">'+eventsArray[a].Event.location+'</div>');
		     $('#eventsContent').append('<div class="cell3">'+eventsArray[a].Event.description+'</div>');
		     $('#eventsContent').append('<div class="cell4">'+eventsArray[a].Event.tickets+'</div>');
	     }
     }
     
     //Line Up
     function handleSpeakersData(){
     	
     	var externalURL = 'http://'
     	var lineUpClass = "array";
     	
     	for(var a = 0; a < speakersArray.length; a++){
     	
     		/*alert(speakersArray[a].Speaker.name);
     		alert(speakersArray[a].Speaker.company);
     		alert(speakersArray[a].Speaker.description);
     		alert(speakersArray[a].Speaker.twitter);
     		alert(speakersArray[a].Speaker.linkedIn);
     		alert(speakersArray[a].Speaker.website);*/
     		//console.log(speakersArray[a].Speaker.photo_medium);
     		
     		//http://www.naturalappbility.com/glugCMS_cake_2_0/img/uploads/ldn.png
    			
			$('#lineUpcontent').append('<div class="'+imgLine+[a]+'"></div>');
			$('#lineUpcontent .'+imgLine+[a]).css('background-image', 'url(http://www.naturalappbility.com/glugCMS_cake_2_0/'+speakersArray[a].Speaker.photo_medium+')');
			$('#lineUpcontent .'+imgLine+[a]).css('height', '180px');
			$('#lineUpcontent .'+imgLine+[a]).css('width', '300px');
			$('#lineUpcontent .'+imgLine+[a]).css('margin', '14px 0px 0px 0px');
			$('#lineUpcontent .'+imgLine+[a]).css('position', 'relative');
			$('#lineUpcontent .'+imgLine+[a]).css('z-index', '10');
			$('#lineUpcontent').append('<div class="random">'+'<div class="location">LDN</div>'+'</div>');
			$('#lineUpcontent .random').css('background-image', 'url(http://www.naturalappbility.com/glugCMS_cake_2_0/img/uploads/ldn.png)');
			$('#lineUpcontent ').append('<h1 class="'+lineUpClass+[1]+'">'+speakersArray[a].Speaker.name+'</h1>');
			$('#lineUpcontent ').append('<hr>');
			$('#lineUpcontent ').append('<div class="description">'+speakersArray[a].Speaker.description+'</div>');
			$('#lineUpcontent').append('<div id="socialMedia"></div>');
			$('#lineUpcontent #socialMedia').append('<div class="test">Hello Hello</div>');
			/*$('#lineUpcontent ').append('<h1 class="'+lineUpClass+[1]+'">'+speakersArray[a].postTitle+'</h1>');
			$('#lineUpcontent ').append('<p class="'+lineUpClass+[2]+'">'+speakersArray[a].postDetail+'</p>');
			$('#lineUpcontent ').append('<div id="socialMedia"><div id="twitter"><a href="'+'https://twitter.com/'+speakersArray[a].twitter+'" class="array3">'+speakersArray[a].twitter+'</a></div><div id="linkedIn"><a href="'+externalURL+speakersArray[a].linkedIn+'" class="array4">'+speakersArray[a].linkedIn+'</a></div><div id="website"><a href="'+speakersArray[a].webLink+'" class="array4">'+speakersArray[a].webLink+'</a></div></div>');
			$('#lineUpcontent ').append('<div id="blankSpaceLineUp"></div>');*/
     		
     	}
     }
     
     //Vimeo
     function handleVimeoData(){
     	
     	for(var i = 0; i<=4; i++){
     		
     		//("here");
     		$('#vimeoContent div.scrollable').append('<iframe src="'+'http://player.vimeo.com/video/+'+vimeoArray[i].id+'"></iframe>');
     		$('#vimeoContent div.scrollable').append('<div class="'+vimeoClass+[0]+'">'+vimeoArray[i].title+'</div>');
     		$('#vime0oContent div.scrollable').append('<div class="'+vimeoClass+[1]+'">'+vimeoArray[i].description+'</div>');
     		$('#vimeoContent div.scrollable').append('<div class="'+vimeoClass+[4]+'">'+vimeoArray[i].upload_date+'</div>');
     		$('#vimeoContent div.scrollable').append('<div id="blankSpaceVimeo"></div>');

     	}
     	
     }
     
     //Blog
     function handleBlogData(){
     	
     		$('#blogContent div.scrollable').append('<div id="blogCell0"></div>');
     		$('#blogContent #blogCell0').css('background-image', 'url(http://www.naturalappbility.com/admin/images/blogImage0.jpg)');
     		$('#blogContent div.scrollable').append('<div id="blogCell1"></div>');
     		$('#blogContent #blogCell1').css('background-image', 'url(http://www.naturalappbility.com/admin/images/blogImage1.jpg)');
     		$('#blogContent div.scrollable').append('<div id="blogCell2">Hello Gluggers,</br></br>We are super excited to announce our 9th Glug on the 9th November. We have a great line up and are focusing on theladies for this event with all female artists and speakers!</div>');
     		$('#blogContent div.scrollable').append('<div id="blogCell3">5 days</div>');
     		$('#blogContent div.scrollable').append('<div id="blankSpaceBlog"></div>');				
     		
     }
	
	$("#bottomSectionB").click(function(e){
		
		e.stopImmediatePropagation();
	    e.preventDefault();
	    $.mobile.changePage("#lineUp");
		setTimeout(speakersRequest, 500);

	});
	
	$(".tab0").click(function(e){
		
		setTimeout(handleBlogData, 500);
		e.stopImmediatePropagation();
	    e.preventDefault();
	    $.mobile.changePage("#events");
	    setTimeout(eventsRequest, 100);
	    
	});
	
	$(".tab1").click(function(e){
		
		e.stopImmediatePropagation();
	    e.preventDefault();
	    $.mobile.changePage("#page2");
	    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
	});

	$(".tab2").click(function(e){
		
		e.stopImmediatePropagation();
	    e.preventDefault();
	    $.mobile.changePage("#page3");
	    setTimeout(vimeoRequest, 500);

	});
	
	$(".tab3").click(function(e){
		
		setTimeout(handleBlog, 500);
		e.stopImmediatePropagation();
	    e.preventDefault();
	    $.mobile.changePage("#page4");

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

//init application

setTimeout(modesRequest, 100);

});

( function( $, undefined ) {

$( document ).bind( "mobileinit", function() {
	$.mobile.pushStateEnabled = false;
});

});

  
/*$.ajax
({
    type: "GET",
    url: "http://naturalappbility.com/glugCMS_cake_2_0/speakers/latest.json",
    crossDomain: true,
	dataType: "json",
	//headers: {"Accept": "text/html, application/json"},
    cache: false,
    success: function(data)
	    {
		    alert(data);
	        $.each(data, function(key, val) {
			
			speakersArray.push(val);
			alert(val);
			
				});
				//setTimeout(handleDataOne, 500);
	       
	    },
	error: function(XMLHttpRequest, textStatus, errorThrown) {
		 alert("errorThrown-->"+errorThrown);
		 }
});*/

