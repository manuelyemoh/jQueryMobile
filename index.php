<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8">
   <title>phoneGapTest</title>
  <link rel="stylesheet" href="http://code.jquery.com/mobile/1.0a1/jquery.mobile-1.0a1.min.css" />
  <link rel="stylesheet" href="assets/css/style.css" />
</head>
<body>
  <div id="homePage">
  	<div class="topNavi">
  		<a href="#blog"><div class="backButton"> <p>Back</p> </div></a>
  		<div class="glugCase">
  			<div class="glugLogo"> </div> 
  		</div>
  	</div>
  	<div class="middleContent">
  		 	    <div data-role="page" id="blog">
  		 	    		<section>
  		 	    				<div class="scrollable" id="scrollMe">
  		 	    					<div id="topSectionB">
  		 	    						<div class="glugBlogLogo"> </div>
  		 	    						<h1>Creative Drinks &amp; Notworking<span>&trade;</span></h1>
  		 	    					</div>
  		 	    					<hr>
  		 	    					<div id="middleSectionB">
  		 	    						<h1>
  		 	    							<span>Glug</span> London presents
  		 	    						</h1>
  		 	    						<h2> 
  		 	    							Welcome to the Future 
  		 	    						</h2>
  		 	    						<h3>
  		 	    							Thurs 1.11.12
  		 	    						</h3>
  		 	    						<h3 id="h31">
  		 	    							@6.30pm
  		 	    						</h3>
  		 	    						<h4>
  		 	    							Shoreditch Town Hall
  		 	    							380 Old Street, EC1V 9LT
  		 	    						</h4>
  		 	    						<h5>
  		 	    							Tickets @ £10 – all seated
  		 	    						</h5>
  		 	    					</div>
  		 	    					<a href="#lineUp" data-transition="slide"><div id="bottomSectionB">
  		 	    						<h1>
  		 	    							LINE-UP
  		 	    						</h1>
  		 	    					</div></a>
  		 	    					<div id="blankSpace"></div>	
  		 	    				</div>
  		 	    		</section>
  		 	    </div>
	           <div data-role="page" id="lineUp" >
					<section>
  		 	    		<div class="scrollable" id="scrollMe">
  		 	    			<div id="lineUpcontent">
  		 	    				<div id="image0" class="array1"> </div>
  		 	    				<h1 class="array2">Yancey Strickler of Kickstarter</h1>
  		 	    				<p class="array3">
  		 	    					Yancey Strickler is cofounder of Kickstarter, a funding platform for
									creative projects. His writing has appeared in New York Magazine,
									Pitchfork, Spin, and the Village Voice, among other publications. 
  		 	    				</p>
  		 	    				<div id="socialMedia">
	  		 	    				<div id="twitter">
	  		 	    					<a><h2 class="array4">@ystrickler</h2></a>
	  		 	    				</div>
	  		 	    				<div id="linkedIn">
	  		 	    					<a><h2 class="array5">www.linkedin.com/pub/yancey-strickler/57/b45/486</h2></a>
	  		 	    				</div>
	  		 	    				<div id="website">
	  		 	    					<a><h2 class="array6">http://www.kickstarter.com</h2></a>
	  		 	    				</div>
  		 	    				</div>
							</div>	
							<div id="blankSpace"></div>	
						</div>
						</section>        	
	            	
	            </div>
	            <div data-role="page" id="page1">
	            	<p>
	            		Blog News
	            	</p>            
	            </div>
	            
	            <div data-role="page" id="page2">
						<div id="twitterWidget">
							<section>
		            			<a class="twitter-timeline" width="330" height="390" href="https://twitter.com/OhHowSuper" data-widget-id="321209430295318528">Tweets by @OhHowSuper</a>
								<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="http://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
        					</section>
        				</div>
        				
	            </div>
	            
	            <div data-role="page" id="page3">
	            	<p>
	            		Video Archive 
	            	</p>             
	            </div>
	            
	            <div data-role="page" id="page4">
	            	<p>
	            		Buy tickets
	            	</p>            
	            </div>
	      </div>
  	</div>
  	<div class="bottomNavi">
  		<ul>
  			
	<a href="#page1">
  				<li id="tab0" class="tabOver" data-transition="slide">
  					<p>Blog<br/>News</p>
  		 		</li>
  		 	</a>
  		 	
  		 	<a href="#page2">
  		 		<li id="tab1" class="tabOver" data-transition="slide"> 
	  				<p>Twitter<br/>@Glug</p>
  		    	</li>
  		    </a>
  		    
  		    <a href="#page3">
  		    	<li id="tab2" class="tabOver" data-transition="slide">
  					<p>Video<br/>Archive</p>
  		 		</li>
  		 	</a>
  		 	
  		    <a href="#page4">
  		    	<li id="tab3" class="tabOver" data-transition="slide">
	  				<p>Buy<br/>Tickets</p>
  				</li>
  			</a>
  			
  		</ul>
  	</div>	
  </div>
   <!--<script src="phonegap.js"></script>-->
   <script src="http://code.jquery.com/jquery-1.4.3.min.js"></script>
   <script src="http://code.jquery.com/mobile/1.0a1/jquery.mobile-1.0a1.min.js"></script>
   <script src="assets/js/main.js" type="text/javascript" charset="utf-8"></script>
</body>
</html>