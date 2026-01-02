<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl

useSeoMeta({
    title: 'ติดต่อเรา - LMB Accounting Plus',
    description: 'ติดต่อสำนักงานบัญชี LMB Accounting Plus รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี ปรึกษาฟรี',
    ogTitle: 'ติดต่อเรา - LMB Accounting Plus',
    ogDescription: 'ติดต่อสำนักงานบัญชี LMB Accounting Plus รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี ปรึกษาฟรี',
    ogImage: `${siteUrl}/og-image.png`,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogType: 'website',
    ogUrl: `${siteUrl}/contact`,
    twitterCard: 'summary_large_image',
})

// ข้อมูลติดต่อ
const contactInfo = [
    {
        icon: 'i-heroicons-phone',
        label: 'โทรศัพท์',
        value: '081-234-5678',
        href: 'tel:0812345678',
        color: 'primary'
    },
    {
        icon: 'i-simple-icons-line',
        label: 'LINE',
        value: '@LAB-accounting',
        href: 'https://line.me/ti/p/@LAB-accounting',
        color: 'success'
    },
    {
        icon: 'i-heroicons-envelope',
        label: 'อีเมล',
        value: 'contact@lmbaccount-law.com',
        href: 'mailto:contact@lmbaccount-law.com',
        color: 'secondary'
    },
    {
        icon: 'i-simple-icons-facebook',
        label: 'Facebook',
        value: 'LMB Accounting Plus',
        href: 'https://facebook.com/lmbaccounting',
        color: 'primary'
    },
]

// เวลาทำการ
const workingHours = [
    { day: 'จันทร์ - ศุกร์', time: '09:00 - 18:00' },
    { day: 'เสาร์', time: '09:00 - 15:00' },
    { day: 'อาทิตย์', time: 'ปิดทำการ' },
]

// Form state
const form = reactive({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: '',
    message: ''
})

const services = [
    'จดทะเบียนบริษัท',
    'รับทำบัญชี',
    'ยื่นภาษี',
    'ปิดงบการเงิน',
    'ตรวจสอบบัญชี',
    'ที่ปรึกษาภาษี',
    'อื่นๆ'
]

const mapUrl = "https://maps.app.goo.gl/2RcBYJmKvaP4ukVo6"

const isSubmitting = ref(false)

const submitForm = async () => {
    isSubmitting.value = true
    // TODO: Implement form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    isSubmitting.value = false
    // Reset form
    Object.assign(form, { name: '', phone: '', email: '', company: '', service: '', message: '' })
}
</script>

