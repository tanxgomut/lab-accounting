<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import { TextStyle } from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import Youtube from '@tiptap/extension-youtube'

const props = defineProps<{
    modelValue?: string
}>()

const emit = defineEmits(['update:modelValue'])
const router = useRouter()

const editor = useEditor({
    content: props.modelValue || '',
    extensions: [
        StarterKit.configure({
            heading: {
                levels: [1, 2, 3]
            },
            bulletList: false,
            orderedList: false,
            listItem: false
        }),
        BulletList,
        OrderedList,
        ListItem,
        Underline,
        TextAlign.configure({
            types: ['heading', 'paragraph']
        }),
        Highlight.configure({
            multicolor: true
        }),
        Link.configure({
            openOnClick: false,
            HTMLAttributes: {
                class: 'text-primary-500 underline hover:text-primary-600'
            }
        }),
        Image.configure({
            HTMLAttributes: {
                class: 'rounded-lg max-w-full cursor-pointer'
            },
            inline: false,
            allowBase64: true
        }).extend({
            addAttributes() {
                return {
                    ...this.parent?.(),
                    align: {
                        default: 'center',
                        parseHTML: element => element.getAttribute('data-align') || 'center',
                        renderHTML: attributes => ({
                            'data-align': attributes.align
                        })
                    },
                    width: {
                        default: '100%',
                        parseHTML: element => element.getAttribute('data-width') || element.style.width || '100%',
                        renderHTML: attributes => ({
                            'data-width': attributes.width,
                            style: `width: ${attributes.width}; ${attributes.align === 'left'
                                ? 'margin-right: auto; margin-left: 0;'
                                : attributes.align === 'right'
                                    ? 'margin-left: auto; margin-right: 0;'
                                    : 'margin-left: auto; margin-right: auto;'
                                }`
                        })
                    }
                }
            }
        }),
        Placeholder.configure({
            placeholder: 'เริ่มเขียนเนื้อหาที่นี่...'
        }),
        TextStyle,
        Color,
        Youtube.configure({
            inline: false,
            width: 640,
            height: 360,
            HTMLAttributes: {
                class: 'youtube-embed rounded-xl overflow-hidden mx-auto'
            }
        })
    ],
    editorProps: {
        handleKeyDown: (view, event) => {
            // Alt + ArrowUp = Move block up
            if (event.altKey && event.key === 'ArrowUp') {
                event.preventDefault()
                moveBlockUp()
                return true
            }
            // Alt + ArrowDown = Move block down
            if (event.altKey && event.key === 'ArrowDown') {
                event.preventDefault()
                moveBlockDown()
                return true
            }
            // Ctrl + Shift + D = Duplicate block
            if (event.ctrlKey && event.shiftKey && event.key === 'D') {
                event.preventDefault()
                duplicateBlock()
                return true
            }
            // Ctrl + Shift + Delete = Delete block
            if (event.ctrlKey && event.shiftKey && event.key === 'Backspace') {
                event.preventDefault()
                deleteBlock()
                return true
            }
            return false
        }
    },
    onUpdate: ({ editor }) => {
        emit('update:modelValue', editor.getHTML())
    }
})

// Link Popover
const showLinkPopover = ref(false)
const linkUrl = ref('')

const openLinkPopover = () => {
    const previousUrl = editor.value?.getAttributes('link').href || ''
    linkUrl.value = previousUrl
    showLinkPopover.value = true
}

const submitLink = () => {
    if (!editor.value) return

    if (linkUrl.value === '') {
        editor.value.chain().focus().extendMarkRange('link').unsetLink().run()
    } else {
        editor.value.chain().focus().extendMarkRange('link').setLink({ href: linkUrl.value }).run()
    }

    showLinkPopover.value = false
    linkUrl.value = ''
}

const removeLink = () => {
    if (!editor.value) return
    editor.value.chain().focus().extendMarkRange('link').unsetLink().run()
    showLinkPopover.value = false
    linkUrl.value = ''
}

// YouTube Popover
const showYoutubePopover = ref(false)
const youtubeUrl = ref('')

const submitYoutube = () => {
    if (!editor.value || !youtubeUrl.value) return

    editor.value.commands.setYoutubeVideo({
        src: youtubeUrl.value,
        width: 640,
        height: 360
    })

    showYoutubePopover.value = false
    youtubeUrl.value = ''
}

