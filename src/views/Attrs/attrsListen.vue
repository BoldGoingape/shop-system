<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px">
    <div v-for="(item, index) in ruleForm.value" :key="index">
      <el-form-item
        :label="item.name"
        :prop="'value.' + index + '.age'"
        :rules="rules.name">
        <el-input v-model="item.nameValue" />
      </el-form-item>
      <el-form-item
        :label="item.age"
        :prop="'value.' + index + '.age'"
        :rules="rules.age">
        <el-input v-model="item.age" />
      </el-form-item>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
const ruleFormRef = ref()
const ruleForm = ref({
  value: [
    {
      name: '姓名',
      nameValue: '',

      age: '',
    },
    {
      name: '姓名',
      nameValue: '',
      age: '',
    },
    {
      name: '姓名',
      nameValue: '',
      age: '',
    },
  ],
})

const rules = reactive({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  age: [
    { required: true, message: 'Please input Activity age', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
})
</script>
