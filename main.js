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

//演算子
const test_1 = 4;
let test_2 = 3;

//test_2 += 3;

const test_3 = test_1 + test_2;
console.log(test_3);

//if文

// if (条件){
//     条件が真なら実行
// } else{
//     条件が偽なら実行
// }

const height = 0;

console.log(typeof height);

if(height == 90){
    console.log('身長は' + height + 'cmです');
} else {
    console.log('身長は90cmではありません');
}


// == 一致
// === 型も一致

const signal = 'blue';

if(signal === 'red'){
    console.log('とまれ');
} else if(signal === 'yellow'){
    console.log('一旦停止');
} else{
    console.log('進む');
}


const speed = 60;

if(signal === 'blue'){
    if(speed >= 60){
        console.log('スピード違反');
    }
}

//AND,OR

const signal_1 = 'red';
const signal_2 = 'blue';

if(signal_1 === 'red' && signal_2 === 'blue'){
    console.log('赤と青');
}

if(signal_1 === 'red' || signal_2 === 'blue'){
    console.log('赤と青');
}

//三項演算子
// const score = 80;
// const comment = score >= 80 ? 'good' : 'not good';

// console.log(comment);

//繰り返し
//for 繰り返しの回数を指定
//for in　あまり使わない

//for off (ES6) 使いやすい

const nums = [10, 20, 30];

for( num of nums ){
    console.log(num);
}

//for(初期値;繰り返す条件;増減 ++ --)

for(let i = 0; i < 10; i ++){
    console.log(i);
}

//switch (ifのほうが見やすい)
const data = 1;

switch(data){
    case 1:
        console.log('1です');
        break
    case 2:
        console.log('2です');
        break
    case 3:
        console.log('3です');
        break
    default:
        console.log('1-3ではありません');
        break
}

if(data === 1){
    console.log('1です');
}
if(data === 2){
    console.log('2です');
}
if(data === 3){
    console.log('3です');
}

//組み込み関数
// function test(引数){
//     //処理

//     //戻り値
//     return 戻り値;
// }

//インプット引数なし　アウトプットなし
function function_test(){
    console.log('テスト');
}
function_test();

//インプット引数あり
//アウトプット戻り値なし
const comment = 'コメント'
const comment2 = 'コメント2'


function getComment(string){
    console.log(string);
}

getComment(comment2);

//インプット引数なし
//アウトプット戻り値あり

function getNumberOfComment(){
    return 5;
}

console.log(getNumberOfComment());

const NumberOfComment = getNumberOfComment();
console.log(NumberOfComment);

//インプット引数2つ
//アウトプットあり
function sumPrice(int1, int2){
    let int3 = int1 + int2;
    return int3;
}
const total = sumPrice(3,5);
console.log(total);

//組み込み関数

const test1 = 'テスト';
const test3 = 'です';
console.log(test1.length);

console.log(test1.concat(test3));

const greeting = ' Hello world ';
console.log(greeting);

console.log(greeting.trim());

const str = 'Mozilla';

console.log(str.substring(1,3));

console.log(str.substring(1));

//Map（連想配列）
const myMap = new Map();

myMap.set('id',3);
myMap.set('name','本田');

console.log(myMap);

console.log(myMap.get('name'));

const valueList = myMap.values();
for( value of valueList){
    console.log(value);
}