// Image Upload
const imageInputRef = ref<HTMLInputElement | null>(null)
const showImageMenu = ref(false)
const showUploadBlock = ref(false)
const isDragging = ref(false)
const showUrlInput = ref(false)
const imageUrl = ref('')

const toggleUrlInput = () => {
    showUrlInput.value = !showUrlInput.value
    imageUrl.value = ''
}

const submitImageUrl = () => {
    if (imageUrl.value && editor.value) {
        // Insert at saved position or current position
        if (savedCursorPos.value !== null) {
            editor.value.chain()
                .focus()
                .setTextSelection(savedCursorPos.value)
                .setImage({ src: imageUrl.value })
                .run()
            savedCursorPos.value = null
        } else {
            editor.value.chain().focus().setImage({ src: imageUrl.value }).run()
        }
        imageUrl.value = ''
        showUrlInput.value = false
        showUploadBlock.value = false
    }
}

// Store cursor position for image insertion
const savedCursorPos = ref<number | null>(null)

const insertImagePlaceholder = () => {
    // Save current cursor position
    if (editor.value) {
        savedCursorPos.value = editor.value.state.selection.anchor
    }
    showUploadBlock.value = true
    showImageMenu.value = false
}

const triggerImageUpload = () => {
    imageInputRef.value?.click()
}

const handleImageUpload = (event: Event) => {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0]
    processImageFile(file)
    target.value = ''
}

const handleDrop = (event: DragEvent) => {
    event.preventDefault()
    isDragging.value = false
    const file = event.dataTransfer?.files?.[0]
    if (file && file.type.startsWith('image/')) {
        processImageFile(file)
    }
}

const handleDragOver = (event: DragEvent) => {
    event.preventDefault()
    isDragging.value = true
}

const handleDragLeave = () => {
    isDragging.value = false
}

// Preview
const previewContent = () => {
    if (!editor.value) return
    const content = editor.value.getHTML()
    localStorage.setItem('tiptap-preview-content', content)
    window.open('/manage/preview', '_blank')
}

const processImageFile = (file: File | undefined) => {
    if (!file) return

    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
        alert('ไฟล์ใหญ่เกินไป (สูงสุด 2MB)')
        return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
        const base64 = e.target?.result as string

        // Insert at saved position or current position
        if (savedCursorPos.value !== null && editor.value) {
            editor.value.chain()
                .focus()
                .setTextSelection(savedCursorPos.value)
                .setImage({ src: base64 })
                .run()
            savedCursorPos.value = null
        } else {
            editor.value?.chain().focus().setImage({ src: base64 }).run()
        }

        showUploadBlock.value = false
    }
    reader.readAsDataURL(file)
}

const cancelUpload = () => {
    showUploadBlock.value = false
    showUrlInput.value = false
    imageUrl.value = ''
}

// Image Alignment
const setImageAlign = (align: 'left' | 'center' | 'right') => {
    if (!editor.value) return

    const { state } = editor.value
    const { selection } = state
    const node = state.doc.nodeAt(selection.from)

    if (node?.type.name === 'image') {
        editor.value.chain()
            .focus()
            .updateAttributes('image', { align })
            .run()
    }
}

const getImageAlign = (): string => {
    if (!editor.value) return 'center'
    const { state } = editor.value
    const node = state.doc.nodeAt(state.selection.from)
    return node?.attrs?.align || 'center'
}

// Image Resize
const imageSizes = ['25%', '50%', '75%', '100%']
const currentImageWidth = ref('100%')

const setImageWidth = (width: string) => {
    if (!editor.value) return

    const { state } = editor.value
    const node = state.doc.nodeAt(state.selection.from)

    if (node?.type.name === 'image') {
        editor.value.chain()
            .focus()
            .updateAttributes('image', { width })
            .run()
        currentImageWidth.value = width
    }
}

const getImageWidth = (): string => {
    if (!editor.value) return '100%'
    const { state } = editor.value
    const node = state.doc.nodeAt(state.selection.from)
    return node?.attrs?.width || '100%'
}

// Emoji Picker
const showEmojiPicker = ref(false)
const emojis = [
    '😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊',
    '😋', '😎', '😍', '🥰', '😘', '😗', '😙', '😚', '🙂', '🤗',
    '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮',
    '👍', '👎', '👏', '🙌', '🤝', '💪', '✌️', '🤞', '🤟', '🤘',
    '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '💔', '❣️', '💕',
    '🎉', '🎊', '🎁', '🏆', '⭐', '🌟', '✨', '💡', '🔥', '💯',
    '✅', '❌', '⚠️', '📌', '📍', '🚀', '💻', '📱', '📧', '📝'
]

