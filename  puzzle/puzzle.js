/**
 * params {
 *   canvas: String, 
 *   width: Number,
 *   height: Number,
 *   index: Bollean,
 *   pos: Array [
 *      {
 *          x, y, w, h, index
 *      }
 *   ]
 * }
 * 
 */

;let puzzle = (params) =>
    new Promise((reslove, reject) => {
        let can = document.querySelector(params.canvas || 'canvas'),
        pen = can.getContext('2d');
        can.width = params.width || 1000
        can.width = params.height || 1000
        imgList = []; 
        
        if(params instanceof Array){
            imgList = params
        } else {
            if(params.index){
                imgList = params.imgs.sort((v1, v2) => {
                  if(v1.index > v2.index){
                      return 0
                  } else {
                      return 1
                  }
              })
            } else {
                imgList = params.imgs
            }
        }

        imgList.map(v => {
           pen.drawImage(v.img, 0, 0, v.img.width, v.img.height, v.x, v.y, v.w, v.h)
        })

        if(params.output){
            
            reslove(can.toDataURL('image/jpeg'))
        }
    })
