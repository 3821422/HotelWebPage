//function clearButtonControl()
//{
//	if(document.activeElement.id == "search-location")
//    {
//		$("#clearButton").css("display", "inline");
//    }
//	else
//    {
//        $("#clearButton").click(function() {
//        	$("#search-location").val("");
//        	$("#clearButton").css("display", "none");
//        });
//        //$("#clearButton").css("display", "none");
//	}
//}
//
//function datePickerControl()
//{
//    $("#checkInInput").datepicker('show');
//    $('#checkIndatePicker').on("changeDate", function() {
//        $('#checkInInput').val(
//            $('#checkIndatePicker').datepicker('getFormattedDate')
//        );
//    });
//    $("#datePickerInput").val($("#checkInInput").val() + " - " + $("#checkOutInput").val());
//
//    $("#checkOutInput").datepicker('show');
//    $('#checkOutdatePicker').on("changeDate", function() {
//        $('#checkOutInput').val(
//            $('#checkOutdatePicker').datepicker('getFormattedDate')
//        );
//    });
//    $("#datePickerInput").val($("#checkInInput").val() + " - " + $("#checkOutInput").val());
//}
//
//$("#roomStatus").val($("#roomCount").val() + " Rooms, " + $("#guestCount").val() + " Guests");
var rooms_list = ["1","2","3","4-9","10-25","26+"];
var Guest_rooms_list = ["1","2","3","4","5","6"];
var hadClickFalg = false;
var maxScreen = window.matchMedia("(min-width:767px)");
var middleScreen = window.matchMedia("(max-width:767px)");
var minScreen = window.matchMedia("(max-width:500px)");
var requestFormObj = document.getElementById("requestFrom");
function index_requestFrom_ClickSearchListener(objName)
{
     hadClickFalg  = true;

    document.getElementById('div_input_dataPickUp').style.display = 'block'

    if(middleScreen.matches)
    {
        document.getElementById('div_input_findHotel').style.width = "100%"
        document.getElementById('div_input_dataPickUp').style.width = "100%"
        requestFormObj.style.marginTop = "0px"
        var bg_img = document.getElementById('bg_img');
        bg_img.style.height = "0px";
    }
    else
    {
        requestFormObj.style.marginTop = "300px"
        var bg_img = document.getElementById('bg_img');
        bg_img.style.display = "0px"
        document.getElementById('div_input_findHotel').style.width = "50%"
        document.getElementById('div_input_dataPickUp').style.width = "50%"
    }
    if(minScreen.matches)
    {
        document.getElementById('div_input_findHotel').style.width = "100%"
        document.getElementById('div_input_dataPickUp').style.width = "100%"
    }
     var bottomObj =  document.getElementById("searchBottom");
     bottomObj.style.display = "block";
    if(objName == 'span_dataPickUp_1' || objName == 'span_dataPickUp_2')
    {
        if(objName == 'span_dataPickUp_1')
        {
//            document.getElementById("span_dataPickUp_1").style.backgroundColor = "red"
            $("#span_dataPickUp_1").datetimepicker({format: 'yyyy-mm-dd',
                minView: "2"
            }).on('changeDate',function(ev){
                var startTime = ev.date.valueOf();
                document.getElementById("span_dataPickUp_1").innerHTML = getSmpFormatDateByLong(startTime,false);
//                document.getElementById("span_dataPickUp_1").style.backgroundColor = "black"
            });
//            $('.form_datetime').datetimepicker('show');
            $("#span_dataPickUp_1").datetimepicker('show');
        }
        if(objName == 'span_dataPickUp_2')
        {
            $("#span_dataPickUp_2").datetimepicker({format: 'yyyy-mm-dd',
                minView: "2"
            }).on('changeDate',function(ev){
                var endTime = ev.date.valueOf();
                document.getElementById("span_dataPickUp_2").innerHTML = getSmpFormatDateByLong(endTime,false);
            });
            $("#span_dataPickUp_2").datetimepicker('show');
        }

    }
}

