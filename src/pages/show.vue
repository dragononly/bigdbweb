<template>
  <div
    style="
      line-height: 60px;
      background: #9bca98;
      height: 60px;
      color: #42321d;
      font-size: 17px;
      font-weight: 600;
    "
  >
    <van-row>
      <van-col span="10"> 当前数据库:嘉兴水产负债资产表 </van-col>
      <van-col span="10" style="line-height: 50px; text-align: right"
        ><van-button size="normal" type="primary" icon="down">
          下载数据
        </van-button></van-col
      >
      <van-col
        span="4"
        style="text-align: right; padding-right: 30px; color: #1a89fb"
        >退出登录</van-col
      >
    </van-row>
  </div>
  <div class="componentContainer gc-scrollbar">
    <div class="spreadContainer">
      <gc-spread-sheets :hostClass="'spread-host'">
        <gc-worksheet :dataSource="dataSource[0].sheet1" :name="'ALLData'">
          <gc-column :dataField="'name'"></gc-column>
          <gc-column :dataField="'code'"></gc-column>
          <gc-column :dataField="'city'"></gc-column>
          <gc-column :dataField="'state'"></gc-column>
          <gc-column :dataField="'lat'"></gc-column>
          <gc-column :dataField="'lon'"></gc-column>
          <gc-column :dataField="'pop2011'"></gc-column>
          <gc-column :dataField="'vol2011'"></gc-column>
          <gc-column :dataField="'vol2010'"></gc-column>
          <gc-column :dataField="'vol2009'"></gc-column>
          <gc-column :dataField="'vol2008'"></gc-column>
          <gc-column :dataField="'vol2007'"></gc-column>
          <gc-column :dataField="'vol2006'"></gc-column>
          <gc-column :dataField="'vol2005'"></gc-column>
        </gc-worksheet>

        <!-- <gc-worksheet :dataSource="dataSource" :name="'PartData'">
          <gc-column :dataField="'name'"></gc-column>
          <gc-column :dataField="'city'"></gc-column>
          <gc-column :dataField="'state'"></gc-column>
          <gc-column :dataField="'lat'"></gc-column>
          <gc-column :dataField="'lon'"></gc-column>
          <gc-column :dataField="'vol2011'"></gc-column>
        </gc-worksheet>
       -->
      </gc-spread-sheets>
    </div>
    <div class="test-btn-list"></div>
  </div>
</template>
<script>
import '@grapecity/spread-sheets-vue';
import DataService from './dataService';

export default {
  data() {
    return {
      dataSource: [
        {
          sheet1: [
            {
              name: 'Hartsfield Jackson Atlanta International Airport',
              code: 'ATL',
              city: 'Atlanta',
              state: 'GA',
              lat: 33.64,
              lon: -84.444,
              pop2011: 432427,
              vol2011: 44414121,
              vol2010: 43130585,
              vol2009: 42280868,
              vol2008: 43236665,
              vol2007: 43236665,
              vol2006: 41352038,
              vol2005: 42402653,
            },
            {
              name: "O'Hare International Airport",
              code: 'ORD',
              city: 'Chicago',
              state: 'IL',
              lat: 41.9794,
              lon: -87.9044,
              pop2011: 2707120,
              vol2011: 31892301,
              vol2010: 32171831,
              vol2009: 31135732,
              vol2008: 33683991,
              vol2007: 36521585,
              vol2006: 36825097,
              vol2005: 36720005,
            },
          ],
        },
        {
          sheet2: [
            {
              name: 'Hartsfield Jackson Atlanta International Airport',
              code: 'ATL',
              city: 'Atlanta',
              state: 'GA',
              lat: 33.64,
              lon: -84.444,
              pop2011: 432427,
              vol2011: 44414121,
              vol2010: 43130585,
              vol2009: 42280868,
              vol2008: 43236665,
              vol2007: 43236665,
              vol2006: 41352038,
              vol2005: 42402653,
            },
            {
              name: "O'Hare International Airport",
              code: 'ORD',
              city: 'Chicago',
              state: 'IL',
              lat: 41.9794,
              lon: -87.9044,
              pop2011: 2707120,
              vol2011: 31892301,
              vol2010: 32171831,
              vol2009: 31135732,
              vol2008: 33683991,
              vol2007: 36521585,
              vol2006: 36825097,
              vol2005: 36720005,
            },
          ],
        },
      ],
    };
  },
};
</script>
<style scoped>
.componentContainer {
  padding: 10px;

  overflow-y: scroll;
  overflow-x: scroll;
}
.spreadContainer {
  position: absolute;
  top: 50px;
  padding: 10px;
  /*width: 100%;*/
  /*height: 240px;*/
  left: 5px;
  right: 5px;
  bottom: 10px;
  box-shadow: 5px 5px 10px #9bca98;
}
.test-btn-list {
  /*padding: 20px;*/
  position: absolute;
  bottom: 0px;
  height: 150px;
}
.test-btn-list label {
  display: inline-flex;
  margin: 10px 20px;
}
.spread-host {
  width: 100%;
  height: 100%;
  overflow-x: scroll;
}
</style>
