export const computedPropsMixin = {
    computed:{
        reverse_computed_text: function () {
            return this.enteredText.split("").reverse().join("");
        },
        count_computed_letters: function () {
            return this.enteredText + ' {'+this.enteredText.length+'}';
        }
    }
};