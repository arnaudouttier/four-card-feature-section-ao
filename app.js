// siteTitle
Vue.component('site-title', {
    template: `
        <h2>{{sitetitle}}</h2>
    `,
    data() {
        return {
            sitetitle: 'Reliable, efficient delivery Powered by Technology'
        }
    }
})

// siteDescription
Vue.component('site-description', {
    template: `
        <p>{{siteDesciption}}</p>
    `,
    data() {
        return {
            siteDesciption: 'Reliable, efficient delivery Powered by Technology Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful'
        }
    }
})

// card
Vue.component('card', {
    template: `
        <article class="card card-azur">
            <div class="card-header">
                <h4>{{card.title}}</h4>
                <p>{{card.description}}</p>
            </div>
            <div class="card-content">
                <img src="icon" alt="card icon">
            </div>
         </article>
    `,
    data() {
        return {
            test: 25,
            cards: [
                { id: 1, title: 'Supervisor', description: ' Monitors activity to identify project roadblocks', icon: 'images\icon-supervisor.svg', cardClass: 'card-azur' },
                { id: 2, title: 'Team Builder', description: 'Scans our talent network to create the optimal team for your project', icon: 'images\icon-team-builder.svg', cardClass: 'card-red' },
                { id: 3, title: 'Karma', description: ' Regularly evaluates our talent to ensure quality', icon: 'images\icon-karma.svg', cardClass: 'card-yellow' },
                { id: 4, title: 'Calculator', description: ' Uses data from past projects to provide better delivery estimates', icon: 'images\icon-calculator.svg', cardClass: 'card-azur' }
            ]
        }
    }
})


var app = new Vue({
    el: '#app',
})