const insertEmoji = (emoji: string) => {
    editor.value?.chain().focus().insertContent(emoji).run()
    showEmojiPicker.value = false
}

// Block manipulation functions
const moveBlockUp = () => {
    const { state, view } = editor.value!
    const { selection } = state
    const { $from } = selection

    // Find the current block
    const blockStart = $from.start($from.depth)
    if (blockStart <= 1) return // Already at top

    // Get the position before current block
    const before = state.doc.resolve(blockStart - 1)
    const prevBlockStart = before.start(before.depth)

    // Cut current block and insert before previous
    const currentNode = $from.node($from.depth)
    const tr = state.tr
    tr.delete(blockStart - 1, blockStart - 1 + currentNode.nodeSize)
    tr.insert(prevBlockStart - 1, currentNode)
    view.dispatch(tr)
}

const moveBlockDown = () => {
    const { state, view } = editor.value!
    const { selection } = state
    const { $from } = selection

    // Find the current block
    const blockStart = $from.start($from.depth)
    const currentNode = $from.node($from.depth)
    const blockEnd = blockStart + currentNode.nodeSize

    if (blockEnd >= state.doc.content.size - 1) return // Already at bottom

    // Get the next block
    const after = state.doc.resolve(blockEnd + 1)
    const nextNode = after.node(after.depth)
    const nextBlockEnd = blockEnd + nextNode.nodeSize

    // Swap blocks
    const tr = state.tr
    tr.delete(blockStart - 1, nextBlockEnd - 1)
    tr.insert(blockStart - 1, nextNode)
    tr.insert(blockStart - 1 + nextNode.nodeSize, currentNode)
    view.dispatch(tr)
}

const duplicateBlock = () => {
    const { state, view } = editor.value!
    const { selection } = state
    const { $from } = selection

    const currentNode = $from.node($from.depth)
    const blockEnd = $from.end($from.depth)

    const tr = state.tr.insert(blockEnd + 1, currentNode)
    view.dispatch(tr)
}

const deleteBlock = () => {
    const { state, view } = editor.value!
    const { selection } = state
    const { $from } = selection

    const blockStart = $from.start($from.depth)
    const currentNode = $from.node($from.depth)
    const blockEnd = blockStart + currentNode.nodeSize

    const tr = state.tr.delete(blockStart - 1, blockEnd - 1)
    view.dispatch(tr)
}

onBeforeUnmount(() => {
    editor.value?.destroy()
})
</script>

