Vue.component('list-button', {
  props: ['index'],
  template: `
  <div class="col col-md-3">
  <div class="row">
    <button
      type="button"
      class="col col-md-5 btn btn-dark mr-1"
      @click="$emit('handle1', index)"
      data-toggle="modal"
      data-target="#newDataModal"
    >
      修改
    </button>
    <button
      type="button"
      class="col col-md-5 btn btn-danger"
      @click="$emit('handle2', index)"
    >
      刪除
    </button>
  </div>
</div>
    `
})