window.onload = function(){

    if(maxScreen.matches)
    {
//        var bg_img = document.getElementById('bg_img');
//        requestFormObj.style.backgroundColor = 'red'
//        bg_img.style.height = "1000px"
        //document.getElementById('div_input_dataPickUp').style.display ="block"
    }

    if(minScreen.matches)
    {
        requestFormObj.style.marginTop = "500px"
        var bg_img = document.getElementById('bg_img');
        bg_img.style.height = "700px"
        document.getElementById('div_input_dataPickUp').style.display = 'none'
    }
    if(middleScreen.matches)
    {
        requestFormObj.style.marginTop = "500px"
        var bg_img = document.getElementById('bg_img');
        bg_img.style.height = "700px"
        document.getElementById('div_input_dataPickUp').style.display = 'none'
    }
    middleScreen.addListener(function(changed) {
        if(changed.matches) {
          //  document.getElementById('div_input_dataPickUp').style.display = 'none'
            document.getElementById('div_input_findHotel').style.width = "100%"
            document.getElementById('div_input_dataPickUp').style.width = "100%"
            if(hadClickFalg)
            {

                requestFormObj.style.marginTop = "0px"

             //   var bg_img = document.getElementById('bg_img');
//                bg_img.style.display = 'none';
                document.getElementById('bg_img').style.display = "none";
                document.getElementById('div_input_dataPickUp').style.display = "''";

            }
            else
            {
                document.getElementById('bg_img').style.display = "'block'";
                requestFormObj.style.marginTop = "500px";
                var bg_img = document.getElementById('bg_img');
                bg_img.style.height = "700px";
                bg_img.style.display = "'block'";
                document.getElementById('div_input_dataPickUp').style.display = "none";
            }

        } else {
            document.getElementById('div_input_findHotel').style.width = "50%"
            document.getElementById('div_input_dataPickUp').style.width = "50%"
            document.getElementById('bg_img').style.display = "'block'";
            if(hadClickFalg)
            {
                requestFormObj.style.marginTop = "300px"
                var bg_img = document.getElementById('bg_img');
                bg_img.style.height = "700px"
                bg_img.style.display = 'block';
                document.getElementById('div_input_dataPickUp').style.display = 'block';
            }
            else
            {
                requestFormObj.style.marginTop = "500px"
                var bg_img = document.getElementById('bg_img');
                bg_img.style.height = "700px";
                bg_img.style.display = "''";
                document.getElementById('div_input_dataPickUp').style.display = 'block';
            }
        }
    });
}
var input_rooms_guest = document.getElementById('input_rooms_guest');
function RoomsOnClick(option)
{
    if(option == "+")
    {
        var input_rooms = document.getElementById("input_rooms");
        for(var i = 0;i<rooms_list.length;i++)
        {
            if(rooms_list[i] == input_rooms.value)
            {
                if(i >= rooms_list.length-1)
                {
                    document.getElementById("btn_rooms_add").disabled = true;
                    break;
                }
                else
                {
                    document.getElementById("btn_rooms_minus").disabled = false;
                }
                input_rooms.value = rooms_list[i+1];
                if(i > 1)
                {
                    input_rooms_guest.value = input_rooms.value  + ' Rooms';
                }
                else
                {
                    //0 1 2  var rooms_list = ["1","2","3","4-9","10-25","26+"];
                    input_rooms_guest.value = input_rooms.value  + ' Rooms,1 Guest/Rm';
                }

                break;
            }
        }
    }

    if(option == "-")
    {
        var input_rooms = document.getElementById("input_rooms");
        for(var i = 0;i<rooms_list.length;i++)
        {
            if(rooms_list[i] == input_rooms.value)
            {
                if(0 == i)
                {
                    document.getElementById("btn_rooms_minus").disabled = true;
                    break;
                }
                else
                {
                    document.getElementById("btn_rooms_add").disabled = false;
                }
                input_rooms.value = rooms_list[i-1];
                if(i > 3)
                {
                    input_rooms_guest.value = input_rooms.value  + ' Rooms';
                }
                else
                {
                    input_rooms_guest.value = input_rooms.value  + ' Rooms,1 Guest/Rm';
                }
                break;
            }
        }
    }

}

