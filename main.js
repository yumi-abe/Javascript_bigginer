console.log('テスト123');

//変数　variable

//過去
// var test = 123;


//現在
// let test = 123;  //変数の上書きできない
// test += 123; //変数の中身は変えられる

const test = 456;  //costant定数 数字
const test2 = 'テスト';  //costant定数　文字

//動的型付け言語　変数中身を自動的に判定

console.log(test);

console.log(typeof test);

//配列

const array = [1,2,3];

const array2 = [
    ['赤','青','黄'],
    ['緑','紫','黒']
];

console.log(array2);
console.log(array2[1][1]);

//連想配列

//オブジェクト
const member ={
    // キー：　バリュー
    'name': '本田',
    'height': 170,
    'hobby' : 'サッカー'

};

console.log(member);
console.log(member['name']);
console.log(member.name);

const member_2 = {
    '本田':{
        'height':170,
        'hobby':'サッカー'
    },
    '香川':{
        'height':165,
        'hobby':'サッカー'
    }
};

console.log(member_2['香川']['height']);

const member_3 = {
    '1kumi':{
        '本田':{
            'height':170,
            'hobby':'サッカー'
        },
        '香川':{
            'height':165,
            'hobby':'サッカー'
        }
    },
    '2kumi':{
        '本田':{
            'height':170,
            'hobby':'サッカー'
        },
        '香川':{
            'height':165,
            'hobby':'サッカー'
        }
    }
};

console.log(member_3['1kumi']['本田']['hobby']);
