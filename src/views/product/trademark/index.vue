<template>
    <div>
        <!-- <h1>品牌管理</h1> -->
        <el-card class="box-card">
            <!-- 顶部添加 -->
            <el-button type="primary" size="default" icon="Plus" @click="addTrademark">添加品牌</el-button>
            <!-- 表格展示 -->
            <!-- prop="tmName" 展示数居 -->
            <el-table style="margin: 10px 0px" border :data="trademarkArr">
                <el-table-column label="序号" align="center" width="80px"></el-table-column>
                <el-table-column label="品牌名称">
                    <template #="{ row, $index }">
                        <h1>{{ row.tmName }}</h1>
                    </template>
                </el-table-column>
                <el-table-column label="品牌LOGO">
                    <template #="{ row, $index }">
                        <img :src="row.logoURL" alt="展无图片" style="width: 100px;height: 100px;" />
                    </template>
                </el-table-column>
                <el-table-column label="品牌操作">
                    <template #="{ row, $index }">
                        <el-button type="primary" size="small" icon="Edit" @click="updataTrademark"></el-button>
                        <el-button type="danger" size="small" icon="Delete"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-pagination v-model:current-page="pageNo" v-model:page-size="limit" :page-count="9"
                :page-sizes="[10, 20, 30, 40]" :small="true" :disabled="false" :background="true"
                layout="->,total,sizes, prev, pager, next,jumper" :total="400" @current-change="changePageNo" />
        </el-card>
        <!-- 对话框 -->
        <el-dialog v-model="dialogFormVisible" title="添加品牌">
            <el-form style="width: 80%;">
                <el-form-item label="品牌名称" label-width="100px">
                    <el-input placeholder="请输入品牌名称" />
                </el-form-item>
                <el-form-item label="品牌logo" label-width="100px">
                    <el-upload class="avatar-uploader" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                        :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                        <el-icon v-else class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </el-form-item>
            </el-form>
            <!-- 具名插槽 -->
            <template #footer>
                <el-button type="" size="default" @click="cancel">取消</el-button>
                <el-button type="primary" size="default" @cliak="confirm">确定</el-button>

            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref ,onMounted} from 'vue';
import {reqHasTrademark} from '@/api/product/trademark'
const pageNo = ref(1)//当前页码
const limit = ref(3)//设置没页展示条数
const dialogFormVisible = ref(false)
const trademarkArr = ref([
    {
        id: '1',
        createTieme: '2019-02-10',
        tmName: '小米',
        logoURL: 'https://pic.sucaibar.com/pic/201611/03/9f2ad46d2a.jpg'
    }
    , {
        id: '2',
        createTieme: '2019-06-10',
        tmName: '大米',
        logoURL: 'https://ts1.cn.mm.bing.net/th/id/R-C.0c8bf36e099654aadaf5f127ef1a3f1b?rik=uHrB%2blGez03%2fAA&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102445_a1cff.jpg&ehk=EeF%2fioqRM6NfQqkCgXw%2bwLvO1%2fxZgeZ2pof7ALNLGsg%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        id: '1',
        createTieme: '2019-02-10',
        tmName: '小米',
        logoURL: 'https://pic.sucaibar.com/pic/201611/03/9f2ad46d2a.jpg'
    }
    , {
        id: '2',
        createTieme: '2019-06-10',
        tmName: '大米',
        logoURL: 'https://ts1.cn.mm.bing.net/th/id/R-C.0c8bf36e099654aadaf5f127ef1a3f1b?rik=uHrB%2blGez03%2fAA&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102445_a1cff.jpg&ehk=EeF%2fioqRM6NfQqkCgXw%2bwLvO1%2fxZgeZ2pof7ALNLGsg%3d&risl=&pid=ImgRaw&r=0'
    }
])
// 组件挂载完毕
onMounted(()=>{
    getHasTrademark()
})
const getHasTrademark=async()=>{
    const res =await reqHasTrademark(pageNo.value,limit.value)
}
const changePageNo = () => {
    console.log(limit.value);
    console.log(pageNo.value);
}
// 添加品牌按钮回调
const addTrademark = () => {
    dialogFormVisible.value = true
}
// 修改已有品牌
const updataTrademark = () => {
    dialogFormVisible.value = true

}
// 对话框取消
const cancel=()=>{
    dialogFormVisible.value = false

}
// 对话框确定
const confirm=()=>{
    dialogFormVisible.value = false

}
</script>
<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>