<template>
    <div v-if="editor" class="mt-12 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-900">
        <!-- Toolbar (Sticky) -->
        <div
            class="sticky top-(--ui-header-height) z-10 flex flex-wrap items-center gap-1 p-2 sm:p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-t-2xl">
            <!-- Text Style Group -->
            <div class="flex items-center gap-0.5 pr-2 border-r border-gray-200 dark:border-gray-700">
                <button @click="editor.chain().focus().toggleBold().run()"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': editor.isActive('bold') }"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Bold">
                    <UIcon name="i-heroicons-bold" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button @click="editor.chain().focus().toggleItalic().run()"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': editor.isActive('italic') }"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Italic">
                    <UIcon name="i-heroicons-italic" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button @click="editor.chain().focus().toggleUnderline().run()"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': editor.isActive('underline') }"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Underline">
                    <UIcon name="i-heroicons-underline" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button @click="editor.chain().focus().toggleStrike().run()"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': editor.isActive('strike') }"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Strikethrough">
                    <UIcon name="i-heroicons-strikethrough" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button @click="editor.chain().focus().toggleHighlight().run()"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': editor.isActive('highlight') }"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Highlight">
                    <UIcon name="i-heroicons-paint-brush" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button @click="editor.chain().focus().toggleCode().run()"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': editor.isActive('code') }"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Inline Code">
                    <UIcon name="i-heroicons-code-bracket" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>

            <!-- Heading Group -->
            <div class="flex items-center gap-0.5 px-2 border-r border-gray-200 dark:border-gray-700">
                <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': editor.isActive('heading', { level: 1 }) }"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-xs sm:text-sm font-bold"
                    title="Heading 1">
                    H1
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': editor.isActive('heading', { level: 2 }) }"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-xs sm:text-sm font-bold"
                    title="Heading 2">
                    H2
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': editor.isActive('heading', { level: 3 }) }"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-xs sm:text-sm font-bold"
                    title="Heading 3">
                    H3
                </button>
            </div>

            <!-- List Group -->
            <div class="flex items-center gap-0.5 px-2 border-r border-gray-200 dark:border-gray-700">
                <button @click="editor.chain().focus().toggleBulletList().run()"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': editor.isActive('bulletList') }"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Bullet List">
                    <UIcon name="i-heroicons-list-bullet" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button @click="editor.chain().focus().toggleOrderedList().run()"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': editor.isActive('orderedList') }"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Ordered List">
                    <UIcon name="i-heroicons-numbered-list" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>

            <!-- Align Group -->
            <div class="flex items-center gap-0.5 px-2 border-r border-gray-200 dark:border-gray-700">
                <button @click="editor.chain().focus().setTextAlign('left').run()"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': editor.isActive({ textAlign: 'left' }) }"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Align Left">
                    <UIcon name="i-heroicons-bars-3-bottom-left" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button @click="editor.chain().focus().setTextAlign('center').run()"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': editor.isActive({ textAlign: 'center' }) }"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Align Center">
                    <UIcon name="i-heroicons-bars-3" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button @click="editor.chain().focus().setTextAlign('right').run()"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': editor.isActive({ textAlign: 'right' }) }"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Align Right">
                    <UIcon name="i-heroicons-bars-3-bottom-right" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>

            <!-- Insert Group -->
            <div class="flex items-center gap-0.5 px-2 border-r border-gray-200 dark:border-gray-700">
                <!-- Link Popover -->
                <UPopover v-model:open="showLinkPopover">
                    <button @click="openLinkPopover"
                        :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': editor.isActive('link') }"
                        class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        title="Add Link">
                        <UIcon name="i-heroicons-link" class="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>

                    <template #content>
                        <div class="p-4 w-80">
                            <div class="mb-3">
                                <label
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">URL</label>
                                <UInput v-model="linkUrl" type="url" placeholder="https://example.com" class="w-full"
                                    @keyup.enter="submitLink" autofocus />
                            </div>
                            <div class="flex gap-2">
                                <UButton color="primary" size="sm" @click="submitLink">
                                    {{ editor.isActive('link') ? 'อัพเดท' : 'เพิ่ม' }} Link
                                </UButton>
                                <UButton v-if="editor.isActive('link')" color="error" variant="outline" size="sm"
                                    @click="removeLink">
                                    ลบ
                                </UButton>
                                <UButton color="neutral" variant="ghost" size="sm" @click="showLinkPopover = false">
                                    ยกเลิก
                                </UButton>
                            </div>
                        </div>
                    </template>
                </UPopover>

                <!-- Image Upload Button -->
                <button @click="insertImagePlaceholder"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Add Image">
                    <UIcon name="i-heroicons-photo" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <!-- YouTube Popover -->
                <UPopover v-model:open="showYoutubePopover">
                    <button
                        :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': editor.isActive('youtube') }"
                        class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        title="Add YouTube Video">
                        <UIcon name="i-heroicons-play-circle" class="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>

                    <template #content>
                        <div class="p-4 w-96">
                            <div class="mb-3">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">YouTube
                                    URL</label>
                                <UInput v-model="youtubeUrl" type="url"
                                    placeholder="https://www.youtube.com/watch?v=..." class="w-full"
                                    @keyup.enter="submitYoutube" autofocus />
                                <p class="mt-2 text-xs text-gray-500">รองรับ: youtube.com, youtu.be</p>
                            </div>
                            <div class="flex gap-2">
                                <UButton color="primary" size="sm" class="flex-1" :disabled="!youtubeUrl"
                                    @click="submitYoutube">
                                    <UIcon name="i-heroicons-play-circle" class="w-4 h-4 mr-1" />
                                    เพิ่มวีดีโอ
                                </UButton>
                                <UButton color="neutral" variant="ghost" size="sm" @click="showYoutubePopover = false">
                                    ยกเลิก
                                </UButton>
                            </div>
                        </div>
                    </template>
                </UPopover>

                <!-- Hidden file input -->
                <input ref="imageInputRef" type="file" accept="image/*" class="hidden" @change="handleImageUpload" />
            </div>

            <!-- Image Align Group (shows when image is selected) -->
            <div v-if="editor.isActive('image')"
                class="flex items-center gap-0.5 px-2 border-r border-gray-200 dark:border-gray-700">
                <button @click="setImageAlign('left')"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': getImageAlign() === 'left' }"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Image Align Left">
                    <UIcon name="i-heroicons-bars-3-bottom-left" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button @click="setImageAlign('center')"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': getImageAlign() === 'center' }"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Image Align Center">
                    <UIcon name="i-heroicons-bars-3" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button @click="setImageAlign('right')"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': getImageAlign() === 'right' }"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Image Align Right">
                    <UIcon name="i-heroicons-bars-3-bottom-right" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <!-- Separator -->
                <div class="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>

                <!-- Resize Buttons -->
                <button v-for="size in imageSizes" :key="size" @click="setImageWidth(size)"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': getImageWidth() === size }"
                    class="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-[10px] sm:text-xs font-medium"
                    :title="`Resize to ${size}`">
                    {{ size }}
                </button>
            </div>

            <!-- More Insert Group -->
            <div class="flex items-center gap-0.5 px-2 border-r border-gray-200 dark:border-gray-700">
                <button @click="editor.chain().focus().toggleBlockquote().run()"
                    :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': editor.isActive('blockquote') }"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Blockquote">
                    <UIcon name="i-heroicons-chat-bubble-bottom-center-text" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button @click="editor.chain().focus().setHorizontalRule().run()"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Horizontal Rule">
                    <UIcon name="i-heroicons-minus" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>

            <!-- Undo/Redo -->
            <div class="flex items-center gap-0.5 px-2 border-r border-gray-200 dark:border-gray-700">
                <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().undo()"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Undo">
                    <UIcon name="i-heroicons-arrow-uturn-left" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().redo()"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Redo">
                    <UIcon name="i-heroicons-arrow-uturn-right" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>

            <!-- Emoji Picker -->
            <div class="relative pl-2">
                <UPopover v-model:open="showEmojiPicker">
                    <button :class="{ 'bg-primary-100 dark:bg-primary-900/50 text-primary-600': showEmojiPicker }"
                        class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        title="Emoji">
                        <UIcon name="i-heroicons-face-smile" class="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>

                    <template #content>
                        <div class="p-3 w-72">
                            <div class="grid grid-cols-8 gap-1">
                                <button v-for="emoji in emojis" :key="emoji" @click="insertEmoji(emoji)"
                                    class="p-1.5 text-lg hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex justify-center">
                                    {{ emoji }}
                                </button>
                            </div>
                        </div>
                    </template>
                </UPopover>
            </div>

            <!-- Preview Button -->
            <div class="flex items-center gap-0.5 ml-auto pl-2 border-l border-gray-200 dark:border-gray-700">
                <button @click="previewContent"
                    class="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-primary-600"
                    title="Preview">
                    <UIcon name="i-heroicons-eye" class="w-4 h-4 sm:w-5 sm:h-5" />
                    <span class="hidden sm:inline ml-1 text-sm font-medium">ตัวอย่าง</span>
                </button>
            </div>
        </div>

        <!-- Editor Content (Scrollable) -->
        <div class="max-h-[80vh] overflow-y-auto">
            <EditorContent :editor="editor"
                class="prose prose-sm sm:prose-base dark:prose-invert max-w-none p-4 sm:p-6" />
        </div>
    </div>

    <!-- Image Upload Modal Overlay -->
    <Teleport to="body">
        <div v-if="showUploadBlock" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            @click.self="cancelUpload">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
                <div class="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">เพิ่มรูปภาพ</h3>
                    <button @click="cancelUpload" class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                        <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
                    </button>
                </div>

                <div class="p-6" :class="isDragging ? 'bg-primary-50 dark:bg-primary-900/20' : ''" @drop="handleDrop"
                    @dragover="handleDragOver" @dragleave="handleDragLeave">

                    <!-- Upload Area -->
                    <div v-if="!showUrlInput"
                        class="border-2 border-dashed rounded-xl p-8 text-center transition-colors duration-200"
                        :class="isDragging ? 'border-primary-500' : 'border-gray-300 dark:border-gray-600'">
                        <div
                            class="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                            <UIcon name="i-heroicons-photo" class="w-8 h-8 text-gray-400" />
                        </div>
                        <p class="text-gray-700 dark:text-gray-200 font-medium mb-1">Upload an image</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">ลากไฟล์มาวาง หรือเลือกจากปุ่มด้านล่าง
                        </p>
                        <p class="text-xs text-gray-400 dark:text-gray-500">SVG, PNG, JPG or GIF (max. 2MB)</p>
                    </div>

                    <!-- URL Input Area -->
                    <div v-else class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">URL
                                รูปภาพ</label>
                            <UInput v-model="imageUrl" type="url" class="w-full"
                                placeholder="https://example.com/image.jpg" @keyup.enter="submitImageUrl" />
                        </div>
                        <div class="flex gap-3">
                            <button @click="submitImageUrl" :disabled="!imageUrl"
                                class="flex-1 px-4 py-2.5 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl text-sm font-medium transition-colors">
                                แทรกรูปภาพ
                            </button>
                            <button @click="toggleUrlInput"
                                class="px-4 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl text-sm font-medium transition-colors">
                                ยกเลิก
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Footer Buttons -->
                <div v-if="!showUrlInput" class="p-4 bg-gray-50 dark:bg-gray-900/50 flex gap-3 justify-center">
                    <button @click="triggerImageUpload"
                        class="px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-xl text-sm font-medium transition-colors flex items-center gap-2">
                        <UIcon name="i-heroicons-arrow-up-tray" class="w-4 h-4" />
                        เลือกไฟล์
                    </button>
                    <button @click="toggleUrlInput"
                        class="px-5 py-2.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-xl text-sm font-medium transition-colors flex items-center gap-2">
                        <UIcon name="i-heroicons-link" class="w-4 h-4" />
                        ใส่ URL
                    </button>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style>
