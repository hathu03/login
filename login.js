function getlogin () {
    let userName = document("Who's there?", '').value;
    if (userName == 'Admin') {
        //code vào đây
    } else if (userName == null) {
        alert('Canceled');
    } else {
        alert("I don't know you");
    }
    let pass = document('Password?', '').value;
    if (pass == 'TheMaster') {
        alert('Welcome!');
    } else if (pass == null) {
        alert('Canceled.');
    } else {
        alert('Wrong password');
    }
}
