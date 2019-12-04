/**
 * Created by OXOYO on 2019/9/3.
 *
 * 卡片
 */

import Global from '@antv/g6/src/global'
import Util from '@antv/g6/src/util'
import base from '../base'

export default {
  name: 'imagcustom',
  extendName: 'image',
  options: {
    ...base,
    shapeType: 'path',
    getShapeStyle (cfg) {
      const size = this.getSize(cfg)
      const width = size[0]
      const height = size[1]
      const x = 0 - width / 2
      const y = 0 - height / 2
      const img='./img/imagecustom.svg'
    
      const color = cfg.color || Global.defaultNode.color
      const style = Util.mix({}, Global.defaultNode.style, {
        // 节点的位置在上层确定，所以这里仅使用相对位置即可
        x,
        y,
        img,

        width,
        height,
        stroke: color
      }, cfg.style)
      return style
    }
  }
}
