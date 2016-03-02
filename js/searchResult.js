///*$('.star').raty({
//	starOff: 'images/star-off.png',
//	starOn : 'images/star-on.png',
//	click : function(score, event) {
//		var length = document.getElementsByTagName('input').length
//		for (var i = 0; i < length; i++) {
//			document.getElementsByClassName("score")[i].innerHTML = "Score: " + document.getElementsByTagName('input')[i].value;
//		}
//	}
//});*/
//
//function checkInDateControl()
//{
//    $("#checkInInput").datepicker('show');
//    $('#checkIndatePicker').on("changeDate", function() {
//        $('#checkInInput').val(
//            $('#checkIndatePicker').datepicker('getFormattedDate')
//        );
//    });
//    $("#datePickerInput").val($("#checkInInput").val() + " - " + $("#checkOutInput").val());
//}
//
//function checkOutDateControl()
//{
//    $("#checkOutInput").datepicker('show');
//    $('#checkOutdatePicker').on("changeDate", function() {
//        $('#checkOutInput').val(
//            $('#checkOutdatePicker').datepicker('getFormattedDate')
//        );
//    });
//    $("#datePickerInput").val($("#checkInInput").val() + " - " + $("#checkOutInput").val());
//}
//
//function showEditSideBar()
//{
//	if(window.innerWidth <= 992) {
//		$(".mainContent").animate({left: '-60%'});
//		$(".headingContent, .sortingBar, .searchResult").css("width", "190%");
//	}
//	$(".editSearchSideBar").show();
//	$(".editSearchSideBar").css("float", "left");
//
//}
//
//function hideEditSideBar()
//{
//	$(".mainContent").animate({left: '0%'});
//	if(window.innerWidth > 992) {
//		$(".headingContent, .sortingBar, .searchResult").css("width", "100%");
//	}
//	else {
//		$(".headingContent, .sortingBar, .searchResult").css("width", "150%");
//	}
//	$(".editSearchSideBar").hide();
//	$(".editSearchSideBar").css("float", "right");
//}
//
window.onload=function()
{
	var hotelContain = document.getElementById("hotelList");
    for (var i = 1; i < 10; i++) {
        var hotelContain = document.getElementById("hotelList");
        var divObject = document.getElementById("container_template");
        var clonedNode = divObject.cloneNode(true);
        clonedNode.setAttribute("id", "result" + (i + 1));
        hotelContain.appendChild(clonedNode);
    }
}

function setUlLiStyle(obj,className)
{
    var liList=document.getElementsByClassName(className);
    for(var i = 0;i<liList.length;i++)
    {
        //      liList[i].style.backgroundColor = "#77777"
        liList[i].style.backgroundColor ="#ffffff"
    }
    obj.style.backgroundColor ="#777777";
}

//function slideSearchBar()
//{
//    alert(123)
//    //hotelList searchBar
//    $("#searchBar").modal('show');
//    $("#searchBar").stop(true, false).animate({"left": '-20%'}, 500);
//}

//$().ready(function () {
//
////    $("#btb").click(function () {
////        $("#unit").stop(true, false).animate({"left": -300}, 500);
////    })
//});

//
//window.onresize=function()
//{
//	if(window.innerWidth > 992) {
//		$(".editSearchSideBar").show();
//		if($(".mainContent").css("left") != "0px") {
//			$(".mainContent").css("left", "0%");
//		}
//		$(".headingContent, .sortingBar, .searchResult").css("width", "100%");
//	}
//	else {
//		if($(".mainContent").css("left") === "0px") {
//			$(".editSearchSideBar").hide();
//			$(".headingContent, .sortingBar, .searchResult").css("width", "150%");
//		}
//		else {
//			$(".headingContent, .sortingBar, .searchResult").css("width", "190%");
//		}
//	}
//}
 
