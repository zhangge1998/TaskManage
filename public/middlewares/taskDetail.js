import request from 'superagent';
export default store=>next=>action=>{
    if(action.type=='JUMPHOME'){
        request.get('/mod')
            .end((err, res) => {
                if (err){
                    console.log(err);
                }else{
                    alert('修改成功');
                    window.location.href = '/myHome';
                }
            });
    }
    else
        next(action);
}