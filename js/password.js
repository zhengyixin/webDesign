$(document).ready(function()
{
    var info_pwflag=1;
    var info_apwflag=1;
 
    <!--第一次密码验证-->
 
    $("#txtPassword1").focus(function()
    {
        if($(this).val().length==0)
        {
            $(this).parent().css('border-color','#4DAFE4');
            $("#msg1").css("color","#4DAFE4").text("请输入6-16位密码，不含空格！");
        }
        if(info_pwflag==1)
        {
            $(this).parent().css('border-color','#4DAFE4');
            $("#msg1").css("color","#4DAFE4").text("请输入6-16位密码，不含空格！");
        }
        else
        {
            $(this).parent().css('border-color','red');
                $("#msg1").css("color","red").text("请输入6-16位密码，不含空格！");
        }
    });
    $("#txtPassword1").blur(function()
    {
        var temp=$(this).val();
        if(temp.length==0)
        {
            $(this).parent().css('border-color','red');
            $("#msg1").css("color","red").text("请输入密码！");
        }
 
        else
        {
            if(info_pwflag==1)
            {
                $(this).parent().css('border-color','#14BC3E');
                $("#msg1").css("color","#14BC3E").text("输入正确！");
            }
        }
        if(temp.length<6)
        {
            if(info_pwflag==1)
            {
                $(this).parent().css('border-color','red');
                $("#msg1").css("color","red").text("请输入6-16位密码，不含空格！");
                info_pwflag=0;
            }
        }
    });
    $("#txtPassword1").keyup(function(event)
    {
        var info_user=$(this).val();
        if(info_user.length==0)
        {
            info_pwflag=1;
        }
        else
        {
            for(i=info_user.length-1;i>=0;i--)
            {
                var temp=info_user.charAt(i);
                if(temp==" ")
                {
                    info_pwflag=0;
                    break;
                }
                else
                {   
                    info_pwflag=1;
                     
                }
            }
        }
        if(info_pwflag==1)
        {
            $(this).parent().css('border-color','#4DAFE4');
            $("#msg1").css("color","#4DAFE4").text("请输入6-16位密码，不含空格！");
        }
        else
        {
            $(this).parent().css('border-color','red');
                $("#msg1").css("color","red").text("请输入6-16位密码，不含空格！");
        }       
    });
 
    <!--第二次密码验证-->
     
    $("#txtPassword2").focus(function()
    {
        if($(this).val().length==0)
        {
            if(info_pwflag==1)
            {
                $(this).parent().css('border-color','#4DAFE4');
                $("#msg2").css("color","#4DAFE4").text("请确认密码！");
            }
            else
            {
                $(this).parent().css('border-color','#CAC21F');
                $("#msg2").css("color","red").text("第一次密码输入不正确！");
            }
        }
        else
        {
            if(info_pwflag==1)
            {
                if(info_apwflag==1)
                {
                    $(this).parent().css('border-color','#4DAFE4');
                    $("#msg2").css("color","#4DAFE4").text("确认密码正确！");
                }
                else
                {
                    $(this).parent().css('border-color','red');
                    $("#msg2").css("color","red").text("确认密码不正确！");
                }
            }
            else
            {
                $(this).parent().css('border-color','#CAC21F');
                $("#msg2").css("color","#CAC21F").text("第一次密码输入不正确！");
            }
        }
         
 
    });
    $("#txtPassword2").blur(function()
    {
        var temp=$(this).val();
        if(temp.length==0)
        {
            $(this).parent().css('border-color','red');
            $("#msg2").css("color","red").text("请确认密码！");
        }
        else
        {
            if(info_pwflag==1)
            {
                if(info_apwflag==1)
                {
                    $(this).parent().css('border-color','#14BC3E');
                    $("#msg2").css("color","#14BC3E").text("确认密码正确！");
                }
                else
                {
                    $(this).parent().css('border-color','red');
                    $("#msg2").css("color","red").text("确认密码不正确！");
                }
            }
            else
            {
                $(this).parent().css('border-color','#CAC21F');
                $("#msg2").css("color","#CAC21F").text("第一次密码输入不正确！");
            }
        }
    });
    $("#txtPassword2").keyup(function(event)
    {
        var info_user=$(this).val();
        var info_pw=$("#txtPassword1").val();
        if(info_pwflag==1)
        {
            if(info_user.length==0)
            {
                info_apwflag=1;
            }
            else
            {
                if(info_user==info_pw)
                {
                    info_apwflag=1;
                }
                else
                {
                    info_apwflag=0;
                }
            }
        }
        //alert(info_pw);
        if(info_pwflag==1)
        {
            if(info_apwflag==1)
            {
                $(this).parent().css('border-color','#4DAFE4');
                $("#msg2").css("color","#4DAFE4").text("确认密码正确！");
            }
            else
            {
                $(this).parent().css('border-color','red');
                $("#msg2").css("color","red").text("确认密码不正确！");
            }
        }
        else
        {
            $(this).parent().css('border-color','#CAC21F');
            $("#msg2").css("color","#CAC21F").text("第一次密码输入不正确！");
        }       
    });
});


function chkUsername() {
 var username = $.trim($("#txtUserName1").val());
 if(username=="") {
  return 0;
 }
 else if( /^\d.*$/.test( username ) ){
  //用户名不能以数字开头
  return -1;
 }
 else if(username.length<6 || username.length>18 ){
  //合法长度为6-18个字符
  return -2;
 }
  else if(! /^\w+$/.test( username ) ){
  //用户名只能包含_,英文字母，数字
   return -3;
 }
  return 1;
}

//用户名检测
 function chkUsername() {
 var username = $.trim($("#txtUserName1").val());
 if(username=="") {
  return 0;
 }
 else if( /^\d.*$/.test( username ) ){
  //用户名不能以数字开头
  return -1;
 }
 else if(username.length<6 || username.length>18 ){
  //合法长度为6-18个字符
  return -2;
 }
  else if(! /^\w+$/.test( username ) ){
  //用户名只能包含_,英文字母，数字
   return -3;
 }
  return 1;
} 

$(document).ready(function(){
  /** ----------- 用户名输入框事件 ----------- */
  //当文本框成为焦点时
  $("#txtUserName1").bind("focus", function(){
  var ret=chkUsername();
  if(ret==0){
  //用户名输入框为空,显示规则 
    $("#msg").html("请输入6-18位字符")
    $("#msg").css("color","#4DAFE4");
  }
  return false;
  }); 
  $("#txtUserName1").bind("blur", function(){
   var ret=chkUsername();
   if (ret>0){
    var url="testServlet?name="+$("#txtUserName1").val();
   }
   else if(ret==0){
   //用户名输入框为空,显示规则
    $("#msg").html("用户名不能为空"); 
     $("#msg").css("color","red");
   }else {
    if(ret == -1){
     //显示具体的错误内容
     $("#msg").html("用户名不能以数字开头");
     $("#msg").css("color","red");
    }
    else if(ret == -2){
     $("#msg").html("合法长度为6-18个字符");
     $("#msg").css("color","red");
    }
  else if(ret == -3){
     $("#msg").html("用户名只能包含_,英文字母,数字 ");
     $("#msg").css("color","red");
    }   
  }
   return false;
  }); 


  $("#txtEmail").click(function(){
     var email=$("#txtEmail").val();
  if(email=="")
  {
      $("#msg3").html("邮箱不能为空");
     $("#msg3").css("color","red");
  }
 
  if(!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/))
  {
 $("#msg3").html("格式不正确！请重新输入");
 ("#msg3").css("color","red");
   $("#email1").focus();
  }
 });
});



