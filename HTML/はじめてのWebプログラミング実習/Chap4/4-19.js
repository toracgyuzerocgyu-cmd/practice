var day1 = new Date(2021, 6, 23, 20, 0, 0);
// 東京オリンピックの開会式の開始時刻

var year = day1.getFullYear(); // 4桁の西暦年
var month = day1.getMonth(); // 月の番号（1月が0、2月が1、・・・12月が11）
var date = day1.getDate();
var day = day1.getDay(); // 曜日の番号（日曜が0、月曜が1、・・・土曜が6）
var hour = day1.getHours(); // 時（0～23）
var minute = day1.getMinutes(); // 分（0～59）
var second = day1.getSeconds(); // 秒（0～59）

var week = ['日','月','火','水','木','金','土'];

document.write('東京オリンピックの開会式の開始時刻 <br>');
document.write(year + '/');
document.write((month+1) + '/');
document.write(date + ' ');
document.write(' (' + week[day] + ') ' );
document.write(hour + ':' );
document.write(minute + ':' );
document.write(second );