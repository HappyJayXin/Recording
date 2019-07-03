Vue.component('list-title', {
  props: ['item', 'index'],
  template: `
    <h2
      class="col-md-6 text-md-left text-center"    
      @click="$emit('handle', index)"
    >
      {{ item.name }}
    </h2>
    `
})
