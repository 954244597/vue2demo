<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          >
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
      <el-card shadow="hover">
        <el-table :data="tableData">
          <el-table-column
            v-for="(item, index) in coloum"
            :key="index"
            :label="item"
            :prop="index"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">num:{{ item.value }}</p>
            <p class="txt">name:{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height:280px;padding:0">3</el-card>
      <div class="graph">
        <el-card style="height:260px; padding:0">3</el-card>
        <el-card style="height:260px ;padding:0">3</el-card>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import { getHome } from "../../api/home";
export default {
  name: "home",
  mounted() {
    getHome().then(res => {
      const { tableData } = res.data;
      this.tableData = tableData;
    });
  },
  data() {
    return {
      coloum: {
        name: "名称",
        todayBuy: "今日购买",
        monthBuy: "月购买",
        totalBuy: "购买总数"
      },
      tableData: [],
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef"
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
p {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
.graph {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 48%;
  }
}
.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .el-card {
    width: 32%;
    margin-bottom: 20px;
  }

  .icon {
    font-size: 30px;
    width: 80px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }

  .detail {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .num {
      font-size: 30px;
      margin-bottom: 10px;
    }

    .txt {
      font-size: 14px;
      text-align: center;
      color: #999999;
    }
  }
}
</style>