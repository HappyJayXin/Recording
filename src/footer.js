Vue.component('footer-component', {
  data() {
    return {
      year: new Date().getFullYear()
    };
  },
  template: `
    <footer class="bg-light">
        <div class="text-center container-fluid">
            <h5 class="mb-0">2019 - {{ year }} &copy; Jay</h5>
        </div>
    </footer>
    `,
});
