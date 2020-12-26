// ファイル選択して画像が変更された時の処理
document.getElementById('inputFile').addEventListener('change', function (e) {
    // 1枚だけ表示
    let file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = function() {
        let dataUri = this.result;
        // BASE64形式でソースへ追加
        let img = document.getElementById('previewFile');
        img.src = dataUri;
    }
    fileReader.readAsDataURL(file);
});
