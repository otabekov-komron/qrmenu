<template>
  <div class="card-form">
    <div class="card-list">
      <Card :fields="fields" :labels="formData" :isCardNumberMasked="isCardNumberMasked"
        :randomBackgrounds="randomBackgrounds" :backgroundImage="backgroundImage" />
    </div>
    <div class="card-form__inner">
      <div class="card-input">
        <label for="cardNumber" class="card-input__label">Card Number</label>
        <input type="tel" :id="fields.cardNumber" @input="changeNumber" @focus="focusCardNumber" @blur="blurCardNumber"
          class="card-input__input" :value="formData.cardNumber" :maxlength="cardNumberMaxLength" data-card-field
          autocomplete="off" />
        <button class="card-input__eye" :class="{ '-active': !isCardNumberMasked }" title="Show/Hide card number"
          tabindex="-1" :disabled="formData.cardNumber === ''" @click="toggleMask"></button>
      </div>
      <div class="card-input">
        <label for="cardName" class="card-input__label">Card Name</label>
        <input type="text" :id="fields.cardName" v-letter-only @input="changeName" class="card-input__input"
          :value="formData.cardName" data-card-field autocomplete="off" />
      </div>
      <div class="card-form__row">
        <div class="card-form__col">
          <div class="card-form__group">
            <label for="cardMonth" class="card-input__label">Expiration Date</label>
            <select class="card-input__input -select" :id="fields.cardMonth" v-model="formData.cardMonth"
              @change="changeMonth" data-card-field>
              <option value disabled selected>Month</option>
              <option v-bind:value="n < 10 ? '0' + n : n" v-for="n in 12" v-bind:disabled="n < minCardMonth"
                v-bind:key="n">{{ generateMonthValue(n) }}</option>
            </select>
            <select class="card-input__input -select" :id="fields.cardYear" v-model="formData.cardYear"
              @change="changeYear" data-card-field>
              <option value disabled selected>Year</option>
              <option v-bind:value="$index + minCardYear" v-for="(n, $index) in 12" v-bind:key="n">{{ $index +
                minCardYear }}</option>
            </select>
          </div>
        </div>
        <div class="card-form__col -cvv">
          <div class="card-input">
            <label for="cardCvv" class="card-input__label">CVV</label>
            <input type="tel" class="card-input__input" v-number-only :id="fields.cardCvv" maxlength="4"
              :value="formData.cardCvv" @input="changeCvv" data-card-field autocomplete="off" />
          </div>
        </div>
      </div>

      <button class="card-form__button" v-on:click="invaildCard">Submit</button>
    </div>
  </div>
</template>
  
<script>
import Card from '@/components/Card'
export default {
  name: 'CardForm',
  directives: {
    'number-only': {
      bind(el) {
        function checkValue(event) {
          event.target.value = event.target.value.replace(/[^0-9]/g, '')
          if (event.charCode >= 48 && event.charCode <= 57) {
            return true
          }
          event.preventDefault()
        }
        el.addEventListener('keypress', checkValue)
      }
    },
    'letter-only': {
      bind(el) {
        function checkValue(event) {
          if (event.charCode >= 48 && event.charCode <= 57) {
            event.preventDefault()
          }
          return true
        }
        el.addEventListener('keypress', checkValue)
      }
    }
  },
  props: {
    formData: {
      type: Object,
      default: () => {
        return {
          cardName: '',
          cardNumber: '',
          cardNumberNotMask: '',
          cardMonth: '',
          cardYear: '',
          cardCvv: ''
        }
      }
    },
    backgroundImage: [String, Object],
    randomBackgrounds: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Card
  },
  data() {
    return {
      fields: {
        cardNumber: 'v-card-number',
        cardName: 'v-card-name',
        cardMonth: 'v-card-month',
        cardYear: 'v-card-year',
        cardCvv: 'v-card-cvv'
      },
      minCardYear: new Date().getFullYear(),
      isCardNumberMasked: true,
      mainCardNumber: this.cardNumber,
      cardNumberMaxLength: 19
    }
  },
  computed: {
    minCardMonth() {
      if (this.formData.cardYear === this.minCardYear) return new Date().getMonth() + 1
      return 1
    }
  },
  watch: {
    cardYear() {
      if (this.formData.cardMonth < this.minCardMonth) {
        this.formData.cardMonth = ''
      }
    }
  },
  mounted() {
    this.maskCardNumber()
  },
  methods: {
    generateMonthValue(n) {
      return n < 10 ? `0${n}` : n
    },
    changeName(e) {
      this.formData.cardName = e.target.value
      this.$emit('input-card-name', this.formData.cardName)
    },
    changeNumber(e) {
      this.formData.cardNumber = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
      this.cardNumberMaxLength = 19; // Set it to the maximum possible length

      this.$emit('input-card-number', this.formData.cardNumber);
    },
    changeMonth() {
      this.$emit('input-card-month', this.formData.cardMonth)
    },
    changeYear() {
      this.$emit('input-card-year', this.formData.cardYear)
    },
    changeCvv(e) {
      this.formData.cardCvv = e.target.value
      this.$emit('input-card-cvv', this.formData.cardCvv)
    },
    invaildCard() {
      let number = this.formData.cardNumberNotMask.replace(/ /g, '')
      var sum = 0
      for (var i = 0; i < number.length; i++) {
        var intVal = parseInt(number.substr(i, 1))
        if (i % 2 === 0) {
          intVal *= 2
          if (intVal > 9) {
            intVal = 1 + (intVal % 10)
          }
        }
        sum += intVal
      }
      if (sum % 10 !== 0) {
        alert('Invalid Card Number')
      }
    },
    blurCardNumber() {
      if (this.isCardNumberMasked) {
        this.maskCardNumber()
      }
    },
    maskCardNumber() {
      this.formData.cardNumberNotMask = this.formData.cardNumber
      this.mainCardNumber = this.formData.cardNumber
      let arr = this.formData.cardNumber.split('')
      arr.forEach((element, index) => {
        if (index > 4 && index < 14 && element.trim() !== '') {
          arr[index] = '*'
        }
      })
      this.formData.cardNumber = arr.join('')
    },
    unMaskCardNumber() {
      this.formData.cardNumber = this.mainCardNumber
    },
    focusCardNumber() {
      this.unMaskCardNumber()
    },
    toggleMask() {
      this.isCardNumberMasked = !this.isCardNumberMasked
      if (this.isCardNumberMasked) {
        this.maskCardNumber()
      } else {
        this.unMaskCardNumber()
      }
    }
  }
}
</script>