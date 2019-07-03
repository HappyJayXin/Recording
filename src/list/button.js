Vue.component('list-button', {
  props: ['index'],
  template: `
  <div class="col col-md-3">
  <div class="row">
    <button
      type="button"
      class="col col-md-5 btn mr-1 button-edit-color"
      @click="$emit('handle1', index)"
      data-toggle="modal"
      data-target="#newDataModal"
    >
      修改
    </button>
    <button
      type="button"
      class="col col-md-5 btn button-delete-color"
      @click="$emit('handle2', index)"
    >
      刪除
    </button>
  </div>
</div>
    `
})
