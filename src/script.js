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
    id: 0,
    name: '',
    episode: null,
    hour: null,
    minute: null,
    url: ''
  },
  contents: []
}

let vm = new Vue({
  el: '#app',
  data: data,
  methods: {
    handleAdd() {
      const { name, episode, hour, minute } = this.input
      if (name !== '' && episode !== '' && hour !== null && minute !== null) {
        this.fromData.error = false
        // make id to li element
        this.input.id = Math.floor(Math.random() * 100000)
        this.contents = this.contents || []
        this.contents.push(this.input)

        $('#newDataModal').modal('hide')
        this.claerInput()
        this.saveDataToLocalStorage()
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
      const { id, name, episode, hour, minute, url } = this.contents[i]
      this.input = {
        id: id,
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
      const { name, episode, hour, minute } = this.input
      if (name !== '' && episode !== '' && hour !== null && minute !== null) {
        this.fromData.error = false
        // Show only add buttons
        this.buttonState.edit = false
        this.buttonState.add = true
        this.contents[this.buttonState.index] = this.input

        this.claerInput()
        $('#newDataModal').modal('hide')
        this.saveDataToLocalStorage()
      } else {
        this.fromData.error = true
      }
    },
    handleDelete(i) {
      if (window.confirm('確定刪除嗎?')) this.contents.splice(i, 1)
      this.saveDataToLocalStorage()
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
    // If have set Url show underLine
    haveVideo(i) {
      return {
        underLine: this.contents[i].url
      }
    },
    // Save data to LocalStorage
    saveDataToLocalStorage() {
      localStorage.setItem('RecordData', JSON.stringify(this.contents))
    }
  },
  computed: {
    // put data to select option
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
  },
  mounted() {
    // localStorage.clear()
    // Get localStorage data
    if (localStorage.getItem('RecordData')) {
      this.contents = JSON.parse(localStorage.getItem('RecordData'))
    }
  }
})
