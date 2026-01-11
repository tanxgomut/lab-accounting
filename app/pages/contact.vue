<script setup lang="ts">

useSeoMeta({
    title: 'ติดต่อเรา - LMB Accounting Plus',
    description: 'ติดต่อสำนักงานบัญชี LMB Accounting Plus รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี ปรึกษาฟรี',
    ogTitle: 'ติดต่อเรา - LMB Accounting Plus',
    ogDescription: 'ติดต่อสำนักงานบัญชี LMB Accounting Plus รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี ปรึกษาฟรี',
})

// ข้อมูลติดต่อ
const contactInfo = [
    {
        icon: 'i-heroicons-phone',
        label: 'โทรศัพท์',
        value: '096-353-5572, 084-387-7167, 02-1650-369',
        href: 'tel:0963535572',
        color: 'primary'
    },
    {
        icon: 'i-simple-icons-line',
        label: 'LINE',
        value: 'lee_lmbaudit',
        href: 'https://line.me/ti/p/~lee_lmbaudit',
        color: 'success'
    },
    {
        icon: 'i-heroicons-envelope',
        label: 'อีเมล',
        value: 'mayulee.mc@gmail.com',
        href: 'mailto:mayulee.mc@gmail.com',
        color: 'secondary'
    },
    {
        icon: 'i-simple-icons-facebook',
        label: 'Facebook',
        value: 'รับทำบัญชีครบวงจร จดทะเบียน วางแผนภาษี ให้คำปรึกษาฟรี',
        href: 'https://facebook.com/LMB.ACC',
        color: 'primary'
    },
]

// เวลาทำการ
const workingHours = [
    { day: 'จันทร์ - ศุกร์', time: '09:00 - 18:00' },
    { day: 'เสาร์ - อาทิตย์', time: 'ปิดทำการ' },
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
    'จดบริษัทออนไลน์',
    'จดบริษัทแบบมือ',
    'รับทำบัญชี',
    'จดเลิกกิจการ',
    'จดภาษีมูลค่าเพิ่ม',
    'จดขึ้นทะเบียนนายจ้าง',
    'แก้ไขข้อมูลนิติบุคคล',
    'แปรสภาพห้างหุ้นส่วน',
    'ย้ายที่อยู่นิติบุคคล',
    'ปิดงบการเงินย้อนหลัง',
    'ปิดงบประจำปี',
    'ทำสลิปเงินเดือน',
    'อื่นๆ',
]

const mapUrl = "https://www.google.com/maps/place/%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%88%E0%B8%AD%E0%B8%A2/@13.944457,100.3506321,15.71z/data=!4m6!3m5!1s0x30e28ffcff534985:0xfcbdc7ead692071f!8m2!3d13.9369724!4d100.3572137!16s%2Fg%2F11hdpsxcr5"

const isSubmitting = ref(false)
const errors = ref<{ name?: string; phone?: string; service?: string }>({})

const validateForm = () => {
    errors.value = {}

    if (!form.name.trim()) {
        errors.value.name = 'กรุณากรอกชื่อ'
    }

    if (!form.phone.trim()) {
        errors.value.phone = 'กรุณากรอกเบอร์โทรศัพท์'
    } else if (!/^[0-9-]{9,15}$/.test(form.phone.replace(/\s/g, ''))) {
        errors.value.phone = 'เบอร์โทรศัพท์ไม่ถูกต้อง'
    }

    if (!form.service) {
        errors.value.service = 'กรุณาเลือกบริการที่สนใจ'
    }

    return Object.keys(errors.value).length === 0
}

const submitForm = async () => {
    if (!validateForm()) return

    isSubmitting.value = true

    const emailBody = `
ชื่อ: ${form.name}
โทรศัพท์: ${form.phone}
อีเมล: ${form.email}
บริษัท: ${form.company || '-'}
บริการที่สนใจ: ${form.service}

ข้อความ:
${form.message}
    `.trim()

    const subject = `[LMB Accounting Plus] ติดต่อจาก ${form.name} - ${form.service}`
    const mailtoUrl = `mailto:mayulee.mc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`

    window.open(mailtoUrl, '_blank')

    await new Promise(resolve => setTimeout(resolve, 500))
    isSubmitting.value = false

    Object.assign(form, { name: '', phone: '', email: '', company: '', service: '', message: '' })
    errors.value = {}
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
                    เรื่องบัญชีและภาษี <span class="text-secondary">ฟรี!</span>
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
                            <UFormField label="ชื่อ-นามสกุล" required :error="errors.name">
                                <UInput v-model="form.name" placeholder="ชื่อของคุณ" icon="i-heroicons-user" size="lg"
                                    :color="errors.name ? 'error' : undefined" />
                            </UFormField>

                            <UFormField label="เบอร์โทรศัพท์" required :error="errors.phone">
                                <UInput v-model="form.phone" placeholder="08X-XXX-XXXX" icon="i-heroicons-phone"
                                    size="lg" :color="errors.phone ? 'error' : undefined" />
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

                        <UFormField label="บริการที่สนใจ" required :error="errors.service">
                            <USelect v-model="form.service" :items="services" placeholder="เลือกบริการ" size="lg"
                                class="w-full" :color="errors.service ? 'error' : undefined" />
                        </UFormField>

                        <UFormField label="ข้อความ">
                            <UTextarea v-model="form.message" placeholder="รายละเอียดเพิ่มเติมที่ต้องการสอบถาม..."
                                :rows="4" size="lg" class="w-full" />
                        </UFormField>

                        <div class="  ">
                            <UButton type="submit" icon="i-heroicons-paper-airplane" color="primary" size="md"
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
                    <UButton to="https://line.me/ti/p/~lee_lmbaudit" target="_blank" color="success" block>
                        <UIcon name="i-simple-icons-line" class="w-5 h-5 mr-2" />
                        lee_lmbaudit
                    </UButton>
                </div>
            </div>
        </div>

        <!-- Map Section -->
        <section class="mt-24">
            <div class="text-center mb-10">
                <h2 class="text-2xl md:text-3xl font-bold text-highlighted mb-2">
                    <UIcon name="i-heroicons-map-pin" class="w-7 h-7 text-primary inline mr-2" />
                    ที่ตั้งสำนักงานบัญชี
                </h2>
                <p class="text-muted text-md">215/4 หมู่ที่ 7 ต.พิมลราช อ.บางบัวทอง จ.นนทบุรี 11110</p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
                <div class="relative rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[400px] group">
                    <NuxtImg src="/images/content/08.jpg" alt="ที่ตั้งสำนักงานบัญชี LMB Accounting Plus"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-xl font-bold mb-2">LMB Accounting Plus</h3>
                        <p class="text-white/90 text-sm">สำนักงานบัญชีครบวงจร พร้อมให้บริการ</p>
                    </div>
                </div>

                <!-- Google Maps -->
                <div class="relative rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[400px]">
                    <iframe src="https://maps.google.com/maps?q=13.9369724,100.3572137&z=16&output=embed"
                        class="w-full h-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        allowfullscreen>
                    </iframe>

                    <!-- Overlay Button -->
                    <div class="absolute bottom-4 right-4">
                        <UButton :to="mapUrl" target="_blank" color="primary" class="shadow-lg">
                            <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 mr-2" />
                            เปิดใน Google Maps
                        </UButton>
                    </div>
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