Vue.component('header-component', {
  template: `
  <nav class="navbar navbar-light bg-light">
    <h1 class="mb-0">紀錄時間</h1>
    <button
      type="button"
      class="btn btn-dark"
      data-toggle="modal"
      data-target="#newDataModal"
    >
      新增
    </button>
  </nav>
  `
})
