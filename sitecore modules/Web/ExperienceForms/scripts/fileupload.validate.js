$(document).ready(function() {
	var adapters = $.validator.unobtrusive.adapters;
	adapters.validateFileType = function(name) {
		var fileName = name.value;
		var allowed_extensions = new Array($('input[type=file]').attr("accept"));
		var file_extension = fileName.split('.').pop().toLowerCase();
		var extensionsallowed = $('input[type=file]').attr("accept");
		if (extensionsallowed.indexOf(file_extension) >= 0) {
			return true;
		}
		return false;
	};

	adapters.validateFileUpload = function(name) {
		var isFileValid = adapters.validateFileType(name);
		if (!isFileValid) {
			adapters.removeFile(name);
			return true;
		} 
		return false;
	};

    adapters.removeFile= function (name) {
		var isFileValid = adapters.validateFileType(name);

		if (!isFileValid) {
			var nameofItem = $(name).attr("id");
			$('#' + nameofItem).val('');
			$('#' + nameofItem).prop('required', true);
		}
	};
});