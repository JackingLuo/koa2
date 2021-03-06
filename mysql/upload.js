/**
 * 图片(包括富文本编辑器的图片)资源上传
 */
const upload = require("../controllers/koa-multer");

const fn_uploadImg=async(ctx,next)=>{
    let err = await upload.single('file')(ctx, next)
                .then(res=>{res})
                .catch(err=>err)
    if(err){
        ctx.body = {
            code:0,
            msg : err.message
        }
    }else{
        // CKEditor5上传完照片必须返回json数据
        ctx.body = {
            'code':'1',
            'url': 'http://luojiaxin.com/uploads/'+ctx.req.file.filename//返回文件名
        }
    }  
}
module.exports={
    "POST/upload/image":fn_uploadImg
}
