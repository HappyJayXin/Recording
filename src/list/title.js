Vue.component('list-title', {
  props: ['item', 'index'],
  template: `
    <h2
    class="col-md-4 text-center"    
    @click="$emit('handle', index)"
    >
        {{ item.name }}
    </h2>
    `
})
