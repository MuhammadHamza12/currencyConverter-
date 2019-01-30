var pageLoad = (()=>{
    var url='https://gist.githubusercontent.com/Fluidbyte/2973986/raw/b0d1722b04b0a737aade2ce6e055263625a0b435/Common-Currency.json'
    var urlrates='https://openexchangerates.org/api/latest.json?app_id=a300855d44104238b1b0d77eccae2bb2';    
    var namecode='AED';    

    fetch(urlrates).then((Res)=>{
        return Res.json();
    })
    .then(data=>{
        console.log(data.rates[namecode]);
    })
    fetch(url).then((res)=>{
           return res.json();
    })
        .then(data=>{
             console.log(data);
                 fillDropDown(data,'selectid');
                 fillDropDown(data,'selectid2')
            })

        })();

        function selectedvalue(data,id){
            var getselected=document.querySelector('#'+id);
            var getoptionA=getselected.getElementsByTagName('option');
            
        }
        var setValues=(value1,value2)=>{
            var urlrates='https://openexchangerates.org/api/latest.json?app_id=a300855d44104238b1b0d77eccae2bb2';        
            var cRates;
            var cRate2;
            
            fetch(urlrates).then((Res)=>{
                return Res.json();
            })
            .then(data=>{
                cRates=data.rates[value1];
                cRate2=data.rates[value2];
                console.log(cRates);
                console.log(cRate2);
                getrates(cRates,cRate2)
            })    
        }
        
        document.querySelector('#inputc').addEventListener('keypress',()=>{
            console.log('working');
            var e2=document.getElementById('selectid2');
              var value2=e2.options[e2.selectedIndex].value;
              console.log("dropdown2"+value2);
                console.log(value2);    
                flag = true; 
            var value = e.options[e.selectedIndex].value;
                console.log(value);
               
               setValues(value,value2);
               
        })
        function checkInp()
        {
         var input= +document.getElementById('#inputc').value;
            // var x=document.forms["myForm"]["age"].value;
            var regex=/^[0-9]+$/;
            if (input.match(regex))
            {
                alert("Must input numbers");
                return false;
            }
        }
        function getrates(crate1,crate2){
            var input=+document.querySelector('#inputc').value;
            var formula=(input/crate1);
                formula=parseFloat(formula * crate2);
                if(isNaN(formula)){
                    // alert('please enter number!');
                    document.querySelector('#inputc').classList.add('is-invalid');
            
                    setTimeout(()=>{
                        document.querySelector('#inputc').classList.remove('is-invalid');  
                    },2000)
                  
                    return;
                }
            var output=document.getElementById('output').value=formula;
                 
        }
        var fillDropDown = (dropData,id)=>{
            var values =1;
            
            for(key in dropData)
            {
                $('#'+id).append($('<option>', {
                    value: key,
                    
                    text: dropData[key].name,
                }));   
            }
            var getselected=document.getElementById(id);
            var getoptionA=getselected.getElementsByTagName('option');
            getoptionA[1].setAttribute('selected','selected');
        }
        var e2=document.getElementById('selectid2');
            e2.addEventListener('change',()=>{
                console.log('working');
                var e2=document.getElementById('selectid2');
                  var value2=e2.options[e2.selectedIndex].value;
                  console.log("dropdown2"+value2);
                    console.log(value2);    
                    flag = true; 
                var value = e.options[e.selectedIndex].value;
                    console.log(value);
                   
                   setValues(value,value2);
                        
            })
        var e = document.getElementById("selectid");
    
        
        var flag=false;
        e.addEventListener('change',(e1)=>{
            console.log('working');
        var e2=document.getElementById('selectid2');
          var value2=e2.options[e2.selectedIndex].value;
          console.log("dropdown2"+value2);
            console.log(value2);    
            flag = true; 
        var value = e.options[e.selectedIndex].value;
            console.log(value);
           
           setValues(value,value2);
           
        })


        var e1=document.getElementById('selectid2');
        e1.addEventListener('change',()=>{
            var value1 = e1.options[e1.selectedIndex].value;
            console.log(value1);
            var text = e1.options[e1.selectedIndex].text;
            
        })
var getCompareValue= ()=>{
    var e = document.getElementById("selectid");

    e.addEventListener('change',()=>{
        var value = e.options[e.selectedIndex].value;
        var text = e.options[e.selectedIndex].text;
      
        var urlrates='https://openexchangerates.org/api/latest.json?app_id=a300855d44104238b1b0d77eccae2bb2';        
       var cRates;
        fetch(urlrates).then((Res)=>{
            return Res.json();
        })
        .then(data=>{
            cRates=data.rates[value];
            console.log(data.rates[value]);
        })
 
    })
        
    }  
    getCompareValue();