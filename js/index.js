

$(document).ready(function() {
	$("#top_1 li:eq(1),.span2").mouseover(function(event) {
		/* Act on the event */
		$('.span2').show();
	});
	$("#top_1 li:eq(1),.span2").mouseout(function(event) {
		/* Act on the event */
		$('.span2').hide();
	});
	$(".grp2_content ul").click(function  () {
		// body...
		window.location="forum.html"
		//alert(22);
	})
});

