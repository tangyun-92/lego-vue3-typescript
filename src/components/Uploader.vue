<template>
  <div class="file-upload">
    <button @click="triggerUpload">
      <span v-if="isUploading">正在上传</span>
      <span v-else>点击上传</span>
    </button>
    <input
      type="file"
      ref="fileInput"
      :style="{ display: 'none' }"
      @change="handleFileChange"
    />
    <ul class="upload-list">
      <li
        :class="`uploaded-file upload-${file.status}`"
        v-for="file in uploadedFiles"
        :key="file.uid"
      >
        <span
          v-if="file.status === 'loading'"
          class="file-icon"
        >
          <LoadingOutlined />
        </span>
        <span v-else class="file-icon"><FileOutlined /></span>
        <span class="filename">{{file.name}}</span>
        <button
          class="delete-icon"
          @click="removeFile(file.uid)"
        >
          <DeleteOutlined />
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import { DeleteOutlined, LoadingOutlined, FileOutlined } from
    '@ant-design/icons-vue'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

type UploadStatus = 'ready' | 'loading' | 'success' | 'error'
export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status: UploadStatus;
  raw: File;
}

export default defineComponent({
  props: {
    action: {
      type: String,
      required: true
    }
  },
  components: {
    DeleteOutlined,
    LoadingOutlined,
    FileOutlined
  },
  setup(props) {
    const fileInput = ref<null | HTMLInputElement>(null)
    const uploadedFiles = ref<UploadFile[]>([])
    const isUploading = computed(() => {
      return uploadedFiles.value.some(file => file.status === 'loading')
    })

    const triggerUpload = () => {
      if (fileInput.value) {
        fileInput.value.click()
      }
    }
    const removeFile = (id: string) => {
      uploadedFiles.value = uploadedFiles.value.filter(file => file.uid === id)
    }
    const handleFileChange = (e: Event) => {
      const target = e.target as HTMLInputElement
      const files = target.files
      if (files) {
        const uploadedFile = files[0]
        const formData = new FormData()
        formData.append(uploadedFile.name, uploadedFile)
        const fileObj = reactive<UploadFile>({
          uid: uuidv4(),
          size: uploadedFile.size,
          name: uploadedFile.name,
          status: 'loading',
          raw: uploadedFile
        })
        uploadedFiles.value.push(fileObj)
        axios
          .post(props.action, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((res) => {
            console.log(res.data)
            fileObj.status = 'success'
          })
          .catch(() => {
            fileObj.status = 'error'
          }).finally(() => {
            if (fileInput.value) {
              fileInput.value.value = ''
            }
        })
      }
    }

    return {
      fileInput,
      triggerUpload,
      handleFileChange,
      isUploading,
      uploadedFiles,
      removeFile
    }
  }
})
</script>

<style lang="scss">
.upload-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.upload-list li {
  transition: all .5s cubic-bezier(.55,0,.1,1);
  font-size: 14px;
  line-height: 1.8;
  margin-top: 5px;
  box-sizing: border-box;
  border-radius: 4px;
  min-width: 200px;
  position: relative;
  &:first-child {
    margin-top: 10px;
  }
  .upload-list-thumbnail {
    vertical-align: middle;
    display: inline-block;
    width: 70px;
    height: 70px;
    position: relative;
    z-index: 1;
    background-color: #fff;
    object-fit: cover;
  }
  .file-icon {
    svg {
      margin-right: 5px;
      color: rgba(0, 0, 0, 0.45);
    }
  }
  .filename {
    margin-left: 5px;
    margin-right: 40px;
  }
  &.upload-error {
    color: #f5222d;
    svg {
      color: #f5222d;
    }
  }
  .file-status {
    display: block;
    position: absolute;
    right: 5px;
    top: 0;
    line-height: inherit;
  }
  .delete-icon {
    display: none;
    position: absolute;
    right: 7px;
    top: 0;
    line-height: inherit;
    cursor: pointer;
  }
  &:hover {
    background-color: #efefef;
    .file-status {
      display: none;
    }
    .delete-icon {
      display: block;
    }
  }
}
</style>