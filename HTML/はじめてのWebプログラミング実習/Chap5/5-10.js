var obj = {name:'太郎',
             age:21, 
             score:{suugaku:80, eigo:75, kokugo:87}} ;
document.write( obj.name + ' ' + obj.age + ' ' + '歳<br>');
document.write( '数学' + obj.score.suugaku + '点<br>');
document.write( '英語' + obj.score.eigo + '点<br>');
document.write( '国語' + obj.score.kokugo + '点<br>');