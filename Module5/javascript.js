        var txtBoxEl = document.getElementById('txtbox');
        var btnRemoveEl= document.getElementById('btn-remove');
        var btnToggleEl= document.getElementById('btn-toggle');
        var todoListEl = document.getElementById('todo-list');
        var EnterkeyEl =document.getElementById('Enterkey');
        var a =[];
        var counter = 0;
        var count = document.getElementById('count');
        var done = document.getElementById('done');
        btnToggleEl.onclick=onClickToggle;
        btnRemoveEl.onclick = onClickRemove;
        function onClickRemove(event){
          var inputElems = document.getElementsByTagName("input");
          for (var i=0; i<inputElems.length; i++) {
            if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
            var checkboxEl = event.target;
            var liItem = checkboxEl.parentNode;
            checkboxEl.remove();
            liItem.remove();
            doneListEl.appendChild(liItem);
          }
        }
        }
        function onClickToggle(){
          var inputElems = document.getElementsByTagName("input");
            var counter = 0;
            for (var i=0; i<inputElems.length; i++) {
            if (inputElems[i].type === "checkbox" && inputElems[i].checked === false) {
              counter++;
              inputElems[i].checked = true;
            }
             else{
              inputElems[i].checked = false;
           }
         }
              done.value = counter++;
              done.innerHTML =done.value;
       }
        function Enterkey(){  
        if (event.keyCode == 13) { // No need to do browser specific checks. It is always 13.  
                if (txtBoxEl.value=='')
                   {
                   alert("Please fill in the text field.");
                   return false();
                   }
                 for(var i=0;i<a.length;i++) {
                 if(a[i] == txtBoxEl.value) {
                  alert("Already on the List");
                  return false;
              }
              }
            a.push(document.getElementById("txtbox").value);
            var itemEl = document.createElement('li');
            var listMarkup =
           '<center><div id="todo-item">' +
           '<span class="name">'+ 
           '<input type="checkbox" onclick="onCheck()"/> ' + txtBoxEl.value + '</span>' +
           '</div></center>';
            itemEl.innerHTML = listMarkup;
            todoListEl.appendChild(itemEl);
            checkboxEl = itemEl.getElementsByClassName('name')[0];
            checkboxEl.onclick = onCheck;
            count.value = a.length;
            count.innerHTML = count.value
            txtBoxEl.value=''; 
            }
            }
            function onCheck(){
            var checkboxEl = event.target;
            var liItem = checkboxEl.parentNode;
            liItem.style.textDecoration = 'line-through';
            var counter = 0;
            var inputElems = document.getElementsByTagName("input");
            for (var i=0; i<inputElems.length; i++) {
            if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
            counter++;
               }
            }
            done.value = counter++;
            done.innerHTML =done.value;
       }
          

         
          
