<template>
  <div class="content">
    <el-space class="editor-operations">
      <el-button type="primary" @click="addText">添加文本</el-button>
      <el-button type="primary" @click="exportJson">导出JSON</el-button>
      <el-button type="primary" @click="typewriter">打字机</el-button>
      <el-button type="primary" @click="flyInFlyOut">飞入飞出</el-button>
    </el-space>
    <div id="editor" />
  </div>

  <div class="toolbar left-toolbar">
    <div class="toolbar-title">文字格式</div>

    <div class="toolbar-group">
      <div class="group-label">字体样式</div>
      <button @click="setHTMLText('bold')"><b>B</b> 加粗</button>
      <button @click="setHTMLText('italic')"><i>I</i> 斜体</button>
      <button @click="setHTMLText('underline')"><u>U</u> 下划线</button>
      <button @click="setHTMLText('strike')"><s>S</s> 删除线</button>
      <button @click="setHTMLText('textCase')">Aa 大小写</button>
    </div>

    <div class="toolbar-group">
      <div class="group-label">上下标</div>
      <button @click="setHTMLText('script', 'super')">X² 上标</button>
      <button @click="setHTMLText('script', 'sub')">X₂ 下标</button>
    </div>

    <div class="toolbar-group">
      <div class="group-label">水平对齐</div>
      <button @click="setHTMLText('align', false)">≡ 左对齐</button>
      <button @click="setHTMLText('align', 'center')">≡ 居中</button>
      <button @click="setHTMLText('align', 'right')">≡ 右对齐</button>
    </div>

    <div class="toolbar-group">
      <div class="group-label">垂直对齐</div>
      <button @click="setHTMLText('alignContent', 'start')">↑ 顶部</button>
      <button @click="setHTMLText('alignContent', 'center')">⊙ 居中</button>
      <button @click="setHTMLText('alignContent', 'end')">↓ 底部</button>
    </div>

  </div>
   <!-- 右侧工具栏 - 样式效果 -->
  <div class="toolbar right-toolbar">
    <div class="toolbar-title">样式效果</div>

    <div class="toolbar-group">
      <div class="group-label">列表</div>
      <button @click="setHTMLText('list', 'ordered')">1. 有序列表</button>
      <button @click="setHTMLText('list', 'bullet')">• 无序列表</button>
    </div>

    <div class="toolbar-group">
      <div class="group-label">文字颜色</div>
      <button class="color-dot green" @click="setHTMLText('color', '#3CB72C')">● 绿色 #3CB72C</button>
      <button class="color-dot black" @click="setHTMLText('color', '#000000')">● 黑色 #000000</button>
    </div>

    <div class="toolbar-group">
      <div class="group-label">行高</div>
      <button @click="setHTMLText('lineHeight', 1.5)">行高 1.5×</button>
      <button @click="setHTMLText('lineHeight', 3)">行高 3.0×</button>
    </div>

    <div class="toolbar-group">
      <div class="group-label">字间距</div>
      <button @click="setHTMLText('letterSpacing', 0)">字间距 0</button>
      <button @click="setHTMLText('letterSpacing', 3)">字间距 3px</button>
    </div>

    <div class="toolbar-group">
      <div class="group-label">文字阴影</div>
      <button @click="setHTMLText('textShadow', '3px 3px 3px rgba(0,0,0,0.5)')">黑色阴影</button>
      <button @click="setHTMLText('textShadow', '2px 2px 0px red')">红色阴影</button>
      <button @click="setHTMLText('textShadow', undefined)">移除阴影</button>
    </div>

    <div class="toolbar-group">
      <div class="group-label">轮廓描边</div>
      <button @click="setHTMLText('textStroke', '4px yellow')">黄色描边</button>
    </div>

    <div class="toolbar-group">
      <div class="group-label">字体 & 字号</div>
      <button @click="changeFontFamily">Dancing Script 字体</button>
      <button @click="setHTMLText('fontSize', 100)">大字号 100px</button>
    </div>

    <div class="toolbar-group">
      <div class="group-label">画布缩放</div>
      <button @click="zoomIn">🔍+ 放大</button>
      <button @click="zoomOut">🔍− 缩小</button>
      <button @click="zoomFit">⊡ 适合屏幕</button>
      <button @click="zoomReset">1:1 原始大小</button>
    </div>

    <div class="toolbar-group">
      <div class="group-label">锁定比例</div>
      <button :class="{ 'btn-active': lockRatioEnabled }" @click="toggleLockRatio">
        {{ lockRatioEnabled ? '🔒 已锁定' : '🔓 锁定比例' }}
      </button>
    </div>

    <div class="toolbar-group">
      <div class="group-label">元素缩放</div>
      <button @click="scaleElement(0.5)">缩小 50%</button>
      <button @click="scaleElement(1)">还原 100%</button>
      <button @click="scaleElement(1.5)">放大 150%</button>
      <button @click="scaleElement(2)">放大 200%</button>
    </div>

    <div class="toolbar-group">
      <div class="group-label">旋转</div>
      <button @click="rotateElement(-15)">↺ −15°</button>
      <button @click="rotateElement(15)">↻ +15°</button>
      <button @click="rotateElement(90)">↻ +90°</button>
      <button @click="resetRotation">⊙ 归零</button>
    </div>

    <div class="toolbar-group">
      <div class="group-label">弧形文字</div>
      <button @click="setArcText">∿ 应用弧形</button>
      <button @click="resetArcText">✕ 还原文字</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { formatDate, truncateText, PI } from '@/utils/format';
