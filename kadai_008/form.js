$(function () {
    // classがbtnの要素がクリックされたら
    $('.btn').on('click', function () {
        // text-boxにクリックしました！と表示する
       $('.text-box').val("クリックしました！")
    });
});
