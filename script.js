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
      url: ''
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
        this.claerInput()
      } else {
        this.fromData.error = true
      }
      $('#newDataModal').on('hide.bs.modal', () => {
        this.fromData.error = false
      })
    },
    openEditView(i) {
      // Show only the edit button
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
      // Show only add buttons
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
    // Open new window
    handleOpenVideo(i) {
      const url = this.contents[i].url
      if (!url) return
      window.open(url)
    },
    clearForm() {
      // when leave clear input data
      $('#newDataModal').on('hide.bs.modal', () => {
        this.fromData.error = false
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
    },
    haveVideo(i) {
      return {
        underLine: this.contents[i].url
      }
    }
  },
  computed: {
    // put data to select option
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
