$(window).on({
    // HTMLドキュメントが読み込み完了したときに「loadイベントが発生しました」とコンソールに出力する
    'load': () => {
        console.log('loadイベントが発生しました');
    
        },
    // 画面をスクロールしたときに「scrollイベントが発生しました」とコンソールに出力する
    'scroll': () => {
        console.log('scrollイベントが発生しました')
    },
});
