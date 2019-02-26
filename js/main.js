$(document).ready(function() {
	$(".enrollBtn").on("click", function(e) {
		//e.preventDefault();

	});

	var child = 1;
	$(".ask").click(function(e) {
		var child = child + 1;
		var cln = "cln" + child;
		var cfn = "cfn" + child;
		console.log(child);
		$(".child").last().after('<div class="child form-row">'
              +'<div class="col-md mt-2">'
                +'<input type="text" class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputChildLastName" name="'+cln+'" placeholder="Child Last Name" required>'
                +'<div class="invalid-feedback text-left">'
                  +"Mind including the child's last name."
                +'</div>'
              +'</div>'
              +'<div class="col-md mt-2">'
                +'<input type="text" class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputChildFirstName" name="'+cfn+'" placeholder="Child First Name" required>'
                +'<div class="invalid-feedback text-left">'
                  +"How about the first name."
                +'</div>'
              +'</div>'
            +'</div>');
		e.preventDefault();
		e.stopPropagation();
	});
});

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();