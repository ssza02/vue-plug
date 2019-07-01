<template>
    <div class="" id="div3">

    </div>
</template>

<script>
//  import { quillEditor } from 'vue-quill-editor'
import wangEditor from 'wangeditor'
    export default {
        props: {},
        data() {
            return {

            }
        },
        methods: {

        },
        components: {

      },
      mounted(){
        var E = wangEditor
        var editor2 = new E('#div3')
        editor2.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
        editor2.customConfig.menus = [
          'undo',
          'redo',
          'bold',
          'italic',
          'underline',
          'fontSize',
          'fontName',
          'foreColor',
          'justify',
          'image',
          'emoticon'
        ]
        editor2.create();
        editor2.txt.html('<p style="text-align: left">问题描述（可选）</p>')
      }
    }
</script>

<style scoped>

</style>