function GuestOnClick(option)
{
    if(option == "+")
    {
        var input_guests = document.getElementById("input_guests");
        for(var i = 0;i<Guest_rooms_list.length;i++)
        {
            if(Guest_rooms_list[i] == input_guests.value)
            {
                if(i >= Guest_rooms_list.length-1)
                {
                    document.getElementById("btn_guests_add").disabled = true;
                    break;
                }
                else
                {
                    document.getElementById("btn_guests_minus").disabled = false;
                }
                input_guests.value = Guest_rooms_list[i+1];
                break;
            }
        }
    }

    if(option == "-")
    {
        var input_guests = document.getElementById("input_guests");
        for(var i = 0;i<Guest_rooms_list.length;i++)
        {
            if(Guest_rooms_list[i] == input_guests.value)
            {
                if(0 == i)
                {
                    document.getElementById("btn_guests_minus").disabled = true;
                    break;
                }
                else
                {
                    document.getElementById("btn_guests_add").disabled = false;
                }
                input_guests.value = Guest_rooms_list[i-1];

                break;
            }
        }
    }

}

function resetOnClick()
{
    var input_rooms = document.getElementById("input_rooms");
    var input_guests = document.getElementById("input_guests");
    input_rooms.value = rooms_list[0];
    input_guests.value = Guest_rooms_list[0];

    document.getElementById("btn_guests_minus").disabled = true;
    document.getElementById("btn_guests_add").disabled = false;

    document.getElementById("btn_rooms_add").disabled = false;
    document.getElementById("btn_rooms_minus").disabled = true;
    input_rooms_guest.value = '1 Rooms,1 Guest/Rm';
}
function setSpecialRateSetValue(val)
{
    document.getElementById("input_specialRate").value = val;
}
//startFindHotel
function startFindHotle()
{
  //  alert('startFindHotel');
    window.location.href='searchResult.html';
}



//
//function indexClickSearchListner_xs(){
//    var requestFrom_xs = document.getElementById("requestFrom_xs");
//    requestFrom_xs.style.display = "none";
//    var requestFrom_xs_clicked = document.getElementById("requestFrom_xs_clicked");
//    requestFrom_xs_clicked.style.display = "";
//    var xs_contain = document.getElementById("xs_contain");
//   // xs_contain.class = 'col-xs-12   visible-xs-block'
//    xs_contain.setAttribute("class", "col-xs-12   visible-xs-block");
//
//    index_requestFrom_ClickSearchListener();
//}




Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

/**
 *转换日期对象为日期字符串
 * @param date 日期对象
 * @param isFull 是否为完整的日期数据,
 *               为true时, 格式如"2000-03-05 01:05:04"
 *               为false时, 格式如 "2000-03-05"
 * @return 符合要求的日期字符串
 */
function getSmpFormatDate(date, isFull) {
    var pattern = "";
    if (isFull == true || isFull == undefined) {
        pattern = "yyyy-MM-dd hh:mm:ss";
    } else {
        pattern = "yyyy-MM-dd";
    }
    return getFormatDate(date, pattern);
}
/**
 *转换当前日期对象为日期字符串
 * @param date 日期对象
 * @param isFull 是否为完整的日期数据,
 *               为true时, 格式如"2000-03-05 01:05:04"
 *               为false时, 格式如 "2000-03-05"
 * @return 符合要求的日期字符串
 */

function getSmpFormatNowDate(isFull) {
    return getSmpFormatDate(new Date(), isFull);
}
/**
 *转换long值为日期字符串
 * @param l long值
 * @param isFull 是否为完整的日期数据,
 *               为true时, 格式如"2000-03-05 01:05:04"
 *               为false时, 格式如 "2000-03-05"
 * @return 符合要求的日期字符串
 */

function getSmpFormatDateByLong(l, isFull) {
    return getSmpFormatDate(new Date(l), isFull);
}
/**
 *转换long值为日期字符串
 * @param l long值
 * @param pattern 格式字符串,例如：yyyy-MM-dd hh:mm:ss
 * @return 符合要求的日期字符串
 */

function getFormatDateByLong(l, pattern) {
    return getFormatDate(new Date(l), pattern);
}
/**
 *转换日期对象为日期字符串
 * @param l long值
 * @param pattern 格式字符串,例如：yyyy-MM-dd hh:mm:ss
 * @return 符合要求的日期字符串
 */
function getFormatDate(date, pattern) {
    if (date == undefined) {
        date = new Date();
    }
    if (pattern == undefined) {
        pattern = "yyyy-MM-dd hh:mm:ss";
    }
    return date.format(pattern);
}