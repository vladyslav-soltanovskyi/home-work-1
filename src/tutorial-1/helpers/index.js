export function montoToStr(num) {
    return num > 12 || num < 1
      ? null
      : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',')[
          num - 1
        ];
}