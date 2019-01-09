Vue.component('list-main', {
  props: ['item'],
  template: `
    <div class="col-md-5"> 
        <div class="row">
            <h3 class="col-md-6 text-center">第{{ item.episode }}集</h3>
            <h3 class="col-md-6 text-center">
                <div v-if="item.minute < 10">
                    {{ item.hour }}:{{ '0' + item.minute }}
                </div>
                <div v-else>{{ item.hour }}:{{ item.minute }}</div>
            </h3> 
        </div>
    </div>
    `
})
