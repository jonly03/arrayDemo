
$("button").click(function(){
	var index = $(this).data("index");

	if (index < $(".animals").children().length){
		var containerItems = $(".animals").children()[index];

		for (var i = 0; i < $(containerItems).children().length; i++){
			var item = $(containerItems).children()[i];
			if ($(item).hasClass("hide")){
				$(item).removeClass("hide");
			}else{
				$(item).addClass("hide");
			}
		}
	}
	else{
		alert("WE ONLY HAVE 4 ANIMALS IN CAGES 0...3");
	}

	
})

	