/* Editor Styles */
.ProseMirror {
    min-height: 400px;
    outline: none;
}

.ProseMirror p.is-editor-empty:first-child::before {
    color: #adb5bd;
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
}

/* Prose Overrides */
.ProseMirror h1 {
    font-size: 2em;
    font-weight: 700;
    margin-top: 1em;
    margin-bottom: 0.5em;
}

.ProseMirror h2 {
    font-size: 1.5em;
    font-weight: 600;
    margin-top: 1em;
    margin-bottom: 0.5em;
}

.ProseMirror h3 {
    font-size: 1.25em;
    font-weight: 600;
    margin-top: 1em;
    margin-bottom: 0.5em;
}

.ProseMirror p {
    margin: 0.75em 0;
    line-height: 1.75;
}

.ProseMirror ul {
    padding-left: 1.5em;
    margin: 0.75em 0;
    list-style-type: disc;
}

.ProseMirror ol {
    padding-left: 1.5em;
    margin: 0.75em 0;
    list-style-type: decimal;
}

.ProseMirror li {
    margin: 0.25em 0;
    display: list-item;
}

.ProseMirror blockquote {
    border-left: 4px solid #e5e7eb;
    padding-left: 1em;
    margin: 1em 0;
    color: #6b7280;
    font-style: italic;
}

