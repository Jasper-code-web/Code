import {ref, onMounted, onUnmounted} from 'vue';

export function useMouse() {
    let x = ref(0)
    let y = ref(0)

    function update(e) {
        x = e.pageX
        y = e.pageY
    }

    onMounted('mousemove', update)

    onUnmounted('mousemove', update)

    return {x, y}
}