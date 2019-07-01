<template>
    <div class="star-wrapper">
      <span>星级评价</span>
      <star :size="36" :score="3.4"></star>
    </div>
</template>

<script>
  import star from '../../components/template/star';

    export default {
        props: {

        },
        data() {
            return {

            }
        },
        methods: {

        },
        components: {
          star
        }
    }
</script>

<style scoped>

</style>
