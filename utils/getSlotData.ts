import { ref } from 'vue'

export function giveSlotData(item: any) {
    const route = useRoute();
    const data: any = useAttrs().data;
    const contents = ref([]);
    data.forEach(o => {
        if (o.path == route.path) {
            contents.value = o.content;
            return
        }

    });
    return contents;
}