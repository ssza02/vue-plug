<template>
  <script :id=id  type="text/plain"></script>
</template>

<script>
    import '../../../static/UE/ueditor.config.js'
    import '../../../static/UE/ueditor.all.min.js'
    import '../../../static/UE/lang/zh-cn/zh-cn.js'
    import '../../../static/UE/ueditor.parse.min.js'

    export default {
        name: 'UE',
        data() {
            return {
                editor: null
            }
        },
        props: {
            content: {
                type: String,
                default:''
            },
            config: {
                type: Object,
            },
            id: {
                type: String
            }
        },
        mounted() {
            const _this = this;

            _this.editor = UE.getEditor(_this.id, _this.config); // 初始化UE
            _this.editor.addListener("ready", function () {
                _this.editor.setContent(_this.content); // 确保UE加载完成后，放入内容。
            });
        },
        methods: {
            getContent() { // 获取内容方法
                return this.editor.getContent();
            }
        },
        destroyed() {
            this.editor.destroy();
        },
    }
</script>

  <style scoped>

  </style>
