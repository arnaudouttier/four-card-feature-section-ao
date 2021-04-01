// site-header
Vue.component('site-header', {
    template: `
        <div class="site-header">
            <h2>{{sitetitle}}</h2>
            <h2>{{ siteTitleSpan }}</h2>
            <p>{{siteDesciption}}</p>
        </div>
    `,
    data() {
        return {
            sitetitle: 'Reliable, efficient delivery',
            siteTitleSpan: 'Powered by Technology',
            siteDesciption: 'Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful'
        }
    }
})

// card-component
Vue.component('card-component', {
    template: `
        <div class="site-content">
            <article v-for="card in cards" :key="card.id" :class="card.cardClass"  class="card">
                <div class="card-header">
                    <h4>{{card.title}}</h4>
                    <p>{{card.description}}</p>
                </div>
                <div class="card-content">
                    <img :src="card.icon" alt="card icon">
                </div>
            </article>
    </div>
    `,
    data() {
        return {
            cards: [
                { id: 1, title: 'Supervisor', description: ' Monitors activity to identify project roadblocks', icon: 'images/icon-supervisor.svg', cardClass: 'card-cyan' },
                { id: 2, title: 'Team Builder', description: 'Scans our talent network to create the optimal team for your project', icon: 'images/icon-team-builder.svg', cardClass: 'card-red' },
                { id: 3, title: 'Karma', description: ' Regularly evaluates our talent to ensure quality', icon: 'images/icon-karma.svg', cardClass: 'card-orange' },
                { id: 4, title: 'Calculator', description: ' Uses data from past projects to provide better delivery estimates', icon: 'images/icon-calculator.svg', cardClass: 'card-blue' }
            ]
        }
    }
})

var app = new Vue({
    el: '#app'
})
