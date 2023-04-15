<template>
    <div>
      <google-pay-button class="google-pay-button"
        :buttonLocale="locale"
        environment="TEST"
        button-type="donate"
        buttonSizeMode="fill"
        v-bind:paymentRequest.prop="{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId'
                }
              }
            }
          ],
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '100.00',
            currencyCode: 'USD',
            countryCode: 'US'
          }
        }"
        v-on:loadpaymentdata="onLoadPaymentData"
        v-on:error="onError"
      ></google-pay-button>
    </div>
  </template>
  
<script setup>

import '@google-pay/button-element'
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({useScope: 'global'});
</script>

<style lang="scss">
.google-pay-button {
  width: 500px;
  height: 100px;
}


@media only screen and (max-width: 520px) {
  .google-pay-button {
    width: 300px;
    height: 50px;
  }
  .gpay-button.black.donate.ru {
      min-width: 300px !important;
  }
}
</style>