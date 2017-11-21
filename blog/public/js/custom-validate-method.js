var checkExistedResult = false;
jQuery.validator.addMethod("checkExisted", 
	function(value, element, attr){
    $.ajax({
    	url: attr,
    	method: 'post',
    	data: {
    		name: value,
    		_token: $('#ajaxToken').val()
    	},
    	dataType: 'JSON',
    	beforeSend: function(){

    	},
    	success: function(rs){
    		checkExistedResult = rs;
    	},
    	complete: function(){

    	},
    	error: function(err, xhr){
    		console.log(err);
    	}
    });
    return checkExistedResult;
}, "Tên đã tồn tại!"); 