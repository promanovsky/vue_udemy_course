export const fruitMixin = {
    data(){
        return {
            fruits: ['Banana', 'Apple', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits(){
            return this.fruits.filter((el)=>{
                return el.match(this.filterText);
            });
        }
    },
    created(){
        console.log('>>> CREATED');
    }
};
