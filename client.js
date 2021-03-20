var count = 1;

function createArea () {
  var area = document.createElement('div');
  area.className = 'me';
  area.innerHTML = document.getElementById('message').value;
  var parent = document.getElementById('area');
  parent.insertBefore(area, null);
  document.getElementById('message').value = "";
  count = count+1;
  console.log(count);

  if( ( count % 2 ) == 0 ) {
    // img要素を作成
    var img_element = document.createElement('img');
    img_element.src = './img/girl2.png'; // 画像パス
    img_element.alt = '女の子'; // 代替テキスト
    img_element.width = 60; // 横サイズ（px）
    img_element.height = 60; // 縦サイズ（px）

    // 指定した要素にimg要素を挿入
    var content_area = document.getElementById("area");
    content_area.appendChild(img_element);

    var chats = ["そうですね","しっかり喋れてますか？？","すごーい","・・・","お腹減った","いいですよ","寒いですね","カレー食べたい","( ˘ω˘)ｽﾔｧ","おおっ・・・"];

    word = chats[Math.floor(Math.random()*chats.length)];

    var area = document.createElement('div');
    area.className = 'robot';
    area.innerHTML = word;
    var parent = document.getElementById('area');
    parent.insertBefore(area, null);
    count = count+1;
    console.log(count);

    var obj = document.getElementById('area');
    obj.scrollTop = document.getElementById('area').scrollHeight;
  }
}
