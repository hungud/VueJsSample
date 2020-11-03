export default {
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        link: [
            {
                rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon.png'
            },
            {
                rel: 'stylesheet', href: '/css/bootstrap.min.css'
            },
            {
                rel: 'stylesheet', href: '/css/font-awesome.css'
            }
        ]
    },
    css: [
        '@/assets/sass/main.scss'
    ],
    loading: {
        color: 'blue',
        height: '4px'
    }
}