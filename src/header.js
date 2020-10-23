Vue.component('header-component', {
  template: `
  <nav class="navbar navbar-light bg-light position-sticky fixed-top">
    <h1 class="mb-0">紀錄時間</h1>
    <div>
      <button
        type="button"
        class="btn button-edit-color"
        :class="buttonClass"
        @click="$emit('edit-drag'); dragEdit = !dragEdit"
      >        
        {{ dragStatus }}
      </button>
      <button
        type="button"
        class="btn button-edit-color"
        data-toggle="modal"
        data-target="#newDataModal"
      >
        新增
      </button>
    </div>
  </nav>
  `,
  data() {
    return {
      dragEdit: false
    }
  },
  computed: {
    dragStatus() {
      return this.dragEdit ? '關閉拖曳編輯' : '編輯順序'
    },
    buttonClass() {
      return {
        'button-edit-color--dark': this.dragEdit,
      }
    }
  }
})
