function getLongDate(d){
	let m = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	let o = "";
	o += d.getDate() + " ";
	o += m[d.getMonth()] + " ";
	o += d.getFullYear();
	return o;
}	

function getNumDate(d){
	let o = "";
	o += d.getFullYear() + "-";
	if (d.getMonth() + 1 < 10) o += "0";
	o += (d.getMonth() +1) + "-";
	if (d.getDate() < 10) o += "0";
	o += d.getDate();
	return o;
}	

$(() => {
	console.log("Document Ready");	
	
	$(".details").append($("<input />", {
		class: "col-8"
	}).hide());
	
	$(".details input").each(function(){
		$(this).attr("type",$(this).parent().data("type"));	
		if ($(this).attr("type") == "date"){
			$(this).val(getNumDate(new Date($(this).parent().find("span").text())));	
		}	
		else $(this).val($(this).parent().find("span").text());
		
		//console.log($(this).parent().find("span").text());
		
	});
	
	$(".details").append($("<button></button>", {
		html: "Update",
		class: "btn btn-dark pull-right sub"
			
	}).hide());
	
	$("button").on("click", function(evt){
		$(this).parent().children().toggle();	
		if ($(this).hasClass("sub")){ //update value
			console.log("Updating field "+$(this).parent().find("b").text());
			let source = $(this).parent().find("input");
			
			if (source.attr("type") == "date"){
				let tmp = new Date(source.val());
				tmp = getLongDate(tmp);
				$(this).parent().find("span").text(tmp); 	
			}
			else {
				$(this).parent().find("span").text(source.val()); 	
				
			}		
			
		}	
	});
	
});