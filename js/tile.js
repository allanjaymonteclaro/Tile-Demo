$("input[type='checkbox']").change(function(){
    if($(this).is(":checked")){
        $(this).parent().addClass("correctBackground"); 
    }else{
        $(this).parent().removeClass("correctBackground");  
    }
});