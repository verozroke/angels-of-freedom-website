<template>
    <div>
      <google-pay-button
        buttonLocale="ru"
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

</script>