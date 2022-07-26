function download() {
    // テキストエリア内の文字列を取得する
    const text = document.getElementById('textarea').value;

    // 取得した文字列をBlob形式に変換
    let blobedText = new Blob([text], {type: 'text/plain' });

    // BlobをURLに変換
    let url = URL.createObjectURL(blobedText);

    // ダウンロード可能なa要素を作成する
    let link = document.createElement('a');
    link.href = url;
    link.download = 'memo.txt';
    // 要素の追加
    document.body.appendChild(link);

    // linkをclickすることでダウンロードが完了
    link.click();

    // 「link」は不要な要素になるので、link要素を削除
    link.parentNode.removeChild(link)
}