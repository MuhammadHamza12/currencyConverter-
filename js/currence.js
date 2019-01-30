var loadPage=(()=>{
var allCurrencyUrl='https://openexchangerates.org/api/latest.json?app_id=a300855d44104238b1b0d77eccae2bb2';
        
        fetch(allCurrencyUrl).then((res)=>{
            return res.json()
        })
        .then(data =>{
            console.log(data.rates);
             displayCreateList(data.rates);
        })
    })();

function displayCreateList(objList){
    var i=0;
    for(key in objList){
        var disptbl=document.getElementById('tbldisplay');
        if(objList.hasOwnProperty(key)){
            var value=objList[key]; 
            var rows=document.createElement('tr');
            var th=document.createElement('th');
            th.innerText=(i).toString();
                rows.appendChild(th);
            var cntd=document.createElement('td');
                cntd.innerText=key;
            var cctd1=document.createElement('td');
                cctd1.innerText=value;
            rows.appendChild(cntd);
            rows.appendChild(cctd1);
            disptbl.appendChild(rows);
        i++;
        
        console.log(key+":"+objList[key]);
            

      }

    }

    // var rows=disptbl.getElementsByTagName('tr');

}


