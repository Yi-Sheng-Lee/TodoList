$(document).ready(function(){
	var btn = $('#add');
	var data = JSON.parse(window.localStorage.getItem('listData')) || [];
	var list = $('.toDoList');
	
	updateList(data);

	btn.on({
		click: function(){
			addList();
		}
	});

	$(window).on({
		keypress: function(e){
			if(e.keyCode == "13" || e.which == "enter"){
				addList();
			}
		}
	});

	function addList(){
		var todo = $('#input').val();
		var list = $('.toDoList');
		var todoList = {content: todo};
		data.push(todoList);
		window.localStorage.setItem('listData', JSON.stringify(data));
		updateList(data);
	}

	function updateList(items){
		var len = items.length;
		list.find('*').remove();
		for(var i=0; i<len; i++){

			list.append(`<li class = "list d-flex align-items-baseline">
							<p class="mr-2">${i+1}.  </p>
							<button class="delete mr-2" value=${i}>刪除</button>
							<p class="text-center">${items[i].content}</p>
						</li>`);
		}
		
		$('.delete').each(function(){
			$(this).on({
			click: function(e){
				if(e.target.nodeName !=="BUTTON"){return}
				else{
					var num = $(this).val();
					data.splice(num, 1);
					window.localStorage.setItem('listData', JSON.stringify(data));
					updateList(data);
					}
					checkLocalStorageData();
			}
			});
		});
	}
	// checkLocalStorageData();
	// function checkLocalStorageData(){
	// 	if(data == ""){
	// 		$('#input').css("disabled");
	// 		console.log("EMPTY");
	// 	} else{
	// 		$('#input').removeClass("disabled");
	// 		console.log("EMPTYe");
	// 	}
	// }
})





		
