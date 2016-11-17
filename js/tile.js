$("input[type='checkbox']").change(function(){
	if ($(this).hasClass("correct")) {
		if($(this).is(":checked")){
       		$(this).parent().addClass("correctBackground"); 
    	}else{
        	$(this).parent().removeClass("correctBackground");  
    	}
	}
    else{
    	if($(this).is(":checked")){
       		$(this).parent().addClass("wrongBackground"); 
    	}else{
        	$(this).parent().removeClass("wrongBackground");  
    	}
    }
});