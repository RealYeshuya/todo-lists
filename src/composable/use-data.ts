import ITodo from "@/types/todos"
import { computed, ref } from "vue"

const arr = ref<ITodo[]>([]);
const todos = computed({
    get: () => arr.value,
    set: (value) => (value.length == 0 ? arr.value = [] : arr.value = value )
})

function useData(){
    return { todos }
}

export default useData;