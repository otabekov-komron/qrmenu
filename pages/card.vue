<template>
  <div class="pt-10">
    <PageHead text="Card Payment" />
    <div class="wrapper" id="app">
      <CardForm :form-data="formData" @input-card-number="updateCardNumber" @input-card-name="updateCardName"
        @input-card-month="updateCardMonth" @input-card-year="updateCardYear" @input-card-cvv="updateCardCvv" />
    </div>
  </div>
</template>

<style lang="scss">
@import '/assets/style.scss';
</style>
<script setup>
definePageMeta({
  layout: false
})
const formData = ref({
  cardName: '',
  cardNumber: '',
  cardMonth: '',
  cardYear: '',
  cardCvv: '',
});

const updateCardNumber = (val) => {
  formData.value.cardNumber = val;
};

const updateCardName = (val) => {
  formData.value.cardName = val;
};

const updateCardMonth = (val) => {
  formData.value.cardMonth = val;
};

const updateCardYear = (val) => {
  formData.value.cardYear = val;
};

const updateCardCvv = (val) => {
  formData.value.cardCvv = val;
};
</script>