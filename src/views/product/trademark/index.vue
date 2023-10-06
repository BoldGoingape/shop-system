<template>
    <div>
        <!-- <h1>品牌管理</h1> -->
        <el-card class="box-card">
            <!-- 顶部添加 -->
            <el-button type="primary" size="default" icon="Plus">添加品牌</el-button>
            <!-- 表格展示 -->
            <el-table style="margin: 10px 0px" border>
                <el-table-column label="序号" align="center" width="80px"></el-table-column>
                <el-table-column label="品牌名称"></el-table-column>
                <el-table-column label="品牌LOGO"></el-table-column>
                <el-table-column label="品牌操作"></el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-pagination v-model:current-page="pageNo" v-model:page-size="limit" 
                :page-sizes="[10, 20, 30, 40]" :small="true" :disabled="disabled" :background="true"
                layout="->,total,sizes, prev, pager, next,jumper" :total="400" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />

        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const pageNo = ref(1)//当前页码
const limit = ref()//设置没页展示条数
</script>

<style scoped></style>