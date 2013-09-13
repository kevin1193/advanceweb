<script>
        var txtBoxEl = document.getElementById('txtbox');
        var btnRemoveEl= document.getElementById('btn-remove');
        var btnToggleEl= document.getElementById('btn-toggle');
        var todoListEl = document.getElementById('todo-list');
        var EnterkeyEl =document.getElementById('Enterkey');
        var a =[];
        function onClickToggle(){
            var tasksEl = todoListEl.getElementsByTagname('li');
            var markAllasDone =true;
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
            var itemEl = document.createElement('li');
            var listMarkup =
           '<center><div id="todo-item">' +
           '<span class="name">' + txtBoxEl.value + '</span>' +
           '</div></center>';
            itemEl.innerHTML = listMarkup;
            todoListEl.appendChild(itemEl);
            a.push(document.getElementById("txtbox").value);
            txtBoxEl.value=''; 
            }
            }
</script>