/**
 * Created by OXOYO on 2019/7/8.
 *
 * 矩形
 */

import Global from '@antv/g6/src/global'
import Util from '@antv/g6/src/util'
import base from '../base'

export default {
  name: 'rectangle',
  extendName: 'single-shape',
  options: {
    ...base,
    shapeType: 'path',
    label:'bbb',
    getShapeStyle (cfg) {
      console.info('aaa234324234332432');
      const size = this.getSize(cfg)
      const width = size[0]
      const height = size[1]
      const x = 0 - width / 2
      const y = 0 - height / 2
      const path = [
        // 左顶点
        [ 'M', -width / 2, 0 ],
        // 左上顶点
        [ 'L', -width / 2, -height / 2 ],
        // 右上顶点
        [ 'L', width / 2, -height / 2 ],
        // 右下顶点
        [ 'L', width / 2, height / 2 ],
        // 左下顶点
        [ 'L', -width / 2, height / 2 ],
        [ 'Z' ]
      ]
      const color = cfg.color || Global.defaultNode.color
      const style = Util.mix({}, Global.defaultNode.style, {
        // 节点的位置在上层确定，所以这里仅使用相对位置即可
        x,
        y,
        width,
        height,
        path,
        stroke: color
      }, cfg.style)
      return style
    },
    drawLabel(cfg, group){
      console.info('234324234332432');
      const labelCfg = cfg.labelCfg || {}
      const labelStyle = this.getLabelStyle(cfg, labelCfg, group)
      const text = group.addShape('text', {
        attrs: {
          ...labelStyle,
          text: cfg.label||'起始节点',
          fontSize: 12,
          fill: '#404040',
          cursor: 'pointer'
        },
        className: 'edge-label'
      })
  
      return text

    }


  }
}
