const usrSQL = {
    getUsr: 'select * from user where user_no=?',
    addUsr:'insert into user (user_no,user_pas) values (?,?)'
};

module.exports=usrSQL;