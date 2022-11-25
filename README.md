<!doctype html>
<html>
	<head> 
		<link rel = "shortcut icon " type = " x - icon" href = "logo.png">
		<title> Web Programming Group Work </title>
		<meta name = "Author" content = "shavaun Palmer"> </meta>
		<meta name = "Keyword" content = "HTML, formatting tags, webpage"/>
		<meta charset = "UTF-8"/>
		<meta name = "viewport" content = "width=device-width initial scale = 1"/>
		<!-- the pixel width of the viewport that you want the website to be rendered at -->
		<!-- a 1:1 ratio between the device and the viewport size -->
		
		 <style type = "text/CSS">
		 
		 	.required-field::after {
				  content: "*";
				  color: red;
				  float: center;
			}
		 
		 
		 
		 
		  </style>
		  
		  <script>
			
			function ageCalculator() {  
				var userinput = document.getElementById("DOB").value; 
					
					
				  var dob = new Date(userinput);  
					//if(userinput==null || userinput=='') {  
					 // document.getElementById("message").innerHTML = "**Choose a date please!";  
						//window.alert("Thank you ");
					  //return false; 
							
					// } else {  
      
				//calculate month difference from current date in time  
				var month_diff = Date.now() - dob.getTime();  
				  
				//convert the calculated difference in date format  
				var age_dt = new Date(month_diff);   
				  
				//extract year from date      
				var year = age_dt.getUTCFullYear();  
				  
				//now calculate the age of the user  
				var age = Math.abs(year - 1970);  
				
				  
				//display the calculated age  
				//return document.getElementById("result").innerHTML = "Age is: " + age + " years. ";    
					
					
			    //} 

				if (age < 12 )
				{
					window.alert("invalid !! age must be above 12 ");
					return document.getElementById("result").innerHTML = "Wrong age";
					
				
				
				} else 
					
					return document.getElementById("result").innerHTML = "Age is: " + age + " years. ";
				
			} 								
			
			function validate(){
				let name = document.getElementById('fname');
				if(name.value.length > 3){
					alert("Valid email address!");
					return true;
				}else
				{
					document.getElementById('fname').innerText = 'First name should be more the Three Characters';
					alert("Valid email address!");
					name.focus();
					return false;
				}
			}
			
			function validateEmail(inputText)
				{
				var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				if(inputText.value.match(mailformat))
				  {
					alert("Valid email address!");
					document.form1.email.focus();
						return true;
				  }
				else
				  {
					alert("Invalid email address!");
						document.form1.email.focus();
							return false;
				  }
				}
				
				function findPercentageScore()
				{
				
				
				
				
				
				}
				
				function Quit () {
				
				
				
				
				
				
				
				}
		  
		  
		  
		  </script>
		
	
	</head> 
	
	<body onload='document.form1.text1.focus()'>
		
		<form name="form1" method="POST" action="#" onSubmit = "return validate();" >
			<fieldset  style="padding:20px; 
		   width:500px">
		  <legend>Player infromation</legend>
		 
		  <label class="required-field">First Name</label>
		  <input name = "fname" type = "text" size = "30" id = "fname" maxlength = "20"size = "30" maxlength = "20" placeholder = "First Name " required  onchange = "validate()" min = "3"/><br/><br/>
		 <label class="required-field">Last Name</label>
		 <input name = "lname" type = "text" size = "30" id ="lname" maxlength = "20" placeholder = "Last Name" required /><br/><br/>
		 <label>Email</label>
		 <input name = "email" type = "text" size = "30" id = "email" maxlength = "30" placeholder = "email@emailserver.com"/><br/><br/>
		 <label>Address</label>
		 <input name = "address" type = "text" size = "30" id = "address" maxlength = "20" placeholder = "Address"/><br/><br/>
		 
		 <label for="myfile">Select a Imagefile:</label>
		<input type="file" id="myfile" name="myfile"> <br/><br/>
		 
	  </fieldset>
	  
		<fieldset style = "padding:20px; width = 500px;">
		
		<legend> Address </legend>
		
		<label>street</label>
		 <input name = "street" type = "text" size = "30" id = "street" maxlength = "20" placeholder = "street"/><br/><br/>
		 
		 
		 <label>city</label>
		 <input name = "city" type = "text" size = "30" id = "city" maxlength = "20" placeholder = "city"/><br/><br/>
		 
		 <label class="required-field">town</label>
		 <input name = "town" type = "text" size = "30" id = "town" maxlength = "20" placeholder = "town" required /><br/><br/>
		 
		 <label>country</label>
		 <input name = "country" type = "text" size = "30" id = "country" maxlength = "20" placeholder = "country"/><br/><br/>
		
		
		
		
		</fieldset>
		
	
	  <fieldset style = "padding:20px; width = 500px;">
		<legend>Demographics</legend>
	    <label class="required-field" >Gender</label>
		 <input name = "gender" type = "text" size = "30" id = "gender" maxlength = "20" placeholder = "gender" required /><br/><br/>
		
		<label class="required-field">Date of Birth</label>
		<input name="dob" type="date" id = "DOB" required /> <!-- this is only in supported browsers -->
		
		<br/><br/>
		
		<button type="submit" onclick = "ageCalculator()"> Click to Calculate age </button> <br>
		
		 <label> <b>System genertaed Age Based on DOB </b></label>
		<h3 style="color:#008CBA" id="result" align="center"></h3>
		
		
		
		
		 <label class="required-field" >Educational level</label>
		 <input name = "Educational level" type = "text" size = "30" id = "Educational level" maxlength = "20" placeholder = "Educational level" required /><br/><br/>
		 
		<label>Parish of Birth</label>
		<select name="parish">
			<option value="cat">St. Catherine</option>
			<option value="eli">St. Elizabeth</option>
			<option value="cla">Clarendon</option>
			<option value="king">kingston</option>
			<option value="and">st Andrew</option>
			<option value="tho">St. Thomas</option>
			<option value="man">Manchester</option>
			<option value="wes">Westmoreland</option>
			<option value="han">Hanover</option>
			<option value="jam">St. James</option>
			<option value="tre">Trelawny</option>
			<option value="ann">St. Ann</option>
			<option value="mar">St. Mary,</option>
			<option value="por">Portland</option>
			
		</select>
	
	<fieldset style = "padding:20px; width:500px;"> 
		<legend> comment </legend>
		<textarea name = "comments" rows = "10" id = "showpercentage" col = "60" placeholder "why do you want to register?"> </textarea>
		
	</fieldset>&nbsp; &nbsp;
	
	<fieldset style = "padding:20px; width:500px;"> 
		<legend> players list  </legend>
		<textarea name = "comments" rows = "10" col = "60" placeholder "why do you want to register?"> </textarea>
		
	</fieldset>
	

			<button type="button" onclick= "CheckAnswer()" >Answer</button> &nbsp; &nbsp; 
			<button type="button" onclick= "PlayGame()" >PlayAgain</button>&nbsp; 
			<button type="button" onclick "Quit()">Quit</button> &nbsp; 
		 <br/><br/>
		<input type = 'submit' value = 'submit' onclick="validateEmail(document.form1.email)" onclick= "validate()" /> &nbsp; 
		<input type = 'reset' value = 'clear field' />
		
	</form>

	
	</body>
	
	
</html>
