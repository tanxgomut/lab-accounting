<script setup lang="ts">

</script>

<template>
    <UContainer class="py-16">
        <div class="max-w-6xl mx-auto px-4">
            <div class="text-center mb-10">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">แนะนำบริการ</h2>
            </div>
            <div class="grid md:grid-cols-2 gap-8">

            <UPricingPlan
                title="ทำบัญชีรายเดือน"
                description="บริการบัญชีและภาษีครบวงจร ดูแลเอกสารและนำส่งภาษีอย่างถูกต้อง"
                price="เริ่มต้น 3,000 บาท/เดือน"
                :features="[
                'รับ-ส่ง เอกสารรวดเร็ว ออนไลน์',
                'นำส่งภาษีครบถ้วนตรงเวลา',
                'รายงานรายเดือน',
                ]"
                :button="{
                label: 'ขอใบเสนอราคา'
                }"
                variant="soft"
            />
            <UPricingPlan
                title="จดทะเบียนบริษัท"
                description="จดทะเบียนบริษัทครบวงจร พร้อมให้คำปรึกษาการเริ่มต้นธุรกิจ"
                price="เริ่มต้น 12,900 บาท"
                :features="[
                'ให้คำปรึกษาแผนธุรกิจฟรี',
                'ดำเนินงานครบวงจร',
                'รวมค่าธรรมเนียมจ่ายราชการ',
                ]"
                :button="{
                label: 'ขอใบเสนอราคา'
                }"
                variant="soft"
            />
            </div>

            <div class="mt-10 text-center text-sm text-muted">
                <p>
                    ** อัตราค่าบริการอาจปรับตามความซับซ้อนของธุรกิจ และปริมาณเอกสาร
                </p>
                <p class="mt-2">
                    สามารถนัดพูดคุยปรึกษาเบื้องต้นประมาณ 20 นาที เพื่อประเมินราคาตามจริง
                </p>
            </div>
        </div>
    </UContainer>
</template>