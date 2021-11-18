        var myForm=document.createElement("div");
        myForm.setAttribute("id","myforms")  
        myForm.style.width="100%";    
        myForm.style.height="100px";
        myForm.style.position="relative";
       
        myForm.innerHTML='<div><form id="userForm">  <input type="text" id="search" name="keyword" placeholder="search">  <button type="submit" value="Submit">search</button></input></form></div>'
        var heading=document.createElement("h1");
        heading.innerText="MY ANIME SHOWS";
        heading.style.position="absolute";
        heading.style.top="14px";
        heading.style.left="200px";
        myForm.appendChild(heading);
        document.body.appendChild(myForm)
    
       

        var form=document.getElementById("userForm");
        form.addEventListener("submit",async function(element){
        
                 element.preventDefault();
         const keywords = element.target.keyword.value;
         var url=`https://api.jikan.moe/v3/search/anime?q=${keywords}`
         console.log(keywords)

         
    try {
      response = await fetch(url).then((res) => res.json());
    } catch (error) {
        alert("please use correct keywordagain")
    }
    var data = response.results;
    console.log(data);
        //  board creation
        var board=document.createElement("div");
        board.style.width="100%";
        board.style.marginLeft="100px";
        board.style.display="flex";
        board.style.flexDirection="row";
        board.style.flexWrap="wrap";

       

        for(i=0;i<data.length;i++){
            var  dates= (data[i].start_date)
           console.log(dates)

        //    end dates
        var  date2= (data[i].end_date)
        
            console.log(dates)
            var imdb=(data[i].score)
            console.log(imdb)

             var box=document.createElement("div")
             box.style.width="250px";
             box.style.height="500px";
             box.style.marginRight="15px";
             box.style.marginBottom="10px";
             box.style.marginTop="10px";
             box.style.marginLeft="15px";
             box.style.display="flex";
             box.style.flexDirection="column";
             box.style.flexWrap="wrap";
            
             var smallbox1=document.createElement("img");
             smallbox1.setAttribute("src",data[i].image_url)
             smallbox1.setAttribute("width","250px")
             smallbox1.setAttribute("height","330px")
             box.appendChild(smallbox1);
             var smallbox2=document.createElement("div");
             smallbox2.style.width="250px";
             smallbox2.style.height="150px";
             smallbox2.style.backgroundColor="white";
             smallbox2.innerHTML=`<p><br><b>Start Date :</b> ${dates}<br><b>End Date   :</b>${date2}<br><b>Type : </b>${data[i].type}<br><b>IMDB Rating :${imdb}</b></p>`
             box.appendChild(smallbox2)
             board.appendChild(box)
             

           

         }
         document.body.appendChild(board)
     
        })
      
       