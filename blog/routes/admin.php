<?php 
Route::get('/', 'Admin\DashboardController@index')->name('dashboard');

Route::get('category', function(){
	return "admin/category => quan tri danh muc bai viet";
});

Route::get('post', function(){
	return "admin/post => quan tri bai viet trong he thong";
});
 ?>