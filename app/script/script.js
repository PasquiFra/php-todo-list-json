const { createApp } = Vue;


const app = createApp({
    data: () => ({
        endpoint: "http://localhost/php-todo-list-json/api/index.php",
        tasks: '',
        newTask: ''
    }),
    methods: {
        callAxios(action) {
            if (action === 'post') {
                const data = { task: this.newTask }
                const config = { headers: { 'Content_Type': 'multipart/form-data' } }
                axios.post(this.endpoint, data, config)
                    .then(res => this.tasks = res.data)
                location.reload();
            } else {
                axios.get(this.endpoint).then(res => this.tasks = res.data)
            }
        }
    },
    created() {
        this.callAxios()
    }

})



app.mount('#app')