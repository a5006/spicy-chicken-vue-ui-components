<template>
      <input
      class="btnCls"
      type="checkbox"
      @change="$emit('input', $event.target.value)"
      :checked="value"
    />
</template>
<script>
  export default{
    name:'sl-checkbox',
    props:['value']
  }
</script>
<style>
.btnCls{
  width:1px;
  height:1px;
  position: relative;
}
.btnCls::before{
  content: "";
  display: block;
  position: absolute;
  width:20px;
  height:10px;
  background: lightgreen;
  border-radius: 1px;
}
.btnCls:checked:before{
  content: "";
  display: block;
  position: absolute;
  width:20px;
  height:10px;
  background: lightcoral;
  border-radius: 1px;
}
</style>
