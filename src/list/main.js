Vue.component('list-main', {
  props: ['item'],
  template: `
    <div class="col-md-3">
      <h3 class="text-md-right text-center">
        {{ episodeHandle }}
        <template v-if="item.minute < 10">
          {{ item.hour }}:{{ '0' + item.minute }}
        </template>
        <template v-else>{{ item.hour }}:{{ item.minute }}</template>
      </h3>
    </div>
  `,
  computed: {
    episodeHandle() {
      const EPISODE = this.item.episode
      return EPISODE === 0 ? '' : `第${EPISODE}集 `
    }
  }
})
