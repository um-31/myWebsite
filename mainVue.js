const app = Vue.createApp({
    data(){
        return{
            image: 'assets/images/profilePhoto.png',
            experience1: ["Prepared 5+ compelling UX designs per week for different fields of business.","Work with JavaScript front-end framework like Vue.js and React.js for interactive UI/UX based designs.",
                "Work using PHP frameworks (Laravel, WordPress).",
                "Thoroughly understanding client’s requirements and facilitate design solutions as per expectations.",
                "Implement code for backend web development using PHP, Python and Node, with respective frameworks.",
                "Developed website with content management systems like WordPress to ease team and client’s efforts.",
                "Test every possible module of the web pages using Junit and selenium, for Quality Assurance."],
            experience2: ["Oversee security teams at multiple locations.",
                "Deliver training to security officers for diverse sites, teaching them operations and regulations for multiple locations.",
                "Assisted with Surveillance Security across multiple locations all over the GTA region.",
                "Co-ordinate with property management companies to assure a secure atmosphere for the residents.",
                "Work with property managers and superintendents to maintain synergy with contractors."],
            experience3: ["Provided digital marketing and advertisement support which made company insight of consumers on Facebook by 200%, gradually leading to an upsurge of overall profits.",
                "Successfully set up online sales flow for the company on e-commerce platforms like Flipkart and Amazon, which escalated profits by 20% within the first quarter.",
                "Achieved customer growth up to 10% in 6 months by enhancing the quality of customer service across the store.",
                "Facilitate company with countrywide delivery in less than a quarter by partnering with E-Com delivery, resulting in an increment of 5% in company’s yearly turnover.",
                "Meliorate warehouse management system using software tools that helped the company save more than 50% resources during peak months."],
            icons: ["fa-js","fa-php","fa-python","fa-java","fa-swift","fa-react"],
            icons1: ["js","php","python","java","swift","react","vuejs","angular","node-js","bootstrap","laravel","android"],
            fa: "fa-"
        }
    },
    computed: {
        iconList1: function() {
            var newArr = []
            for(let i = 0; i< this.icons1.length/2; i++){
                newArr[i] = this.icons1[i]
                if(i == (this.icons1.length/2)-1) {
                    break
                }
            }
            return newArr
        },
        iconList2: function() {
            var newArr1 = []
            for(let i = (this.icons1.length/2); i <= this.icons1.length; i++){
                newArr1[i-(this.icons1.length/2)] = this.icons1[i]
                if(i == this.icons1.length) {
                    break
                }
            }
            return newArr1
        }
        
    }
})