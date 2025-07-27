import { StripeFactory } from "./providers/stripe/StripeFactory";
import { PaypalFactory } from "./providers/paypal/PaypalFactory";
import { AppleFactory } from "./providers/apple/AppleFactory";
import { PaymentContext } from "./app/PaymentContext";

const provider = process.argv[2];
const transactionId = Math.random().toString(36).substring(2, 8);
const amount = 100;

let factory;

switch (provider) {
  case 'stripe':
    factory = new StripeFactory();
    break;
  case 'paypal':
    factory = new PaypalFactory();
    break;
  case 'apple':
    factory = new AppleFactory();
    break;
  default:
    console.error('Unknown provider. Use stripe, paypal, or apple.');
    process.exit(1);
}

const context = new PaymentContext(factory);
context.processPayment(amount, transactionId);
