export default {
    namespaced: true,
    state: {
        orders: stub()
    },
    getters: {
        all: state => state.orders,
    },
    mutations: {

    },
    actions: {

    }
}

function stub(){
    return [
        {
            productName: 'Mini Drone FR1',
            productNumber: '85631',
            paymentStatus: 'Due',
            shipping: 'Pending'
        },
        {
            productName: 'Drone mobile phone',
            productNumber: '49347',
            paymentStatus: 'Refunded',
            shipping: 'Declined'
        },
        {
            productName: 'Iphone XS11',
            productNumber: '58478',
            paymentStatus: 'Paid',
            shipping: 'Delivered'
        },
        {
            productName: 'Max Pro11',
            productNumber: '478414',
            paymentStatus: 'Due',
            shipping: 'Pending'
        },
        {
            productName: 'LG 711',
            productNumber: '89778',
            paymentStatus: 'Paid',
            shipping: 'Delivered'
        },
        {
            productName: 'LG MAX Factor',
            productNumber: '4515478',
            paymentStatus: 'Due',
            shipping: 'Pending'
        },
        {
            productName: 'Venus GUY',
            productNumber: '464894',
            paymentStatus: 'Due',
            shipping: 'Declined'
        }
    ];
}