.dark .ProseMirror blockquote {
    border-left-color: #374151;
    color: #9ca3af;
}

.ProseMirror hr {
    border: none;
    border-top: 2px solid #e5e7eb;
    margin: 2em 0;
}

.dark .ProseMirror hr {
    border-top-color: #374151;
}

.ProseMirror mark {
    background-color: #fef08a;
    padding: 0.125em 0.25em;
    border-radius: 0.25em;
}

.ProseMirror img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5em;
    margin: 1em 0;
}

.ProseMirror code {
    background-color: #f3f4f6;
    padding: 0.125em 0.25em;
    border-radius: 0.25em;
    font-family: monospace;
    font-size: 0.9em;
}

.dark .ProseMirror code {
    background-color: #374151;
}

/* YouTube Responsive */
.ProseMirror .youtube-embed,
.ProseMirror iframe[src*="youtube"] {
    max-width: 100%;
    width: 100%;
    aspect-ratio: 16 / 9;
    height: auto;
    display: block;
    margin: 1.5em auto;
    border-radius: 0.75rem;
}

.ProseMirror div[data-youtube-video] {
    max-width: 100%;
    margin: 1.5em auto;
    display: flex;
    justify-content: center;
}

.ProseMirror div[data-youtube-video] iframe {
    max-width: 100%;
    border-radius: 0.75rem;
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .ProseMirror div[data-youtube-video] iframe {
        width: 100% !important;
        height: auto !important;
        aspect-ratio: 16 / 9;
    }
}
</style>