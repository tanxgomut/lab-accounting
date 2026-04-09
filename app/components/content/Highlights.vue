<script setup lang="ts">
import type { PageFeatureProps } from '@nuxt/ui'

const features = ref<PageFeatureProps[]>([
  {
    title: 'ความถูกต้องและแม่นยำ (Accuracy & Compliance)',
    description: 'เป็นหัวใจสำคัญที่ลูกค้าต้องการมากที่สุดเพื่อป้องกันการโดนเรียกตรวจสอบหรือค่าปรับย้อนหลังจากสรรพากร',
    icon: 'i-lucide-shield-check',
  },
  {
    title: 'ระบบดิจิทัลที่ทันสมัย  (Modern Technology)',
    description: 'การใช้ซอฟต์แวร์บัญชีออนไลน์ (เช่น Cloud Accounting) ที่ช่วยให้ลูกค้าดูงบการเงินได้แบบ Real-time และประหยัดเวลาส่งเอกสาร',
    icon: 'i-lucide-cloud',
  },
  {
    title: 'การเป็นที่ปรึกษาทางธุรกิจ (Business Consultant)',
    description: 'ไม่ได้แค่ "ทำบัญชี" แต่ช่วย "วิเคราะห์ข้อมูล" เพื่อให้เจ้าของธุรกิจเข้าใจสถานะการเงินและวางแผนการเติบโตได้ดีขึ้น',
    icon: 'i-lucide-line-chart',
  }
])
</script>

<template>
    <UContainer class="relative z-10 py-20  overflow-hidden">
        <UPageSection headline="เหตุผลที่ธุรกิจไว้วางใจเรา" :features="features">
            <template #title>
                <div class="flex flex-col md:flex-row items-center justify-center gap-2">
                    <span class="text-4xl">จุดเด่นของ </span>
                    <span class="text-4xl">
                        <span class="text-blue-900 ">LMB</span>
                        <span class="text-blue-900 "> ACCOUNTING</span>
                        <span class="text-warning-500 "> PLUS</span>
                    </span>
                </div>
            </template>
        </UPageSection>
    </UContainer>
</template>