<template>
    <UContainer>
        <UPageHeader>
            <template #headline>
                <div class="flex items-center gap-2 text-secondary font-bold uppercase tracking-wider mb-2">
                    <UIcon name="i-heroicons-device-phone-mobile" class="w-5 h-5" />
                    <span>ติดต่อเรา</span>
                </div>
            </template>

            <template #title>
                <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight">
                    พร้อมให้ <span class="text-primary">คำปรึกษา</span> <br />
                    เรื่องบัญชีและภาษี <span class="text-warning">ฟรี!</span>
                </h1>
            </template>

            <template #description>
                <p class="mt-4 text-lg text-gray-600 max-w-2xl">
                    ไม่ว่าจะเป็นการจดทะเบียนบริษัท ทำบัญชี หรือวางแผนภาษี เราพร้อมดูแลธุรกิจของคุณ
                </p>
            </template>
        </UPageHeader>

        <!-- Main Content -->
        <div class="grid lg:grid-cols-3 gap-12 mt-12">
            <!-- Contact Form -->
            <div class="lg:col-span-2">
                <UCard class="p-2" variant="soft">
                    <template #header>
                        <div class="flex items-center gap-3">
                            <div
                                class="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                                <UIcon name="i-heroicons-chat-bubble-left-right" class="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h2 class="text-xl font-bold text-highlighted">ส่งข้อความถึงเรา</h2>
                                <p class="text-sm text-muted">กรอกข้อมูลเพื่อให้เราติดต่อกลับ</p>
                            </div>
                        </div>
                    </template>

                    <form @submit.prevent="submitForm" class="space-y-6">
                        <div class="grid sm:grid-cols-2 gap-6">
                            <UFormField label="ชื่อ-นามสกุล" required>
                                <UInput v-model="form.name" placeholder="ชื่อของคุณ" icon="i-heroicons-user"
                                    size="lg" />
                            </UFormField>

                            <UFormField label="เบอร์โทรศัพท์" required>
                                <UInput v-model="form.phone" placeholder="08X-XXX-XXXX" icon="i-heroicons-phone"
                                    size="lg" />
                            </UFormField>
                        </div>

                        <div class="grid sm:grid-cols-2 gap-6">
                            <UFormField label="อีเมล">
                                <UInput v-model="form.email" type="email" placeholder="email@example.com"
                                    icon="i-heroicons-envelope" size="lg" />
                            </UFormField>

                            <UFormField label="ชื่อบริษัท/กิจการ">
                                <UInput v-model="form.company" placeholder="ชื่อบริษัทของคุณ"
                                    icon="i-heroicons-building-office" size="lg" />
                            </UFormField>
                        </div>

                        <UFormField label="บริการที่สนใจ">
                            <USelect v-model="form.service" :items="services" placeholder="เลือกบริการ" size="lg"
                                class="w-full" />
                        </UFormField>

                        <UFormField label="ข้อความ">
                            <UTextarea v-model="form.message" placeholder="รายละเอียดเพิ่มเติมที่ต้องการสอบถาม..."
                                :rows="4" size="lg" class="w-full" />
                        </UFormField>

                        <div class="  ">
                            <UButton type="submit" icon="i-heroicons-paper-airplane" color="warning" size="md"
                                :loading="isSubmitting" class="px-8">

                                ส่งข้อความ
                            </UButton>
                            <p class="text-sm text-muted mt-2">หรือติดต่อผ่านช่องทางด้านข้าง</p>
                        </div>

                    </form>
                </UCard>
            </div>

            <!-- Contact Info Sidebar -->
            <div class="space-y-6">
                <!-- Quick Contact -->
                <UCard>
                    <template #header>
                        <h3 class="text-lg font-bold text-highlighted">ช่องทางติดต่อ</h3>
                    </template>
                    <div class="space-y-4">
                        <a v-for="contact in contactInfo" :key="contact.label" :href="contact.href" target="_blank"
                            class="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <div
                                :class="`w-12 h-12 bg-${contact.color}-100 dark:bg-${contact.color}-900/30 rounded-xl flex items-center justify-center`">
                                <UIcon :name="contact.icon" :class="`w-6 h-6 text-${contact.color}`" />
                            </div>
                            <div>
                                <p class="text-sm text-muted">{{ contact.label }}</p>
                                <p class="font-semibold text-highlighted">{{ contact.value }}</p>
                            </div>
                        </a>
                    </div>
                </UCard>

                <!-- Working Hours -->
                <UCard>
                    <template #header>
                        <div class="flex items-center gap-2">
                            <UIcon name="i-heroicons-clock" class="w-5 h-5 text-success" />
                            <h3 class="text-lg font-bold text-highlighted">เวลาทำการ</h3>
                        </div>
                    </template>
                    <div class="space-y-3">
                        <div v-for="hours in workingHours" :key="hours.day" class="flex justify-between items-center">
                            <span class="text-muted">{{ hours.day }}</span>
                            <span :class="hours.time === 'ปิดทำการ' ? 'text-error' : 'font-semibold text-highlighted'">
                                {{ hours.time }}
                            </span>
                        </div>
                    </div>
                </UCard>

                <!-- LINE CTA -->
                <div class="p-6 bg-success-50 dark:bg-success-900/20 rounded-2xl text-center">
                    <UIcon name="i-simple-icons-line" class="w-12 h-12 text-success mx-auto mb-3" />
                    <h4 class="font-bold text-highlighted mb-2">แอดไลน์ ตอบไว!</h4>
                    <p class="text-sm text-muted mb-4">สอบถามผ่าน LINE ได้ตลอด 24 ชม.</p>
                    <UButton to="https://line.me/ti/p/@LAB-accounting" target="_blank" color="success" block>
                        <UIcon name="i-simple-icons-line" class="w-5 h-5 mr-2" />
                        @LAB-accounting
                    </UButton>
                </div>
            </div>
        </div>

        <!-- Map Section -->
        <section class="mt-16">
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-highlighted mb-2">
                    <UIcon name="i-heroicons-map-pin" class="w-6 h-6 text-primary inline mr-2" />
                    ที่ตั้งสำนักงาน
                </h2>
                <p class="text-muted">เลขที่ 123 ถ.รัชดาภิเษก แขวงดินแดง เขตดินแดง กรุงเทพฯ 10400</p>
            </div>
            <div class="relative rounded-2xl overflow-hidden shadow-lg h-[400px]">
                <!-- Google Maps Embed -->
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.347!2d100.576!3d13.764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ1JzUwLjQiTiAxMDDCsDM0JzMzLjYiRQ!5e0!3m2!1sth!2sth!4v1703840000000!5m2!1sth!2sth"
                    class="w-full h-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>

                <!-- Overlay Button -->
                <div class="absolute bottom-4 right-4">
                    <UButton :to="mapUrl" target="_blank" color="primary" class="shadow-lg">
                        <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 mr-2" />
                        เปิดใน Google Maps
                    </UButton>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="mt-16">
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-highlighted mb-2">
                    คำถามที่พบบ่อย
                </h2>
                <p class="text-muted">หากมีคำถามเพิ่มเติม สามารถติดต่อเราได้เลย</p>
            </div>
            <UAccordion :items="[
                { label: 'ค่าบริการทำบัญชีเริ่มต้นเท่าไหร่?', content: 'ค่าบริการขึ้นอยู่กับประเภทและขนาดธุรกิจ เริ่มต้นที่ 2,000 บาท/เดือน สามารถติดต่อขอใบเสนอราคาได้ฟรี' },
                { label: 'รับจดทะเบียนบริษัทใช้เวลากี่วัน?', content: 'ปกติใช้เวลา 3-5 วันทำการ หากเอกสารครบถ้วน เราสามารถดำเนินการให้ได้รวดเร็ว' },
                { label: 'สามารถปรึกษาก่อนใช้บริการได้ไหม?', content: 'ได้ครับ! เราให้คำปรึกษาเบื้องต้นฟรี ไม่มีค่าใช้จ่าย ติดต่อผ่าน LINE หรือโทรศัพท์ได้เลย' },
                { label: 'รับลูกค้าต่างจังหวัดไหม?', content: 'รับครับ! เราให้บริการลูกค้าทั่วประเทศผ่านระบบออนไลน์ ไม่จำเป็นต้องมาที่สำนักงาน' },
            ]" class="max-w-3xl mx-auto" />
        </section>
    </UContainer>
</template>