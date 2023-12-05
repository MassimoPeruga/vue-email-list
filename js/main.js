'use strict';

const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
            emails: [],
        };
    },
    created() {
        this.generateEmails();
    },
    methods: {
        generateEmail() {
            return axios.get(this.apiUrl)
                .then(response => response.data.response);
        },
        generateEmails() {
            const requests = [];
            for (let i = 0; i < 10; i++) {
                requests.push(this.generateEmail());
            };

            return axios.all(requests)
                .then(responses => {
                    this.emails = responses;
                });
        },
    },
}).mount('#app');