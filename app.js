const fs = require('fs');
const testFolder= './test/'; //디렉토리


const makeFolder = (dir)=>{
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        console.log("폴더가 생성되었습니다");
        
    }else{
        console.log("폴더가 이미 있습니다");
    }
}
const moveFile = (oldFolder,newFolder) =>{
    fs.rename(oldFolder, newFolder, (error) => {
        console.log(error);
      });
}

const workHandeler = (oldDir,newDir,fileName) =>{
    makeFolder(newDir);
    moveFile(`${oldDir}${fileName}`, `${oldDir}${newDir}/${fileName}`);
}




fs.readdir(testFolder, (err, filelist) => { // 하나의 데이터씩 나누어 출력
    filelist.forEach(file => {
        console.log(file);
        if(file.indexOf(".jpg") != -1){
            if(file.indexOf("IMG_E") != -1){
                workHandeler(testFolder,`E`,file);
            }else{
                workHandeler(testFolder,`jpg`,file);
            }
        }else if(file.indexOf(".png") != -1){
            workHandeler(testFolder,`png`,file);
        }else if(file.indexOf(".mp4") != -1){
            workHandeler(testFolder,`move`,file);
        }else if(file.indexOf(".mov") != -1){
            workHandeler(testFolder,`move`,file);
        }else  if(file.indexOf(".") != -1){
            workHandeler(testFolder,`other`,file);
        }

    })
})