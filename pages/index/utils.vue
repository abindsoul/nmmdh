<template>
    <div class="utils">
        <Card :content-list="contents"></Card>
    </div>
</template>
<script setup lang="ts">
import { giveSlotData } from '@/utils/getSlotData.ts'
const contents = giveSlotData().value;
</script>