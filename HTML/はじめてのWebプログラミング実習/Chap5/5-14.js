var score = {
    'A001' : { kokugo: 80, suugaku: 70, eigo: 60 },
    'A002' : { kokugo: 75, suugaku: 60, eigo: 80 },
    'A003' : { kokugo: 90, suugaku: 70, eigo: 85 },
};

document.write('3教科の合計点<br>')
for(var id in score) {
    var num = score[id].kokugo + score[id].suugaku + score[id].eigo;
    document.write( id + ':' + num + '点<br>');
}