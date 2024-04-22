<template>
    <div class="tools">
        <Card :content-list="contents"></Card>
    </div>
</template>
<script lang="ts" setup>
import { giveSlotData } from '@/utils/getSlotData.ts'
const contents = giveSlotData().value;
</script>
