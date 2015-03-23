// ツイートする
$(document).on("pagebeforecreate",'[data-role=page]',function(e) {
    $.ajaxSetup({cache : true});
    $.getScript('http://platform.twitter.com/widgets.js');
    $.ajaxSetup({cache : false});
});

var isInfoDone = false;
var foldercount = 0;
//機能説明ポップアップ
$(document).on("pagecreate", "#p-gallery", function(e) {
    if(isInfoDone == false){
    	$.mobile.changePage("#popupCloseRight", {transition: 'pop'});
		isInfoDone = true;
	}
});

$(document).on("pageinit", "#p-gallery", function(e) {
  // サムネクリックで拡大表示
  $(this).on("tap", "#photo", function(e) {
    var target = $("#img_PickUp");
    target.src = $("#photo").src;
    var pimg = $("#photo");
    console.log("taped photo:");
  });
});

// フォルダ作成画面のフォーム入力した文字をフォルダ一覧のフォルダに反映させる
$(document).on("pagecreate", "#p-foldset", function(e) {
 $(this).on("click", "#kanryou", function(e) {
    var target = $("#addList");
    var inputStr = $("#folder_name").val();
    target.append("<li><div class='folder'><div class='folder_thumb'>　</div><br>" +inputStr+"</div><div id='folder_prop'><br><span class='foldername'></span><span class='ui-li-count'>"+foldercount+"</span></div></li>");
    target.listview("refresh");
    });
});

$(document).on("pageinit", "#p-fold", function(e) {
// フォルダ一覧の初回で表示させるページ(フォルダが空の状態)
var plist = $("#p-fold").children();
    console.log("plist.length=" + plist.length);
	if(plist.length==0) {
		$.mobile.changePage("#p-set.a-2", {transition: 'pop'});
	}
});