import editor from './index';

const lockRatioEnabled = ref(false);

onMounted(() => {
    editor.init();
});

const addText = () => {
    editor.addText();
};

const exportJson = () => {
    editor.exportJson();
};

const setHTMLText = (type: string, value?: any) => {
    editor.setHTMLText(type, value);
};

const zoomIn = () => {
    console.log('zoomIn');
};

const zoomOut = () => {
    console.log('zoomOut');
};

const zoomFit = () => {
    console.log('zoomFit');
};

const zoomReset = () => {
    console.log('zoomReset');
};

const toggleLockRatio = () => {
    lockRatioEnabled.value = !lockRatioEnabled.value;
};

const scaleElement = (scale: number) => {
    console.log('scaleElement', scale);
};

const rotateElement = (angle: number) => {
    console.log('rotateElement', angle);
};

const resetRotation = () => {
    console.log('resetRotation');
};

const setArcText = () => {
    editor.setArcText();
};

const resetArcText = () => {
    console.log('resetArcText');
};

const changeFontFamily = () => {
    console.log('changeFontFamily');
};

const typewriter = () => {
    console.log('typewriter');
    editor.typewriter();
};

const flyInFlyOut = () => {
    console.log('flyInFlyOut');
    editor.flyInFlyOut();
};
</script>

<style scoped lang="scss">
// @import '@/styles/variables.scss';

.content {
  margin: 20px 200px;
}

.editor-operations {
  margin-bottom: 10px;
}

#editor {
  width: 50vw;
  height: 100vh;
}


/* ===== 工具栏通用 ===== */
.toolbar {
  position: fixed;
  top: 54px;
  width: 148px;
  max-height: calc(100vh - 64px);
  overflow-y: auto;
  overflow-x: hidden;
  background: rgba(15, 15, 20, 0.88);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  padding: 8px 6px 12px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 4px;
  scrollbar-width: thin;
  scrollbar-color: rgba(91,91,214,0.4) transparent;
}
.toolbar::-webkit-scrollbar {
  width: 3px;
}
.toolbar::-webkit-scrollbar-track {
  background: transparent;
}
.toolbar::-webkit-scrollbar-thumb {
  background: rgba(91,91,214,0.4);
  border-radius: 2px;
}

.left-toolbar {
  left: 10px;
}
.right-toolbar {
  right: 10px;
}

.toolbar-title {
  color: #9999ff;
  font-size: 11px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 4px 0 6px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 4px;
}

/* ===== 工具栏分组 ===== */
.toolbar-group {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.group-label {
  color: #666;
  font-size: 10px;
  letter-spacing: 0.5px;
  padding: 4px 4px 2px;
  border-top: 1px solid rgba(255,255,255,0.05);
  margin-top: 2px;
}
.toolbar-group:first-of-type .group-label {
  border-top: none;
}

/* ===== 按钮样式 ===== */
.toolbar button {
  display: block;
  width: 100%;
  padding: 6px 8px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 6px;
  color: #d0d0d0;
  font-size: 11px;
  cursor: pointer;
  text-align: left;
  transition: all 0.15s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.toolbar button:hover {
  background: rgba(91, 91, 214, 0.25);
  border-color: rgba(91, 91, 214, 0.5);
  color: #fff;
}
.toolbar button:active {
  background: rgba(91, 91, 214, 0.4);
  transform: scale(0.97);
}

</style>
