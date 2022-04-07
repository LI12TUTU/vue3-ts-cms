<template>
  <div class="statistical">
    <div class="header">
      <span>{{ panelData.title }}</span>
      <el-tooltip :content="panelData.tips" placement="top" effect="light">
        <el-icon :size="20">
          <warning />
        </el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <my-counter-up
        :number="panelData.number1"
        :options="
          panelData.amount === 'saleroom' ? counterOption2 : counterOption1
        "
      />
    </div>
    <div class="footer">
      <span>
        {{ panelData.subtitle }}
        <my-counter-up
          :number="panelData.number2"
          :options="
            panelData.amount === 'saleroom' ? counterOption2 : counterOption1
          "
        />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import MyCounterUp from "@/base-ui/count-up"
import { IPanelData } from "../types"

export default defineComponent({
  components: {
    MyCounterUp
  },
  props: {
    panelData: {
      type: Object as PropType<IPanelData>,
      default: function () {
        return {}
      }
    }
  },
  setup() {
    const counterOption1 = {
      decimalPlaces: 0,
      prefix: ""
    }
    const counterOption2 = {
      decimalPlaces: 0,
      prefix: "￥"
    }
    return {
      counterOption1,
      counterOption2
    }
  }
})
</script>

<style scoped lang="less">
@h: 38px;

.statistical {
  display: flex;
  padding: 0 20px;
  background: white;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 12px 0 rgb(0 0 0/10%);
  height: 130px;
  overflow: hidden;
  text-align: left;

  .header {
    display: flex;
    height: @h;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    // border: 1px solid red;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .content {
    display: flex;
    margin-left: -5px;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .footer {
    display: flex;
    height: @h;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.85);
    border-top: 1px solid #f0f0f0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
