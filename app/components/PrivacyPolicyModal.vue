<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue', 'confirm'])

const isPolicyChecked = ref(false)

const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
})

watch(() => props.modelValue, (val: boolean) => {
  if (val) isPolicyChecked.value = false
})

const handleConfirm = () => {
  if (isPolicyChecked.value) {
    emit('confirm')
    isOpen.value = false
  }
}
</script>

<template>
  <UModal v-model:open="isOpen" :dismissible="false" title="นโยบายความเป็นส่วนตัว"
    description="กรุณาอ่านและยอมรับเงื่อนไขเพื่อดำเนินการต่อ" :ui="{ content: 'md:max-w-3xl' }">

    <template #body>
      <div class="h-64 overflow-y-auto text-sm text-gray-600 dark:text-gray-300 space-y-4 pr-2">
        <div class="space-y-6">
          <section>
            <h4 class="font-bold text-gray-900 dark:text-white mb-2">1. บทนำ</h4>
            <p>
              บริษัท แอลเอ็มบี แอคเคาท์ติ้ง พลัส จำกัด ("บริษัท")
              ตระหนักถึงความสำคัญของการคุ้มครองข้อมูลส่วนบุคคลของท่าน
              ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) นโยบายฉบับนี้อธิบายถึงวิธีการที่บริษัทเก็บรวบรวม
              ใช้ และเปิดเผยข้อมูลส่วนบุคคลของท่าน ในฐานะลูกค้า ผู้ประกอบการ หรือผู้มาติดต่อ
            </p>
          </section>

          <section>
            <h4 class="font-bold text-gray-900 dark:text-white mb-2">2. ข้อมูลที่เราเก็บรวบรวม</h4>
            <p class="mb-2">เราเก็บรวบรวมข้อมูลหลายประเภทเพื่อให้บริหารจัดการงานบัญชีได้อย่างมีประสิทธิภาพ:</p>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>ข้อมูลส่วนตัว:</strong> ชื่อ-นามสกุล, เลขบัตรประชาชน, วันเดือนปีเกิด</li>
              <li><strong>ข้อมูลการติดต่อ:</strong> ที่อยู่, เบอร์โทรศัพท์, อีเมล, LINE ID</li>
              <li><strong>ข้อมูลธุรกิจ:</strong> หนังสือรับรองบริษัท, ที่ตั้งสำนักงาน, เลขผู้เสียภาษี, ทุนจดทะเบียน</li>
              <li><strong>ข้อมูลทางการเงิน:</strong> งบการเงิน, รายการเดินบัญชี (Bank Statement), เอกสารหัก ณ ที่จ่าย,
                ใบกำกับภาษี</li>
              <li><strong>ข้อมูลทางเทคนิค:</strong> รหัสผ่านสำหรับระบบ e-Filing, ประกันสังคม (SSO), กรมพัฒนาธุรกิจการค้า
                (DBD)</li>
            </ul>
          </section>

          <section>
            <h4 class="font-bold text-gray-900 dark:text-white mb-2">3. วัตถุประสงค์การประมวลผลข้อมูล</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>เพื่อจัดทำบัญชีและปิดงบการเงินประจำปีตามมาตรฐานการบัญชี</li>
              <li>เพื่อนำส่งภาษีรายเดือน (ภ.พ.30, ภ.ง.ด.1/3/53) และภาษีเงินได้นิติบุคคล</li>
              <li>เพื่อดำเนินการด้านประกันสังคมและจัดทำเงินเดือนพนักงาน</li>
              <li>เพื่อติดต่อสื่อสาร แจ้งเตือนสถานะการดำเนินงาน และนัดรับ-ส่งเอกสาร</li>
              <li>เพื่อวิเคราะห์และวางแผนทางการเงินเพื่อประโยชน์สูงสุดทางธุรกิจของท่าน</li>
              <li>เพื่อปฏิบัติตามกฎหมายที่เกี่ยวข้องกับวิชาชีพบัญชี</li>
            </ul>
          </section>

          <section>
            <h4 class="font-bold text-gray-900 dark:text-white mb-2">4. การเปิดเผยข้อมูลส่วนบุคคล</h4>
            <p>
              บริษัทจะไม่เปิดเผยข้อมูลของท่านต่อบุคคลภายนอก ยกเว้นในกรณีจำเป็น ดังนี้:
            </p>
            <ul class="list-disc pl-5 space-y-1 mt-1">
              <li><strong>หน่วยงานราชการ:</strong> กรมสรรพากร, กรมพัฒนาธุรกิจการค้า, สำนักงานประกันสังคม</li>
              <li><strong>ผู้สอบบัญชีรับอนุญาต:</strong> เพื่อการตรวจสอบงบการเงินประจำปี</li>
              <li><strong>ธนาคารหรือสถาบันการเงิน:</strong> กรณีที่ท่านร้องขอให้ดำเนินการเพื่อขอสินเชื่อ</li>
            </ul>
          </section>

          <section>
            <h4 class="font-bold text-gray-900 dark:text-white mb-2">5. ระยะเวลาในการจัดเก็บข้อมูล</h4>
            <p>
              บริษัทจะเก็บรักษาข้อมูลของท่านไว้ตลอดระยะเวลาที่ท่านเป็นลูกค้าของเรา และต่อไปอีกเป็นเวลา 10 ปี
              หลังจากสิ้นสุดสัญญา เพื่อวัตถุประสงค์ในการตรวจสอบทางบัญชีและภาษีอากรตามกฎหมาย
              เมื่อพ้นระยะเวลาดังกล่าว เราจะทำลายข้อมูลของท่านด้วยวิธีการที่ปลอดภัย
            </p>
          </section>

          <section>
            <h4 class="font-bold text-gray-900 dark:text-white mb-2">6. มาตรการความปลอดภัย</h4>
            <p>
              เราใช้เทคโนโลยีเข้ารหัสข้อมูล (Encryption) และจำกัดสิทธิ์การเข้าถึงข้อมูล (Access Control)
              เฉพาะพนักงานที่มีหน้าที่เกี่ยวข้องเท่านั้น เพื่อป้องกันไม่ให้ข้อมูลสูญหาย หรือถูกเข้าถึงโดยไม่ได้รับอนุญาต
            </p>
          </section>

          <section>
            <h4 class="font-bold text-gray-900 dark:text-white mb-2">7. สิทธิของเจ้าของข้อมูลส่วนบุคคล</h4>
            <p>ท่านมีสิทธิในการดำเนินการดังต่อไปนี้:</p>
            <ul class="list-disc pl-5 space-y-1 mt-1">
              <li>ขอเข้าถึงหรือขอรับสำเนาข้อมูลส่วนบุคคลของท่าน</li>
              <li>ขอให้แก้ไขข้อมูลให้ถูกต้อง เป็นปัจจุบัน</li>
              <li>ขอให้ลบหรือทำลายข้อมูลเมื่อหมดความจำเป็น</li>
              <li>ขอระงับการใช้หรือคัดค้านการประมวลผลข้อมูล</li>
            </ul>
          </section>

          <section>
            <h4 class="font-bold text-gray-900 dark:text-white mb-2">8. ช่องทางการติดต่อ</h4>
            <p>
              หากท่านมีข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัว สามารถติดต่อได้ที่:<br>
              <strong>บริษัท แอลเอ็มบี แอคเคาท์ติ้ง พลัส จำกัด</strong><br>
              เบอร์โทรศัพท์: 096-353-5572, 084-387-7167, 02-1650-369<br>
              ไลน์: <a href="https://line.me/ti/p/~lee_lmbaudit" target="_blank">lee_lmbaudit</a><br>
              อีเมล: mayulee.mc@gmail.com<br>
              ที่อยู่:215/4 หมู่ที่ 7 ต.พิมลราช อ.บางบัวทอง จ.นนทบุรี 11110
            </p>
          </section>

          <p class="text-xs text-gray-400 mt-6 border-t pt-4 border-gray-200 dark:border-gray-700">
            *การกดยอมรับ ถือว่าท่านได้รับทราบและยินยอมตามข้อกำหนดข้างต้นเพื่อการให้บริการทางวิชาชีพบัญชี
          </p>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
        <UCheckbox v-model="isPolicyChecked" name="policy" label="ฉันยอมรับเงื่อนไขและนโยบายการให้บริการ" />
        <div class="flex gap-2 justify-end w-full sm:w-auto">
          <UButton color="neutral" variant="ghost" label="ยกเลิก" @click="isOpen = false" />

          <UButton color="primary" variant="solid" label="ยืนยันและดำเนินการต่อ" :disabled="!isPolicyChecked"
            @click="handleConfirm" />
        </div>
      </div>
    </template>

  </UModal>
</template>