<template>
    <div>
        <!-- <h1>品牌管理</h1> -->
        <el-card class="box-card">
            <!-- 顶部添加 -->
            <el-button type="primary" size="default" icon="Plus">添加品牌</el-button>
            <!-- 表格展示 -->
            <!-- prop="tmName" 展示数居 -->
            <el-table style="margin: 10px 0px" border :data="trademarkArr">
                <el-table-column label="序号" align="center" width="80px"></el-table-column>
                <el-table-column label="品牌名称" >
                    <template #="{row,$index}">
                    <h1>{{ row.tmName }}</h1>
                    </template>
                </el-table-column>
                <el-table-column label="品牌LOGO">
                    <template #="{row,$index}">
                    <img :src="row.logoURL" alt="展无图片" style="width: 100px;height: 100px;"/>
                    </template>
                </el-table-column>
                <el-table-column label="品牌操作">
                    <template #="{row,$index}">
                    <el-button type="primary" size="small" icon="Edit"></el-button>
                    <el-button type="danger" size="small" icon="Delete"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-pagination 
            v-model:current-page="pageNo" 
            v-model:page-size="limit" 
            :page-count="9"
                :page-sizes="[10, 20, 30, 40]" :small="true" :disabled="false" :background="true"
                layout="->,total,sizes, prev, pager, next,jumper" :total="400" 
                @current-change="changePageNo" />

        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const pageNo = ref(1)//当前页码
const limit = ref(10)//设置没页展示条数
const trademarkArr=ref([
    {
        id:'1',
        createTieme:'2019-02-10',
        tmName:'小米',
        logoURL:'https://pic.sucaibar.com/pic/201611/03/9f2ad46d2a.jpg'
    }
    , {
        id:'2',
        createTieme:'2019-06-10',
        tmName:'大米',
        logoURL:'https://ts1.cn.mm.bing.net/th/id/R-C.0c8bf36e099654aadaf5f127ef1a3f1b?rik=uHrB%2blGez03%2fAA&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102445_a1cff.jpg&ehk=EeF%2fioqRM6NfQqkCgXw%2bwLvO1%2fxZgeZ2pof7ALNLGsg%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        id:'1',
        createTieme:'2019-02-10',
        tmName:'小米',
        logoURL:'https://pic.sucaibar.com/pic/201611/03/9f2ad46d2a.jpg'
    }
    , {
        id:'2',
        createTieme:'2019-06-10',
        tmName:'大米',
        logoURL:'https://ts1.cn.mm.bing.net/th/id/R-C.0c8bf36e099654aadaf5f127ef1a3f1b?rik=uHrB%2blGez03%2fAA&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102445_a1cff.jpg&ehk=EeF%2fioqRM6NfQqkCgXw%2bwLvO1%2fxZgeZ2pof7ALNLGsg%3d&risl=&pid=ImgRaw&r=0'
    }
])
const changePageNo=()=>{
    console.log(limit.value);
    console.log(pageNo.value);
    
    
}
</script>
<style scoped></style>