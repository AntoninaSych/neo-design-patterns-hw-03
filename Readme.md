## Завдання: Платіжна система з використанням Factory Method та Abstract Factory

У цьому проєкті реалізовано імітаційну платіжну систему, яка підтримує три провайдери:
- Stripe
- PayPal
- ApplePay

###  Використані патерни
- **Factory Method** — для делегування створення об'єктів платіжних провайдерів;
- **Abstract Factory** — для абстрагування процесу створення об'єктів через інтерфейс `PaymentProviderFactory`.

---

### Встановити залежності:

- ```npm install```
- 
Запустити проєкт із обраним платіжним провайдером:

🔹 Stripe

```npx ts-node src/main.ts stripe```

🔹 PayPal

```npx ts-node src/main.ts paypal```

🔹 ApplePay

```npx ts-node src/main.ts apple```
  
