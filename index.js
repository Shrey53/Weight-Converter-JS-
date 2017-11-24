        /* This is method whereby addEventListener is used. 
        document.getElementById("weight").addEventListener("input", unitSelector);
        */
        
///BEGIN///
        /* Two events to single function*/
        document.getElementById("weight").oninput=document.getElementById("weightParameter").onchange=(event)=>{
            unitSelector();  //it is called when oninput or onchange occurs

        //oninput changes instantly when value is entered or incresed/decreased in number box
        //here, two events share the same function since, we need the output to change immediately when unit is changed just like when the weight is changed 
        }

        /* select the unit in list items*/
        function unitSelector()
        {
            //taking the select option value
            var x= document.getElementById("weightParameter").value;

            if(x==="kilogram")
                fromKilogram();

            else if(x==="gram")
                fromGram();

            else if(x==="pounds")
                fromPounds();
            
            else
                fromOunce();

        }

        function fromKilogram(){
            //fetching the weight and converting to required value
            //var weight_value = e.target.value;  (alternate method , when addEventListener is used)
            var weight_value = document.getElementById("weight").value;  //taking textbox(number box)input

            document.getElementById("kilogrmValue").innerHTML= weight_value;
            document.getElementById("grmValue").innerHTML= weight_value*1000;
            document.getElementById("lbsValue").innerHTML= weight_value*2.20462;
            document.getElementById("ozValue").innerHTML= weight_value*35.274;
        }

        function fromGram(){
            //var weight_value = e.target.value;  
            var weight_value = document.getElementById("weight").value;

            document.getElementById("kilogrmValue").innerHTML= weight_value/1000;
            document.getElementById("grmValue").innerHTML= weight_value;
            document.getElementById("lbsValue").innerHTML= weight_value*0.00220462;
            document.getElementById("ozValue").innerHTML= weight_value*0.0352739200000000003;
        }

        function fromPounds(){
            //var weight_value = e.target.value;  
            var weight_value = document.getElementById("weight").value;

            document.getElementById("kilogrmValue").innerHTML= weight_value*0.453592;
            document.getElementById("grmValue").innerHTML= weight_value*453.592;
            document.getElementById("lbsValue").innerHTML= weight_value;
            document.getElementById("ozValue").innerHTML= weight_value*16;
        }
        
        function fromOunce(){
            //var weight_value = e.target.value; 
            var weight_value = document.getElementById("weight").value;

            document.getElementById("kilogrmValue").innerHTML= weight_value*0.0283495;
            document.getElementById("grmValue").innerHTML= weight_value*28.3495;
            document.getElementById("lbsValue").innerHTML= weight_value*0.0625;
            document.getElementById("ozValue").innerHTML= weight_value;
        }
        function myname()
        {
            DeferredPermissionRequest
    
        }