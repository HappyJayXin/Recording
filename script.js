let data = {
  buttonState: {
    edit: false,
    add: true,
    index: ''
  },
  fromData: {
    episode: [],
    hour: [],
    minute: [],
    error: false
  },
  input: {
    name: '',
    episode: null,
    hour: null,
    minute: null,
    url: ''
  },
  contents: [
    {
      name: '黑騎士',
      episode: 1,
      hour: '0',
      minute: '0',
      url:
        'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_open'
    },
    {
      name: '絕命毒師',
      episode: 1,
      hour: '0',
      minute: '0',
      url: 'https://bootstrap.hexschool.com/docs/4.1/components/buttons/'
    }
  ]
}

let vm = new Vue({
  el: '#app',
  data: data,
  methods: {
    handleAdd() {
      const {name, episode, hour, minute} = this.input
      if (name !== '' && episode !== null && hour !== null && minute !== null) {
        this.fromData.error = false
        this.contents.push(this.input)
        $('#newDataModal').modal('hide')
      } else {
        this.fromData.error = true
      }
      this.claerInput()
    },
    openEditView(i) {
      // 只顯示修改按鈕
      this.buttonState = {
        edit: true,
        add: false,
        index: i
      }
      const {name, episode, hour, minute, url} = this.contents[i]
      this.input = {
        name: name,
        episode: episode,
        hour: hour,
        minute: minute,
        url: url
      }
      this.clearForm()
      $('#newDataModal').on('hide.bs.modal', () => {
        this.buttonState.edit = false
        this.buttonState.add = true
      })
    },
    handleEdit() {
      // 只顯示新增按鈕
      this.buttonState.edit = false
      this.buttonState.add = true
      this.contents[this.buttonState.index] = this.input
      this.claerInput()
      $('#newDataModal').modal('hide')
    },
    handleDelete(i) {
      if (window.confirm('確定刪除嗎?')) this.contents.splice(i, 1)
    },
    handleClear() {
      this.claerInput()
    },
    handleOpenVideo(i) {
      window.open(this.contents[i].url)
    },
    clearForm() {
      // 離開時清空input
      $('#newDataModal').on('hide.bs.modal', () => {
        this.claerInput()
      })
    },
    claerInput() {
      this.input = {
        name: '',
        episode: null,
        hour: null,
        minute: null,
        url: ''
      }
    }
  },
  computed: {
    makeEpisode() {
      for (let i = 1; i <= 60; i++) {
        this.fromData.episode.push(i)
      }
      return this.fromData.episode
    },
    makeHour() {
      for (let i = 0; i <= 3; i++) {
        this.fromData.hour.push(i)
      }
      return this.fromData.hour
    },
    makeMinute() {
      for (let i = 0; i <= 59; i++) {
        this.fromData.minute.push(i)
      }
      return this.fromData.minute
    }
  }
})
