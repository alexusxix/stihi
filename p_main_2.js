function assist_strings() {
  var index1 = document.forms[0].string1.selectedIndex;
  var index2 = document.forms[0].string2.selectedIndex;
  var string1 = eval ("document.forms[0].string1.options[" + index1 + "].value");
  var string2 = eval ("document.forms[0].string2.options[" + index2 + "].value");
  document.forms[0].strings.value = document.forms[0].strings_first.value + "\n" + string1 + "\n" + string2;
}


function assist_select (num) {
  var string = eval ('document.forms[0].strings_' + num + '.value');
  document.forms[0].strings.value = document.forms[0].strings_first.value + "\n" + string;
  document.forms[0].strings.focus();
  self.location = '#chosen';
}


function assist (start) {
  document.forms[0].start.value = start;
  document.forms[0].submit();
}


function calendar(year, month, day) {
  document.forms[0].year.value  = year;
  document.forms[0].month.value = month;
  document.forms[0].day.value   = day;
  document.forms[0].submit();
}


function encyclopedia(word) {
  document.forms[0].action = '/cgi-bin/encyclopedia.pl';
  document.forms[0].word.value  = word;
  document.forms[0].submit();
}


function list(val) {
  document.forms[0].list.value = val;
  document.forms[0].submit();
}


function cert(link) {
  document.forms[0].link.value = link;
  document.forms[0].submit();
}


function remove(link) {
  document.forms[1].link.value = link;
  document.forms[1].submit();
}


function removephoto() {
  document.forms[0].mode.value = 'removephoto';
  document.forms[0].submit();
}


function removecomment(author) {
  document.forms[0].mode.value = 'removecomment';
  document.forms[0].r_author.value = author;
  document.forms[0].submit();
}


function complain(post) {
  document.forms[0].action = '/cgi-bin/complain.pl';
  document.forms[0].post.value = post;
  document.forms[0].submit();
}


function remove_rec(post) {
  if(confirm('������� ��� ��������?')) {
    self.location='/cgi-bin/form.pl?type=message_remove&message=' + post;
  }
}


function remove_notes(post, author, num) {
  if(confirm('������� ��� ���������?')) {
    self.location='/cgi-bin/form.pl?type=notes_remove&message=' + post + '&author=' + author + '&num=' + num;
  }
}


function showpic () {
  document.all["piclayer"].style.visibility = "visible";
}


function hidepic () {
  document.all["piclayer"].style.visibility = "hidden";
}


function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


function checkCookies() {
    let cookieNote = document.getElementById('cookie_note');
    let cookieBtnAccept = cookieNote.querySelector('.cookie_accept');

    // ���� ���� cookies_policy ��� ��� ��� ����������, �� ���������� �����������
    if (!getCookie('cookies_policy')) {
        cookieNote.classList.add('show');
    }

    // ��� ����� �� ������ ������������� ���� cookies_policy �� ���� ���
    cookieBtnAccept.addEventListener('click', function () {
        setCookie('cookies_policy', 'true', 365);
        cookieNote.classList.remove('show');
    });
}
