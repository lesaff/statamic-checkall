jQuery(document).ready(function()
{
	var cpTable = $('table.simple-table');
	var cpCheckboxTH = cpTable.find('th.checkbox-col');
	var cpCheckAll = '<input type="checkbox" id="check-all" name="check-all" value="all">';
	var batchAction = $('.input-status');
	var batchSelector = $('select.replaced');
	cpCheckboxTH.append(cpCheckAll);

	$(':checkbox[name=check-all]').click (function () {
    	$(':checkbox[name="entries[]"], :checkbox[name="files[]"]').trigger('click');
  	});

});