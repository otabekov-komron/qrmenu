<template>
  <div class="card-item" :class="{ '-active': isCardFlipped }">
    <div class="card-item__side -front">
      <div class="card-item__focus" :class="{ '-active': focusElementStyle }" :style="focusElementStyle"
        ref="focusElement"></div>
      <div class="card-item__cover">
        <img v-if="currentCardBackground" :src="currentCardBackground" class="card-item__bg" />
      </div>
      <div class="card-item__wrapper">
        <div class="card-item__top">
          <img src="/images/chip.png" class="card-item__chip" />
          <div class="card-item__type">
            <transition name="slide-fade-up">
              <img :src="'/images/cards/' + cardType + '.png'" v-if="cardType" :key="cardType" alt
                class="card-item__typeImg" />
            </transition>
          </div>
        </div>
        <label :for="fields.cardNumber" class="card-item__number" :ref="fields.cardNumber">

          <span v-for="(n, $index) in currentPlaceholder" :key="$index">
            <transition name="slide-fade-up">
              <div class="card-item__numberItem" v-if="getIsNumberMasked($index, n)">*</div>
              <div class="card-item__numberItem" :class="{ '-active': n.trim() === '' }" :key="currentPlaceholder"
                v-else-if="labels.cardNumber.length > $index">{{ labels.cardNumber[$index] }}</div>
              <div class="card-item__numberItem" :class="{ '-active': n.trim() === '' }" v-else
                :key="currentPlaceholder + 1">{{ n }}</div>
            </transition>
          </span>
        </label>
        <div class="card-item__content">
          <label :for="fields.cardName" class="card-item__info" :ref="fields.cardName">
            <div class="card-item__holder">Card holder</div>
            <transition name="slide-fade-up">
              <div class="card-item__name" v-if="labels.cardName.length" key="1">
                <transition-group name="slide-fade-right">
                  <span class="card-item__nameItem" v-for="(n, $index) in labels.cardName.replace(/\s\s+/g, ' ')"
                    :key="$index + 1">{{ n }}</span>
                </transition-group>
              </div>
              <div class="card-item__name" v-else key="2">Full name</div>
            </transition>
          </label>
          <div class="card-item__date" ref="cardDate">
            <label :for="fields.cardMonth" class="card-item__dateTitle">Expires</label>
            <label :for="fields.cardMonth" class="card-item__dateItem">
              <transition name="slide-fade-up">
                <span v-if="labels.cardMonth" :key="labels.cardMonth">{{ labels.cardMonth }}</span>
                <span v-else key="2">MM</span>
              </transition>
            </label>
            /
            <label for="cardYear" class="card-item__dateItem">
              <transition name="slide-fade-up">
                <span v-if="labels.cardYear" :key="labels.cardYear">{{ String(labels.cardYear).slice(2, 4) }}</span>
                <span v-else key="2">YY</span>
              </transition>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="card-item__side -back">
      <div class="card-item__cover">
        <img v-if="currentCardBackground" :src="currentCardBackground" class="card-item__bg" />
      </div>
      <div class="card-item__band"></div>
      <div class="card-item__cvv">
        <div class="card-item__cvvTitle">CVV</div>
        <div class="card-item__cvvBand">
          <span v-for="(n, $index) in labels.cardCvv" :key="$index">*</span>
        </div>
        <div class="card-item__type">
          <img :src="'/images/cards/' + cardType + '.png'" v-if="cardType" class="card-item__typeImg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  labels: Object,
  fields: Object,
  isCardNumberMasked: Boolean,
  randomBackgrounds: {
    type: Boolean,
    default: true,
  },
  backgroundImage: [String, Object],
});

const focusElementStyle = ref(null);
const currentFocus = ref(null);
const isFocused = ref(false);
const isCardFlipped = ref(false);
const defaultCardPlaceholder = ref('');
const currentPlaceholder = ref('#### #### #### ####');

watch(currentFocus, (newVal) => {
  if (newVal) {
    changeFocus();
  } else {
    focusElementStyle.value = null;
  }
});

onMounted(() => {
  const fields = document.querySelectorAll('[data-card-field]');
  fields.forEach((element) => {
    element.addEventListener('focus', () => {
      isFocused.value = true;
      if (element.id === props.fields.cardYear || element.id === props.fields.cardMonth) {
        currentFocus.value = 'cardDate';
      } else {
        currentFocus.value = element.id;
      }
      isCardFlipped.value = element.id === props.fields.cardCvv;
    });
    element.addEventListener('blur', () => {
      isCardFlipped.value = !element.id === props.fields.cardCvv;
      setTimeout(() => {
        if (!isFocused.value) {
          currentFocus.value = null;
        }
      }, 300);
      isFocused.value = false;
    });
  });
});

const cardType = computed(() => {
  let number = props.labels.cardNumber;
  let re;
  re = new RegExp('^8600');
  if (number.match(re) !== null) {
    console.log('Card Type: uzcard');
    return 'uzcard';
  }

  // Mastercard
  re = new RegExp('^5[1-5]');
  if (number.match(re) !== null) {
    console.log('Card Type: mastercard');
    return 'mastercard';
  }

  // Visa
  re = new RegExp('^4');
  if (number.match(re) !== null) {
    console.log('Card Type: visa');
    return 'visa';
  }

  // Humo
  re = new RegExp('^98');
  if (number.match(re) !== null) {
    console.log('Card Type: humo');
    return 'humo';
  }

  console.log('Card Type: default');
  return 'default';
});

const changeFocus = () => {
  let target = refs[currentFocus.value];
  focusElementStyle.value = target
    ? {
      width: `${target.offsetWidth}px`,
      height: `${target.offsetHeight}px`,
      transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`,
    }
    : null;
};

const getIsNumberMasked = (index, n) => {
  return index > 4 && index < 14 && props.labels.cardNumber.length > index && n.trim() !== '' && props.isCardNumberMasked;
};
</script>
