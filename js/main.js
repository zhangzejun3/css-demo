!function(){
    var duration = 50
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        console.log(speed)
        $button.addClass('active')
        .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
            duration = 250
            break
            case 'normal':
            duration = 50
            break
            case 'fast':
            duration = 10
            break
        }
    })
    function writeCode(preCode,code,fn) {
        let domCode = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id
        function run(){
            n += 1
            domCode.innerHTML = Prism.highlight(preCode + code.substring(0, n), Prism.languages.css, 'css')
            styleTag.innerHTML = preCode + code.substring(0, n)
            domCode.scrollTop = domCode.scrollHeight
            if (n < code.length) {
                id = setTimeout(run,duration)
            }else{
                fn && fn.call()
            }
        }
        setTimeout(run, duration)
    }
    let code = `/*首先需要准备皮卡丘的皮*/
    .preview{
        height: 100%;
        border: 1px solid green;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fee433;
    }
    .wrapper{
        width: 100%;
        height: 165px;
        position: relative;
    }
    /*然后画皮卡丘的鼻子*/
    .nose{
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 10px 12px;
      border-color:black transparent transparent;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top:28px;
      transform:translateX(-50%);
    }
    /*接下来画皮卡丘的眼睛*/
    .eye{
      width: 50px;
      height: 50px;
      background: #000;
      position: absolute;
      border-radius: 50%;
    }
    /*这是皮卡丘的眼珠子*/
    .eye::before{
      content: '';
      display: block;
      width: 24px;
      height: 24px;
      background: white;
      position: absolute;
      border-radius: 50%;
      left: 6px;
      top: 3px;
    }
    /*左眼在左边*/
    .eye.left{
      left: 50%;
      margin-left: -140px;
    }
    /*右眼在右边*/
    .eye.right{
      right: 50%;
      margin-right: -140px;
    }
    /*接下来画皮卡丘的脸*/
    .face{
      width: 68px;
      height: 68px;
      border-radius: 50%;
      background: #fc0d1c;
      border: 2px solid black;
      position: absolute;
      top: 85px;
    }
    /*这是左脸*/
    .face.left{
      right:50%;
      margin-right: 116px;
    }
    /*这是右脸*/
    .face.right{
      left:50%;
      margin-left: 116px;
    }
    /*开始画上嘴唇*/    
    .upperLip{
        height: 20px;
        width: 80px;
        border:3px solid black;
        position: absolute;
        top:49px;
        background: #fee433;
    }
    /*上嘴唇左半边*/    
    .upperLip.left{
        right:50%;
        border-bottom-left-radius: 40px 20px;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
    }
    /*上嘴唇右半边*/    
    .upperLip.right{
        left:50%;
        border-bottom-right-radius: 40px 20px;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
    }
    /*开始画下嘴唇*/    
    .lowerLip-wrapper{
        position: absolute;
        width: 160px;
        height: 150px;
        left:50%;
        bottom: 0;
        margin-bottom: -40px;
        transform: translateX(-50%);
        overflow: hidden;
    }
    .lowerLip{
        width: 160px;
        height: 1000px;
        background: #990513;
        border-radius: 80px/500px;
        border: 3px solid black;
        position: absolute;
        bottom: 0;
        overflow: hidden;
    }
    /*舌头*/    
    .lowerLip::after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        left: 50%;
        transform: translateX(-50%);
        background: #fc4a62;    
    }
    /*好了，皮卡丘画完了*/    
    `
    writeCode('',code)
   
}.call()