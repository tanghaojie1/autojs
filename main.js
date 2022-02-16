"ui";
ui.layout(
    <vertical>
        <frame>
            <text id="text" w="*" gravity="center" maxLines="1" ellipsize="end" textSize="8sp" />
            <progressbar id="progress" w="*" h="auto" indeterminate="true" layout_gravity="top" style="@style/Base.Widget.AppCompat.ProgressBar.Horizontal" />
        </frame>
        <frame layout_weight="1">
            <webview id="webview" w="*" h="*" />
        </frame>
    </vertical>
);
auto();

let webViewExpand = require("expand/core/webViewExpand.js");
var url = "http://s.61.com/";
ui.webview.loadUrl(url);
webViewExpand.init(ui.webview, ["./time.js"], true);
setInterval(() => {
    var P = ui.webview.getProgress();
    var T = "赛尔号启航登陆器月亮版-by Bobby"
    if (P == 100) {
        ui.run(() => {
            ui.progress.setVisibility(8);
        });
    } else {
        ui.run(() => {
            ui.progress.setVisibility(0);
        });
    };
    ui.run(() => {
        ui.text.setText(String(T));
    });
}, 100);

var m = 999;
//打钢牙鲨
function shark() {
    while (m == 1) {
        click(883, 2047);
        sleep(200);
    }
}

//刷巅峰
function peek() {
    while (m == 2) {
        click(83, 1904);
        sleep(400);
        click(88, 2240);
        sleep(400);
        click(48, 1224);
        sleep(800);
    }
}
//竞技|乱斗
function athletics() {
    while (m == 3) {
        click(102, 2134);
        sleep(400);
        click(88, 2240);
        sleep(400);
        click(48, 1224);
        sleep(800);
    }
}

//星际迷航
function Star_Trek() {
    while (m == 4) {
        click(224, 1209);
        sleep(700);
        click(174, 667);
        sleep(100);
        click(752, 2240);
        sleep(100);
        click(676, 840);
        sleep(400)
    }
}


ui.text.click(function (v) {
    var T = String(ui.webview.getUrl());
    threads.start(function () {
        var i = dialogs.select("操作", ["刷新当前页面", "钢牙鲨", "巅峰", "竞技/乱斗", "迷航"]);
        m = i;
        switch (m) {
            case 0:
                ui.run(() => {
                    ui.webview.reload();
                });
                break;
            case 1: toast("0"); shark(); break;
            case 2: toast("1"); peek(); break;
            case 3: toast("2"); athletics(); break;
            case 4: toast("3"); Star_Trek(); break;
        };
    });
});




// function onClick() {

//     threads.start(function () {
//         选择();
//         switch (m) {
//             case 0: toast("0"); shark(); break;
//             case 1: toast("1"); peek(); break;
//             case 2: toast("2"); athletics(); break;
//             case 3: toast("3"); Star_Trek(); break;

//         }
//     });
// }

// var jb = [ "钢牙鲨", "巅峰", "竞技/乱斗", "迷航"];
// var m = 999;
// function 选择() {
//     ui.action.setText("助");
//     var i = dialogs.select("请选择一个选项", jb);
//     m = i;
//     if (i >= 0) {
//         ui.action.setText("辅");
//     } else {
//         ui.action.setText("辅");
//         toast("您取消了选择");
//     }
// }
